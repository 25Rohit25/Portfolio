"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Clock, Tag } from "lucide-react"
import { blogPosts, BlogPost } from "@/lib/data/posts"
import { Button } from "@/components/ui/button"

export function BlogOverview() {
    const recentPosts = blogPosts.slice(0, 3)

    return (
        <section id="blog" className="py-20">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4"
                >
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights</h2>
                        <p className="text-muted-foreground max-w-xl">
                            Notes on development, deployment, and system design.
                        </p>
                    </div>

                    <Button variant="ghost" className="group" asChild>
                        <Link href="/blog">
                            View All Posts <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {recentPosts.map((post, index) => (
                        <BlogCard key={post.id} post={post} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group flex flex-col h-full bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
            <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-xs font-medium px-2 py-1 rounded bg-secondary text-secondary-foreground">
                            #{tag}
                        </span>
                    ))}
                    <span className="text-xs text-muted-foreground flex items-center gap-1 ml-auto">
                        <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                </div>

                <Link href={`/blog/${post.slug}`} className="block group-hover:text-primary transition-colors">
                    <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                </Link>

                <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                    {post.summary}
                </p>

                <div className="mt-auto flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{post.date}</span>
                    <Link href={`/blog/${post.slug}`} className="font-medium text-primary flex items-center hover:underline underline-offset-4">
                        Read More <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                </div>
            </div>

            {/* Decorative bottom bar */}
            <div className="h-1 w-full bg-primary/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        </motion.div>
    )
}
