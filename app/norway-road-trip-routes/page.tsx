import type { Metadata } from "next";

import { CinematicSeoPage } from "@/src/components/sections/seo/CinematicSeoPage";
import { seoPages, toMetadata } from "@/src/data/seo-pages";

export const metadata: Metadata = toMetadata(
  seoPages.routesHub,
  "/norway-road-trip-routes",
);

export default function NorwayRoadTripRoutesPage() {
  return (
    <CinematicSeoPage
      page={seoPages.routesHub}
      canonicalPath="/norway-road-trip-routes"
    />
  );
}
