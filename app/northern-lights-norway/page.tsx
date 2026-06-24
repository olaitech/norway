import type { Metadata } from "next";

import { CinematicSeoPage } from "@/src/components/sections/seo/CinematicSeoPage";
import { TrustBox } from "@/src/components/shared/TrustBox";
import { seoPages, toMetadata } from "@/src/data/seo-pages";

const page = seoPages.northernLightsNorway;

export const metadata: Metadata = toMetadata(
  page,
  "/northern-lights-norway",
);

export default function NorthernLightsNorwayPage() {
  const trustBoxSources = page.guideMeta?.sources.slice(0, 4) ?? [];

  return (
    <CinematicSeoPage
      page={page}
      canonicalPath="/northern-lights-norway"
      trustBox={
        <TrustBox
          label="Aurora guidance"
          title="Aurora travel works best with patience."
          summary="Stay multiple nights, keep the forecast open and use darker bases where wind and cloud can shift the outcome quickly."
          bullets={[
            "Stay at least 3 nights in the north",
            "Check cloud and wind forecasts daily",
            "Move away from city lights when the sky clears",
          ]}
          lastUpdated={page.guideMeta?.lastUpdated}
          reviewedFor="2026 aurora season"
          editorialNote="Independent editorial guidance, not an aurora guarantee."
          safetyNote="Check weather, road and local conditions before night driving."
          sources={trustBoxSources}
        />
      }
    />
  );
}
