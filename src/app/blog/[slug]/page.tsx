import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react"
import { blogPosts } from "@/lib/data/posts"
import { Button } from "@/components/ui/button"

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = blogPosts.find((p) => p.slug === slug)

    if (!post) {
        notFound()
    }

    return (
        <article className="pt-24 pb-20 container px-4 md:px-6 min-h-screen max-w-4xl mx-auto">
            <Button variant="ghost" asChild className="mb-8 pl-0 hover:pl-2 transition-all">
                <Link href="/blog">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                </Link>
            </Button>

            <header className="mb-10">
                <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"> # {tag} </span>
                    ))}
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
                    {post.title}
                </h1>

                <div className="flex items-center gap-6 text-muted-foreground border-b border-border/50 pb-8">
                    <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> {post.date}
                    </span>
                    <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4" /> {post.readTime}
                    </span>
                    <span>
                        By <span className="text-foreground font-medium">{post.author}</span>
                    </span>
                </div>
            </header>

            <div
                className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80 prose-code:text-primary prose-pre:bg-secondary/50 prose-pre:border prose-pre:border-border/50 max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <hr className="my-12 border-border/50" />

            <div className="bg-muted/30 p-8 rounded-2xl border border-border/50">
                <h3 className="text-xl font-bold mb-4">You might also like...</h3>
                <p className="text-muted-foreground mb-4">Check out other articles on system design and cloud engineering.</p>
                <Button asChild>
                    <Link href="/blog">Browse All Articles</Link>
                </Button>
            </div>
        </article>
    )
}
