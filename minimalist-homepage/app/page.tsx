"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const gradientRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (gradientRef.current) {
        const rect = gradientRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        gradientRef.current.style.setProperty('--mouse-x', `${x}px`)
        gradientRef.current.style.setProperty('--mouse-y', `${y}px`)
      }
    }

    document.addEventListener("mousemove", handleMouseMove)
    setIsLoaded(true)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative min-h-screen bg-black overflow-hidden text-white"
        >
          {/* Interactive Mouse Gradient */}
          <div
            ref={gradientRef}
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              background:
                "radial-gradient(circle 400px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0,255,0,0.08), transparent)",
              transition: "background 0.6s ease-out",
            }}
          />

          {/* Background Image Overlay */}
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://i.ibb.co/TMcNhqbc/landing.png')`,
              }}
            />
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          </div>

          {/* Navigation */}
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 px-8 py-6"
          >
            <nav className="flex justify-between items-center max-w-7xl mx-auto">
              <button className="text-[#00FF00] hover:text-[#00FF00]/80 transition-colors">
                <Menu className="w-6 h-6" />
              </button>
              <Link href="/" className="text-[#00FF00] text-sm tracking-widest hover:text-[#00FF00]/80 transition-colors">
                CELO
              </Link>
              <Link
                href="/contact"
                className="text-xs text-[#00FF00] border border-[#00FF00]/20 px-4 py-2 rounded-full
                           hover:bg-[#00FF00]/10 transition-all duration-300"
              >
                CONTACT
              </Link>
            </nav>
          </motion.header>

          {/* Main Content */}
          <main className="relative z-10 px-8 pt-24 pb-32">
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              tra
