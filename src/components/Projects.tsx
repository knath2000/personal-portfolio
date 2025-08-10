"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { usePerformance } from "@/components/PerformanceProvider"

type Project = {
  id: string
  title: string
  desc: string
  img: string
  href?: string
  live?: string
  github?: string
}

const PROJECTS: Project[] = [
  {
    id: "luminous-verses",
    title: "Luminous Verses",
    desc: "Quran learning companion with Verse of the Day, audio recitation, chapter browser, and glass UI.",
    img: "/projects/luminous-verses/hero.jpg",
    href: "/projects/luminous-verses",
    live: "https://luminous-verses.vercel.app",
    github: "https://github.com/knath2000/luminous-verses",
  },
  { id: "p2", title: "3D Product View", desc: "Interactive 3D product explorer with bloom.", img: "/vercel.svg" },
  { id: "p3", title: "Motion Cards", desc: "Framer Motion micro-interactions and gestures.", img: "/globe.svg" },
]

export default function Projects() {
  const { lowSpec, reducedMotion } = usePerformance()
  const duration = lowSpec ? 0.25 : 0.45
  return (
    <section id="projects" className="relative z-10 mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl sm:text-3xl font-semibold">Featured Projects</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((p, idx) => (
          <motion.article
            key={p.id}
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration, delay: idx * 0.05, ease: "easeOut" }}
            className="glass-panel p-0 overflow-hidden hover:bg-white/15 transition"
          >
            <div className="relative aspect-[16/9] w-full">
              <Image src={p.img} alt={p.title} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-medium">{p.title}</h3>
              <p className="mt-1 text-sm opacity-80">{p.desc}</p>
            </div>
            <div className="px-4 pb-4 flex flex-wrap gap-2 text-sm">
              {p.href && (
                <a className="px-3 py-1 rounded-full border border-white/30 hover:bg-white/10 transition" href={p.href}>
                  View
                </a>
              )}
              {p.live && (
                <a className="px-3 py-1 rounded-full border border-white/30 hover:bg-white/10 transition" href={p.live} target="_blank" rel="noreferrer">
                  Live
                </a>
              )}
              {p.github && (
                <a className="px-3 py-1 rounded-full border border-white/30 hover:bg-white/10 transition" href={p.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}


