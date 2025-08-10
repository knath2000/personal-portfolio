"use client"

import dynamic from "next/dynamic"

const ThreeBackground = dynamic(() => import("@/components/ThreeBackground"), {
  ssr: false,
  loading: () => null,
})

export default function Background3DClient() {
  return <ThreeBackground />
}


