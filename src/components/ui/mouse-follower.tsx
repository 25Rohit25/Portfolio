"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function MouseFollower() {
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    const springConfig = { damping: 25, stiffness: 700 }
    const cursorXSpring = useSpring(cursorX, springConfig)
    const cursorYSpring = useSpring(cursorY, springConfig)

    const [isHoveringLink, setIsHoveringLink] = useState(false)

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16)
            cursorY.set(e.clientY - 16)
        }

        const handleLinkHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (target.closest('a') || target.closest('button') || target.tagName === 'BUTTON' || target.tagName === 'A') {
                setIsHoveringLink(true)
            } else {
                setIsHoveringLink(false)
            }
        }

        window.addEventListener("mousemove", moveCursor)
        window.addEventListener("mouseover", handleLinkHover)

        return () => {
            window.removeEventListener("mousemove", moveCursor)
            window.removeEventListener("mouseover", handleLinkHover)
        }
    }, [cursorX, cursorY])

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary pointer-events-none z-[9999] hidden md:block"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    opacity: 1,
                    scale: isHoveringLink ? 1.5 : 1,
                    backgroundColor: isHoveringLink ? "var(--primary)" : "transparent",
                    mixBlendMode: isHoveringLink ? "difference" : "normal",
                }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
            />

            {/* Glow Effect */}
            <motion.div
                className="fixed top-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] pointer-events-none z-[-1] hidden md:block"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
        </>
    )
}
