# Tech Context

Stack: Next.js 15.4.6, React 19.1, TypeScript 5, Tailwind v4, R3F, drei, postprocessing, framer-motion.
Package manager: pnpm@10.14.0
Node: v22.18.0
Dev commands: pnpm dev | pnpm build | pnpm start
Notes: Enable webpackMemoryOptimizations in next.config.ts; images.formats ['avif','webp'] and cache headers for static assets configured; Query Provider (TanStack) added; Server Actions used for contact form.

Repo & Branch: origin -> https://github.com/knath2000/personal-portfolio.git (main)
Deploy: Vercel auto-deploys on push to main; monitor via Vercel dashboard and check Vercel Analytics. Validate performance with Lighthouse on the live URL.
Env: Optional GITHUB_TOKEN for /api/github to raise rate limits; set as an environment variable in Vercel.
