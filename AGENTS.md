# Repository Guidelines

## Project Structure & Module Organization

This is an Astro personal portfolio site. Page routes live in `src/pages/`, with dynamic routes in `src/pages/blog/[slug].astro` and `src/pages/projects/[slug].astro`. Reusable UI is split between `src/components/layout/`, `src/components/sections/`, and `src/components/ui/`. Portfolio, blog, project, and profile data are centralized in `src/data/portfolio.ts`; update this file before hardcoding content in components. Global styling is in `src/styles/styles.css`, while static assets, icons, blog images, and posters are served from `public/`.

## Build, Test, and Development Commands

- `npm install`: install dependencies from `package-lock.json`.
- `npm run dev`: start the local Astro development server.
- `npm run build`: create a production build and catch Astro/TypeScript integration issues.
- `npm run preview`: preview the production build locally.
- `npm run lint`: run ESLint across the repository.

Run `npm run lint` and `npm run build` before opening a pull request.

## Coding Style & Naming Conventions

Use TypeScript and Astro conventions already present in the project. Components are PascalCase, for example `ProjectCard.astro`; route files use lowercase names and Astro dynamic segment syntax. Keep interfaces and shared content models in `src/data/portfolio.ts`. Existing files use 4-space indentation in `.astro` and `.css`, double quotes in TypeScript/JavaScript, and semicolons in TypeScript. Prefer Tailwind utility classes for component styling and reserve `src/styles/styles.css` for global imports, theme tokens, and base rules.

## Testing Guidelines

There is no dedicated test framework configured yet. Treat `npm run lint` and `npm run build` as required checks for every change. For content-only edits, verify the affected page in `npm run dev`. If future changes add interactive client-side logic, add focused tests near the changed module and introduce an `npm test` script rather than relying only on manual browser checks.

## Commit & Pull Request Guidelines

Recent history uses short, imperative commits such as `fix: remove download cv`, plus merge commits from development branches. Prefer concise Conventional Commit-style messages, for example `fix: correct project link` or `feat: add blog detail page`.

Pull requests should include a brief summary, validation commands run, and screenshots for visible UI changes. Link related issues when available. Keep PRs focused: separate content updates, design changes, and infrastructure changes unless they are part of the same user-facing change.

## Security & Configuration Tips

Do not commit secrets or local environment files. Static assets in `public/` are publicly served, so avoid placing private documents there. Check `wrangler.toml` before changing deployment behavior.
