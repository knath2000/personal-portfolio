"use server"

type ContactState = {
  ok: boolean
  error?: string
}

export async function submitContact(formData: FormData): Promise<ContactState> {
  const name = String(formData.get("name") || "").trim()
  const email = String(formData.get("email") || "").trim()
  const message = String(formData.get("message") || "").trim()
  const botField = String(formData.get("company") || "").trim() // honeypot

  if (botField) return { ok: true } // silently accept
  if (!name || !email || !message) return { ok: false, error: "Please fill in all fields." }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false, error: "Invalid email." }
  if (message.length < 10) return { ok: false, error: "Message is too short." }

  // TODO: integrate email/service here
  console.log("[contact]", { name, email, message: message.slice(0, 500) })
  return { ok: true }
}


