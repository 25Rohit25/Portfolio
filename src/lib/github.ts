export interface GithubProject {
    repoName: string;   // raw GitHub name e.g. "Waste-No-More"
    title: string;      // display title e.g. "Waste No More"
    description: string;
    tags: string[];
    links: {
        demo: string;
        code: string;
    };
}

interface GithubRepo {
    name: string;
    description: string | null;
    topics?: string[];
    homepage: string | null;
    html_url: string;
}

export async function getPinnedRepos(username: string): Promise<GithubProject[]> {
    try {
        // ── Step 1: scrape pinned repo names from the profile page ──────────
        const profileRes = await fetch(`https://github.com/${username}`, {
            next: { revalidate: 3600 },
            headers: { 'User-Agent': 'Mozilla/5.0 (compatible; portfolio-bot/1.0)' }
        });
        if (!profileRes.ok) throw new Error("Failed to fetch GitHub profile");

        const html = await profileRes.text();

        // GitHub renders pinned repos inside <tool-tip> elements with sr-only class.
        // Pattern confirmed from real profile HTML:
        //   class="sr-only position-absolute">RepoName</tool-tip>
        // We capture all such matches then slice the known non-repo ones (index 0-2 are UI tooltips).
        const tooltipPattern = /class="sr-only position-absolute">([^<]+)<\/tool-tip>/g;
        const allMatches = [...html.matchAll(tooltipPattern)].map(m => m[1].trim());

        // The first three matches are always UI tooltips ("Appearance settings" x2, "Dismiss alert")
        // The actual pinned repo names follow from index 3 onward.
        const pinnedRepoNames = allMatches.slice(3).filter(
            name => !name.includes(' ') || name.length < 50  // repo names don't have long spaces
        ).slice(0, 6); // GitHub allows max 6 pinned repos

        if (pinnedRepoNames.length === 0) {
            console.warn("No pinned repos found for", username);
            return [];
        }

        // ── Step 2: fetch all repos from GitHub API ──────────────────────────
        const reposRes = await fetch(
            `https://api.github.com/users/${username}/repos?per_page=100`,
            { next: { revalidate: 3600 } }
        );
        if (!reposRes.ok) throw new Error("Failed to fetch GitHub repositories");

        const allRepos: GithubRepo[] = await reposRes.json();

        // ── Step 3: match & format ───────────────────────────────────────────
        const pinnedProjects: GithubProject[] = pinnedRepoNames
            .map((repoName) => {
                const repoData = allRepos.find(r => r.name === repoName);
                if (!repoData) return null;

                return {
                    repoName,
                    title: repoName.replace(/[-_]/g, ' '),   // "Waste-No-More" → "Waste No More"
                    description: repoData.description || `A project by ${username}`,
                    tags: repoData.topics ?? [],
                    links: {
                        demo: repoData.homepage || '#',
                        code: repoData.html_url,
                    },
                };
            })
            .filter(Boolean) as GithubProject[];

        return pinnedProjects;
    } catch (error) {
        console.error("Error fetching pinned repos:", error);
        return [];
    }
}
