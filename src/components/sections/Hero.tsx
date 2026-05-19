"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Download, MoveRight } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"

const ROLES = ["Backend Engineer", "Distributed Systems", "AI Applications", "Open Source"]

export function Hero() {
    const [roleIdx, setRoleIdx] = useState(0)

    useEffect(() => {
        const t = setInterval(() => setRoleIdx(i => (i + 1) % ROLES.length), 2600)
        return () => clearInterval(t)
    }, [])

    return (
        <section id="home" className="relative min-h-[100dvh] flex items-center overflow-hidden bg-background">

            {/* ── Subtle grid backdrop ── */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                    backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
                    backgroundSize: "60px 60px"
                }}
            />

            {/* ── Soft ambient glow ── */}
            <div className="pointer-events-none absolute top-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full bg-primary/5 blur-[150px]" />

            <div className="container px-6 md:px-8 relative z-10 pt-20 pb-12">
                <div className="grid lg:grid-cols-[1fr_500px] gap-12 lg:gap-16 items-center">

                    {/* ── LEFT: Copy ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {/* Eyebrow */}
                        <div className="flex items-center gap-3 mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-50" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                            </span>
                            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground">
                                Available for opportunities
                            </span>
                        </div>

                        {/* Name */}
                        <h1 className="text-6xl md:text-8xl font-sans font-black tracking-tight leading-[0.95] text-foreground mb-6">
                            Rohit
                            <br />
                            <span className="text-foreground">
                                Singh.
                            </span>
                        </h1>

                        {/* Animated role */}
                        <div className="flex items-center gap-3 mb-6 h-8">
                            <div className="h-px w-8 bg-primary/60" />
                            <motion.span
                                key={roleIdx}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.35 }}
                                className="text-base font-semibold text-primary tracking-wide"
                            >
                                {ROLES[roleIdx]}
                            </motion.span>
                        </div>

                        {/* Bio */}
                        <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-[1.85] mb-10">
                            CS student at{" "}
                            <span className="text-foreground font-medium">KL University</span>{" "}
                            building impactful full-stack products. Strong focus on clean
                            architecture, real-time systems, and AI integration.
                        </p>

                        {/* Stat row */}
                        <div className="flex flex-wrap gap-8 mb-10">
                            {[
                                { num: "500+", label: "LeetCode Solved" },
                                { num: "200+", label: "CodeChef Solved" },
                                { num: "150+", label: "GFG Solved" },
                                { num: "5★", label: "CodeChef Rating" },
                            ].map(s => (
                                <div key={s.label}>
                                    <div className="text-xl font-black text-foreground">{s.num}</div>
                                    <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap items-center gap-4">
                            <a
                                href="#projects"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity apple-shadow"
                            >
                                View Projects <MoveRight className="w-4 h-4" />
                            </a>
                            <a
                                href="/Rohit_Singh_Resume_SDE.pdf"
                                download
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm font-semibold tracking-wide text-foreground hover:bg-secondary/50 transition-colors"
                            >
                                Resume <Download className="w-4 h-4" />
                            </a>
                        </div>

                        {/* Social row */}
                        <div className="flex items-center gap-1 mt-10">
                            {[
                                { href: "https://github.com/25Rohit25", icon: <FaGithub className="w-4 h-4" />, label: "GitHub" },
                                { href: "https://www.linkedin.com/in/rohit-singh-75428a311/", icon: <FaLinkedin className="w-4 h-4" />, label: "LinkedIn" },
                                { href: "https://leetcode.com/u/klu2300032739/", icon: <SiLeetcode className="w-4 h-4" />, label: "LeetCode" },
                            ].map(s => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    className="group flex items-center gap-1.5 px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-all text-xs font-medium"
                                >
                                    {s.icon}
                                    <span>{s.label}</span>
                                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── RIGHT: Photo ── */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative hidden lg:flex justify-center items-center w-full -mt-16"
                    >
                        <div className="relative w-80 h-80 lg:w-[400px] lg:h-[400px] xl:w-[480px] xl:h-[480px] overflow-hidden rounded-full border border-border/40 apple-shadow z-10">
                            <Image
                                src="/profile.jpeg"
                                alt="Rohit Singh"
                                fill
                                className="object-cover"
                                priority
                            />

                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ── Scroll indicator ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
            >
                <div className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent animate-pulse" />
                <span className="text-[10px] tracking-widest uppercase text-muted-foreground">Scroll</span>
            </motion.div>
        </section>
    )
}
