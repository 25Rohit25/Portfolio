"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, ArrowUpRight, Star } from "lucide-react"
import type { GithubProject } from "@/lib/github"

// Map of known project repo names to their static metadata
const PROJECT_META: Record<string, {
    image?: string
    tagline?: string
    gradient: string
    tech: string[]
}> = {
    "Waste-No-More": {
        image: "/project-waste-no-more.png",
        tagline: "Real-time logistics platform · 32% efficiency boost · WebSocket sub-200ms",
        gradient: "from-primary to-primary/80",
        tech: ["Node.js", "WebSockets", "MongoDB", "Docker"],
    },
    "Bhopal-Food": {
        image: "/project-bhopal-food.png",
        tagline: "MERN shared-cart for train passengers · 60% faster queries · 20+ concurrent users",
        gradient: "from-orange-500 to-rose-600",
        tech: ["React", "Express.js", "Socket.io", "MongoDB", "JWT"],
    },
    "FitLife": {
        tagline: "AI fitness platform · Gemini-powered plans · 200ms p95 latency · Optimistic concurrency",
        gradient: "from-foreground/90 to-foreground/70",
        tech: ["Spring Boot", "React", "MySQL", "Docker", "GenAI"],
    },
    "LinkLite": {
        tagline: "Production URL shortener · JWT auth · Deployed on Render & Vercel",
        gradient: "from-cyan-500 to-blue-600",
        tech: ["Node.js", "MongoDB", "JWT", "Vercel"],
    },
    "Real-Time-Chat": {
        tagline: "WebSocket-powered messaging · Sub-100ms delivery · Room-based architecture",
        gradient: "from-pink-500 to-fuchsia-600",
        tech: ["Socket.io", "Node.js", "React", "MongoDB"],
    },
    "Luma_web3": {
        tagline: "Clean dApp interface · Web3 wallet integration · Modern TypeScript stack",
        gradient: "from-amber-500 to-orange-600",
        tech: ["TypeScript", "Next.js", "Web3.js", "Tailwind"],
    },
}

interface Props {
    projects: GithubProject[]
}

function ProjectCard({ project, index }: { project: GithubProject; index: number }) {
    const meta = PROJECT_META[project.repoName] || {
        gradient: "from-primary/90 to-primary/60",
        tech: project.tags,
    }

    return (
        <motion.article
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_40px_-12px_rgb(167_139_250_/_0.25)]"
        >
            {/* Visual Banner */}
            <div className="relative h-52 overflow-hidden">
                {meta.image ? (
                    <>
                        <div
                            className="absolute inset-0 bg-gradient-to-br opacity-60"
                            style={{ backgroundImage: `linear-gradient(135deg, var(--primary), transparent)` }}
                        />
                        <img
                            src={meta.image}
                            alt={project.title}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        />
                    </>
                ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${meta.gradient} opacity-90`}>
                        {/* Subtle mesh texture inside gradient */}
                        <div
                            className="absolute inset-0 opacity-20"
                            style={{
                                backgroundImage: `radial-gradient(circle at 25% 35%, white 1px, transparent 1px), radial-gradient(circle at 75% 65%, white 1px, transparent 1px)`,
                                backgroundSize: "32px 32px"
                            }}
                        />
                    </div>
                )}

                {/* Index watermark */}
                <div className="absolute bottom-4 right-4 text-7xl font-black text-white/10 select-none leading-none">
                    {String(index + 1).padStart(2, "0")}
                </div>

                {/* Top-right actions */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                    {project.links.demo && project.links.demo !== "#" && (
                        <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-background/80 backdrop-blur-sm border border-white/10 hover:bg-background transition-colors"
                            title="Live Demo"
                        >
                            <ExternalLink className="w-3.5 h-3.5 text-foreground" />
                        </a>
                    )}
                    <a
                        href={project.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-background/80 backdrop-blur-sm border border-white/10 hover:bg-background transition-colors"
                        title="View Code"
                    >
                        <Github className="w-3.5 h-3.5 text-foreground" />
                    </a>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>

                {meta.tagline && (
                    <p className="text-xs text-primary/80 font-medium mb-3 leading-relaxed">
                        {meta.tagline}
                    </p>
                )}

                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {project.description}
                </p>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-1.5">
                    {(meta.tech.length > 0 ? meta.tech : project.tags).map(t => (
                        <span
                            key={t}
                            className="px-2.5 py-1 text-[10px] font-semibold rounded-md border border-border bg-secondary/50 text-muted-foreground"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.article>
    )
}

export function ProjectList({ projects }: Props) {
    if (projects.length === 0) {
        return (
            <div className="text-center text-muted-foreground py-20 border border-dashed border-border rounded-2xl">
                <Github className="w-10 h-10 mx-auto mb-4 opacity-20" />
                <p className="text-sm">No pinned projects found. Pin repositories on GitHub to display them here.</p>
            </div>
        )
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((p, i) => (
                    <ProjectCard key={p.repoName} project={p} index={i} />
                ))}
            </div>

            <div className="mt-12 flex justify-center">
                <a
                    href="https://github.com/25Rohit25"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
                >
                    <Star className="w-3.5 h-3.5" />
                    View all repositories on GitHub
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
            </div>
        </>
    )
}
