"use client"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="py-6 border-t border-border/50 bg-background/50 backdrop-blur-sm">
            <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-muted-foreground">
                    © {currentYear} Rohit Singh. All rights reserved.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    Built with Next.js, Tailwind & Framer Motion.
                </div>
            </div>
        </footer>
    )
}
