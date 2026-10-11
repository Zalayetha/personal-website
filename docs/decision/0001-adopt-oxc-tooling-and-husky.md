# 0001 - Adopt Oxlint, Oxfmt, and Husky Pre-commit Hooks

## Status

accepted

## Context

As the project evolves, maintaining code quality, consistent formatting, and preventing broken builds requires automated checks. Traditional ESLint and Prettier setups can be slower, while the Oxidation Compiler (Oxc) suite provides fast Rust-based linting and formatting.

## Decision

We adopted:

1. **oxlint** for fast code linting across JavaScript and TypeScript.
2. **oxfmt** for automated code formatting.
3. **husky** with a `pre-commit` hook to automatically enforce:
   - `npm run lint` (`oxlint`)
   - `npm run typecheck` (`astro check`)
   - `npm run build` (`astro build`)

## Consequences

### Positive

- Sub-second linting and formatting execution time.
- Guarantees broken builds and type errors do not get committed to git.
- Lightweight configuration files (`.oxlintrc.json`, `.oxfmtrc.json`).

### Negative / Trade-offs

- Pre-commit builds take a couple of seconds before every commit.
- Requires team members to run `npm run prepare` (or have npm install trigger it) for git hooks to be active.

## References / Superseded By

- N/A
