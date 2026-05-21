# Copilot Instructions for studying in DANAVE

Follow these repository-specific rules on every task.

## Core principles

- Build with Hexagonal Architecture and Vertical Slice organization.
- Keep user-facing text in English at A1/A2 level.
- Prioritize child-friendly UX for ages 7-12.

## Feature-first structure

Use this shape for each feature:

```txt
features/
  <feature-name>/
    domain/
    use-cases/
    adapters/
    helpers/
```

Rules:

- `domain`: entities, value objects, and business rules.
- `use-cases`: application services and orchestration.
- `adapters`: infrastructure integrations (APIs, repositories, mappers).
- `helpers`: local utility functions only for that feature.

## UI and design

- Use shadcn/ui components imported via CLI and aligned with official docs: https://ui.shadcn.com/docs/components
- Main palette: white base + green + medium green + yellow.
- Design should feel playful, visual, and educational.
- Include accessible interactions and semantic structure.

## Product requirements baseline

- Search area for educational content.
- YouTube video list area.
- Motivation section explaining why the project exists.
- English games section for kids.
- Clear note that this website is for educational purposes.

## Code constraints

- Keep each code file under 150 lines.
- Split large files into smaller modules/components.
- Keep domain independent from framework details.
- Prefer small, testable functions.
