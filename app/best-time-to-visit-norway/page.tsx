import type { Metadata } from "next";

import { CinematicSeoPage } from "@/src/components/sections/seo/CinematicSeoPage";
import { TrustBox } from "@/src/components/shared/TrustBox";
import { seoPages, toMetadata } from "@/src/data/seo-pages";

const page = seoPages.bestTimeToVisitNorway;

export const metadata: Metadata = toMetadata(
  page,
  "/best-time-to-visit-norway",
);

export default function BestTimeToVisitNorwayPage() {
  const trustBoxSources = page.guideMeta?.sources.slice(0, 4) ?? [];

  return (
    <CinematicSeoPage
      page={page}
      canonicalPath="/best-time-to-visit-norway"
      trustBox={
        <TrustBox
          label="Seasonal guidance"
          title="The season shapes every Norway trip."
          summary="Choose the window by the experience you want first: aurora, long daylight, calmer roads or the quiet in-between months."
          bullets={[
            "Northern lights: late September to early April",
            "Road trips and hiking: June to September",
            "Shoulder seasons: best balance of light and space",
          ]}
          lastUpdated={page.guideMeta?.lastUpdated}
          reviewedFor="Summer 2026"
          editorialNote="Independent editorial guidance, not a live forecast service."
          safetyNote="Check weather, road and ferry updates before you lock the final route."
          sources={trustBoxSources}
        />
      }
    />
  );
}
