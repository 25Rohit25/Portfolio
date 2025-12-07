"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"
import Image from "next/image"



const experience = [
    {
        role: "Backend/DevOps Intern",
        company: "TechWorks Labs (Remote)",
        period: "Jun 2025 - Aug 2025",
        description: [
            "Architected CI/CD pipeline with GitHub Actions + AWS EC2, reducing deployment time by 65% across 12+ microservices.",
            "Containerized 8 Node.js services using Docker + Kubernetes, improving resource usage by 40% via autoscaling strategies.",
            "Implemented Redis caching layer, reducing p99 latency from 850ms to 180ms for high-traffic endpoints."
        ]
    },
    {
        role: "Wells Fargo Engineering Simulation",
        company: "Forage",
        period: "Nov 2025",
        description: [
            "Refactored monolithic Java backend into modular, independent components to improve maintainability.",
            "Optimized dashboard database queries, achieving a 35% reduction in page load latency.",
            "Implemented secure authentication flows and debugged critical production issues in a simulated environment."
        ],
        image: "/certificate-wells-fargo.png"
    },
    {
        role: "AI/ML Intern",
        company: "Kodacy (Virtual)",
        period: "Aug 2025 - Sep 2025",
        description: [
            "Completed intense 30-day virtual internship focusing on Artificial Intelligence and Machine Learning.",
            "Gained hands-on experience with AI algorithms and ML model deployment.",
            "Certified by Kodacy in association with Scientific Platforms And Cosmic Explorations (SPACE)."
        ],
        image: "/certificate-internship.png"
    }
]

export function Experience() {
    return (
        <section id="experience" className="py-20 bg-muted/30">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold mb-12 text-center">Experience & Leadership</h2>

                <div className="max-w-3xl mx-auto space-y-8">
                    {experience.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline Line (Hidden on Mobile usually, but let's keep it simple) */}

                            <div className="md:flex gap-6 items-start">
                                {/* Date for Desktop */}
                                <div className="hidden md:block w-32 pt-1 text-right text-sm text-muted-foreground font-medium">
                                    {item.period}
                                </div>

                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-32 top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />
                                {/* Vertical Line */}
                                {index !== experience.length - 1 && (
                                    <div className="absolute left-1.5 md:left-[8.3rem] top-4 bottom-[-2rem] w-px bg-border" />
                                )}

                                {/* Content Card */}
                                <div className="flex-1 bg-card p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h3 className="text-xl font-bold">{item.role}</h3>
                                            <p className="text-primary font-medium">{item.company}</p>
                                        </div>
                                        <div className="md:hidden flex items-center text-xs text-muted-foreground">
                                            <Calendar className="w-3 h-3 mr-1" /> {item.period}
                                        </div>
                                    </div>

                                    <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                                        {item.description.map((point, idx) => (
                                            <li key={idx} className="text-sm">{point}</li>
                                        ))}
                                    </ul>

                                    {item.image && (
                                        <div className="mt-4 relative h-40 w-full md:w-64 rounded-lg overflow-hidden border border-border/50">
                                            <Image
                                                src={item.image}
                                                alt={item.role}
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
