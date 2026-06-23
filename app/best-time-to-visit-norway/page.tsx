import type { Metadata } from "next";

import { CinematicSeoPage } from "@/src/components/sections/seo/CinematicSeoPage";
import { seoPages, toMetadata } from "@/src/data/seo-pages";

export const metadata: Metadata = toMetadata(
  seoPages.bestTimeToVisitNorway,
  "/best-time-to-visit-norway",
);

export default function BestTimeToVisitNorwayPage() {
  return (
    <CinematicSeoPage
      page={seoPages.bestTimeToVisitNorway}
      canonicalPath="/best-time-to-visit-norway"
    />
  );
}
