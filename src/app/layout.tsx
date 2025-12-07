import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MouseFollower } from "@/components/ui/mouse-follower";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rohit Singh | Full Stack Cloud Engineer",
  description: "Portfolio of Rohit Singh - Full Stack Engineer & Cloud Enthusiast. Building scalable web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased selection:bg-primary/20 selection:text-primary`}>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="hidden md:block">
            <MouseFollower />
          </div>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
