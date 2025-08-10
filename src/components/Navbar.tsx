"use client"

import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react"
import { motion, useReducedMotion } from "framer-motion"

const LINKS = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
]

export default function Navbar() {
  const [active, setActive] = useState<string>("home")
  const reduce = useReducedMotion()

  useSectionObserver(setActive)

  const style = useMemo(() => {
    type NavVars = CSSProperties & Record<'--navbar-blur' | '--navbar-alpha' | '--navbar-border' | '--navbar-shadow', string>
    const vars: NavVars = {
      '--navbar-blur': '16px',
      '--navbar-alpha': 'rgba(28,31,38,0.72)',
      '--navbar-border': 'rgba(255,255,255,0.20)',
      '--navbar-shadow': '0 2px 8px 0 rgba(0,0,0,0.12)'
    }
    return vars
  }, [])

  return (
    <nav
      className="sticky top-0 z-50 w-full border-b shadow-[var(--navbar-shadow)] bg-[color:var(--navbar-alpha)] backdrop-blur-[var(--navbar-blur)] border-[color:var(--navbar-border)]"
      style={style}
      aria-label="Primary"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="font-semibold tracking-tight">Portfolio</div>
        <ul className="relative flex items-center gap-4 text-sm">
          {LINKS.map((link) => (
            <li key={link.id} className="relative">
              <a
                href={`#${link.id}`}
                className="relative z-10 px-2 py-1 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300/80"
                aria-current={active === link.id ? "page" : undefined}
              >
                {link.label}
              </a>
              {active === link.id && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute left-1 right-1 -bottom-[2px] h-[3px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600"
                  transition={reduce ? { type: false } : { type: "spring", stiffness: 380, damping: 30, mass: 0.6 }}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

function useSectionObserver(setActive: (id: string) => void) {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'))
    if (!sections.length) return

    const isMobile = window.innerWidth < 768
    const threshold = isMobile ? 0.5 : 0.7
    const rootMargin = isMobile ? '0px 0px -40% 0px' : '0px 0px -30% 0px'

    observerRef.current?.disconnect()
    observerRef.current = new IntersectionObserver((entries) => {
      // Choose the most visible intersecting entry
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => (b.intersectionRatio - a.intersectionRatio))
      if (visible[0]) {
        const id = visible[0].target.getAttribute('id') || 'home'
        setActive(id)
      }
    }, { threshold, rootMargin })

    sections.forEach((sec) => observerRef.current?.observe(sec))
    return () => observerRef.current?.disconnect()
  }, [setActive])
}


