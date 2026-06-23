
"use client";

import { useEffect, useRef, useState } from "react";

import { useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Bus,
  CalendarDays,
  Compass,
  Leaf,
  Map,
  MapPin,
  Route,
  Sparkles,
  Wallet,
} from "lucide-react";
import Link from "next/link";

import { SectionHeading } from "@/src/components/ui/section-heading";
import { getStartHereItems, type StartHereItem } from "@/src/lib/planning/startHereItems";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

const DESKTOP_REVEAL_PROGRESS = 0.82;

const sectionBackgroundClassName =
  "bg-[linear-gradient(180deg,#95816f_0%,#a29180_34%,#91806f_62%,#716155_100%)]";
const sectionGlowClassName =
  "bg-[radial-gradient(circle_at_16%_18%,rgba(244,236,228,0.08),transparent_30%),radial-gradient(circle_at_84%_20%,rgba(104,88,74,0.09),transparent_33%),radial-gradient(circle_at_52%_80%,rgba(44,35,29,0.12),transparent_42%)]";

type StartHereCardProps = {
  card: StartHereItem;
  index: number;
  className?: string;
  interactive?: boolean;
};

type SectionHeadingBlockProps = {
  titleId: string;
};

function StartHereCard({
  card,
  index,
  className = "",
  interactive = true,
}: StartHereCardProps) {
  const Icon = iconByName[card.icon] ?? Compass;
  const isLightCard = index % 4 !== 3;

  const cardClassName = isLightCard
    ? "border-[#7b6858]/24 bg-[linear-gradient(165deg,rgba(236,227,217,0.8),rgba(215,202,187,0.66))] shadow-[0_18px_52px_rgba(35,26,18,0.14)] hover:border-[#6b5a4a]/36 hover:shadow-[0_22px_60px_rgba(35,26,18,0.18)]"
    : "border-[#d8c9b5]/16 bg-[linear-gradient(165deg,rgba(45,37,31,0.8),rgba(20,15,12,0.77))] shadow-[0_18px_52px_rgba(13,9,7,0.28)] hover:border-[#dfceb7]/30 hover:shadow-[0_22px_60px_rgba(13,9,7,0.34)]";
  const eyebrowClassName = isLightCard ? "text-[#6b5a4a]/82" : "text-[#ead9c7]/76";
  const iconWrapperClassName = isLightCard
    ? "border-[#8a725c]/22 bg-[#ece1d3]/72 text-[#4d3f33] group-hover:bg-[#e3d5c6] group-hover:text-[#1b1815]"
    : "border-[#d8c9b5]/18 bg-[#f7f3ed]/10 text-[#f7f2ea]/80 group-hover:bg-[#f7f3ed]/14 group-hover:text-[#fffaf4]";
  const titleClassName = isLightCard ? "text-[#211913]" : "text-[#f7f2ea]";
  const descriptionClassName = isLightCard ? "text-[#332923]/72" : "text-[#f7f2ea]/72";
  const ctaClassName = isLightCard
    ? "border-[#7b6858]/22 bg-[#e4d7c8]/54 text-[#2f251f]/72 group-hover:border-[#6b5a4a]/34 group-hover:text-[#1c1511]"
    : "border-[#d8c9b5]/18 bg-[#f7f3ed]/8 text-[#f7f2ea]/72 group-hover:border-[#efe3d4]/30 group-hover:text-[#fffaf4]";

  return (
    <Link
      href={card.href}
      prefetch={interactive}
      tabIndex={interactive ? 0 : -1}
      aria-hidden={interactive ? undefined : true}
      className={`group flex h-full flex-col rounded-[1.2rem] border p-5 backdrop-blur-xl transition-[transform,border-color,box-shadow,background-color] duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7d6855]/55 ${
        interactive ? "pointer-events-auto" : "pointer-events-none"
      } ${cardClassName} ${className}`}
    >
      <div className="flex items-start justify-between gap-3">
        <p className={`text-[0.58rem] font-medium uppercase tracking-[0.26em] ${eyebrowClassName}`}>
          {card.eyebrow}
        </p>
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${iconWrapperClassName}`}
        >
          <Icon className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
      <h3 className={`mt-5 font-serif text-[1.6rem] leading-[1.04] tracking-[-0.03em] ${titleClassName}`}>
        {card.title}
      </h3>
      <p className={`mt-4 text-sm font-light leading-[1.78] sm:text-[0.97rem] ${descriptionClassName}`}>
        {card.description}
      </p>
      <div
        className={`mt-6 inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-[0.58rem] font-medium uppercase tracking-[0.22em] transition-colors ${ctaClassName}`}
      >
        Open path
        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
      </div>
    </Link>
  );
}

function SectionHeadingBlock({ titleId }: SectionHeadingBlockProps) {
  return (
    <SectionHeading
      id={titleId}
      eyebrow="Start here"
      heading="Start your Norway journey"
      intro="Norway is easier to plan when you begin with the right question. Choose what you want to understand first."
      eyebrowClassName="text-[#6b5a4a]/84"
      headingClassName="text-[#211913]"
      introClassName="text-[#332923]/72"
    />
  );
}

export function StartHereSection() {
  const shouldReduceMotion = useReducedMotion() === true;
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const startHereCards = getStartHereItems();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktopRail, setIsDesktopRail] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      setIsDesktopRail(false);
      return;
    }

    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const updateIsDesktopRail = () => {
      setIsDesktopRail(mediaQuery.matches);
    };

    updateIsDesktopRail();
    mediaQuery.addEventListener("change", updateIsDesktopRail);

    return () => {
      mediaQuery.removeEventListener("change", updateIsDesktopRail);
    };
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (shouldReduceMotion || !isDesktopRail || !startHereCards.length) {
      return;
    }

    const section = sectionRef.current;
    const pin = pinRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!section || !pin || !viewport || !track) {
      return;
    }

    const slides = gsap.utils.toArray<HTMLElement>("[data-start-here-slide]", track);

    if (!slides.length) {
      return;
    }

    const updateActiveIndex = (progress: number) => {
      const lastIndex = slides.length - 1;
      const segmentSize = DESKTOP_REVEAL_PROGRESS / slides.length;
      const revealProgress = Math.min(progress, DESKTOP_REVEAL_PROGRESS);
      const nextIndex = Math.min(
        lastIndex,
        Math.max(0, Math.floor(revealProgress / segmentSize + 0.25)),
      );

      setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
    };

    const getTravel = () => Math.max(0, track.scrollWidth - viewport.clientWidth);
    const getEndDistance = () => {
      const travel = getTravel();
      const minimum = Math.round(window.innerHeight * 2.75);
      return Math.max(travel, minimum);
    };

    gsap.set(track, { x: 0, willChange: "transform" });
    updateActiveIndex(0);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${getEndDistance()}`,
        pin,
        scrub: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => updateActiveIndex(self.progress),
        onRefresh: (self) => updateActiveIndex(self.progress),
      },
    });

    tl.to(
      track,
      {
        x: () => -getTravel(),
        ease: "none",
        duration: DESKTOP_REVEAL_PROGRESS,
      },
      0,
    );
    tl.to({}, { duration: 1 - DESKTOP_REVEAL_PROGRESS }, DESKTOP_REVEAL_PROGRESS);

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [shouldReduceMotion, isDesktopRail, startHereCards.length]);

  if (!startHereCards.length) {
    return null;
  }

  const activeCard = startHereCards[Math.min(activeIndex, startHereCards.length - 1)];
  const headingBlock = <SectionHeadingBlock titleId="start-your-journey-title" />;

  return (
    <section
      ref={sectionRef}
      id="start-here"
      aria-labelledby="start-your-journey-title"
      className={`relative overflow-hidden scroll-mt-24 ${sectionBackgroundClassName} px-5 pt-[3.5rem] pb-[4.5rem] text-[#211a16] sm:px-8 sm:pt-[4rem] sm:pb-[5rem] md:px-12 lg:pt-[4.75rem] lg:pb-[6rem]`}
    >
      <div className={`pointer-events-none absolute inset-0 ${sectionGlowClassName}`} />
      <div className="home-transition-dark-to-warm pointer-events-none absolute inset-x-0 top-0 h-20 sm:h-24 lg:h-28" />

      <div ref={pinRef} className="w-full">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:px-12 lg:min-h-[100svh] lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-center lg:gap-12 xl:gap-16">
          <div className="max-w-xl">
            {headingBlock}

            <div className="mt-8 hidden items-center gap-4 lg:flex">
              <div className="h-px flex-1 bg-[#6c5643]/18" />
              <p className="whitespace-nowrap text-[0.52rem] font-medium uppercase tracking-[0.34em] text-[#6c5643]/70">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(startHereCards.length).padStart(2, "0")}
              </p>
              <div className="h-px flex-1 bg-[#6c5643]/18" />
            </div>
            <p className="mt-3 hidden text-[0.58rem] font-medium uppercase tracking-[0.3em] text-[#6c5643]/56 lg:block">
              {activeCard.eyebrow}
            </p>
          </div>

          <div className="w-full lg:flex lg:items-center">
            <div
              ref={viewportRef}
              className="relative w-full lg:h-[clamp(29rem,58vh,40rem)] lg:overflow-hidden lg:rounded-[2rem] lg:border lg:border-white/10 lg:bg-[linear-gradient(180deg,rgba(11,15,18,0.84),rgba(5,8,11,0.95))] lg:p-3 lg:shadow-[0_22px_80px_rgba(0,0,0,0.32),0_0_32px_rgba(126,176,192,0.04)]"
            >
              <div className="pointer-events-none hidden lg:block lg:absolute lg:inset-0 lg:bg-[radial-gradient(circle_at_22%_18%,rgba(244,236,228,0.06),transparent_36%),radial-gradient(circle_at_82%_28%,rgba(151,182,190,0.06),transparent_34%)]" />

              <div className="relative lg:h-full">
                <div
                  ref={trackRef}
                  className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4 lg:flex lg:h-full lg:gap-5"
                >
                  {startHereCards.map((card, index) => {
                    const isActive = index === activeIndex;
                    const interactive = !isDesktopRail || isActive;

                    return (
                      <div
                        key={card.id}
                        data-start-here-slide
                        className="flex h-full w-full lg:w-[clamp(25rem,28vw,28rem)] lg:flex-none"
                      >
                        <StartHereCard
                          card={card}
                          index={index}
                          className={`w-full ${interactive ? "" : "opacity-85"}`}
                          interactive={interactive}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pointer-events-none absolute inset-x-5 bottom-4 hidden items-center justify-between gap-3 lg:flex lg:inset-x-6 lg:bottom-5">
                <p className="text-[0.52rem] font-medium uppercase tracking-[0.34em] text-[#d8c9a7]/58">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(startHereCards.length).padStart(2, "0")}
                </p>
                <p className="text-[0.52rem] font-medium uppercase tracking-[0.34em] text-[#d8c9a7]/42">
                  {activeCard.eyebrow}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
