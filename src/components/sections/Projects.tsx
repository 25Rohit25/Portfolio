import { getPinnedRepos } from "@/lib/github"
import { ProjectList } from "./ProjectList"
import { ArrowUpRight } from "lucide-react"

export async function Projects() {
    const projects = await getPinnedRepos("25Rohit25")

    return (
        <section id="projects" className="py-24 bg-background">
            <div className="container px-6 md:px-8">

                {/* Section header */}
                <div className="mb-16">
                    <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary mb-3">Work</p>
                    <div className="flex items-end justify-between flex-wrap gap-4">
                        <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
                            Pinned Projects
                        </h2>
                        <a
                            href="https://github.com/25Rohit25"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                            github.com/25Rohit25
                            <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                    </div>
                    <div className="mt-6 h-px bg-gradient-to-r from-primary/40 via-primary/10 to-transparent" />
                </div>

                <ProjectList projects={projects} />
            </div>
        </section>
    )
}
