import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MouseFollower } from "@/components/ui/mouse-follower";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Rohit Singh | Software Engineer & Backend Developer",
  description: "Portfolio of Rohit Singh — CS student at KL University. Backend Engineer, Distributed Systems, AI-powered apps. Codeforces Expert · CodeChef 5★ · LeetCode Knight.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased selection:bg-primary/20 selection:text-primary`}>

          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem={true}
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
