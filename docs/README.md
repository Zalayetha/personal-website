# Project Documentation

Welcome to the documentation repository for the personal website. This directory tracks architecture/technical decisions and product design decisions.

---

## Directory Structure

```text
docs/
├── README.md
├── decision/
│   ├── 0000-template.md
│   ├── 0001-adopt-oxc-tooling-and-husky.md
│   └── 0002-adopt-magic-ui-and-hybrid-island-architecture.md
└── product/
    ├── 0000-template.md
    ├── 0001-centralized-portfolio-data.md
    └── 0002-magic-ui-design-transformation.md
```

---

## 1. Decision Records (`docs/decision/`)

Technical and architectural decisions are tracked as decision records using the naming convention:
`xxxx-meaningfulname.md` (e.g., `0001-adopt-oxc-tooling-and-husky.md`).

### Valid Statuses

Each decision record must have one of three statuses:

- **`accepted`**: The decision has been agreed upon and is currently active.
- **`superseeded`**: The decision has been replaced by a newer decision record (reference the replacement record).
- **`deprecated`**: The decision is no longer relevant or has been abandoned.

### Template

Refer to [`0000-template.md`](./decision/0000-template.md) to create new decision records.

### Index of Decision Records

| Number | Title                                                                                                             | Status     |
| :----- | :---------------------------------------------------------------------------------------------------------------- | :--------- |
| `0001` | [Adopt Oxlint, Oxfmt, and Husky Pre-commit Hooks](./decision/0001-adopt-oxc-tooling-and-husky.md)                 | `accepted` |
| `0002` | [Adopt Magic UI and Hybrid Island Architecture](./decision/0002-adopt-magic-ui-and-hybrid-island-architecture.md) | `accepted` |

---

## 2. Product Records (`docs/product/`)

Product and UX decisions are tracked in `docs/product/` using the naming convention:
`xxxx-meaningfulname.md` (e.g., `0001-centralized-portfolio-data.md`).

### Structure

Each product record includes:

- **Product Decision**: The product decision, rationale, user-facing behavior, and scope.
- **Notes**: Implementation notes, considerations, edge cases, open questions, or future roadmap items.

### Template

Refer to [`0000-template.md`](./product/0000-template.md) to create new product records.

### Index of Product Records

| Number | Title                                                                              |
| :----- | :--------------------------------------------------------------------------------- |
| `0001` | [Centralized Portfolio Data Model](./product/0001-centralized-portfolio-data.md)   |
| `0002` | [Magic UI Design Transformation](./product/0002-magic-ui-design-transformation.md) |
