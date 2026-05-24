import type { Metadata } from "next";

import { CinematicSeoPage } from "@/src/components/sections/seo/CinematicSeoPage";
import { seoPages, toMetadata } from "@/src/data/seo-pages";

export const metadata: Metadata = toMetadata(seoPages.lofotenRoadTrip);

export default function LofotenRoadTripPage() {
  return <CinematicSeoPage page={seoPages.lofotenRoadTrip} />;
}

