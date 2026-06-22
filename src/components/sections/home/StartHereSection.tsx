"use client";

import {
  motion,
  useInView,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
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
import { useRef, useState } from "react";

import { SectionHeading } from "@/src/components/ui/section-heading";
import { useMounted } from "@/src/hooks/useMounted";
import { getStartHereItems, type StartHereItem } from "@/src/lib/planning/startHereItems";

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
const DESKTOP_BASE_HEIGHT_VH = 176;
const DESKTOP_HEIGHT_PER_CARD_VH = 16.5;
const CARD_SHIFT_DISTANCE = 40;

const sectionBackgroundClassName =
  "bg-[linear-gradient(180deg,#ab957d_0%,#b9a48d_34%,#a9937c_62%,#7d6859_100%)]";
const sectionGlowClassName =
  "bg-[radial-gradient(circle_at_16%_18%,rgba(248,241,231,0.12),transparent_30%),radial-gradient(circle_at_84%_20%,rgba(96,78,61,0.11),transparent_33%),radial-gradient(circle_at_52%_80%,rgba(53,41,33,0.16),transparent_42%)]";

type StartHereCardProps = {
  card: StartHereItem;
  index: number;
  className?: string;
  interactive?: boolean;
};

type PinnedStartHereCardProps = {
  card: StartHereItem;
  index: number;
  total: number;
  activeIndex: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
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
    ? "border-[#7d6855]/28 bg-[linear-gradient(165deg,rgba(244,235,225,0.82),rgba(220,201,181,0.66))] shadow-[0_20px_60px_rgba(35,26,18,0.18)] hover:border-[#6f5c49]/42 hover:shadow-[0_24px_68px_rgba(35,26,18,0.22)]"
    : "border-[#d8c9b5]/20 bg-[linear-gradient(165deg,rgba(49,39,32,0.8),rgba(22,17,14,0.76))] shadow-[0_20px_60px_rgba(13,9,7,0.32)] hover:border-[#dfceb7]/36 hover:shadow-[0_24px_68px_rgba(13,9,7,0.38)]";
  const eyebrowClassName = isLightCard ? "text-[#6c5643]/86" : "text-[#ead9c7]/78";
  const iconWrapperClassName = isLightCard
    ? "border-[#8b725a]/24 bg-[#efe2d2]/78 text-[#4d3f33] group-hover:bg-[#e8d7c6] group-hover:text-[#1b1815]"
    : "border-[#d8c9b5]/18 bg-[#f7f3ed]/10 text-[#f7f2ea]/80 group-hover:bg-[#f7f3ed]/14 group-hover:text-[#fffaf4]";
  const titleClassName = isLightCard ? "text-[#201812]" : "text-[#f7f2ea]";
  const descriptionClassName = isLightCard ? "text-[#322822]/74" : "text-[#f7f2ea]/74";
  const ctaClassName = isLightCard
    ? "border-[#7d6855]/24 bg-[#ead9c7]/58 text-[#2f251f]/74 group-hover:border-[#6f5c49]/38 group-hover:text-[#1c1511]"
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

function PinnedStartHereCard({
  card,
  index,
  total,
  activeIndex,
  progress,
}: PinnedStartHereCardProps) {
  const segmentSize = DESKTOP_REVEAL_PROGRESS / total;
  const start = index * segmentSize;
  const enter = start + segmentSize * 0.2;
  const hold = start + segmentSize * 0.78;
  const exit = index === total - 1 ? 1 : start + segmentSize;
  const isActive = index === activeIndex;

  const x = useTransform(progress, [start, enter, hold, exit], [CARD_SHIFT_DISTANCE, 0, 0, -CARD_SHIFT_DISTANCE]);
  const opacity = useTransform(progress, [start, enter, hold, exit], [0, 1, 1, 0]);
  const scale = useTransform(progress, [start, enter, hold, exit], [0.985, 1, 1, 0.985]);

  return (
    <motion.div
      aria-hidden={!isActive}
      className={`absolute inset-0 flex items-center justify-center px-2 sm:px-4 ${
        isActive ? "pointer-events-auto" : "pointer-events-none"
      }`}
      style={{ x, opacity, scale, zIndex: isActive ? 2 : 1 }}
    >
      <StartHereCard
        card={card}
        index={index}
        className="h-full w-full max-w-[34rem]"
        interactive={isActive}
      />
    </motion.div>
  );
}

function SectionHeadingBlock({ titleId }: SectionHeadingBlockProps) {
  return (
    <SectionHeading
      id={titleId}
      eyebrow="Start here"
      heading="Start your Norway journey"
      intro="Norway is easier to plan when you begin with the right question. Choose what you want to understand first."
      eyebrowClassName="text-[#6c5643]/88"
      headingClassName="text-[#201812]"
      introClassName="text-[#322822]/74"
    />
  );
}

export function StartHereSection() {
  const mounted = useMounted();
  const shouldReduceMotion = useReducedMotion() === true;
  const animationsEnabled = mounted && !shouldReduceMotion;
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-12% 0px" });
  const startHereCards = getStartHereItems();
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!animationsEnabled || !startHereCards.length) {
      return;
    }

    const segmentSize = DESKTOP_REVEAL_PROGRESS / startHereCards.length;
    const lastIndex = startHereCards.length - 1;
    const nextIndex = Math.min(
      lastIndex,
      Math.max(0, Math.floor(Math.min(latest, DESKTOP_REVEAL_PROGRESS) / segmentSize + 0.25)),
    );

    setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
  });

  if (!startHereCards.length) {
    return null;
  }

  const desktopPinnedHeightVh = Math.min(
    320,
    Math.max(220, DESKTOP_BASE_HEIGHT_VH + startHereCards.length * DESKTOP_HEIGHT_PER_CARD_VH),
  );
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
      <div className="home-transition-dark-to-warm pointer-events-none absolute inset-x-0 top-0 h-16" />
      <div className="home-transition-warm-to-dark pointer-events-none absolute inset-x-0 bottom-0 h-16" />

      <div className="block lg:hidden motion-reduce:!block">
        <div className="relative mx-auto max-w-7xl">
          {animationsEnabled ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              {headingBlock}
            </motion.div>
          ) : (
            headingBlock
          )}

          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4 xl:gap-6">
            {startHereCards.map((card, index) => {
              const cardContent = <StartHereCard card={card} index={index} className="w-full" />;

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
      </div>

      <div
        className="hidden lg:block motion-reduce:!hidden"
        style={{ minHeight: `${desktopPinnedHeightVh}vh` }}
      >
        <div className="sticky top-0 h-screen">
          <div className="flex h-full items-center">
            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-12">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-center lg:gap-12 xl:gap-16">
                <div className="max-w-xl">
                  {animationsEnabled ? (
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {headingBlock}
                    </motion.div>
                  ) : (
                    headingBlock
                  )}

                  <div className="mt-8 flex items-center gap-4">
                    <div className="h-px flex-1 bg-[#6c5643]/18" />
                    <p className="whitespace-nowrap text-[0.52rem] font-medium uppercase tracking-[0.34em] text-[#6c5643]/70">
                      {String(activeIndex + 1).padStart(2, "0")} /{" "}
                      {String(startHereCards.length).padStart(2, "0")}
                    </p>
                    <div className="h-px flex-1 bg-[#6c5643]/18" />
                  </div>
                  <p className="mt-3 text-[0.58rem] font-medium uppercase tracking-[0.3em] text-[#6c5643]/56">
                    {activeCard.eyebrow}
                  </p>
                </div>

                <div className="relative">
                  <div className="relative h-[clamp(29rem,58vh,40rem)] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,16,20,0.86),rgba(6,9,12,0.94))] p-3 shadow-[0_26px_90px_rgba(0,0,0,0.36),0_0_42px_rgba(126,176,192,0.05)] sm:p-4">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(244,239,226,0.08),transparent_36%),radial-gradient(circle_at_82%_28%,rgba(151,182,190,0.08),transparent_34%)]" />
                    <div className="relative h-full">
                      {startHereCards.map((card, index) => (
                        <PinnedStartHereCard
                          key={card.id}
                          card={card}
                          index={index}
                          total={startHereCards.length}
                          activeIndex={activeIndex}
                          progress={scrollYProgress}
                        />
                      ))}
                    </div>

                    <div className="pointer-events-none absolute inset-x-5 bottom-4 flex items-center justify-between gap-3 sm:inset-x-6 sm:bottom-5">
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
          </div>
        </div>
      </div>
    </section>
  );
}
