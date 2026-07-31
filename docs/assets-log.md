# Assets Log

## Purpose

Track visible assets, where they are used, and what must be confirmed before
publication or partner-facing use. Add new image or video assets here when
they enter the project.

## Current Key Assets

| Asset path | Role | Current/planned use | Notes |
| --- | --- | --- | --- |
| `public/images/hero/preikestolen.png` | Hero landscape | Homepage hero and seasonal/editorial visuals | High-impact above-the-fold image; optimize loading intentionally |
| `public/images/cards/lofoten.png` | Destination/route image | Lofoten cards and guide content | Maintain realistic landscape treatment |
| `public/images/cards/senja.png` | Destination image | Senja features and journal/route references | Use with accurate place context |
| `public/images/cards/helgeland.png` | Destination/route image | Helgeland Coast content | Supports coastal route storytelling |
| `public/images/destinations/helgeland/heroy-island-boat.png` | Documentary object photograph | “The island boat” object chapter in the Helgeland coastal-history journal article | 1645 × 585 PNG supplied by the site owner; display uncropped at its natural aspect ratio; exact collection catalogue reference and usage-rights status have not yet been documented |
| `public/images/destinations/helgeland/nordlandsbåt2.png` | Documentary object photograph | Enigheten object record within “The island boat” chapter | 802 × 570 PNG supplied by the site owner; retain the Unicode filename; display uncropped at its natural aspect ratio; collection reference `HBS.G.10252`; exact public catalogue URL and usage-rights status have not yet been documented |
| `public/images/cards/tromsø.png` | Destination/Arctic image | Tromsø and aurora content | Preserve real `ø` in references and visible labels |
| `public/video/journal/lofoten.mp4` | Cinematic video | Journal hero experience | Provide robust fallback and avoid excessive load cost |
| `public/video/atmosphere/lofoten-fisherman-sjar.mp4` | Atmosphere video | Homepage `Coastal Memory` / `LofotenFishermanFeature` section | Actual current path; autoplay, loop, muted, inline; no poster currently configured |
| `public/images/map/map-norway.jpg` | Real map image | Gateways to Northern Norway arrival-map panel | Foundation image for cinematic map presentation |
| `public/images/branding/logo-norge-removebg-preview.png` | Brand mark | Header/hero navigation | Treat as decorative when text label supplies name |
| `https://kamera.atlas.vegvesen.no/api/images/3000614_1` | Updated official ferry-quay camera image | Bodø departures on the Nordland ferry board | 800 × 600 JPEG from Statens vegvesen camera `3000614_1`; display uncropped, lazy-loaded and unoptimized with timestamp refresh; attribution links to the official camera page |
| `https://kamera.atlas.vegvesen.no/api/images/1800234_1` | Updated official ferry-quay camera image | Bognes departures on the Nordland ferry board | 800 × 600 JPEG from Statens vegvesen camera `1800234_1`; display uncropped, lazy-loaded and unoptimized with timestamp refresh; attribution links to the official camera page |

## Camping Rules in Norway — user-supplied images (2026-07-31)

| Asset path | Page / section | Alt text | Dimensions / size | Crop and loading | Source / licensing |
| --- | --- | --- | --- | --- | --- |
| `public/images/guides/camping-rules/hero-tent.jpg` | `/guides/camping-rules-in-norway` hero | A small tent on a grassy mountain hillside above layers of Norwegian peaks at dusk | 2734 × 4096 JPEG; 2,145,334 bytes | `object-cover`, focal point centre; priority-loaded LCP image with `sizes="100vw"` | User-supplied; permission/source details to confirm before external publication |
| `public/images/guides/camping-rules/tent-by-mountain-lake-norway.jpg` | Right-to-roam section | A yellow tent beside a mountain lake in Norway | 2753 × 3671 JPEG; 1,701,663 bytes | `object-cover`, responsive 34vw/100vw | User-supplied; permission/source details to confirm before external publication |
| `public/images/guides/camping-rules/campfire-coffee-norwegian-mountains.jpg` | Campfire and safety section | A kettle pouring coffee beside a fjord in the Norwegian mountains | 5809 × 8714 JPEG; 4,429,095 bytes | `object-cover`, responsive 36vw/100vw; consider a smaller derivative if delivery data warrants it | User-supplied; permission/source details to confirm before external publication |
| `public/images/guides/camping-rules/coastal-wild-camping-norway.jpg` | DNT inspiration card | A tent on a rocky Norwegian coast beside the sea | 3866 × 2899 JPEG; 2,057,279 bytes | `object-cover`, responsive 45vw/100vw | User-supplied; permission/source details to confirm before external publication |
| `public/images/guides/camping-rules/card-trips.jpg` | Famous-hikes jump card | Norwegian mountains reflected in a calm lake | 5181 × 3060 JPEG; 2,900,491 bytes | `object-cover`, responsive 45vw/100vw | User-supplied; permission/source details to confirm before external publication |
| `public/images/guides/camping-rules/nature-clean.jpg` | Famous hikes introduction | A mountain rising above a pale Norwegian beach and sea | 4284 × 5712 JPEG; 4,477,564 bytes | `object-cover`, responsive 36vw/100vw; consider a smaller derivative if delivery data warrants it | User-supplied; permission/source details to confirm before external publication |

## Asset Rules

- Prefer public-facing assets under `public/images/` or `public/video/`.
- Use stable descriptive paths; avoid leaving production references tied to
  component-local image folders.
- The current fisherman video path is `public/video/atmosphere/`, not
  `public/videos/atmosphere/`. The current filename is
  `lofoten-fisherman-sjar.mp4`.
- Prefer realistic visuals that support trust and location recognition.
- Avoid over-darkening maps and informational imagery.
- Use `next/image` for rendered images in the Next.js UI.
- Use correct Norwegian characters in user-visible asset labels and captions.
- Confirm source/licensing/usage permission before commercial or
  partner-facing publication.

## Asset QA Checklist

For each new or replaced asset, record:

- Exact public path.
- Page/section usage.
- Intended alt text or decorative status.
- Intrinsic dimensions and file size.
- Cropping/object-fit decisions for desktop and mobile.
- Loading strategy for hero/LCP imagery.
- Source and usage-rights confirmation.
- Whether a smaller optimized derivative is needed.

## Asset Intake Template

Copy this block when adding an asset:

```md
### Asset Name

- Path:
- Format and dimensions:
- File size:
- Source/licensing status:
- Intended pages/sections:
- Alt text:
- Crop/object-fit guidance:
- Loading/optimization notes:
- Date added:
```

## Outstanding Asset Review

- Confirm rights/source information for all current cinematic images and video.
- Confirm the best optimized delivery size for the map image while retaining
  readable labels.
- Review large hero and video media for performance impact before production.
- Keep only intentional production copies of assets once the asset workflow is
  finalized.
