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
| `public/images/cards/tromsø.png` | Destination/Arctic image | Tromsø and aurora content | Preserve real `ø` in references and visible labels |
| `public/video/journal/lofoten.mp4` | Cinematic video | Journal hero experience | Provide robust fallback and avoid excessive load cost |
| `public/video/atmosphere/lofoten-fisherman-sjar.mp4` | Atmosphere video | Homepage `Coastal Memory` / `LofotenFishermanFeature` section | Actual current path; autoplay, loop, muted, inline; no poster currently configured |
| `public/images/map/map-norway.jpg` | Real map image | Gateways to Northern Norway arrival-map panel | Foundation image for cinematic map presentation |
| `public/images/branding/logo-norge-removebg-preview.png` | Brand mark | Header/hero navigation | Treat as decorative when text label supplies name |

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
