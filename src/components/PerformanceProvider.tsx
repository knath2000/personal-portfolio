"use client"

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"

type PerformanceContextValue = {
  lowSpec: boolean
  setLowSpec: (v: boolean) => void
  reducedMotion: boolean
  dpr: number
}

const PerformanceContext = createContext<PerformanceContextValue | null>(null)

export function PerformanceProvider({ children }: { children: React.ReactNode }) {
  const [lowSpec, setLowSpecState] = useState<boolean>(false)
  const [reducedMotion, setReducedMotion] = useState<boolean>(false)
  const [dpr, setDpr] = useState<number>(1)

  // Read persisted preference
  useEffect(() => {
    try {
      const stored = localStorage.getItem("lowSpecMode")
      if (stored != null) setLowSpecState(stored === "true")
    } catch {}
  }, [])

  // Detect GPU tier and reduced motion
  useEffect(() => {
    let cancelled = false
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)")
    const onMotion = () => setReducedMotion(mql.matches)
    onMotion()
    mql.addEventListener?.("change", onMotion)

    ;(async () => {
      try {
        const { getGPUTier } = await import("detect-gpu")
        const tier = await getGPUTier()
        if (cancelled) return
        const numericTier = typeof tier.tier === "number" ? tier.tier : 0
        const isLow = numericTier < 2 // 0-3
        // If user hasn't set a preference yet, adopt detection
        const stored = localStorage.getItem("lowSpecMode")
        if (stored == null) setLowSpecState(isLow)
      } catch {
        // noop
      }
    })()

    return () => {
      cancelled = true
      mql.removeEventListener?.("change", onMotion)
    }
  }, [])

  // Compute DPR cap
  useEffect(() => {
    const next = Math.min(window.devicePixelRatio || 1, lowSpec || reducedMotion ? 1.25 : 2)
    setDpr(next)
  }, [lowSpec, reducedMotion])

  const setLowSpec = useCallback((v: boolean) => {
    setLowSpecState(v)
    try { localStorage.setItem("lowSpecMode", String(v)) } catch {}
  }, [])

  const value = useMemo<PerformanceContextValue>(() => ({ lowSpec, setLowSpec, reducedMotion, dpr }), [lowSpec, setLowSpec, reducedMotion, dpr])

  return <PerformanceContext.Provider value={value}>{children}</PerformanceContext.Provider>
}

export function usePerformance(): PerformanceContextValue {
  const ctx = useContext(PerformanceContext)
  if (!ctx) throw new Error("usePerformance must be used within PerformanceProvider")
  return ctx
}


