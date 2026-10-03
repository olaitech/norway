# Destination-system audit and implementation plans

Prepared 2026-10-04 using `.agents/skills/improve/SKILL.md` against commit `5260391`, branch `codex/step-6-destination-components`.

Audit + plan only. No implementation is authorized by these files. No source changes, installations, commits, pushes, merges, or branch changes were performed. The user explicitly requested a prioritized plan, so the plans below cover the highest-value confirmed destination findings without an additional selection round.

## Executive summary

The four destination compositions are a sound editorial foundation. Preserve their identities and authored section order. They are not yet a fully scalable content system: repeated chrome and independently maintained planning facts/dates already drift.

No P0 page failure was observed. Confirmed P1 defects: Tromso duplicate React key, inaccessible inactive Lofoten panels, and Helgeland narrow-screen overflow. A separate P1 dependency triage is warranted for the Windows development environment. Do not infer production compromise from dependency warnings.

Full evidence and the deliberately deferred backlog: [Audit report](destination-audit.md).

## Execution order and status

| Plan | Title | Priority | Effort | Depends on | Status |
|---|---|---|---|---|---|
| 001 | Remove duplicate related destinations and add a regression check | P1 | S | None | TODO |
| 002 | Correct compass accessibility and Helgeland reflow | P1 | M | None; execute after 001 for review simplicity | TODO |
| 003 | Correct destination image source sizing | P2 | S–M | 002 establishes final Helgeland slot geometry | TODO |
| 004 | Align planning facts and freshness metadata | P2 | M | Confirm editorial dates and summaries first | TODO |

In parallel with prioritization, obtain a separate dependency/security maintenance decision for finding F04; no package installation or upgrade is authorized by this audit. Follow 001–004 with narrow named-navigation/section-intro extraction, then investigate reveal hydration. Do not implement commercial features.

## Closing the loop

Plans are TODO, not approved implementations. Before executing, compare in-scope files with `5260391`; stop on unexplained drift. Keep the current branch and do not commit/push unless separately authorized. After execution, record changed files and exact verification results. A reviewer must inspect the diff, rerun acceptance gates, and check screenshots/accessibility evidence before marking DONE. Two unsuccessful repair/review rounds means BLOCKED with a reason; do not broaden scope silently. Reconcile stale findings rather than duplicating plans. No issues or PRs were created.

## Considered and rejected

- A build/lint pass proves runtime key uniqueness: rejected; browser reproduced a warning despite passing static checks.
- Senja has the same duplicate React key: rejected; its composite key is unique. It does have redundant cards.
- Rewrite every destination into one generic renderer: rejected; would erase approved destination-specific composition.
- Introduce a CMS, affiliate widget or booking layer now: deferred; no demonstrated requirement.
- Missing FAQPage is a P1 SEO failure: rejected; optional consistency issue, not a ranking guarantee.
- Unnamed reveal sections automatically violate accessibility: rejected; no such blanket claim.
- Raw image file size equals browser download size: rejected; Next image optimization and candidate selection intervene.
- Sitemap legacy redirects and public-only llms files are new bugs: rejected; documented intentional configuration.
- All dependency advisories prove exploitable production paths: rejected; assess prerequisites and hosting separately.

## Git state

HEAD remains `5260391`; branch remains `codex/step-6-destination-components`. Source tree is unchanged. Audit deliverables add only the untracked `plans/` directory; the full working tree is therefore not clean until those documents are handled by the user.
