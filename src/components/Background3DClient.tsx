"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import { usePerformance } from "@/components/PerformanceProvider"
import { useInView } from "react-intersection-observer"

const ThreeBackground = dynamic(() => import("@/components/ThreeBackground"), {
  ssr: false,
  loading: () => null,
})

export default function Background3DClient() {
  const { lowSpec, reducedMotion } = usePerformance()
  const [mounted, setMounted] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  useEffect(() => {
    if (lowSpec || reducedMotion || !inView) return
    const schedule = (cb: () => void): number | undefined =>
      window.requestIdleCallback ? window.requestIdleCallback(cb, { timeout: 2000 }) : window.setTimeout(cb, 1500)
    const id = schedule(() => setMounted(true))
    return () => {
      if (typeof id === "number") {
        if (id > 0) window.clearTimeout(id)
        if (window.cancelIdleCallback) window.cancelIdleCallback(id)
      }
    }
  }, [lowSpec, reducedMotion, inView])

  return (
    <div ref={ref} className="absolute inset-0 -z-10 pointer-events-none" aria-hidden>
      {mounted && <ThreeBackground />}
    </div>
  )
}


