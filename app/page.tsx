import type { Metadata } from "next";

import { PrismaHero } from "@/components/prisma-hero";
import { SectionProgressNav } from "@/src/components/navigation/SectionProgressNav";
import { LofotenFishermanFeature } from "@/src/components/sections/atmosphere/LofotenFishermanFeature";
import { FeaturedDestinations } from "@/src/components/sections/destinations/FeaturedDestinations";
import { SearchTheNorth } from "@/src/components/sections/home/SearchTheNorth";
import { StartHereSection } from "@/src/components/sections/home/StartHereSection";
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
      <SectionProgressNav />
      <LofotenFishermanFeature />
      <SearchTheNorth />
      <WaysIntoNorway />
      <StartHereSection />
      <AmbientDivider />
      <FeaturedDestinations />
    </>
  );
}
