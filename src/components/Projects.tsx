"use client"

import dynamic from "next/dynamic"
import { useInView } from "react-intersection-observer"

const ProjectsContent = dynamic(() => import("./ProjectsContent"), {
  ssr: false,
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
})

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section ref={ref} id="projects" className="relative z-10 mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl sm:text-3xl font-semibold">Featured Projects</h2>
      {inView && <ProjectsContent />}
    </section>
  )
}


