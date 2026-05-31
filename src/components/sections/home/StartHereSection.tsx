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
      className="relative overflow-hidden bg-[#050607] px-5 pt-10 pb-14 text-[#f4efe2] sm:px-8 sm:pt-12 sm:pb-16 md:px-12 lg:pt-14 lg:pb-18"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(216,201,167,0.08),transparent_33%),radial-gradient(circle_at_84%_82%,rgba(126,176,192,0.1),transparent_38%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

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
            />
          </motion.div>
        ) : (
          <SectionHeading
            eyebrow="Start here"
            heading="Start your Norway journey"
            intro="Norway is easier to plan when you begin with the right question. Choose what you want to understand first."
          />
        )}

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4 xl:gap-6">
          {startHereCards.map((card, index) => {
            const Icon = iconByName[card.icon] ?? Compass;

            const cardContent = (
              <Link
                href={card.href}
                className="group flex h-full flex-col rounded-[1.2rem] border border-white/10 bg-[linear-gradient(165deg,rgba(255,255,255,0.052),rgba(255,255,255,0.018))] p-5 shadow-[0_18px_65px_rgba(0,0,0,0.34)] backdrop-blur-sm transition-colors hover:border-[#d8c9a7]/38 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55 sm:p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-[0.58rem] font-medium uppercase tracking-[0.26em] text-[#d8c9a7]/78">
                    {card.eyebrow}
                  </p>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.03] text-[#f4efe2]/66 transition-colors group-hover:text-[#f4efe2]">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-[1.6rem] leading-[1.04] tracking-[-0.03em] text-[#f4efe2]">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm font-light leading-[1.78] text-[#f4efe2]/66 sm:text-[0.97rem]">
                  {card.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-[0.58rem] font-medium uppercase tracking-[0.22em] text-[#f4efe2]/72 transition-colors group-hover:text-[#f4efe2]">
                  Open path
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </div>
              </Link>
            );

            if (!animationsEnabled) {
              return <div key={card.title}>{cardContent}</div>;
            }

            return (
              <motion.div
                key={card.title}
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
