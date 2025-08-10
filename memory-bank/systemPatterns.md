# System Patterns

- App Router (Next.js 15): Server components by default, client for R3F and motion.
- 3D: @react-three/fiber + drei + postprocessing (Bloom), WebGL default.
- Performance: detect-gpu, DPR cap, reduced motion, toggleable low-spec mode.
- Styling: Tailwind v4 tokens; glass via bg-white/10 + backdrop-blur + light borders + gradient backdrop.
- Liquid Glass tokens: CSS variables for bg alpha (0.15), border (0.20–0.30), blur (16px), shadow (0 8px 32px rgba(31,38,135,0.20)); animated gradient with reduced-motion fallback.
- Bundling: dynamic imports for heavy client components when needed.
