# Active Context

Current focus:
- Implemented glass hero and animated 3D background.
- Added PerformanceProvider with low-spec mode, DPR cap, reduced-motion.
- Added LowSpecToggle; persisted preference.
- Implemented Liquid Glass sticky navbar with animated underline and scroll tracking.
- Added Projects, About, Contact sections; applied animated gradient backdrop and glass tokens.

Next steps:
- Verify Vercel deployment performance metrics (Vercel Analytics, Lighthouse).
- Ensure env var GITHUB_TOKEN is set in Vercel for /api/github (optional for higher rate limits).
- Code-split heavier sections when adding gallery/sections.
- Optimize images via next/image and proper sizes.
- Consider WebGPU detection & fallback strategy later.
 - Address remaining "Reduce unused JavaScript (~125 KiB)" and "Legacy JS (~12 KiB)" by auditing deps and modernizing browserslist targets.

Completed this session:
- Added motion variants to About/Contact with reduced-motion guards.
- Implemented URL hash sync + back/forward handling; smooth scrolling already enabled in CSS.
- Improved image LCP with fetchPriority for primary visuals.
- Pushed latest changes to GitHub (origin/main); Vercel auto-deploy triggered for main.
 - Removed global QueryProvider from landing route to cut client JS; wrapped only project detail page.
 - Replaced framer-motion underline/hero entrance with lightweight CSS to reduce main-thread work.
 - Split Projects grid into lazy `ProjectsContent` loaded on viewport via IntersectionObserver.
 - Enabled `experimental.optimizeCss` and added `critters` for critical CSS inlining.
 - Desktop Lighthouse (live deploy): Performance 97, Accessibility 100, Best Practices 100, SEO 100.
   - FCP 0.2s, LCP 0.8s, TBT 140ms, CLS 0, Speed Index 1.0s.

Decisions:
- Default to WebGL; consider WebGPU later with runtime detection and fallback.
- Keep effects minimal on low-spec (no bloom, slower rotation).
 - Use CSS variables for Liquid Glass tokens and animated gradient with reduced-motion and contrast fallbacks.
