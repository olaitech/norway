# Design System

## Design Direction

The brand is a quiet, cinematic portrait of Norway. UI should support
photography, cartography and editorial content without competing with them.

Keywords:

- Atmospheric.
- Nordic.
- Restrained.
- Tactile.
- Editorial.
- Landscape-first.

Avoid:

- Bright tourism colours.
- Dense card grids without breathing room.
- Cartoon map illustrations.
- Abrupt, playful or excessive motion.
- Generic SaaS or travel-booking visual language.

## Colour Language

The current interface uses dark near-black and navy surfaces with warm
off-white type, muted gold metadata and cool map accents.

| Purpose | Working reference | Use |
| --- | --- | --- |
| Deep background | `#050607`, `#05080b` | Page and cinematic section backgrounds |
| Dark map/panel surface | `#07100f`, `#080e15` | Elevated panels and image framing |
| Main text | `#f4efe2` | Titles and primary copy |
| Warm metadata accent | `#d8c9a7` | Eyebrows, route metadata, selective emphasis |
| Cool route accent | `#9ecad8` or muted teal equivalents | Ferry/road/map information |
| Borders | Low-opacity white | Quiet separation without strong boxes |

These are currently observed visual references, not a mandate to create new
global tokens. When implementing, prefer existing project classes and patterns
unless a deliberate tokenization task is approved.

## Typography

Current implementation loads Geist Sans and Geist Mono through `next/font`.
The experience also uses editorial serif headings in key visual components.

### Hierarchy

| Layer | Direction |
| --- | --- |
| Hero/display title | Large editorial serif, tight tracking, high atmosphere |
| Section title | Serif, spacious and calm, clear reading rhythm |
| Eyebrow/metadata | Small uppercase label, wide tracking, muted gold |
| Body copy | Light-weight sans, generous leading, readable contrast |
| Utility/route facts | Small sans or mono only where the information benefits from precision |

### Copy Styling Rules

- Use short, specific headlines.
- Allow generous space around titles and introductory copy.
- Keep metadata labels useful, not decorative filler.
- Preserve Norwegian spelling and characters in visible text.

## Layout Principles

- Use broad section spacing and controlled maximum widths.
- Favor asymmetrical two-column editorial layouts on desktop.
- Stack content cleanly on mobile with no horizontal overflow.
- Keep image panels large enough to carry the narrative.
- Treat borders, gradients and glows as subtle framing devices.
- Avoid adding visual effects that reduce map or photography readability.

## Imagery

### Approved Direction

- Realistic Norwegian landscapes.
- Cinematic but believable light and weather.
- Map visuals grounded in actual maps or cartography.
- Dark overlays that maintain visible geographic/detail information.

### Image Handling

- Use `next/image` for application imagery.
- Provide meaningful `alt` text for informative visuals and empty alt text for
  decorative brand marks.
- Preserve legibility when overlaying gradients or route graphics.
- Record new assets and source/licensing status in
  [assets-log.md](./assets-log.md).

## Motion Principles

Motion should feel like changing weather or travel progression, not interface
performance.

- Use slow fades, gentle movement and restrained path animation.
- Prefer one clear animated idea per section.
- Avoid flashing, bouncing, busy parallax or competing looping animations.
- Respect `prefers-reduced-motion`; meaningful content must remain visible
  without animation.
- Do not animate away usability, navigation clarity or map legibility.

## Component Patterns

### Hero

- Full-screen or high-impact image-led opening.
- Minimal navigation treatment.
- Strong editorial title with restrained supporting copy and a single clear
  path forward.

### Cards

- Fine borders and low-opacity surfaces.
- Small metadata labels in warm accent colour.
- Concise, practical descriptions.
- Minimal action treatment.

### Map Panels

- Use a real map image or an interactive map for geographic credibility.
- Apply subtle border, rounding, vignette and restrained glow.
- Route overlays may annotate the map, but must not replace it with abstract
  coastline drawings.
- Gold can denote flights; blue/teal can denote road or ferry continuation.

## Accessibility And Quality Guardrails

- Keep text contrast readable despite the dark aesthetic.
- Use semantic headings and links.
- Do not encode essential meaning only in colour.
- Provide keyboard-accessible interactive controls.
- Check mobile stacking and overflow.
- Verify animation fallback/reduced-motion behavior when modifying motion.

