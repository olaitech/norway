import { CinematicSeoPage } from "@/src/components/sections/seo/CinematicSeoPage";
import { seoPages } from "@/src/data/seo-pages";
import { createPageMetadata } from "@/src/lib/metadata";

export const metadata = createPageMetadata({
  title: "Norway Road Trip Routes | Scenic Roads, Ferries and Slow Travel",
  description:
    "Plan slower Norway road trips through scenic routes, ferry crossings, fjords, coastal roads and Northern Norway landscapes.",
  canonical: "/routes",
  image: {
    url: seoPages.routesHub.hero.imageSrc,
    alt: seoPages.routesHub.hero.imageAlt,
  },
});

export default function RoutesPage() {
  return <CinematicSeoPage page={seoPages.routesHub} />;
}
