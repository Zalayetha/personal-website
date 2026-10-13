# 0002 - Adopt Magic UI and Hybrid Island Architecture

## Status

accepted

## Context

To modernize the portfolio's visual design with fluid micro-interactions, spotlight effects, and ambient backgrounds without sacrificing performance or altering existing content, we needed an established UI component library compatible with Astro 6 and Tailwind CSS v4.

## Decision

We adopted **Magic UI** components using a hybrid Astro Island architecture:

1. **React Integration (`@astrojs/react`)**:
   - Integrated React 19 and Motion for components requiring client-side interactivity and mouse tracking.
   - Pinned `@astrojs/react` to `v6.0.6` and `@vitejs/plugin-react` to `v5.2.0` with Vite `^7.3.7` workspace overrides to maintain compatibility with Astro's dev server.
2. **Selective Hydration (`client:visible` / `client:load`)**:
   - Interactive primitives (`MagicCard`, `ShimmerButton`, `BorderBeam`, `Ripple`) hydrate only when scrolled into the viewport.
3. **Pure-CSS & SVG Primitives**:
   - Backgrounds (`DotPattern`, `GridPattern`) are lightweight SVGs rendering with 0 KB client JavaScript.
   - Created a zero-JS Astro-native [`Marquee.astro`](../../src/components/magicui/Marquee.astro) utilizing hardware-accelerated CSS `@keyframes` to avoid slot cloning issues and client hydration overhead.
4. **Tailwind CSS v4 `@theme` Integration**:
   - Extended animation tokens (`shimmer`, `border-beam`, `marquee-scroll`, `ripple`, `pulse-slow`) directly inside `src/styles/styles.css`.

## Consequences

### Positive

- Modern visual aesthetic (spotlight hover cards, ambient grids, glowing borders, shimmer CTAs).
- High performance (zero JavaScript overhead for static and ticker elements).
- Full separation of content from styling: all portfolio copy in `src/data/portfolio.ts` remains intact.

### Negative / Trade-offs

- Introduces React, Motion, and Lucide React runtime dependencies for interactive islands.
- Requires defining animation keyframes in CSS `@theme` rather than traditional `tailwind.config.js`.

## References / Superseded By

- [0001 - Centralized Portfolio Data Model](../product/0001-centralized-portfolio-data.md)
