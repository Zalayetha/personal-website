# 0001 - Centralized Portfolio Data Model

## Product Decision

All portfolio showcase items, experiences, publications, blog post metadata, and profile information are maintained in a centralized data model (`src/data/portfolio.ts`) rather than distributed across multiple ad-hoc page files or external CMS.

Key user-facing behavior:

- Home page highlights selected featured projects, latest articles, and core competencies.
- Dedicated routes (`/projects`, `/blog`, `/about`, `/services`) dynamically render full lists and detail views from this centralized schema.

## Notes

- Simplifies content updates for personal maintenance without requiring database migrations or API keys.
- Future roadmap: Support Markdown / MDX content collections in Astro if blog posts exceed single-file content readability.
- Keep static assets referenced by items inside `public/assets/`.
