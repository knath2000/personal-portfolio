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
