import type { Metadata } from "next";

import { CinematicSeoPage } from "@/src/components/sections/seo/CinematicSeoPage";
import { seoPages, toMetadata } from "@/src/data/seo-pages";

export const metadata: Metadata = toMetadata(
  seoPages.northernLightsNorway,
  "/northern-lights-norway",
);

export default function NorthernLightsNorwayPage() {
  return (
    <CinematicSeoPage
      page={seoPages.northernLightsNorway}
      canonicalPath="/northern-lights-norway"
    />
  );
}
