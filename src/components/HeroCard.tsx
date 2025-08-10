"use client"

import { usePerformance } from "@/components/PerformanceProvider"
import { motion } from "framer-motion"

export default function HeroCard() {
  const { lowSpec, reducedMotion } = usePerformance()
  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 16 }}
      animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: lowSpec ? 0.35 : 0.6, ease: "easeOut" }}
      className="max-w-2xl w-full bg-white/10 dark:bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-[0_10px_40px_-10px_rgba(124,58,237,0.5)] p-8"
      style={{ willChange: lowSpec ? undefined : "transform" }}
    >
      <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">Kalyan Nath</h1>
      <p className="mt-4 text-base/7 opacity-90">
        Building playful, high-performance web experiences with 3D, motion, and modern design.
      </p>
      <div className="mt-6 flex gap-3">
        <a href="#projects" className="px-5 py-2 rounded-full bg-white/80 text-black hover:bg-white transition">View Projects</a>
        <a className="px-5 py-2 rounded-full border border-white/30 hover:bg-white/10 transition">Contact</a>
      </div>
    </motion.div>
  )
}


