# Consolidated Learnings

## Performance Profile Pattern
- Provide `PerformanceProvider` with:
  - GPU tier via `getGPUTier()` to infer low-spec
  - DPR cap: 1.25 for low-spec/reduced-motion, 2 max otherwise
  - `prefers-reduced-motion` detection
  - Persisted `lowSpecMode` in localStorage

## Next.js 15 App Router Notes
- Do not use `dynamic(..., { ssr:false })` in Server Components; import client components directly with "use client" inside them.
- Enable `experimental.webpackMemoryOptimizations` for lower memory use during builds.

## R3F + Effects in Low-spec
- Disable bloom and reduce animation speed on low-spec or reduced-motion.
- Set `gl.antialias` false in low-spec.

## Liquid Glass Navbar & Gradients
- Use sticky, backdrop-blurred navbar with semi-transparent dark alpha (≈0.72), subtle border (≈rgba(255,255,255,0.20)), and light shadow.
- Animated underline/pill with Framer Motion; disable animation for reduced-motion.
- IntersectionObserver thresholds: mobile ~0.5, desktop 0.6–0.7; rootMargin to bias toward current section.
- Animated gradients: conic/radial base, 6–12s animation, disable for reduced-motion.

## Tooling
- Use pnpm user-local prefix to avoid sudo; set `packageManager` in package.json for consistency.

## Lighthouse & Perf Tuning Patterns
- Idle-load heavy client features (R3F background) with `requestIdleCallback` and skip entirely on low-spec/reduced-motion.
- Prioritize LCP images with `next/image` `priority` and consider `fetchPriority="high"` to improve LCP discovery.
- Configure Next `images.formats` to include AVIF/WebP; set long-term cache headers for static assets.
- Use TanStack Query provider only where needed; keep server components for static shells to minimize client JS.

## Section Tracking & URL Hash Sync
- Track sections with IntersectionObserver (threshold ~0.5 mobile, 0.7 desktop). When active section changes, update URL with `history.replaceState(null, "", `#${active}`)` to avoid stacking history or triggering jumps. Listen for `hashchange` to reflect back/forward navigation in UI.

## Motion Variants (Reduced Motion Safe)
- Gate motion with `useReducedMotion()`. Use small translate/opacity variants and `viewport={{ once: true, amount: 0.3 }}` for in-view sections. Keep durations shorter on low-spec devices.

## Image LCP Priority
- For leading hero/project images, set `priority` and `fetchPriority="high"` with accurate `sizes` for better LCP.

## Deployment Workflow
- Use GitHub main branch auto-deployed to Vercel; pushing to main triggers build/deploy. Monitor via Vercel dashboard and validate performance with Vercel Analytics/Lighthouse.
