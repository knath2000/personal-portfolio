# Progress

- pnpm migration complete; packageManager set.
- 3D background and glass hero implemented.
- Low-spec mode, DPR cap, reduced-motion support added.
- Build verified.
- Liquid Glass sticky navbar with animated underline & scroll tracking added.
- Projects, About, Contact sections added; animated gradient backdrop applied.
- Luminous Verses project card + detail page wired with real screenshots and live GitHub stats.
- Query Provider (TanStack) and /api/github proxy route added.
- Contact form implemented with Next.js Server Action and honeypot.
- Perf tweaks: idle-load 3D background on requestIdleCallback; image formats + long-term cache headers; priority LCP images; smooth scroll padding.
- Motion variants added for About/Contact with reduced-motion guards.
- URL hash sync implemented with back/forward handling; updates hash on section changes without stacking history.
- Image fetchPriority set for lead images to improve LCP.
 - Pushed latest changes to GitHub; Vercel deployment triggered for main.
 - Replaced framer-motion hero/nav animations with CSS; removed global QueryProvider from layout.
 - Split Projects grid into lazy-loaded component with viewport gating; kept R3F background idle/viewport gated.
 - Enabled experimental.optimizeCss and installed critters for critical CSS inlining.
 - New Lighthouse desktop (live): Performance 97, Accessibility 100, Best Practices 100, SEO 100 (FCP 0.2s, LCP 0.8s, TBT 140ms, CLS 0, SI 1.0s).

Pending:
- Verify Vercel performance metrics (Analytics) and run Lighthouse on live deploy.
- Add content sections and further image optimization (fine-tune sizes/alt text).
- Refine accessibility (keyboard focus outlines, landmarks, aria-current consistency).
- Code-split heavier future sections when gallery expands.
 - Reduce remaining unused JS (~125 KiB) and eliminate legacy JS (~12 KiB) via dependency audit and modern browserslist.
