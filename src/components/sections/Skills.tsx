"use client"

import { motion } from "framer-motion"

// Using devicon SVG icons for authentic brand logos
const skillsData = [
    {
        category: "Languages",
        color: "from-blue-500/10 to-indigo-500/10",
        accent: "border-blue-500/20",
        skills: [
            { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
            { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        ]
    },
    {
        category: "Backend",
        color: "from-violet-500/10 to-purple-500/10",
        accent: "border-violet-500/20",
        skills: [
            { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
            { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
            { name: "Socket.IO", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
        ]
    },
    {
        category: "Frontend",
        color: "from-cyan-500/10 to-teal-500/10",
        accent: "border-cyan-500/20",
        skills: [
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
            { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        ]
    },
    {
        category: "Databases",
        color: "from-emerald-500/10 to-green-500/10",
        accent: "border-emerald-500/20",
        skills: [
            { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
        ]
    },
    {
        category: "DevOps & Cloud",
        color: "from-orange-500/10 to-amber-500/10",
        accent: "border-orange-500/20",
        skills: [
            { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
            { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg" },
            { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
            { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
            { name: "Ansible", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" },
        ]
    },
    {
        category: "Observability",
        color: "from-rose-500/10 to-pink-500/10",
        accent: "border-rose-500/20",
        skills: [
            { name: "Prometheus", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
            { name: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
            { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
            { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        ]
    },
]

export function Skills() {
    return (
        <section id="skills" className="py-24 bg-background">
            <div className="container px-6 md:px-8">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary mb-3">Toolbox</p>
                    <div className="flex items-end justify-between flex-wrap gap-4">
                        <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground leading-tight tracking-tight">
                            Technical Skills
                        </h2>
                        <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
                            Full-stack proficiency from systems programming to cloud orchestration.
                        </p>
                    </div>
                    <div className="mt-6 h-px bg-gradient-to-r from-primary/40 via-primary/10 to-transparent" />
                </motion.div>

                {/* Skill cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {skillsData.map((cat, i) => (
                        <motion.div
                            key={cat.category}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className={`group relative rounded-3xl border bg-gradient-to-br ${cat.color} ${cat.accent} p-6 apple-shadow hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgb(255,255,255,0.05)] hover:border-primary/40 transition-all duration-300 ease-out`}
                        >
                            {/* Category label */}
                            <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-muted-foreground mb-4">
                                {cat.category}
                            </p>

                            {/* Icons grid */}
                            <div className="flex flex-wrap gap-3">
                                {cat.skills.map(skill => (
                                    <div
                                        key={skill.name}
                                        className="flex flex-col items-center gap-1.5 group/item"
                                        title={skill.name}
                                    >
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <div className="w-10 h-10 rounded-lg bg-background/60 border border-border/40 flex items-center justify-center p-2 hover:scale-110 hover:-translate-y-1 hover:shadow-md group-hover/item:border-primary/50 group-hover/item:bg-background/80 transition-all duration-300">
                                            <img
                                                src={skill.icon}
                                                alt={skill.name}
                                                className="w-full h-full object-contain"
                                                loading="lazy"
                                            />
                                        </div>
                                        <span className="text-[10px] text-muted-foreground font-medium leading-none">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Currently learning strip */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground"
                >
                    <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        Currently levelling up:
                    </span>
                    {["Advanced System Design", "Kubernetes", "AWS Solutions Architecture"].map(t => (
                        <span key={t} className="px-3 py-1 rounded-full border border-border bg-secondary/40 text-foreground/70 font-medium">
                            {t}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
