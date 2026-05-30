import type { Metadata } from "next";

import { PrismaHero } from "@/components/prisma-hero";
import { LofotenFishermanFeature } from "@/src/components/sections/atmosphere/LofotenFishermanFeature";
import { FeaturedDestinations } from "@/src/components/sections/destinations/FeaturedDestinations";
import { SearchTheNorth } from "@/src/components/sections/home/SearchTheNorth";
import { WaysIntoNorway } from "@/src/components/sections/home/WaysIntoNorway";
import { AmbientDivider } from "@/src/components/ui/ambient-divider";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <PrismaHero />
      <LofotenFishermanFeature />
      <SearchTheNorth />
      <WaysIntoNorway />
      <AmbientDivider />
      <FeaturedDestinations />
    </>
  );
}
