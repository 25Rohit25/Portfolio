"use client"

import Image from "next/image"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Download, Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

import { Button } from "@/components/ui/button"

export function Hero() {
    const [text, setText] = useState("")
    const fullText = "Full Stack Engineer | Cloud & DevOps Practitioner"
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + fullText.charAt(index))
                setIndex((prev) => prev + 1)
            }, 100)
            return () => clearTimeout(timeout)
        }
    }, [index])

    return (
        <section id="home" className="relative min-h-[100dvh] flex items-center justify-center pt-16 bg-background">
            {/* Background Elements removed for clean look */}

            <div className="container px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center md:text-left"
                >
                    <div className="inline-block mb-4 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium">
                        Available for new opportunities
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-foreground">
                        Hi, I&apos;m <span className="text-primary">Rohit Singh</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6 h-8 md:h-12">
                        {text}
                        <span className="animate-pulse text-primary">|</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed">
                        I build scalable, cloud-native systems with distributed backend architectures and automated deployments.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
                        <Button size="lg" className="rounded-md group bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm" asChild>
                            <a href="#projects">
                                View My Projects
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-md border-border hover:bg-secondary/50" asChild>
                            <a href="/Rohit_singh_cm.pdf" download="Rohit_singh_cm.pdf">
                                Download Resume
                                <Download className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                        <Button size="lg" variant="ghost" className="rounded-md hover:bg-secondary/50" asChild>
                            <a href="#contact">
                                Contact Me
                                <Mail className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                    </div>

                    <div className="flex gap-4 justify-center md:justify-start">
                        <SocialLink href="https://github.com" icon={<FaGithub />} label="GitHub" />
                        <SocialLink href="https://linkedin.com" icon={<FaLinkedin />} label="LinkedIn" />
                        <SocialLink href="mailto:singhrohit14629@gmail.com" icon={<Mail />} label="Email" />
                        {/* Using a globe/link icon for personal dev site as placeholder since specific icon might not be imported */}
                        <SocialLink href="https://rohit.dev" icon={<ArrowRight className="w-4 h-4 -rotate-45" />} label="rohit.dev" />
                    </div>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 relative"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
                        {/* Clean border instead of glow */}
                        <div className="absolute inset-0 rounded-full border border-border bg-muted/20" />
                        <div className="absolute inset-4 rounded-full overflow-hidden border border-border shadow-2xl z-10">
                            <Image
                                src="/profile.jpg"
                                alt="Rohit Singh"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-background border border-input hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
            aria-label={label}
        >
            <div className="h-5 w-5 flex items-center justify-center">
                {icon}
            </div>
        </a>
    )
}
