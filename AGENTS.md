<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Rules: studying in DANAVE

These rules are persistent guidance for coding agents working in this repository.

## Product context

- Product name: studying in DANAVE.
- Audience: children 7 to 12 years old from DANAVE foundation.
- Purpose: educational web platform to help children discover didactic YouTube content in English.
- Legal/ethics note in UI: clearly state this website is for educational purposes.

## Language and content

- All user-facing text must be in English.
- Keep text simple for A1/A2 level learners.
- Favor short sentences, clear verbs, and friendly tone.

## Architecture constraints

- Use Hexagonal Architecture + Vertical Slice.
- Organize by feature first.
- Each feature should contain: `domain`, `use-cases`, `adapters`, `helpers`.
- Keep domain logic isolated from UI frameworks.
- Use dependency inversion between use cases and adapters.

### Recommended feature shape

```txt
features/
	<feature-name>/
		domain/
		use-cases/
		adapters/
		helpers/
```

## UI/UX constraints

- UI components must come from shadcn/ui via its CLI and docs: https://ui.shadcn.com/docs/components
- Visual direction: primarily white with green, medium green, and yellow accents.
- Experience should be engaging for children, including tasteful animations and rich visuals.
- Preserve accessibility (keyboard support, readable contrast, semantic HTML).

## Functional scope baseline

- Include a search experience.
- Include a YouTube video listing area.
- Include a section explaining project motivation.
- Include a section listing learning games in English.

## Code quality rules

- Target max 150 lines per code file.
- If a file approaches the limit, split it into smaller modules.
- Prefer simple, composable functions and small components.
- Add tests for critical domain/use-case behavior.
