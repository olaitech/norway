# Prompts Library

## How To Use This File

These are reusable prompts for future Codex/Copilot sessions. Adjust the
specific page or task, but preserve the project constraints. Before applying
any UI/code prompt, ask the agent to read:

- `AGENTS.md`
- `docs/project-brief.md`
- `docs/design-system.md`
- The task-relevant documentation file

## Add A New SEO Guide

```text
Read AGENTS.md and docs/project-brief.md, docs/design-system.md and
docs/seo-pages.md first.

Create the [PAGE TOPIC] page for the Norway travel website. Keep the established
dark cinematic Scandinavian aesthetic and use human, practical travel content.
Confirm the intended canonical route before editing navigation or links.

Include:
- metadata and a clear H1
- real relevant hero imagery using existing assets where appropriate
- practical seasonal/logistical guidance
- natural internal links to relevant map, route and destination pages
- proper Norwegian characters in visible copy

Do not introduce generic tourism filler, loud animation or unrelated
refactors. Run lint and build after implementation and report changed files.
```

## Expand A Destination Guide

```text
Read AGENTS.md, docs/project-brief.md, docs/design-system.md and
docs/content-roadmap.md.

Improve the [DESTINATION] destination guide with practical content on season,
arrival, pacing, quiet experiences and route connections. Preserve the current
visual composition unless a layout change is explicitly required. Keep copy
specific and calm, and link only to genuinely related planning pages.

Do not alter unrelated destinations or shared styling. Verify lint/build and
list the exact changed files.
```

## Add Or Refine A Journal Article

```text
Read docs/project-brief.md and docs/content-roadmap.md.

Create/refine a journal story about [SUBJECT]. The voice should feel like a
cinematic field note: observational, concise and grounded in place. Include a
small number of practical links back to planning pages where useful.

Avoid SEO-stuffed prose and avoid changing the archive design unless requested.
Use existing image/video assets responsibly and update docs/assets-log.md only
if adding a new asset.
```

## Improve The Map Experience

```text
Read AGENTS.md, docs/design-system.md, docs/site-structure.md and
docs/assets-log.md.

Improve the /map experience for [SPECIFIC GOAL]. Preserve existing functional
OpenStreetMap and Google Maps outbound planning links unless explicitly told
otherwise. Use real map imagery for cinematic presentation panels and avoid
abstract coastlines or decorative maps that imply false geography.

Keep animation calm and respect prefers-reduced-motion. Verify mobile layout,
lint and build. Report exact changed files.
```

## Review Visual Consistency

```text
Review the current UI against docs/design-system.md. Identify only concrete
issues: inconsistent typography, excessive visual effects, unreadable overlays,
broken spacing rhythm, poor map/image legibility, or motion/accessibility
problems.

Provide findings first with file references. Do not redesign or edit files
unless explicitly asked.
```

## Audit Content And SEO Gaps

```text
Read docs/seo-pages.md and docs/content-roadmap.md. Audit implemented routes
against target SEO topics, canonical URL needs, content depth, internal links,
metadata and visible Norwegian text encoding.

Return an ordered action list. Separate existing route facts from planned
pages. Do not implement changes unless requested.
```

## Bug Fix Prompt

```text
Fix only [EXACT BUG/WARNING]. Read AGENTS.md and inspect the smallest responsible
component first. Do not redesign, refactor unrelated files or change visible
copy/style unless it is necessary to resolve the bug. Run requested
verification and report exact changed files.
```

