"use client"

import Link from "next/link"
import Image from "next/image"
import { usePerformance } from "@/components/PerformanceProvider"
import { motion, useReducedMotion } from "framer-motion"
import { useGithubRepo } from "@/hooks/useGithubRepo"

export default function LuminousVersesPage() {
  const { lowSpec } = usePerformance()
  const reduce = useReducedMotion()
  return (
    <div className="relative min-h-screen p-6">
      <header className="mx-auto max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Luminous Verses</h1>
        <p className="mt-2 opacity-85">Quran learning companion with Verse of the Day, audio recitation, chapter browser, and glass UI.</p>
        <RepoStats />
        <div className="mt-4 flex gap-3 text-sm">
          <a className="px-4 py-2 rounded-full border border-white/30 hover:bg-white/10 transition" href="https://luminous-verses.vercel.app" target="_blank" rel="noreferrer">Live</a>
          <a className="px-4 py-2 rounded-full border border-white/30 hover:bg-white/10 transition" href="https://github.com/knath2000/luminous-verses" target="_blank" rel="noreferrer">GitHub</a>
          <Link className="px-4 py-2 rounded-full border border-white/30 hover:bg-white/10 transition" href="/">Back</Link>
        </div>
      </header>

      <section className="mx-auto mt-8 max-w-4xl glass-panel p-6">
        <h2 className="text-xl font-medium">Stack</h2>
        <ul className="mt-2 list-disc pl-5 text-sm opacity-90">
          <li>Frontend: Next.js / React (TypeScript)</li>
          <li>Styling: Tailwind CSS with Liquid Glass tokens</li>
          <li>Audio/UX: verse playback and auto-scroll interaction</li>
          <li>Deploy: Vercel</li>
        </ul>
      </section>

      <motion.section
        initial={reduce ? false : { opacity: 0, y: 12 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: lowSpec ? 0.25 : 0.45, ease: "easeOut" }}
        className="mx-auto mt-8 max-w-4xl glass-panel p-6"
      >
        <h2 className="text-xl font-medium">Highlights</h2>
        <ul className="mt-2 list-disc pl-5 text-sm opacity-90">
          <li>Verse of the Day with recitation; tap card to play/pause</li>
          <li>Settings modal with autoplay, auto-scroll, translation & transliteration toggles</li>
          <li>Chapter (Surah) browser with search and detail reading view</li>
          <li>Animated gradient + glass UI with low-spec/reduced-motion safeguards</li>
        </ul>
      </motion.section>

      <section className="mx-auto mt-8 max-w-4xl grid gap-4 sm:grid-cols-2">
        {[
          { src: "/projects/luminous-verses/hero.jpg", alt: "Home and Verse of the Day" },
          { src: "/projects/luminous-verses/settings.jpg", alt: "Settings modal" },
          { src: "/projects/luminous-verses/surah-list.jpg", alt: "Surah list" },
          { src: "/projects/luminous-verses/read-view.jpg", alt: "Reading view" },
        ].map((s, i) => (
          <div key={i} className="glass-panel p-4">
            <div className="relative h-48 w-full">
              <Image src={s.src} alt={s.alt} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-contain" />
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

function RepoStats() {
  const { data, isLoading } = useGithubRepo("knath2000", "luminous-verses")
  if (isLoading || !data) return null
  return (
    <div className="mt-2 text-sm opacity-80">Stars: {data.stars ?? "N/A"} • Forks: {data.forks ?? "N/A"}</div>
  )
}


