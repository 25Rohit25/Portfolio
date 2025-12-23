"use client"

import { motion } from "framer-motion"
import { Monitor, Server, Cloud, Terminal, Database, Code } from "lucide-react"

const skillsData = [
    {
        category: "Languages",
        icon: <Code className="w-8 h-8 text-primary" />,
        skills: ["C++", "JavaScript", "TypeScript", "Python", "Java", "SQL"],
        className: "border-border hover:border-primary/50"
    },
    {
        category: "Backend Development",
        icon: <Server className="w-8 h-8 text-primary" />,
        skills: ["Node.js", "Express.js", "Spring Boot", "REST APIs", "WebSockets", "JWT", "RBAC"],
        className: "border-border hover:border-primary/50"
    },
    {
        category: "Cloud Services",
        icon: <Cloud className="w-8 h-8 text-primary" />,
        skills: ["AWS EC2", "AWS S3", "AWS IAM", "AWS ALB", "Vercel", "Render"],
        className: "border-border hover:border-primary/50"
    },
    {
        category: "DevOps & Containers",
        icon: <Terminal className="w-8 h-8 text-primary" />,
        skills: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Ansible", "Linux"],
        className: "border-border hover:border-primary/50"
    },
    {
        category: "Databases",
        icon: <Database className="w-8 h-8 text-primary" />,
        skills: ["MySQL", "PostgreSQL", "MongoDB"],
        className: "border-border hover:border-primary/50"
    },
    {
        category: "Distributed Systems",
        icon: <Monitor className="w-8 h-8 text-primary" />,
        skills: ["Consistency Models", "Caching", "Load Balancing", "Microservices", "Observability"],
        className: "border-border hover:border-primary/50"
    }
]

export function Skills() {
    return (
        <section id="skills" className="py-20 bg-background">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Proficiency</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A comprehensive overview of my technical skills and technological stack.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-6 rounded-xl border bg-card backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${category.className}`}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-lg bg-background shadow-md">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold">{category.category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 text-sm font-medium rounded-full bg-accent/50 text-accent-foreground border border-border/50 hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-primary/20">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-sm font-medium"> Currently Learning: Advanced System Design, Kubernetes, Microservices</span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
