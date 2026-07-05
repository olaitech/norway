<!-- BEGIN:project-agent-routing -->
# Agent guide for Trips Norway

This file is the first routing guide for Codex, Copilot, Claude and other coding agents working in this repository.

## Project basics

- This is a Next.js App Router project, not Vite.
- Do not implement Vite prerendering.
- Do not add react-helmet-async.
- Do not replace Next.js metadata handling.
- Keep changes small, scoped and easy to review.
- Do not redesign pages unless the task explicitly asks for design work.

## Next.js warning

This project may use a newer Next.js version than your training data. APIs, conventions and file structure may differ. Read the relevant guide in `node_modules/next/dist/docs/` before writing Next.js-specific code.

## Specialist agents

Use these files as specialist guidance when relevant. Do not copy their full contents into this file.

- `docs/agents/design-brand-guardian.md` — use before brand, mood, visual identity or tone changes.
- `docs/agents/engineering-code-reviewer.md` — use before reviewing, refactoring or validating code changes.
- `docs/agents/engineering-codebase-onboarding-engineer.md` — use when exploring unfamiliar parts of the codebase.
- `docs/agents/engineering-minimal-change-engineer.md` — use before any larger implementation to keep the patch small and safe.
- `docs/agents/marketing-aeo-foundations.md` — use before SEO, AEO, llms.txt, robots.txt, structured data or AI-discovery changes.
- `docs/agents/norway-ui-designer.md` — use before UI, layout, animation or component design changes.
- `docs/agents/norway-ux-researcher.md` — use before navigation, user journey, information architecture or planning-flow changes.
- `docs/agents/testing-accessibility-auditor.md` — use before accessibility, Lighthouse, keyboard, contrast or testing changes.

## Required reading by task type

Before SEO/AEO changes, read:

- `docs/agents/marketing-aeo-foundations.md`
- `docs/seo-pages.md`
- `docs/site-structure.md`

Before UI/design changes, read:

- `docs/project-brief.md`
- `docs/project-vision.md`
- `docs/design-system.md`
- `docs/agents/norway-ui-designer.md`
- `docs/agents/design-brand-guardian.md`

Before large code changes, read:

- `docs/agents/engineering-minimal-change-engineer.md`
- `docs/agents/engineering-code-reviewer.md`

## Current SEO/AEO foundation

The SEO/AEO foundation is already implemented. Do not redo it unless explicitly requested.

- Metadata, canonical URLs, Open Graph/Twitter metadata and JSON-LD are already implemented across core pages.
- `sitemap.xml` is generated from `app/sitemap.ts`.
- `app/robots.txt` is intentional and must not be reverted to `app/robots.ts`.
- `Content-Signal` in `robots.txt` is intentional.
- `public/llms.txt` and `public/llms-full.txt` should remain publicly available at `/llms.txt` and `/llms-full.txt`.
- A live crawlability check exists: `npm run check:crawlability:live`.

Recent validation:
- `npm run check:seo` passed.
- `npm run check:aeo` passed.
- `npm run check:crawlability:live` passed exact.

Observed PageSpeed desktop result:
- Performance: 99
- Accessibility: 93
- Best Practices: 100
- SEO: 100
- Agentic Browsing: 2/3

## Known warnings

- `/norway-road-trip-routes`, `/norway-itinerary-7-days` and `/norway-itinerary-10-days` may appear as sitemap warnings because they are redirect stubs, not standalone canonical content pages.
- Internal AEO checks may warn that `llms.txt` and `llms-full.txt` are only present in `public/`. That is intentional because they must be served from the site root.

## Route and canonical guidance

- `/routes` is the canonical route hub.
- `/norway-road-trip-routes` is a redirect/legacy alias unless explicitly changed.
- `/destinations/lofoten-islands` is the canonical Lofoten destination page.
- `/lofoten` and `/lofoten-travel-guide` are redirect/legacy aliases unless explicitly changed.
- `/norway-itinerary-7-days` and `/norway-itinerary-10-days` are redirect stubs, not completed standalone itinerary pages.

<!-- END:project-agent-routing -->
