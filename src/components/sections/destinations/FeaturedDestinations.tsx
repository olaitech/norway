"use client";

import { useReducedMotion } from "framer-motion";

import { DestinationCard } from "./DestinationCard";
import { SectionHeading } from "@/src/components/ui/section-heading";
import { featuredDestinations } from "@/src/data/destinations";

export function FeaturedDestinations() {
  const reducedMotion = useReducedMotion() === true;

  return (
    <section
      aria-labelledby="featured-destinations-title"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#131b25_0%,#10161f_54%,#0b0f14_100%)] px-5 pt-8 pb-14 text-[#f7f3ed] sm:px-8 sm:pt-10 sm:pb-16 md:px-12 lg:pt-10 lg:pb-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(216,201,181,0.08),rgba(216,201,181,0)_36%),radial-gradient(circle_at_86%_8%,rgba(151,182,190,0.09),rgba(151,182,190,0)_32%)]" />
      <div className="home-transition-warm-to-dark pointer-events-none absolute inset-x-0 top-0 h-10 sm:h-12 lg:h-16" />
      <div className="home-transition-dark-footer pointer-events-none absolute inset-x-0 bottom-0 h-10 sm:h-12 lg:h-14" />

      <div
        id="destinations"
        className="relative mx-auto max-w-7xl scroll-mt-24"
      >
        <SectionHeading
          id="featured-destinations-title"
          eyebrow="Featured destinations"
          heading="Places worth slowing down for"
          intro="Curated landscapes, quiet roads and remote places across Northern Norway."
        />

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 xl:mt-12 xl:grid-cols-4 xl:gap-6">
          {featuredDestinations.map((destination, index) => (
            <DestinationCard
              key={destination.title}
              {...destination}
              index={index}
              isVisible={true}
              shouldReduceMotion={reducedMotion}
              isPriority={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
