"use client"

import { useQuery } from "@tanstack/react-query"

export function useGithubRepo(owner: string, repo: string) {
  return useQuery({
    queryKey: ["github-repo", owner, repo],
    queryFn: async () => {
      const res = await fetch(`/api/github?owner=${owner}&repo=${repo}`)
      if (!res.ok) throw new Error("github api error")
      return (await res.json()) as { stars: number | null; forks: number | null }
    },
    enabled: Boolean(owner && repo),
    staleTime: 60_000,
    refetchInterval: 60_000,
  })
}


