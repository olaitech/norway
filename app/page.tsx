import { PrismaHero } from "@/components/prisma-hero";
import { SectionProgressNav } from "@/src/components/navigation/SectionProgressNav";
import { LofotenFishermanFeature } from "@/src/components/sections/atmosphere/LofotenFishermanFeature";
import { FeaturedDestinations } from "@/src/components/sections/destinations/FeaturedDestinations";
import { FerryGuideFeature } from "@/src/components/sections/FerryGuideFeature";
import { SearchTheNorth } from "@/src/components/sections/home/SearchTheNorth";
import { StartHereSection } from "@/src/components/sections/home/StartHereSection";
import { WaysIntoNorway } from "@/src/components/sections/home/WaysIntoNorway";
import { createPageMetadata } from "@/src/lib/metadata";
import {
  JsonLd,
  createOrganizationJsonLd,
  createWebSiteJsonLd,
} from "@/src/lib/seo/jsonLd";

export const metadata = createPageMetadata({
  title: "Trips Norway | Cinematic Travel Guide to Norway and Northern Norway",
  description:
    "A cinematic travel knowledge portal for Norway’s quiet roads, dramatic fjords, northern lights, coastal routes and remote places worth slowing down for.",
  canonical: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd value={[createWebSiteJsonLd(), createOrganizationJsonLd()]} />
      <PrismaHero />
      <SectionProgressNav />
      <LofotenFishermanFeature />
      <SearchTheNorth />
      <WaysIntoNorway />
      <StartHereSection />
      <FerryGuideFeature />
      <FeaturedDestinations />
    </>
  );
}
