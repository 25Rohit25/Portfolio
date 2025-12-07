"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Search, Tag, X, Clock, ArrowRight } from "lucide-react"
import { blogPosts } from "@/lib/data/posts"
import { Button } from "@/components/ui/button"

// Get all unique tags
const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags))).sort()

export default function BlogListingPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedTag, setSelectedTag] = useState<string | null>(null)

    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.summary.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true
        return matchesSearch && matchesTag
    })

    return (
        <div className="pt-24 pb-20 container px-4 md:px-6 min-h-screen">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Technical Writings</h1>
                <p className="text-muted-foreground text-lg">
                    Deep dives into Full Stack, Cloud Engineering, and Distributed Systems.
                </p>
            </div>

            {/* Filters */}
            <div className="max-w-4xl mx-auto mb-12 space-y-4">
                <div className="relative">
                    <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search articles..."
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                    {selectedTag && (
                        <Button variant="secondary" size="sm" onClick={() => setSelectedTag(null)} className="gap-1 border border-primary/20 bg-primary/10 text-primary hover:bg-primary/20">
                            Clear Filter <X className="w-3 h-3" />
                        </Button>
                    )}
                    {allTags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                            className={`px-3 py-1 text-sm rounded-full border transition-all ${tag === selectedTag
                                    ? "bg-primary text-primary-foreground border-primary"
                                    : "bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            #{tag}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="group flex flex-col bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="p-6 flex flex-col flex-1 h-full">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {post.tags.slice(0, 2).map((tag) => (
                                        <span key={tag} className="text-xs font-medium px-2 py-1 rounded bg-secondary text-secondary-foreground">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                <Link href={`/blog/${post.slug}`} className="block group-hover:text-primary transition-colors">
                                    <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                                </Link>

                                <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                                    {post.summary}
                                </p>

                                <div className="mt-auto flex items-center justify-between text-sm pt-4 border-t border-border/30">
                                    <div className="flex items-center gap-4 text-muted-foreground">
                                        <span>{post.date}</span>
                                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))
                ) : (
                    <div className="col-span-full text-center py-20 text-muted-foreground">
                        No articles found matching your criteria.
                    </div>
                )}
            </div>
        </div>
    )
}
