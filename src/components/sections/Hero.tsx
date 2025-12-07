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
        <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-16">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
                <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
                <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
            </div>

            <div className="container px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center md:text-left"
                >
                    <div className="inline-block mb-4 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm">
                        Available for new opportunities
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                        Hi, I&apos;m <span className="text-gradient">Rohit Singh</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6 h-8 md:h-12">
                        {text}
                        <span className="animate-pulse">|</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-lg mx-auto md:mx-0 mb-8">
                        I build scalable, cloud-native systems with distributed backend architectures and automated deployments.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">

                        <Button size="lg" className="rounded-full group" asChild>
                            <a href="#projects">
                                View My Projects
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full" asChild>
                            <a href="/resume.pdf" download>
                                Download Resume
                                <Download className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                        <Button size="lg" variant="secondary" className="rounded-full" asChild>
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
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 relative"
                >

                    <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-600 blur-2xl opacity-50 animate-pulse" />
                        <div className="absolute inset-2 rounded-full bg-background border-4 border-background overflow-hidden shadow-2xl z-10">
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
