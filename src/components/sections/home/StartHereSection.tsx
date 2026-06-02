"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Bus,
  CalendarDays,
  Compass,
  Leaf,
  Map,
  MapPin,
  Sparkles,
  Route,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

import { SectionHeading } from "@/src/components/ui/section-heading";
import { useMounted } from "@/src/hooks/useMounted";
import { getStartHereItems } from "@/src/lib/planning/startHereItems";

const iconByName: Record<string, LucideIcon> = {
  Route,
  MapPin,
  CalendarDays,
  Sparkles,
  Leaf,
  Map,
  Wallet,
  Bus,
};

export function StartHereSection() {
  const mounted = useMounted();
  const shouldReduceMotion = useReducedMotion() === true;
  const animationsEnabled = mounted && !shouldReduceMotion;
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-12% 0px" });
  const startHereCards = getStartHereItems();

  return (
    <section
      aria-labelledby="start-your-journey-title"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#cdbba5_0%,#ddd0bf_44%,#eee6da_100%)] px-5 pt-10 pb-14 text-[#1b1815] sm:px-8 sm:pt-12 sm:pb-16 md:px-12 lg:pt-14 lg:pb-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(244,239,232,0.24),transparent_33%),radial-gradient(circle_at_84%_82%,rgba(126,176,192,0.1),transparent_40%),radial-gradient(circle_at_48%_55%,rgba(216,201,181,0.18),transparent_44%)]" />
      <div className="home-transition-dark-to-warm pointer-events-none absolute inset-x-0 top-0 h-16" />
      <div className="home-transition-warm-to-dark pointer-events-none absolute inset-x-0 bottom-0 h-16" />

      <div ref={sectionRef} className="relative mx-auto max-w-7xl">
        {animationsEnabled ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionHeading
              eyebrow="Start here"
              heading="Start your Norway journey"
              intro="Norway is easier to plan when you begin with the right question. Choose what you want to understand first."
              eyebrowClassName="text-[#7a6752]/84"
              headingClassName="text-[#1b1815]"
              introClassName="text-[#1b1815]/76"
            />
          </motion.div>
        ) : (
          <SectionHeading
            eyebrow="Start here"
            heading="Start your Norway journey"
            intro="Norway is easier to plan when you begin with the right question. Choose what you want to understand first."
            eyebrowClassName="text-[#7a6752]/84"
            headingClassName="text-[#1b1815]"
            introClassName="text-[#1b1815]/76"
          />
        )}

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4 xl:gap-6">
          {startHereCards.map((card, index) => {
            const Icon = iconByName[card.icon] ?? Compass;
            const isLightCard = index % 4 !== 3;
            const cardClassName = isLightCard
              ? "border-[#84715c]/36 bg-[linear-gradient(165deg,rgba(247,241,233,0.96),rgba(222,207,188,0.86))] shadow-[0_18px_58px_rgba(33,25,18,0.15)] hover:border-[#6e5c48]/52"
              : "border-[#bda98e]/40 bg-[linear-gradient(165deg,rgba(20,27,36,0.94),rgba(11,15,20,0.9))] shadow-[0_18px_58px_rgba(9,12,17,0.32)] hover:border-[#d8c9b5]/48";
            const eyebrowClassName = isLightCard
              ? "text-[#7a6752]/84"
              : "text-[#d8c9b5]/78";
            const iconWrapperClassName = isLightCard
              ? "border-[#8f7d67]/26 bg-[#efe5d8]/78 text-[#4d4134] group-hover:text-[#1b1815]"
              : "border-[#d8c9b5]/24 bg-[#f7f3ed]/12 text-[#f7f3ed]/74 group-hover:text-[#f7f3ed]";
            const titleClassName = isLightCard ? "text-[#1b1815]" : "text-[#f7f3ed]";
            const descriptionClassName = isLightCard
              ? "text-[#1b1815]/74"
              : "text-[#f7f3ed]/72";
            const ctaClassName = isLightCard
              ? "text-[#1b1815]/74 group-hover:text-[#1b1815]"
              : "text-[#f7f3ed]/72 group-hover:text-[#f7f3ed]";

            const cardContent = (
              <Link
                href={card.href}
                className={`group flex h-full flex-col rounded-[1.2rem] border p-5 backdrop-blur-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f7d67]/55 sm:p-6 ${cardClassName}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <p
                    className={`text-[0.58rem] font-medium uppercase tracking-[0.26em] ${eyebrowClassName}`}
                  >
                    {card.eyebrow}
                  </p>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${iconWrapperClassName}`}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
                <h3
                  className={`mt-5 font-serif text-[1.6rem] leading-[1.04] tracking-[-0.03em] ${titleClassName}`}
                >
                  {card.title}
                </h3>
                <p
                  className={`mt-4 text-sm font-light leading-[1.78] sm:text-[0.97rem] ${descriptionClassName}`}
                >
                  {card.description}
                </p>
                <div
                  className={`mt-6 flex items-center gap-2 text-[0.58rem] font-medium uppercase tracking-[0.22em] transition-colors ${ctaClassName}`}
                >
                  Open path
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </div>
              </Link>
            );

            if (!animationsEnabled) {
              return <div key={card.id}>{cardContent}</div>;
            }

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 14 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                transition={{
                  opacity: { duration: 0.55, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] },
                  y: { duration: 0.55, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] },
                }}
              >
                {cardContent}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
