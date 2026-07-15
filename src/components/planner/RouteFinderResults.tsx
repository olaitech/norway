"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, RotateCcw } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { RouteFinderRecommendation } from "@/src/data/route-finder";

type RouteFinderResultsProps = {
  recommendations: ReadonlyArray<RouteFinderRecommendation>;
  onRestart: () => void;
};

export function RouteFinderResults({
  recommendations,
  onRestart,
}: RouteFinderResultsProps) {
  const shouldReduceMotion = useReducedMotion() === true;
  const [primary, ...alternatives] = recommendations;

  if (!primary) return null;

  const transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={transition}
    >
      <p className="text-[0.62rem] font-medium uppercase tracking-[0.32em] text-[#c6a15b]/78">
        Your route direction
      </p>
      <h3 className="mt-4 max-w-3xl font-serif text-[clamp(2.45rem,5.5vw,4.7rem)] font-normal leading-[0.9] tracking-[-0.055em] text-[#f4efe2]">
        Start here, then leave room for the weather.
      </h3>
      <p className="mt-5 max-w-2xl text-sm font-light leading-[1.82] text-[#f4efe2]/66 sm:text-base">
        Your answers point toward a route with the right pace, landscape and practical rhythm. Use the linked guides to refine it.
      </p>

      <article className="surface-fjord-media relative mt-10 overflow-hidden rounded-[1.35rem]">
        <div className="relative min-h-[440px] sm:min-h-[500px]">
          <Image
            src={primary.imageSrc}
            alt={primary.imageAlt}
            fill
            sizes="(min-width: 1280px) 900px, (min-width: 768px) calc(100vw - 6rem), calc(100vw - 2.5rem)"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,10,0.08)_14%,rgba(5,8,10,0.88)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
            <p className="text-[0.6rem] font-medium uppercase tracking-[0.3em] text-[#d8c9a7]/84">
              {primary.eyebrow}
            </p>
            <h4 className="mt-4 max-w-3xl font-serif text-[clamp(2.35rem,5vw,4.4rem)] font-normal leading-[0.9] tracking-[-0.05em] text-[#f4efe2]">
              {primary.title}
            </h4>
            <p className="mt-4 max-w-xl text-sm font-light leading-[1.82] text-[#f4efe2]/78 sm:text-base">
              {primary.summary}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={primary.href}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#d8c9a7]/48 bg-[#07100f]/40 px-5 text-[0.62rem] font-medium uppercase tracking-[0.22em] text-[#f4efe2] backdrop-blur-sm transition-colors hover:border-[#f4efe2]/70 hover:bg-[#07100f]/64 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#071418]"
              >
                Explore this route <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
              {primary.guides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="inline-flex min-h-11 items-center border-b border-[#d8c9a7]/42 px-2 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-[#f4efe2]/78 transition-colors hover:border-[#f4efe2] hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#071418]"
                >
                  {guide.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      {alternatives.length > 0 ? (
        <div className="mt-6">
          <p className="text-[0.6rem] font-medium uppercase tracking-[0.29em] text-[#c6a15b]/70">
            Two close alternatives
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {alternatives.slice(0, 2).map((alternative) => (
              <Link
                key={alternative.id}
                href={alternative.href}
                className="group rounded-[1.1rem] border border-white/10 bg-white/[0.025] p-6 transition-colors hover:border-[#d8c9a7]/34 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#071418]"
              >
                <p className="text-[0.58rem] font-medium uppercase tracking-[0.26em] text-[#c6a15b]/72">
                  {alternative.eyebrow}
                </p>
                <h4 className="mt-3 font-serif text-[1.75rem] leading-[0.95] tracking-[-0.04em] text-[#f4efe2]">
                  {alternative.title}
                </h4>
                <p className="mt-3 text-sm font-light leading-[1.75] text-[#f4efe2]/62">
                  {alternative.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-[0.6rem] font-medium uppercase tracking-[0.22em] text-[#d8c9a7]">
                  Open guide <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={onRestart}
        className="mt-8 inline-flex min-h-11 items-center gap-2 border-b border-white/22 px-1 text-[0.61rem] font-medium uppercase tracking-[0.22em] text-[#f4efe2]/72 transition-colors hover:border-[#d8c9a7]/58 hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#071418]"
      >
        <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
        Start again
      </button>
    </motion.div>
  );
}
