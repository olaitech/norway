import { PrismaHero } from "@/components/prisma-hero";
import { FeaturedDestinations } from "@/src/components/sections/destinations/FeaturedDestinations";
import { AmbientDivider } from "@/src/components/ui/ambient-divider";

export default function Home() {
  return (
    <>
      <PrismaHero />
      <AmbientDivider />
      <FeaturedDestinations />
    </>
  );
}
