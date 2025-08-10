export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const owner = searchParams.get("owner")
  const repo = searchParams.get("repo")

  if (!owner || !repo) {
    return new Response(JSON.stringify({ error: "Missing owner or repo" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    })
  }

  const token = process.env.GITHUB_TOKEN
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": "next-portfolio",
  }
  if (token) headers.Authorization = `Bearer ${token}`

  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
    headers,
    // Avoid Next caching the upstream; we control via response headers below
    cache: "no-store",
  })
  if (!res.ok) {
    return new Response(JSON.stringify({ error: "Upstream error" }), {
      status: res.status,
      headers: { "Content-Type": "application/json" },
    })
  }
  const data = await res.json()
  const stars = data?.stargazers_count ?? null
  const forks = data?.forks_count ?? null

  return new Response(JSON.stringify({ stars, forks }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=60, stale-while-revalidate=300",
    },
  })
}


