"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Trophy, Code, Zap, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
    const [count, setCount] = useState(from)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {
            let start = from
            const end = to
            const incrementTime = (duration * 1000) / (end - start)

            const timer = setInterval(() => {
                start += 1
                setCount(start)
                if (start === end) clearInterval(timer)
            }, incrementTime)

            return () => clearInterval(timer)
        }
    }, [isInView, from, to, duration])

    return <span ref={ref}>{count}</span>
}

const profiles = [
    {
        name: "LeetCode & GFG",
        icon: <Code className="w-6 h-6" />,
        stats: [
            { label: "Problems Solved", value: 500, suffix: "+" },
            { label: "Consistency", value: "Daily", suffix: "" },
        ],
        color: "text-yellow-500",
        link: "https://leetcode.com/u/klu2300032739/"
    },
    {
        name: "CodeChef",
        icon: <Trophy className="w-6 h-6" />,
        stats: [
            { label: "Max Rating", value: 3, suffix: " Star" },
            { label: "Contest Rank", value: "Global 500", suffix: "" },
        ],
        color: "text-orange-500",
        link: "https://www.codechef.com/users/kl2300032739"
    },
    {
        name: "Hackathons",
        icon: <Zap className="w-6 h-6" />,
        stats: [
            { label: "SuperHack 2025", value: "Semi-Finalist", suffix: "" },
            { label: "Focus", value: "Backend Scalability", suffix: "" },
        ],
        color: "text-green-500",
        link: "#"
    }
]

export function CodingProfiles() {
    return (
        <section className="py-20 bg-muted/20">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4">Problem Solving & DSA</h2>
                    <p className="text-muted-foreground">
                        Consistent practice across major coding platforms.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {profiles.map((profile, i) => (
                        <motion.div
                            key={profile.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card p-6 rounded-xl flex flex-col justify-between"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className={`p-3 rounded-lg bg-background shadow-sm ${profile.color}`}>
                                    {profile.icon}
                                </div>
                                <Button variant="ghost" size="icon" asChild>
                                    <a href={profile.link} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </Button>
                            </div>

                            <h3 className="text-xl font-bold mb-4">{profile.name}</h3>

                            <div className="space-y-4 mb-6">
                                {profile.stats.map((stat, idx) => (
                                    <div key={idx} className="flex justify-between items-end border-b border-border/50 pb-2">
                                        <span className="text-sm text-muted-foreground">{stat.label}</span>
                                        <span className="font-bold text-lg">
                                            {typeof stat.value === 'number' ? <Counter from={0} to={stat.value} /> : stat.value}
                                            {stat.suffix}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Fake Mini Graph visual */}
                            <div className="flex gap-1 items-end h-8 mt-auto opacity-50">
                                {[40, 70, 50, 90, 60, 80, 45].map((h, k) => (
                                    <div key={k} style={{ height: `${h}%` }} className={`flex-1 rounded-t-sm ${profile.color.replace('text-', 'bg-')}`} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
