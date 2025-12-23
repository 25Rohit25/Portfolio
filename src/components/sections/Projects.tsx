"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, ArrowRight, Layers, Mic, MessageSquare, CloudSun } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
    {
        title: "Waste-No-More — Logistics Platform",
        description: "Built a real-time logistics platform to solve automated surplus food routing. Engineered WebSocket propagation with sub-200ms latency, improving allocation efficiency by 32%.",
        tags: ["Node.js", "WebSockets", "MongoDB", "Docker", "Vercel"],
        links: { demo: "https://waste-no-more.vercel.app", code: "https://github.com/25Rohit25/Waste-No-More.git" },
        icon: <Layers className="w-12 h-12 text-primary" />,
        image: "/project-waste-no-more.png",
        details: "Problem: Inefficient manual coordination. Solution: Automated routing engine. Impact: 32% efficiency boost."
    },
    {
        title: "Bhopal Food Choice App",
        description: "MERN Stack application enabling shared-food cart purchasing for train passengers. Supported 20+ concurrent users with real-time sync, reducing query latency by 60% using compound indexes.",
        tags: ["React", "Express.js", "Socket.io", "MongoDB", "JWT"],
        links: { demo: "https://bhopal-food.vercel.app", code: "https://github.com/25Rohit25/Bhopal-Food.git" },
        icon: <MessageSquare className="w-12 h-12 text-primary" />,
        image: "/project-bhopal-food.png",
        details: "Problem: No group ordering. Solution: Real-time shared cart. Impact: 60% faster queries."
    },
    {
        title: "FitLife Pro — Fitness Platform",
        description: "Full-stack fitness platform providing personalized workout plans via Gemini AI. Reduced conflicts by 85% using optimistic concurrency & achieved 200ms p95 API latency.",
        tags: ["Spring Boot", "React", "MySQL", "Docker", "GenAI"],
        links: { demo: "#", code: "https://github.com/25Rohit25/FitLife.git" },
        icon: <CloudSun className="w-12 h-12 text-primary" />,
        details: "Problem: Generic plans. Solution: AI-driven personalization. Impact: 200ms p95 latency."
    }
]

export function Projects() {
    return (
        <section id="projects" className="py-20">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Projects</h2>
                            <div className="h-1 w-20 bg-primary mt-2 rounded-full" />
                        </div>
                        <p className="text-muted-foreground max-w-sm text-right hidden md:block">
                            A selection of my best work, ranging from cloud-native apps to complex full-stack systems.
                        </p>
                    </div>
                </motion.div>

                <div className="space-y-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative grid md:grid-cols-2 gap-8 items-center p-6 md:p-8 rounded-xl glass-card border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all"
                        >
                            {/* Visual Side */}
                            <div className="relative h-64 md:h-80 w-full rounded-lg bg-muted/30 overflow-hidden border border-border/50 flex items-center justify-center group-hover:scale-[1.01] transition-transform duration-500">

                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover z-0 transition-grayscale duration-500 grayscale group-hover:grayscale-0"
                                    />
                                ) : (
                                    <div className="z-20 transform group-hover:scale-110 transition-transform duration-500">
                                        {project.icon}
                                    </div>
                                )}

                                <div className="absolute bottom-4 left-4 z-20">
                                    <span className="text-4xl font-black text-foreground/10">{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="relative z-10 flex flex-col justify-center">
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors text-foreground">{project.title}</h3>
                                <p className="text-sm font-medium text-primary mb-2">{project.details}</p>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 text-xs font-semibold rounded-md bg-secondary text-secondary-foreground border border-border">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                                        </a>
                                    </Button>
                                    <Button asChild variant="outline" size="sm" className="border-border hover:bg-secondary">
                                        <a href={project.links.code} target="_blank" rel="noopener noreferrer">
                                            <Github className="mr-2 h-4 w-4" /> View Code
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button variant="ghost" className="group text-muted-foreground hover:text-primary" asChild>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            View All Projects on GitHub
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}
