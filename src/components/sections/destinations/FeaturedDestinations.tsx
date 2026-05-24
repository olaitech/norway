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
      className="relative overflow-hidden bg-[#050607] px-5 py-24 text-[#f4efe2] sm:px-8 sm:py-28 md:px-12 lg:py-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(216,201,167,0.08),rgba(216,201,167,0)_34%),radial-gradient(circle_at_86%_8%,rgba(151,182,190,0.08),rgba(151,182,190,0)_30%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

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
