# Project Brief

Purpose: Build a highly animated, game-like personal portfolio with Next.js 15 and React 19, featuring sophisticated 3D visuals, modern gradients, and glassmorphism (iOS/macOS style) with a low-spec mode for older devices.

Success Criteria:
- Landing page with animated 3D background and glass hero loads smoothly on 2019 i5 MBP.
- Low-spec mode toggle persists; respects prefers-reduced-motion.
- Code-split heavy 3D and keep bundle reasonable.
- Clean builds and type checks.

Scope (initial):
- Home hero with glass card and animated R3F background.
- Performance profile (GPU detection, DPR cap, reduced motion handling).
- Basic navigation CTAs.

Non-Goals (for now):
- Full project gallery, blog, CMS integration.
- WebGPU-specific renderer (fallbacks rely on WebGL for compatibility).
