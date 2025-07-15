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
      {isLoaded ? (
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
              transition={{ duration: 1, delay: 0.4 }}
              className="max-w-7xl mx-auto space-y-12"
            >
              <div className="max-w-2xl">
                <div className="text-xs tracking-wider text-gray-400">
                  CHALLENGE <span className="text-[#00FF00]">YOURSELF™</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight" style={{ fontFamily: "Arial Black" }}>
                  <span className="inline-block transform -skew-x-12">MARC</span>
                  <span className="inline-block transform skew-x-12">ELO</span>
                  <span className="block mt-2">
                    <span className="inline-block transform -skew-x-12">BENSA</span>
                    <span className="inline-block transform skew-x-12">BATH</span>
                  </span>
                </h1>
                <div className="space-y-2 mt-4">
                  <p className="text-[#00FF00] text-sm">" CHASE YOUR POTENTIAL "</p>
                  <p className="text-gray-400 text-xs tracking-wider">WELCOME TO MY WEBSITE</p>
                </div>
              </div>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <Button
                  asChild
                  className="relative bg-black/20 backdrop-blur-sm text-[#00FF00] rounded-full px-8 py-6 text-sm font-light border border-green-950 shadow-[0_0_15px_rgba(0,255,0,0.1)] hover:shadow-[0_0_25px_rgba(0,255,0,0.2)] hover:border-green-900 transition-all duration-500 ease-out group overflow-hidden"
                >
                  <Link href="/portfolio">
                    <div className="relative">
                      <span className="relative z-10">PORTFOLIO</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-green-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
                    </div>
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="relative bg-black/20 backdrop-blur-sm text-gray-400 rounded-full px-8 py-6 text-sm font-light border border-gray-800 shadow-[0_0_15px_rgba(255,255,255,0.03)] hover:shadow-[0_0_25px_rgba(255,255,255,0.05)] hover:border-gray-700 hover:text-gray-300 transition-all duration-500 ease-out group overflow-hidden"
                >
                  <div className="relative flex items-center">
                    <span className="relative z-10">CURRICULUM</span>
                    <ArrowRight className="relative z-10 ml-2 h-5 w-5 transition-transform duration-500 ease-out group-hover:translate-x-1" />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
                  </div>
                </Button>
              </motion.div>
            </motion.section>
          </main>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="relative z-10 border-t border-gray-800 py-6"
          >
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-xs mb-2 md:mb-0">
                &copy; 2025 MARCELO BENSABATH. All rights reserved.
              </p>
              <div className="flex space-x-4">
                <Link href="/privacy" className="text-xs text-gray-500 hover:text-green-400 transition-colors duration-300 ease-out">Privacy Policy</Link>
                <Link href="/terms" className="text-xs text-gray-500 hover:text-green-400 transition-colors duration-300 ease-out">Terms of Service</Link>
              </div>
            </div>
          </motion.footer>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
