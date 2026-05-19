"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink, CheckCircle2, Trophy, Star, Code, Zap } from "lucide-react"

const certificates = [
    {
        title: "MongoDB Associate Developer",
        issuer: "MongoDB University",
        year: "2025",
        desc: "Data modelling, CRUD operations, aggregation pipelines, and Atlas deployment.",
        color: "from-emerald-500/15 to-teal-500/5",
        border: "border-emerald-500/20",
        dot: "bg-emerald-400",
    },
    {
        title: "Generative AI Developer",
        issuer: "SAP Certified",
        year: "2025",
        desc: "Building GenAI solutions using SAP AI Core platform and BTP services.",
        color: "from-blue-500/15 to-indigo-500/5",
        border: "border-blue-500/20",
        dot: "bg-blue-400",
    },
    {
        title: "OCI Architect Associate",
        issuer: "Oracle Cloud Infrastructure",
        year: "2025",
        desc: "Networking, compute, storage, security, and identity on Oracle Cloud.",
        color: "from-orange-500/15 to-amber-500/5",
        border: "border-orange-500/20",
        dot: "bg-orange-400",
    },
]

const codingStats = [
    {
        platform: "LeetCode",
        badge: "Knight",
        sub: "Top 5% globally",
        icon: <Code className="w-5 h-5" />,
        color: "text-yellow-400",
        bg: "from-yellow-500/10 to-orange-500/5",
        border: "border-yellow-500/20",
        link: "https://leetcode.com/u/klu2300032739/",
    },
    {
        platform: "Codeforces",
        badge: "Expert",
        sub: "500+ problems solved",
        icon: <Trophy className="w-5 h-5" />,
        color: "text-blue-400",
        bg: "from-blue-500/10 to-indigo-500/5",
        border: "border-blue-500/20",
        link: "https://codeforces.com/",
    },
    {
        platform: "CodeChef",
        badge: "5★ Rated",
        sub: "Competitive programmer",
        icon: <Star className="w-5 h-5" />,
        color: "text-orange-400",
        bg: "from-orange-500/10 to-red-500/5",
        border: "border-orange-500/20",
        link: "https://www.codechef.com/users/kl2300032739",
    },
]

const highlights = [
    "CGPA 9.4 / 10 — KL University B.Tech CS",
    "500+ DSA & Algorithmic Problems solved",
    "Graph Theory · Dynamic Programming · Optimization",
]

export function Certificates() {
    return (
        <section className="py-24">
            <div className="container px-6 md:px-8">

                {/* Section header */}
                <div className="mb-16">
                    <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary mb-3">Credentials</p>
                    <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight mb-6">
                        Certifications &amp; Rankings
                    </h2>
                    <div className="h-px bg-gradient-to-r from-primary/40 via-primary/10 to-transparent" />
                </div>

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Left: Certifications */}
                    <div>
                        <div className="flex items-center gap-2 mb-8">
                            <Award className="w-4 h-4 text-primary" />
                            <h3 className="text-sm font-bold tracking-wide uppercase text-muted-foreground">Certifications</h3>
                        </div>
                        <div className="space-y-4">
                            {certificates.map((cert, i) => (
                                <motion.div
                                    key={cert.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                    className={`group relative rounded-xl border bg-gradient-to-br ${cert.color} ${cert.border} p-5 hover:shadow-md transition-all duration-300`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`mt-1 w-2 h-2 rounded-full ${cert.dot} shrink-0`} />
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-2">
                                                <h4 className="font-bold text-foreground text-sm leading-snug">{cert.title}</h4>
                                                <span className="text-[10px] text-muted-foreground shrink-0 bg-secondary/60 px-2 py-0.5 rounded-full">
                                                    {cert.year}
                                                </span>
                                            </div>
                                            <p className="text-xs text-primary/80 font-semibold mt-1 mb-2">{cert.issuer}</p>
                                            <p className="text-xs text-muted-foreground leading-relaxed">{cert.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Competitive Programming + Highlights */}
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center gap-2 mb-8">
                                <Zap className="w-4 h-4 text-primary" />
                                <h3 className="text-sm font-bold tracking-wide uppercase text-muted-foreground">Competitive Programming</h3>
                            </div>
                            <div className="space-y-3">
                                {codingStats.map((s, i) => (
                                    <motion.a
                                        href={s.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        key={s.platform}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                        className={`group flex items-center gap-4 rounded-xl border bg-gradient-to-br ${s.bg} ${s.border} p-4 hover:shadow-md transition-all duration-300 cursor-pointer`}
                                    >
                                        <div className={`${s.color} shrink-0`}>{s.icon}</div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-bold text-foreground">{s.platform}</span>
                                                <span className={`text-xs font-black ${s.color}`}>{s.badge}</span>
                                            </div>
                                            <p className="text-xs text-muted-foreground mt-0.5">{s.sub}</p>
                                        </div>
                                        <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Academic highlights */}
                        <div>
                            <div className="flex items-center gap-2 mb-5">
                                <CheckCircle2 className="w-4 h-4 text-primary" />
                                <h3 className="text-sm font-bold tracking-wide uppercase text-muted-foreground">Academic Highlights</h3>
                            </div>
                            <div className="space-y-3">
                                {highlights.map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.08 }}
                                        className="flex items-start gap-3 text-sm"
                                    >
                                        <div className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                                        <span className="text-muted-foreground">{h}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
