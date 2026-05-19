"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Trophy, Code, Zap, ExternalLink } from "lucide-react"
import { SiGeeksforgeeks } from "react-icons/si"
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
        name: "LeetCode",
        icon: <Code className="w-6 h-6" />,
        stats: [
            { label: "Title", value: "Knight", suffix: "" },
            { label: "Problems Solved", value: 500, suffix: "+" },
        ],
        color: "text-yellow-500",
        link: "https://leetcode.com/u/klu2300032739/"
    },
    {
        name: "GeeksforGeeks",
        icon: <SiGeeksforgeeks className="w-6 h-6" />,
        stats: [
            { label: "Problems Solved", value: 150, suffix: "+" },
            { label: "Focus", value: "Data Structures", suffix: "" },
        ],
        color: "text-green-500",
        link: "https://www.geeksforgeeks.org/profile/singhroh7dpy"
    },
    {
        name: "CodeChef",
        icon: <Zap className="w-6 h-6" />,
        stats: [
            { label: "Rating", value: 5, suffix: " ★" },
            { label: "Problems Solved", value: 200, suffix: "+" },
        ],
        color: "text-orange-500",
        link: "https://www.codechef.com/users/kl2300032739"
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
                    <h2 className="text-4xl md:text-5xl font-sans font-bold tracking-tight mb-4 text-foreground">Problem Solving & DSA</h2>
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
                            className="glass-card p-6 rounded-3xl apple-shadow flex flex-col justify-between"
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

                            <h3 className="text-2xl font-sans font-semibold tracking-tight mb-4">{profile.name}</h3>

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


                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
