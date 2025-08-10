"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import { usePerformance } from "@/components/PerformanceProvider"

const ThreeBackground = dynamic(() => import("@/components/ThreeBackground"), {
  ssr: false,
  loading: () => null,
})

export default function Background3DClient() {
  const { lowSpec, reducedMotion } = usePerformance()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (lowSpec || reducedMotion) return // skip entirely on low-spec/reduced-motion
    const schedule = (cb: () => void): number | undefined =>
      // Prefer idle callback when available, fallback to timeout
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      (window.requestIdleCallback ? window.requestIdleCallback(cb, { timeout: 2000 }) : window.setTimeout(cb, 1500))
    const id = schedule(() => setMounted(true))
    return () => {
      if (typeof id === "number") {
        if (id > 0) window.clearTimeout(id)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (window.cancelIdleCallback) window.cancelIdleCallback(id)
      }
    }
  }, [lowSpec, reducedMotion])

  if (!mounted) return null
  return <ThreeBackground />
}


