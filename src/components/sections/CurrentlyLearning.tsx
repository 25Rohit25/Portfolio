"use client"

import { motion } from "framer-motion"
import { Hammer, BookOpen, Target } from "lucide-react"

export function CurrentlyLearning() {
    return (
        <section className="py-20 px-4 md:px-6 container">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-muted/10 rounded-xl p-8 md:p-12 border border-border backdrop-blur-sm"
            >
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-foreground">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                    Right Now I&apos;m...
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-primary font-semibold">
                            <Hammer className="w-5 h-5" /> Building
                        </div>
                        <p className="text-muted-foreground">
                            A scalable microservice-based e-commerce backend using <span className="text-foreground font-medium">NestJS</span> and <span className="text-foreground font-medium">Kafka</span>.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-primary font-semibold">
                            <BookOpen className="w-5 h-5" /> Learning
                        </div>
                        <p className="text-muted-foreground">
                            Deep diving into <span className="text-foreground font-medium">Kubernetes</span> orchestration and advanced system design patterns.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-primary font-semibold">
                            <Target className="w-5 h-5" /> Practicing
                        </div>
                        <p className="text-muted-foreground">
                            Solving Dynamic Programming problems on <span className="text-foreground font-medium">LeetCode</span> (Target: Knight Badge).
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
