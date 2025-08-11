"use client"

import Link from "next/link"
import Image from "next/image"

export default function YtLyricsFrontPage() {
  return (
    <div className="relative min-h-screen p-6">
      <header className="mx-auto max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">YT Lyrics</h1>
        <p className="mt-2 opacity-85">YouTube lyrics viewer with search and synced scrolling.</p>
        <div className="mt-4 flex gap-3 text-sm">
          <a className="px-4 py-2 rounded-full border border-white/30 hover:bg-white/10 transition" href="https://yt-lyrics-front.vercel.app" target="_blank" rel="noreferrer">Live</a>
          <a className="px-4 py-2 rounded-full border border-white/30 hover:bg-white/10 transition" href="https://github.com/knath2000/yt-lyrics-front" target="_blank" rel="noreferrer">GitHub</a>
          <Link className="px-4 py-2 rounded-full border border-white/30 hover:bg-white/10 transition" href="/">Back</Link>
        </div>
      </header>

      <section className="mx-auto mt-8 max-w-4xl glass-panel p-6">
        <h2 className="text-xl font-medium">Overview</h2>
        <p className="mt-2 text-sm opacity-90">
          A lightweight front-end to search for songs and view synchronized lyrics alongside YouTube playback. Designed with performance and accessibility in mind.
        </p>
      </section>

      <section className="mx-auto mt-8 max-w-4xl glass-panel p-6">
        <h2 className="text-xl font-medium">Stack</h2>
        <ul className="mt-2 list-disc pl-5 text-sm opacity-90">
          <li>Frontend: Next.js / React (TypeScript)</li>
          <li>Styling: Tailwind CSS</li>
          <li>APIs: YouTube playback and lyrics provider (server/proxy in backend)</li>
          <li>Deploy: Vercel</li>
        </ul>
      </section>

      <section className="mx-auto mt-8 max-w-4xl grid gap-4 sm:grid-cols-2">
        {["/window.svg", "/globe.svg"].map((src, i) => (
          <div key={i} className="glass-panel p-4">
            <div className="relative h-48 w-full">
              <Image src={src} alt="YT Lyrics screenshot placeholder" fill sizes="(min-width: 640px) 50vw, 100vw" className="object-contain" priority={i === 0} />
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}


