"use client";

import {
  StickyScrollReveal,
  type StickyScrollItem,
} from "@/components/ui/sticky-scroll-reveal";

const norwayPlanningContent: StickyScrollItem[] = [
  {
    title: "Norway Road Trip Routes",
    description:
      "Quiet roads, ferry crossings, coastal detours and mountain passes worth slowing down for.",
    meta: "ROUTES / SCENIC DRIVES",
    href: "/routes",
    image: "/images/cards/helgeland.png",
    imageAlt: "A ferry-linked coastal road along the Helgeland shoreline",
  },
  {
    title: "Best Time to Visit Norway",
    description:
      "From midnight sun to winter darkness, every season changes the way Norway feels.",
    meta: "SEASONS / FIELD GUIDE",
    href: "/best-time-to-visit-norway",
    image: "/images/hero/preikestolen.png",
    imageAlt: "A traveler on Preikestolen above a Norwegian fjord at dusk",
  },
  {
    title: "Lofoten Travel Guide",
    description:
      "Sharp peaks, fishing villages, Arctic beaches and weather that turns every hour cinematic.",
    meta: "DESTINATION / NORTHERN NORWAY",
    href: "/destinations/lofoten-islands",
    image: "/images/cards/lofoten.png",
    imageAlt: "Fishing villages and steep mountains along the coast of Lofoten",
  },
  {
    title: "Northern Lights in Norway",
    description:
      "Where to go, when to travel and how to give yourself the best chance beneath the polar sky.",
    meta: "ARCTIC LIGHT / WINTER GUIDE",
    href: "/northern-lights-norway",
    image: "/images/cards/tromso.png",
    imageAlt: "Aurora above a quiet Arctic coastline near Tromso",
  },
  {
    title: "Fjords of Norway",
    description:
      "Deep water, vertical mountains and quiet villages shaped by ice, weather and time.",
    meta: "LANDSCAPE / WESTERN NORWAY",
    href: "/fjords-of-norway",
    image: "/images/cards/lofoten.png",
    imageAlt: "Red fishing cabins beneath steep mountains and calm water in Lofoten",
  },
  {
    title: "Norway Itinerary 7 Days",
    description:
      "A focused route for seeing Norway's landscapes without rushing through every moment.",
    meta: "ITINERARY / FIRST JOURNEY",
    href: "/routes/lofoten-road-trip",
    image: "/images/cards/senja.png",
    imageAlt: "Dramatic Senja mountains above calm Arctic water",
  },
  {
    title: "Norway Itinerary 10 Days",
    description:
      "More space, longer drives and enough time to let the road become part of the journey.",
    meta: "ITINERARY / SLOWER ROUTE",
    href: "/routes/helgeland-coast-road-trip",
    image: "/images/cards/helgeland.png",
    imageAlt: "Island coastline and soft northern light along the Helgeland coast",
  },
];

export function WaysIntoNorway() {
  return (
    <section
      id="routes"
      aria-labelledby="ways-into-norway-title"
      className="relative scroll-mt-24 overflow-x-clip bg-[linear-gradient(180deg,#1b2530_0%,#121821_48%,#0b0f14_100%)] text-[#f7f3ed]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_84%_16%,rgba(151,182,190,0.09),transparent_30%),radial-gradient(circle_at_14%_82%,rgba(216,201,167,0.09),transparent_34%)]" />
      <div className="home-transition-warm-to-dark pointer-events-none absolute inset-x-0 top-0 h-16" />
      <div className="home-transition-dark-to-warm pointer-events-none absolute inset-x-0 bottom-0 h-16" />

      <div className="relative px-5 pt-10 pb-24 sm:px-8 sm:pt-12 sm:pb-28 md:px-12 lg:pt-16 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
            <div>
              <p className="text-[0.62rem] font-medium uppercase tracking-[0.37em] text-[#d8c9a7]/72">
                PLANNING ARCHIVE
              </p>
              <h2
                id="ways-into-norway-title"
                className="mt-7 max-w-xl font-serif text-[clamp(3.2rem,6.6vw,5.8rem)] font-normal leading-[0.9] tracking-[-0.06em]"
              >
                Ways Into Norway
              </h2>
            </div>
            <p className="max-w-2xl text-base font-light leading-[1.9] text-[#f4efe2]/66 sm:text-lg md:text-xl">
              Start with the season, the road, the light or the landscape.
              Norway reveals itself differently depending on how you enter it.
            </p>
          </div>

          <StickyScrollReveal content={norwayPlanningContent} />
        </div>
      </div>
    </section>
  );
}
