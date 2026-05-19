"use client"

import { motion } from "framer-motion"

const now = [
    {
        label: "Building",
        value: "Scalable microservice e-commerce backend",
        tech: ["NestJS", "Kafka", "Docker"],
    },
    {
        label: "Learning",
        value: "Kubernetes orchestration & advanced system design patterns",
        tech: ["K8s", "AWS", "Architecture"],
    },
    {
        label: "Grinding",
        value: "Dynamic Programming on LeetCode — Knight badge maintained",
        tech: ["Algorithms", "DSA", "LeetCode"],
    },
]

export function CurrentlyLearning() {
    return (
        <section className="py-20">
            <div className="container px-6 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-8 md:p-10"
                >
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-8">
                        <div className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
                        </div>
                        <p className="text-xs font-bold tracking-[0.18em] uppercase text-primary">Right now</p>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-black text-foreground mb-10">
                        What I&apos;m working on
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {now.map((item, i) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="space-y-3"
                            >
                                <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-muted-foreground">
                                    {item.label}
                                </p>
                                <p className="text-sm text-foreground/80 leading-relaxed">{item.value}</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {item.tech.map(t => (
                                        <span key={t} className="text-[10px] px-2 py-0.5 rounded-md border border-primary/20 bg-primary/5 text-primary/70 font-medium">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
