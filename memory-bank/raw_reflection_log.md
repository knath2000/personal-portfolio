---
Date: 2025-08-11
TaskRef: "Hash sync + motion variants + image priority"

Learnings:
- Use IntersectionObserver for section tracking and history.replaceState to update the URL hash without adding history entries or forcing scroll jumps.
- Hook usage: call useReducedMotion() once per component and reference its value in motion props; avoid calling hooks inline in props repeatedly.
- For LCP images, set both priority and fetchPriority="high" to improve discovery; keep sizes accurate.

Difficulties:
- ESLint error 'motion is not defined' after refactor; resolved by importing motion/useReducedMotion.
- Ensured hash/back-forward syncing doesn’t fight IntersectionObserver by only replacing state when active changes.

Successes:
- Clean build after changes with green lint.
- Smooth URL hash sync and back/forward navigation now reflected in active nav state.

Improvements_Identified_For_Consolidation:
- Pattern: Section tracking + URL hash sync with replaceState and hashchange listener.
- Pattern: Motion variants gated by useReducedMotion with viewport once and small translate values.
---
Date: 2025-08-09
TaskRef: "Next.js 15 portfolio setup with R3F, glassmorphism, low-spec mode, pnpm migration"

Learnings:
- framer-motion-3d shows peer warning vs R3F v9; keep usage minimal or prefer motion on DOM.
- Next 15 Server Components disallow ssr:false dynamic in page; use client components directly.
- detect-gpu typings: call getGPUTier() without options; tier.tier can be number.

Difficulties:
- Permission error with corepack symlink; used npm global prefix for pnpm.
- Type errors for three typings resolved via @types/three.

Successes:
- Clean build with low-spec toggles and reduced motion handling.
- Glass hero + 3D background render and compile.

Improvements_Identified_For_Consolidation:
- Pattern: PerformanceProvider with DPR cap + reduced motion + GPU tier + localStorage.
- Build note: Avoid dynamic(..., { ssr:false }) in Server Components.
---
