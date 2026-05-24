import type { Metadata } from "next";

import { CinematicSeoPage } from "@/src/components/sections/seo/CinematicSeoPage";
import { seoPages, toMetadata } from "@/src/data/seo-pages";

export const metadata: Metadata = toMetadata(seoPages.bestTimeToVisitNorway);

export default function BestTimeToVisitNorwayPage() {
  return <CinematicSeoPage page={seoPages.bestTimeToVisitNorway} />;
}

