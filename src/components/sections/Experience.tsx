"use client"

import { motion } from "framer-motion"

const experience = [
    {
        role: "Backend / DevOps Intern",
        company: "TechWorks Labs",
        type: "Remote",
        period: "Jun – Aug 2025",
        highlights: [
            "Architected CI/CD pipeline with GitHub Actions + AWS EC2, cutting deployment time 65% across 12+ microservices.",
            "Containerized 8 Node.js services with Docker + Kubernetes; 40% better resource usage via HPA autoscaling.",
            "Added Redis caching layer — reduced p99 latency from 850ms → 180ms on high-traffic endpoints.",
        ]
    },
    {
        role: "AI / ML Virtual Intern",
        company: "Kodacy",
        type: "Virtual",
        period: "Aug – Sep 2025",
        highlights: [
            "Completed intensive 30-day program focused on AI algorithms and ML model deployment.",
            "Certified jointly by Kodacy & Scientific Platforms And Cosmic Explorations (SPACE).",
        ]
    },
    {
        role: "Wells Fargo Engineering Simulation",
        company: "Forage",
        type: "Simulation",
        period: "Nov 2025",
        highlights: [
            "Refactored monolithic Java backend into modular components to improve maintainability.",
            "Optimised database queries — 35% reduction in dashboard page-load latency.",
            "Implemented secure authentication flows and debugged critical production issues.",
        ]
    },
]

export function Experience() {
    return (
        <section id="experience" className="py-24 bg-background">
            <div className="container px-6 md:px-8">

                {/* Header */}
                <div className="mb-16">
                    <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary mb-3">Background</p>
                    <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
                        Experience
                    </h2>
                    <div className="mt-6 h-px bg-gradient-to-r from-primary/40 via-primary/10 to-transparent" />
                </div>

                {/* Timeline */}
                <div className="relative max-w-3xl">
                    {/* Vertical line */}
                    <div className="absolute left-3 top-2 bottom-0 w-px bg-border" />

                    <div className="space-y-10">
                        {experience.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className="relative pl-10"
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                </div>

                                {/* Card */}
                                <div className="rounded-2xl border border-border bg-card p-6 hover:border-primary/30 hover:shadow-[0_0_24px_-8px_rgb(167_139_250_/_0.15)] transition-all duration-400">
                                    {/* Meta row */}
                                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                                        <div>
                                            <h3 className="text-base font-bold text-foreground">{item.role}</h3>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="text-sm text-primary font-semibold">{item.company}</span>
                                                <span className="text-[10px] px-2 py-0.5 rounded-full border border-border bg-secondary/50 text-muted-foreground font-medium">
                                                    {item.type}
                                                </span>
                                            </div>
                                        </div>
                                        <span className="text-xs text-muted-foreground bg-secondary/50 border border-border px-3 py-1 rounded-full">
                                            {item.period}
                                        </span>
                                    </div>

                                    {/* Highlights */}
                                    <ul className="space-y-2">
                                        {item.highlights.map((h, j) => (
                                            <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                                                <div className="mt-2 w-1 h-1 rounded-full bg-primary/60 shrink-0" />
                                                {h}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
