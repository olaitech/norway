"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

import { SectionHeading } from "@/src/components/ui/section-heading";
import { useMounted } from "@/src/hooks/useMounted";

import { tiktokMoments } from "@/src/data/tiktok-moments";

const cardRevealTransition = {
  duration: 0.72,
  ease: [0.16, 1, 0.3, 1] as const,
};

function TikTokMomentCard({
  title,
  location,
  description,
  tiktokUrl,
  index,
  isVisible,
  animationsEnabled,
}: (typeof tiktokMoments)[number] & {
  index: number;
  isVisible: boolean;
  animationsEnabled: boolean;
}) {
  return (
    <motion.div
      initial={animationsEnabled ? { opacity: 0, y: 18 } : false}
      animate={animationsEnabled ? (isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }) : { opacity: 1, y: 0 }}
      transition={
        animationsEnabled
          ? {
              ...cardRevealTransition,
              delay: index * 0.09,
            }
          : { duration: 0 }
      }
      className="h-full"
    >
      <a
        href={tiktokUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Watch ${title} on TikTok`}
        className="group flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.032),rgba(255,255,255,0.018))] shadow-[0_22px_70px_rgba(0,0,0,0.28)] transition-[transform,border-color,background-color,box-shadow] duration-500 hover:-translate-y-1 hover:border-[#d8c9a7]/24 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.038),rgba(255,255,255,0.02))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
      >
        <div className="relative isolate overflow-hidden border-b border-white/8 px-5 py-5 sm:px-6 sm:py-6">
          <div className="absolute inset-0 bg-[linear-gradient(165deg,rgba(8,12,17,0.96)_0%,rgba(17,23,30,0.9)_54%,rgba(10,14,19,0.95)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(216,201,167,0.18),transparent_28%),radial-gradient(circle_at_82%_26%,rgba(120,165,177,0.22),transparent_32%),radial-gradient(circle_at_50%_86%,rgba(255,255,255,0.06),transparent_30%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_0%,transparent_22%,transparent_78%,rgba(255,255,255,0.03)_100%)]" />
          <div className="pointer-events-none absolute inset-x-5 top-5 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent sm:inset-x-6 sm:top-6" />

          <div className="relative flex min-h-[11.5rem] flex-col justify-between sm:min-h-[12.5rem]">
            <div className="flex items-start justify-between gap-4">
              <span className="inline-flex rounded-full border border-white/12 bg-black/20 px-3 py-1 text-[0.54rem] font-medium uppercase tracking-[0.28em] text-[#f4efe2]/74">
                TikTok field note
              </span>
              <span
                aria-hidden="true"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-black/16 text-[#f4efe2]/76 transition-colors duration-300 group-hover:border-[#d8c9a7]/26 group-hover:text-[#f7f3ed]"
              >
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>

            <div className="mt-10 flex items-center gap-2 text-[0.55rem] font-medium uppercase tracking-[0.32em] text-[#f4efe2]/54">
              <span className="h-px w-7 bg-[#d8c9a7]/28" aria-hidden="true" />
              <span>{location}</span>
            </div>
          </div>
        </div>

        <div className="flex grow flex-col p-6 sm:p-7">
          <h3 className="font-serif text-[1.78rem] leading-[1.02] tracking-[-0.04em] text-[#f4efe2] sm:text-[1.95rem]">
            {title}
          </h3>
          <p className="mt-4 text-sm font-light leading-[1.85] text-[#f4efe2]/66 sm:text-[0.98rem]">
            {description}
          </p>

          <div className="mt-8 flex items-center justify-between border-t border-white/8 pt-5 text-[0.58rem] font-medium uppercase tracking-[0.24em] text-[#f4efe2]/54">
            <span>Watch on TikTok</span>
            <ArrowUpRight
              className="h-4 w-4 text-[#d8c9a7]/72 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
              aria-hidden="true"
            />
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export function TikTokMomentsSection() {
  const mounted = useMounted();
  const shouldReduceMotion = useReducedMotion() === true;
  const animationsEnabled = mounted && !shouldReduceMotion;
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-12% 0px" });

  const heading = (
    <SectionHeading
      id="tiktok-moments-title"
      eyebrow="Field moments"
      heading="A small window into the journey"
      intro="Short scenes from Norway's roads, rain, fjords and quiet places - shared from the Trips Norway TikTok field notes."
      eyebrowClassName="text-[#d8c9a7]/70"
      introClassName="text-[#f4efe2]/60"
    />
  );

  const headingBlock = animationsEnabled ? (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={cardRevealTransition}
    >
      {heading}
    </motion.div>
  ) : (
    <div>{heading}</div>
  );

  return (
    <section
      ref={sectionRef}
      id="moments"
      aria-labelledby="tiktok-moments-title"
      className="relative overflow-hidden scroll-mt-24 bg-[linear-gradient(180deg,#0d1218_0%,#0c1015_44%,#0a0e12_100%)] px-5 pt-16 pb-8 text-[#f7f3ed] sm:px-8 sm:pt-20 sm:pb-10 md:px-12 lg:pt-24 lg:pb-12"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(216,201,167,0.08),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(120,165,177,0.08),transparent_30%),radial-gradient(circle_at_50%_82%,rgba(255,255,255,0.02),transparent_40%)]" />
      <div className="home-transition-warm-to-dark pointer-events-none absolute inset-x-0 top-0 h-20 sm:h-24 lg:h-28" />

      <div className="relative mx-auto max-w-7xl">
        {headingBlock}

        <div className="mt-12 grid gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-3 xl:gap-6">
          {tiktokMoments.map((moment, index) => (
            <TikTokMomentCard
              key={moment.tiktokUrl}
              {...moment}
              index={index}
              isVisible={isInView}
              animationsEnabled={animationsEnabled}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
