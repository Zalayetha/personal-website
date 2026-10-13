# 0002 - Magic UI Design Transformation

## Product Decision

Transform the visual experience of the personal website across all pages using Magic UI components while strictly preserving existing portfolio content, copy, and page hierarchy.

Key user-facing transformations:

1. **Global Navigation & Layout**:
   - Frosted glassmorphism header (`backdrop-blur-md`) with refined interactive logo and hover feedback.
   - Modernized footer with subtle frosted borders.
2. **Hero Sections**:
   - Ambient SVG `DotPattern` with radial vignette mask on Home Hero, and `GridPattern` on About Hero.
   - Profile avatar framed with an animated `BorderBeam` laser glow.
   - Primary action buttons upgraded to interactive `ShimmerButton` components.
3. **Projects Showcase**:
   - All project cards upgraded to `MagicCard` featuring dynamic cursor-following spotlight illumination.
   - Project detail views enhanced with `BorderBeam` framed screenshots and Bento spec cards.
4. **Skills Experience**:
   - Continuous dual-track `Marquee` ticker for Technical and Soft skills with hover pause, accompanied by categorized skill cards.
5. **Contact & Call-to-Actions**:
   - Ambient concentric `Ripple` background effect paired with a prominent `ShimmerButton` CTA.

## Notes

- Content integrity: All data in `src/data/portfolio.ts` is preserved with zero modifications to personal text, dates, or URLs.
- Developed on dedicated branch `feat/magic-ui-redesign`.
- Future roadmap: Add dark mode toggle support leveraging CSS variables and Magic UI dark theme gradients.
