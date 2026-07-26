"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  CardStack,
  type CardStackItem,
} from "@/src/components/ui/card-stack";

type FjordJourneyDestination =
  | "routes"
  | "ferry-guide"
  | "best-time"
  | "map"
  | "destinations";

type FjordJourneyCard = CardStackItem & {
  tag: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
  href: string;
  ctaLabel: string;
  destination: FjordJourneyDestination;
  priority?: boolean;
};

const journeyCards: FjordJourneyCard[] = [
  {
    id: "fjord-road-trip",
    tag: "01 / ROUTES",
    title: "Browse published road-trip routes",
    description:
      "Open the published Lofoten and Helgeland Coast route guides. For a Western Norway plan, use this page’s regional comparison with the Norway map.",
    imageSrc: "/images/destinations/lofoten/lofoten-e10-road-trip.jpg",
    imageAlt:
      "A winding road crossing turquoise water below a Lofoten mountain",
    href: "/routes",
    ctaLabel: "Browse published route guides",
    destination: "routes",
    priority: true,
  },
  {
    id: "fjord-ferries",
    tag: "02 / FERRIES",
    title: "Plan around the ferries",
    description:
      "Understand crossings, timetables and why the ferry is often part of the journey rather than an interruption.",
    imageSrc: "/images/destinations/lofoten/lofoten-ferry-bodo-moskenes.jpg",
    imageAlt: "A passenger ferry crossing between Lofoten mountains",
    imagePosition: "center 58%",
    href: "/guides/norway-ferry-guide-for-tourists",
    ctaLabel: "Read the Norway ferry guide",
    destination: "ferry-guide",
  },
  {
    id: "fjord-season",
    tag: "03 / SEASON",
    title: "Choose the right season",
    description:
      "Compare daylight, weather, road conditions and atmosphere before deciding when to travel.",
    imageSrc: "/images/destinations/lofoten/lofoten-midnight-sun-beach.jpg",
    imageAlt: "Midnight light above a rocky Lofoten coast",
    href: "/best-time-to-visit-norway",
    ctaLabel: "Find the best time to visit",
    destination: "best-time",
  },
  {
    id: "fjord-map",
    tag: "04 / MAP",
    title: "Explore Norway on the map",
    description:
      "See how fjords, mountain roads, islands and longer travel distances connect across the country.",
    imageSrc: "/images/map/map-norway.jpg",
    imageAlt: "Illustrated map of Norway with routes and destinations",
    imagePosition: "center",
    href: "/map",
    ctaLabel: "Open the Norway map",
    destination: "map",
  },
  {
    id: "fjord-destinations",
    tag: "05 / DESTINATIONS",
    title: "Find your next destination",
    description:
      "Move from the famous fjords into coastal communities, northern islands and landscapes worth slowing down for.",
    imageSrc: "/images/cards/helgeland.png",
    imageAlt: "The Helgeland coast and islands under evening light",
    href: "/destinations",
    ctaLabel: "Explore Norway destinations",
    destination: "destinations",
  },
];

function JourneyCard({
  item,
  active,
}: {
  item: FjordJourneyCard;
  active: boolean;
}) {
  return (
    <article className="relative flex h-full w-full flex-col overflow-hidden bg-[#081116]">
      <Image
        src={item.imageSrc}
        alt={item.imageAlt}
        fill
        priority={item.priority}
        sizes="(min-width: 1280px) 31rem, (min-width: 1024px) 38vw, (min-width: 640px) 38vw, 15rem"
        className={`object-cover transition-transform duration-700 motion-reduce:transition-none ${
          active ? "scale-[1.02]" : "scale-100"
        }`}
        style={{ objectPosition: item.imagePosition ?? "center" }}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,10,12,0.1)_0%,rgba(5,10,12,0.18)_31%,rgba(5,10,12,0.86)_76%,rgba(5,10,12,0.98)_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(112deg,rgba(8,17,22,0.46)_0%,transparent_52%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col p-5 sm:p-7">
        <div>
          <p className="text-[0.6rem] font-medium uppercase tracking-[0.29em] text-[#d8c9a7]/84">
            {item.tag}
          </p>
          <h4 className="mt-4 max-w-[16ch] font-serif text-[clamp(1.8rem,3.3vw,2.75rem)] leading-[0.94] tracking-[-0.045em] text-[#f4efe2]">
            {item.title}
          </h4>
        </div>

        <div className="mt-auto pt-8">
          <p className="max-w-[34rem] text-sm font-light leading-[1.75] text-[#f4efe2]/78 sm:text-base">
            {item.description}
          </p>
          <Link
            href={item.href}
            data-internal-link-location="fjords-card-stack"
            data-internal-link-destination={item.destination}
            tabIndex={active ? 0 : -1}
            aria-hidden={active ? undefined : true}
            onPointerDown={(event) => event.stopPropagation()}
            onClick={(event) => event.stopPropagation()}
            className={`mt-5 inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2 text-[0.62rem] font-medium uppercase tracking-[0.21em] transition-[border-color,background-color,color,opacity] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/75 focus-visible:ring-offset-2 focus-visible:ring-offset-[#081116] ${
              active
                ? "border-[#c6a15b]/42 bg-[#081116]/48 text-[#f4efe2] hover:border-[#d8c9a7]/72 hover:bg-[#081116]/72"
                : "pointer-events-none border-transparent bg-transparent opacity-0"
            }`}
          >
            {item.ctaLabel}
            <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}

function renderJourneyCard(
  item: FjordJourneyCard,
  state: { active: boolean },
) {
  return <JourneyCard item={item} active={state.active} />;
}

export function FjordJourneyCardStack() {
  return (
    <div
      className="mt-24 border-t border-[#c6a15b]/18 pt-14 sm:mt-28 sm:pt-16"
      aria-labelledby="fjord-journey-heading"
    >
      <div className="max-w-3xl">
        <div className="flex items-center gap-3">
          <span
            className="h-px w-9 bg-[#c6a15b]/68"
            aria-hidden="true"
          />
          <p className="text-[0.63rem] font-medium uppercase tracking-[0.33em] text-[#c6a15b]/76">
            Continue the journey
          </p>
        </div>
        <h3
          id="fjord-journey-heading"
          className="mt-5 font-serif text-[clamp(2.1rem,4.6vw,4rem)] font-normal leading-[0.95] tracking-[-0.045em] text-[#f4efe2]"
        >
          Turn the fjords into a journey
        </h3>
        <p className="mt-5 text-sm font-light leading-[1.85] text-[#f4efe2]/65 sm:text-base md:text-lg">
          Five paths into a slower Norway journey — shaped by roads, ferry
          crossings, changing light and the landscapes you choose to follow.
        </p>
      </div>

      <CardStack
        items={journeyCards}
        initialIndex={0}
        maxVisible={5}
        autoAdvance
        intervalMs={5500}
        pauseOnHover
        loop
        className="mt-10"
        renderCard={renderJourneyCard}
      />
    </div>
  );
}
