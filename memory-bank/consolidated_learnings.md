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
