"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const certificates = [
    {
        title: "Solutions Architecture Job Simulation",
        issuer: "AWS (Forage)",
        date: "2025",
        desc: "Designed scalable hosting architecture based on Elastic Beanstalk.",
        link: "/certificate-aws-forage.png"
    },
    {
        title: "Aviatrix Certified Engineer",
        issuer: "Aviatrix",
        date: "2025",
        desc: "Multicloud networking and network security architecture.",
        link: "/certificate-aviatrix.png"
    },
    {
        title: "Oracle Cloud Infrastructure Architect",
        issuer: "Oracle",
        date: "2025",
        desc: "OCI architecture, networking, compute, and storage solutions.",
        link: "/certificate-oracle.png"
    }
]

const achievements = [
    "🥈 SuperHack 2025: Semi-Finalist (Top 20 Teams)",
    "🏆 CodeChef 3-Star Competitive Programmer (Rated 1650+)",
    "⭐ Solved 500+ Algorithmic Problems across all platforms",
    "🎓 CGPA 9.4/10 in B.Tech Computer Science"
]

export function Certificates() {
    return (
        <section className="py-20">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold mb-12 text-center">Certifications & Achievements</h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Certifications Column */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                            <Award className="text-primary" /> Certifications
                        </h3>
                        <div className="space-y-6">
                            {certificates.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-6 rounded-xl border bg-card hover:bg-accent/10 transition-colors"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-bold text-lg">{cert.title}</h4>
                                        <span className="text-sm text-muted-foreground bg-secondary px-2 py-1 rounded">{cert.date}</span>
                                    </div>
                                    <p className="text-primary font-medium text-sm mb-2">{cert.issuer}</p>
                                    <p className="text-muted-foreground text-sm mb-4">
                                        {cert.desc}
                                    </p>
                                    <Button variant="link" className="p-0 h-auto" asChild>
                                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                            View Credential <ExternalLink className="ml-1 w-3 h-3" />
                                        </a>
                                    </Button>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Achievements Column */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                            <Award className="text-yellow-500" /> Honours
                        </h3>
                        <div className="space-y-4">
                            {achievements.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start gap-4 p-4 rounded-lg bg-yellow-500/5 border border-yellow-500/20"
                                >
                                    <span className="text-2xl">🏅</span>
                                    <p className="font-medium">{item}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
