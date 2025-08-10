"use client"

import Form from "next/form"
import { useState } from "react"

export default function ContactForm({ action }: { action: (formData: FormData) => Promise<{ ok: boolean; error?: string }> }) {
  const [status, setStatus] = useState<null | { ok: boolean; error?: string }>(null)
  return (
    <Form action={async (fd) => setStatus(await action(fd))} className="glass-panel p-4">
      <div className="grid gap-3">
        <label className="text-sm">
          Name
          <input name="name" className="mt-1 w-full rounded-md bg-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-300/60" required />
        </label>
        <label className="text-sm">
          Email
          <input name="email" type="email" className="mt-1 w-full rounded-md bg-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-300/60" required />
        </label>
        {/* Honeypot */}
        <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
        <label className="text-sm">
          Message
          <textarea name="message" rows={5} className="mt-1 w-full rounded-md bg-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-300/60" required />
        </label>
        <div className="flex gap-3">
          <button type="submit" className="px-4 py-2 rounded-full border border-white/30 hover:bg-white/10 transition">Send</button>
        </div>
        {status && (
          <p className={`text-sm ${status.ok ? "text-emerald-300" : "text-rose-300"}`}>
            {status.ok ? "Thanks! I'll be in touch." : status.error || "Something went wrong."}
          </p>
        )}
      </div>
    </Form>
  )
}


