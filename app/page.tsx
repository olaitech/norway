import type { Metadata } from "next";

import { PrismaHero } from "@/components/prisma-hero";
import { SectionProgressNav } from "@/src/components/navigation/SectionProgressNav";
import { AuroraSectionDivider } from "@/src/components/layout/AuroraSectionDivider";
import { LofotenFishermanFeature } from "@/src/components/sections/atmosphere/LofotenFishermanFeature";
import { FeaturedDestinations } from "@/src/components/sections/destinations/FeaturedDestinations";
import { SearchTheNorth } from "@/src/components/sections/home/SearchTheNorth";
import { StartHereSection } from "@/src/components/sections/home/StartHereSection";
import { WaysIntoNorway } from "@/src/components/sections/home/WaysIntoNorway";

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
      <AuroraSectionDivider
        variant="warm-to-dark"
        className="relative z-30 -mt-16 -mb-20 h-[clamp(170px,14vw,240px)] sm:-mt-20 sm:-mb-24 lg:-mt-24 lg:-mb-24"
      />
      <FeaturedDestinations />
    </>
  );
}
