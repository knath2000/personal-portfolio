# Active Context

Current focus:
- Implemented glass hero and animated 3D background.
- Added PerformanceProvider with low-spec mode, DPR cap, reduced-motion.
- Added LowSpecToggle; persisted preference.
- Implemented Liquid Glass sticky navbar with animated underline and scroll tracking.
- Added Projects, About, Contact sections; applied animated gradient backdrop and glass tokens.

Next steps:
- Code-split heavier sections when adding gallery/sections.
- Add Framer Motion entrance transitions w/ reduced-motion guards.
- Optimize images via next/image and proper sizes.
- Add active route highlighting for URL hash changes; smooth scroll.
- Consider WebGPU detection & fallback strategy later.

Decisions:
- Default to WebGL; consider WebGPU later with runtime detection and fallback.
- Keep effects minimal on low-spec (no bloom, slower rotation).
 - Use CSS variables for Liquid Glass tokens and animated gradient with reduced-motion and contrast fallbacks.
