"use client"

import { motion, useReducedMotion } from "framer-motion"

export function About() {
  const reduce = useReducedMotion()
  return (
    <motion.section
      id="about"
      initial={reduce ? false : { opacity: 0, y: 12 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="relative z-10 mx-auto max-w-4xl px-6 py-16"
    >
      <h2 className="text-2xl sm:text-3xl font-semibold">About</h2>
      <p className="mt-3 opacity-80">
        I craft playful, performant web experiences with modern 3D, motion, and accessibility-first design.
        My focus is building responsive, polished UI that performs well even on older devices.
      </p>
    </motion.section>
  )
}

export function Contact() {
  const reduce = useReducedMotion()
  return (
    <motion.section
      id="contact"
      initial={reduce ? false : { opacity: 0, y: 12 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="relative z-10 mx-auto max-w-4xl px-6 py-16"
    >
      <h2 className="text-2xl sm:text-3xl font-semibold">Contact</h2>
      <p className="mt-3 opacity-80">Reach me via email at <a className="underline" href="mailto:hello@example.com">hello@example.com</a>.</p>
    </motion.section>
  )
}


