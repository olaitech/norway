# Bugs And Cleanup

## How To Maintain This Log

- Keep entries narrowly scoped and verifiable.
- Record whether a fix is pending, present in the working tree, verified or
  complete in the main branch.
- Do not assume an uncommitted local fix has been delivered.
- Link follow-up work to a relevant documentation or content objective where
  useful.

## Known Cleanup Items

| Area | Issue / task | Status to verify | Acceptance check |
| --- | --- | --- | --- |
| React rendering | Duplicate child key warning for duplicated `/routes` links/items | A working-tree correction may exist; verify before closing | No duplicate key warning in browser console on affected view |
| Image performance | Logo image may trigger a Next/Image LCP warning without an appropriate eager/preload strategy | A working-tree correction may exist; verify with installed Next.js API guidance | No logo LCP warning on applicable above-the-fold page |
| Styling/build output | Review Tailwind/CSS warnings | Pending review | Lint/build/browser console show no actionable style warnings |
| Map presentation | Improve map page using a real map image | Image-based arrival-map work is represented locally; verify visually before marking delivered | Real map remains legible on desktop/mobile and functionality remains intact |
| Map presentation | Remove abstract decorative map visuals from the arrival-map concept | Verify against delivered branch | No fake coastline base substitutes the real map image |
| Content | Continue building SEO-friendly, useful travel content pages | Ongoing | Pages meet content and metadata criteria in `seo-pages.md` |

## Content And Text Quality Checks

When touching visible destination or map copy, search for:

- Escaped or incorrectly rendered Norwegian characters.
- Placeholder descriptions that no longer match page quality.
- Internal links pointing to non-canonical or unimplemented planned paths.
- Route titles or metadata that imply detail not yet supported by the page.

Required visible spellings include:

- `Bodø`
- `Tromsø`
- `Vesterålen`

## Technical Cleanup Candidates

These require deliberate review before any implementation:

- Replace default scaffold metadata with project-specific site metadata.
- Confirm a canonical URL plan for `/routes` versus
  `/norway-road-trip-routes`.
- Confirm a canonical URL plan for `/lofoten` versus
  `/lofoten-travel-guide`.
- Confirm media licensing and production optimization.
- Validate map/animation behavior under reduced-motion preferences.

## Issue Entry Template

```md
### Short issue title

- Area:
- Observed behavior:
- Desired behavior:
- Relevant route/component:
- Status:
- Verification performed:
- Files changed when fixed:
```

