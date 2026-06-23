import type { Metadata } from "next";

import { CinematicSeoPage } from "@/src/components/sections/seo/CinematicSeoPage";
import { seoPages, toMetadata } from "@/src/data/seo-pages";

export const metadata: Metadata = toMetadata(
  seoPages.lofotenRoadTrip,
  "/routes/lofoten-road-trip",
);

export default function LofotenRoadTripPage() {
  return (
    <CinematicSeoPage
      page={seoPages.lofotenRoadTrip}
      canonicalPath="/routes/lofoten-road-trip"
    />
  );
}
