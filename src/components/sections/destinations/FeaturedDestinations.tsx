"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

import { DestinationCard } from "./DestinationCard";
import { SectionHeading } from "@/src/components/ui/section-heading";
import { featuredDestinations } from "@/src/data/destinations";
import { useMounted } from "@/src/hooks/useMounted";

export function FeaturedDestinations() {
  const mounted = useMounted();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-12% 0px" });
  const shouldReduceMotion = useReducedMotion();
  const reducedMotion = shouldReduceMotion === true;
  const animationsEnabled = mounted && !reducedMotion;

  const heading = (
    <SectionHeading
      id="featured-destinations-title"
      eyebrow="Featured destinations"
      heading="Places worth slowing down for"
      intro="Curated landscapes, quiet roads and remote places across Northern Norway."
    />
  );

  const content = (
    <>
      {animationsEnabled ? (
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{
            opacity: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
            y: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
          }}
        >
          {heading}
        </motion.div>
      ) : (
        <div>{heading}</div>
      )}

      <div className="mt-14 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4 xl:gap-6">
        {featuredDestinations.map((destination, index) => (
          <DestinationCard
            key={destination.title}
            {...destination}
            index={index}
            isVisible={isInView}
            shouldReduceMotion={reducedMotion}
            isPriority={index === 0}
          />
        ))}
      </div>
    </>
  );

  return (
    <section
      id="destinations"
      className="relative overflow-hidden scroll-mt-24 bg-[linear-gradient(180deg,#131b25_0%,#10161f_54%,#0b0f14_100%)] px-5 pt-14 pb-14 text-[#f7f3ed] sm:px-8 sm:pt-16 sm:pb-16 md:px-12 lg:pt-16 lg:pb-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(216,201,181,0.08),rgba(216,201,181,0)_36%),radial-gradient(circle_at_86%_8%,rgba(151,182,190,0.09),rgba(151,182,190,0)_32%)]" />
      <div className="home-transition-warm-to-dark pointer-events-none absolute inset-x-0 top-0 h-20 sm:h-24 lg:h-28" />
      <div className="home-transition-dark-footer pointer-events-none absolute inset-x-0 bottom-0 h-16" />

      {animationsEnabled ? (
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto max-w-7xl"
        >
          {content}
        </motion.div>
      ) : (
        <div ref={sectionRef} className="relative mx-auto max-w-7xl">
          {content}
        </div>
      )}
    </section>
  );
}
