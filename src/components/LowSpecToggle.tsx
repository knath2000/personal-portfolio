"use client"

import { usePerformance } from "@/components/PerformanceProvider"

export default function LowSpecToggle() {
  const { lowSpec, setLowSpec } = usePerformance()
  return (
    <button
      type="button"
      onClick={() => setLowSpec(!lowSpec)}
      className="fixed bottom-4 right-4 z-20 rounded-full border border-white/30 bg-black/30 text-white backdrop-blur px-3 py-1 text-xs hover:bg-black/50"
      aria-pressed={lowSpec}
      aria-label="Toggle low-spec mode"
    >
      {lowSpec ? "Low-spec: On" : "Low-spec: Off"}
    </button>
  )
}


