"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Suspense, useRef } from "react"
import { Bloom, EffectComposer } from "@react-three/postprocessing"
import type { Mesh } from "three"
import { usePerformance } from "@/components/PerformanceProvider"

export default function ThreeBackground() {
  const { lowSpec, dpr, reducedMotion } = usePerformance()
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden>
      <Canvas
        dpr={dpr}
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: !lowSpec }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={lowSpec ? 0.8 : 1} />
        <Suspense fallback={null}>
          {!reducedMotion && <SpinningIcosahedron speed={lowSpec ? 0.08 : 0.2} />}
          {!lowSpec && !reducedMotion && <Effects />}
        </Suspense>
      </Canvas>
    </div>
  )
}

function SpinningIcosahedron({ speed = 0.2 }: { speed?: number }) {
  const meshRef = useRef<Mesh | null>(null)
  useFrame((_, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y += delta * speed
    meshRef.current.rotation.x += delta * (speed * 0.5)
  })
  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <icosahedronGeometry args={[1.6, 0]} />
      <meshStandardMaterial
        color="#7c3aed"
        metalness={0.35}
        roughness={0.25}
        transparent
        opacity={0.9}
      />
    </mesh>
  )
}

function Effects() {
  return (
    <EffectComposer>
      <Bloom intensity={0.6} luminanceThreshold={0.2} luminanceSmoothing={0.025} />
    </EffectComposer>
  )
}


