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
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[#f4efe2] focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-[#07100f] focus:shadow-[0_16px_50px_rgba(0,0,0,0.38)] focus:outline-none focus:ring-2 focus:ring-[#d8c9a7] focus:ring-offset-2 focus:ring-offset-[#050607]"
      >
        Skip to main content
      </a>
      <JsonLd value={[createWebSiteJsonLd(), createOrganizationJsonLd()]} />
      <main id="main-content" tabIndex={-1}>
        <PrismaHero />
        <SectionProgressNav />
        <LofotenFishermanFeature />
        <SearchTheNorth />
        <WaysIntoNorway />
        <StartHereSection />
        <FerryGuideFeature />
        <FeaturedDestinations />
      </main>
    </>
  );
}
