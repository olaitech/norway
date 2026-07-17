"use client";

import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";

import type {
  HistoricalArticleEvidenceFact,
  HistoricalArticleExperience,
  HistoricalArticleImageLabel,
  HistoricalArticlePeriod,
  HistoricalArticleStoryBlock,
  JournalArticle,
  JournalArticleImage,
  JournalArticleSection,
  JournalArticleSource,
} from "@/src/data/journal-articles";

type HistoricalJournalArticleProps = {
  article: JournalArticle;
  relatedArticles: JournalArticle[];
  experience: HistoricalArticleExperience;
};

type PeriodBlockProps = {
  periodId: string;
  anchorId?: string;
  children: ReactNode;
  className?: string;
};

const planningLinks = [
  { label: "Journal", href: "/journal" },
  { label: "Routes", href: "/routes" },
  { label: "Lofoten Road Trip", href: "/routes/lofoten-road-trip" },
  {
    label: "Helgeland Coast Route",
    href: "/routes/helgeland-coast-road-trip",
  },
  { label: "Northern Lights", href: "/northern-lights-norway" },
  { label: "Best Time to Visit", href: "/best-time-to-visit-norway" },
  { label: "Lofoten Guide", href: "/destinations/lofoten-islands" },
];

function getSection(article: JournalArticle, heading: string) {
  return article.sections?.find((section) => section.heading === heading);
}

function getArticleImages(article: JournalArticle): JournalArticleImage[] {
  return [
    { src: article.image, alt: article.imageAlt },
    ...(article.sections?.flatMap((section) => [
      ...(section.image ? [section.image] : []),
      ...(section.imageGroups?.flatMap((group) => group.images) ?? []),
    ]) ?? []),
  ];
}

function getImage(article: JournalArticle, src: string) {
  return getArticleImages(article).find((image) => image.src === src);
}

function getSource(article: JournalArticle, marker: string) {
  return article.sourceGroups
    ?.flatMap((group) => group.sources)
    .find((source) => source.marker === marker);
}

function PeriodBlock({
  periodId,
  anchorId,
  children,
  className,
}: PeriodBlockProps) {
  return (
    <section
      id={anchorId}
      data-historical-period={periodId}
      className={className}
    >
      {children}
    </section>
  );
}

function SourceMarker({ marker }: { marker?: string }) {
  if (!marker) {
    return null;
  }

  return (
    <p className="mt-8 text-[0.58rem] font-medium uppercase tracking-[0.25em] text-[#d8c9a7]/70">
      Sources {marker}
    </p>
  );
}

function ArchiveLabel({ label }: { label: HistoricalArticleImageLabel }) {
  return (
    <figcaption className="mt-4 border-t border-current/20 pt-3 text-sm leading-[1.65] opacity-70">
      <p className="text-[0.59rem] font-medium uppercase tracking-[0.25em] opacity-85">
        {label.category}
      </p>
      <p className="mt-2">{label.caption}</p>
      {label.provenance ? (
        <p className="mt-3 text-xs leading-[1.65] opacity-80">
          <span className="mr-2 font-medium uppercase tracking-[0.2em]">
            Provenance
          </span>
          {label.provenance}
        </p>
      ) : null}
    </figcaption>
  );
}

function HistoricalTimeRail({ periods }: { periods: HistoricalArticlePeriod[] }) {
  const shouldReduceMotion = useReducedMotion() === true;
  const [activePeriod, setActivePeriod] = useState(periods[0]?.id);

  useEffect(() => {
    if (shouldReduceMotion || !periods.length) {
      return;
    }

    const periodSections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-historical-period]"),
    );

    if (!periodSections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        const nextPeriod = activeEntry?.target.getAttribute(
          "data-historical-period",
        );

        if (nextPeriod) {
          setActivePeriod(nextPeriod);
        }
      },
      {
        rootMargin: "-30% 0px -54% 0px",
        threshold: [0.05, 0.25, 0.5],
      },
    );

    periodSections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [periods, shouldReduceMotion]);

  const periodLinks = periods.map((period) => {
    const isActive = period.id === activePeriod;

    return (
      <li key={period.id} className="relative">
        <a
          href={`#period-${period.id}`}
          aria-current={isActive ? "step" : undefined}
          className={`group block border-l pl-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/60 focus-visible:ring-offset-4 focus-visible:ring-offset-[#07100f] ${
            isActive
              ? "border-[#f4efe2] text-[#f4efe2]"
              : "border-white/14 text-[#f4efe2]/42 hover:border-[#d8c9a7]/52 hover:text-[#f4efe2]/74"
          }`}
        >
          <span className="block text-[0.58rem] font-medium uppercase tracking-[0.22em]">
            {period.years}
          </span>
          <span className="mt-1 block text-[0.68rem] font-medium uppercase tracking-[0.17em]">
            {period.label}
          </span>
        </a>
      </li>
    );
  });

  return (
    <>
      <nav
        aria-label="Historical periods"
        className="sticky top-8 hidden self-start lg:block"
      >
        <p className="text-[0.58rem] font-medium uppercase tracking-[0.29em] text-[#d8c9a7]/66">
          Time rail
        </p>
        <ol className="mt-6 space-y-6">{periodLinks}</ol>
      </nav>
      <nav
        aria-label="Historical periods"
        className="sticky top-0 z-30 -mx-5 border-y border-[#d8c9a7]/16 bg-[#07100f]/96 px-5 py-3 backdrop-blur-sm lg:hidden"
      >
        <ol className="flex gap-5 overflow-x-auto pb-1">{periodLinks}</ol>
      </nav>
    </>
  );
}

function HistoricalHero({
  article,
  experience,
}: {
  article: JournalArticle;
  experience: HistoricalArticleExperience;
}) {
  const shouldReduceMotion = useReducedMotion() === true;
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const updateViewport = () => setIsDesktop(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  const titleLines = experience.heroTitleLines ?? [article.title];

  return (
    <section className="relative isolate overflow-hidden bg-[#050a0b] text-[#f4efe2]">
      <header className="relative z-20 px-5 py-6 sm:px-8 md:px-12">
        <div className="mx-auto flex max-w-[92rem] items-center justify-between gap-5">
          <Link
            href="/journal"
            className="inline-flex items-center gap-3 text-[0.61rem] font-medium uppercase tracking-[0.27em] text-[#f4efe2]/72 transition-colors hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/60"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to journal
          </Link>
          <nav className="flex max-w-[calc(100vw-8rem)] items-center gap-4 overflow-x-auto rounded-full border border-[#8fafa8]/12 bg-[#0b171a]/84 px-4 py-2.5 sm:gap-7 sm:px-6">
            <Link
              href="/"
              className="shrink-0 text-[0.58rem] font-medium uppercase tracking-[0.2em] text-[#f4efe2]/56 transition-colors hover:text-[#f4efe2]"
            >
              Home
            </Link>
            <span className="shrink-0 text-[0.58rem] font-medium uppercase tracking-[0.2em] text-[#d8c9a7]">
              Journal
            </span>
            <Link
              href="/routes"
              className="shrink-0 text-[0.58rem] font-medium uppercase tracking-[0.2em] text-[#f4efe2]/56 transition-colors hover:text-[#f4efe2]"
            >
              Routes
            </Link>
            <Link
              href="/map"
              className="shrink-0 text-[0.58rem] font-medium uppercase tracking-[0.2em] text-[#f4efe2]/56 transition-colors hover:text-[#f4efe2]"
            >
              Map
            </Link>
          </nav>
        </div>
      </header>

      <div className="mx-auto grid min-h-[calc(90svh-5.5rem)] max-w-[92rem] lg:grid-cols-[0.72fr_1.08fr] lg:items-stretch">
        <div className="relative z-10 flex flex-col justify-end px-5 pb-12 pt-16 sm:px-8 md:px-12 lg:px-16 lg:pb-16 lg:pt-24">
          <p className="text-[0.62rem] font-medium uppercase tracking-[0.33em] text-[#d8c9a7]/82">
            {article.kicker ?? article.category}
          </p>
          <p className="mt-7 text-[0.61rem] font-medium uppercase tracking-[0.26em] text-[#f4efe2]/48">
            1890 — 1955
          </p>
          <h1 className="mt-6 font-serif text-[clamp(3.6rem,6.4vw,7.2rem)] leading-[0.82] tracking-[-0.07em]">
            {titleLines.map((line, index) => (
              <span key={line} className="block">
                {line}
                {index < titleLines.length - 1 ? " " : null}
              </span>
            ))}
          </h1>
          <p className="mt-8 max-w-xl text-base font-light leading-[1.8] text-[#f4efe2]/70 sm:text-lg">
            {article.subtitle}
          </p>
          <a
            href="#period-home-and-work"
            className="mt-10 inline-flex w-fit items-center gap-3 text-[0.6rem] font-medium uppercase tracking-[0.25em] text-[#d8c9a7]/78 transition-colors hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/60"
          >
            <span className="h-px w-9 bg-current" />
            Scroll through the rooms
          </a>
        </div>

        <div className="relative min-h-[46svh] border-y border-white/10 lg:min-h-0 lg:border-x lg:border-y-0">
          <motion.div
            className="absolute inset-0"
            initial={false}
            animate={
              isDesktop && !shouldReduceMotion
                ? { scale: [1.01, 1.045], y: [0, -10] }
                : { scale: 1, y: 0 }
            }
            transition={
              isDesktop && !shouldReduceMotion
                ? {
                    duration: 18,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  }
                : { duration: 0 }
            }
          >
            <Image
              src={article.image}
              alt={article.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover object-center"
            />
          </motion.div>
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(5,10,11,0.14),transparent_35%,rgba(5,10,11,0.12)),linear-gradient(180deg,rgba(5,10,11,0.1),rgba(5,10,11,0.46))]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-[92rem] flex-wrap gap-x-7 gap-y-3 border-t border-white/10 px-5 py-5 text-[0.58rem] font-medium uppercase tracking-[0.22em] text-[#f4efe2]/52 sm:px-8 md:px-12 lg:px-16">
        <span>{article.region}</span>
        <span>{article.readTime}</span>
        <span>{article.publishedLabel}</span>
        <span>{article.updatedLabel}</span>
      </div>
    </section>
  );
}

function IntroBlock({
  section,
  eyebrow,
}: {
  section: JournalArticleSection;
  eyebrow?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl py-20 sm:py-28">
      <p className="text-[0.61rem] font-medium uppercase tracking-[0.3em] text-[#d8c9a7]/70">
        {eyebrow ?? "A visual record, read with care"}
      </p>
      <h2 className="mt-6 font-serif text-[clamp(2.6rem,5.1vw,4.8rem)] leading-[0.94] tracking-[-0.055em] text-[#f4efe2]">
        Rooms hold traces. Records give them context.
      </h2>
      <div className="mt-10 space-y-6 text-lg font-light leading-[1.85] text-[#f4efe2]/70 sm:text-xl">
        {section.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <SourceMarker marker={section.sourceMarker} />
    </div>
  );
}

function ObjectChapter({
  article,
  block,
  section,
}: {
  article: JournalArticle;
  block: Extract<HistoricalArticleStoryBlock, { type: "chapter" }>;
  section: JournalArticleSection;
}) {
  const mainImage = getImage(article, block.imageSrc);
  const supportingImages = (block.supportingImageSrcs ?? [])
    .map((src) => getImage(article, src))
    .filter((image): image is JournalArticleImage => Boolean(image));
  const isPaper = block.tone === "paper";
  const imageFirst = block.imagePosition === "left";
  const toneClass = isPaper
    ? "bg-[#e8e0d4] text-[#1c211f]"
    : "bg-[#07100f] text-[#f4efe2]";
  const mutedText = isPaper ? "text-[#1c211f]/69" : "text-[#f4efe2]/68";
  const rule = isPaper ? "border-[#4d534b]/18" : "border-white/10";

  return (
    <div className={`${toneClass} px-5 py-16 sm:px-8 sm:py-24 md:px-12 lg:py-28`}>
      <div
        className={`mx-auto grid max-w-[82rem] items-start gap-10 lg:grid-cols-2 lg:gap-16 ${
          imageFirst ? "" : "lg:[&>*:first-child]:order-2"
        }`}
      >
        <div className="lg:sticky lg:top-7">
          {mainImage ? (
            <figure>
              <div className={`relative aspect-[4/5] overflow-hidden border ${rule} bg-[#0b1515]`}>
                <Image
                  src={mainImage.src}
                  alt={mainImage.alt}
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
              </div>
              <ArchiveLabel label={block.imageLabel} />
            </figure>
          ) : null}
        </div>

        <div className="min-w-0 lg:py-10">
          <p className={`text-[0.6rem] font-medium uppercase tracking-[0.3em] ${mutedText}`}>
            {block.chapterLabel}
          </p>
          <h2 className="mt-5 font-serif text-[clamp(3rem,5.6vw,5.3rem)] leading-[0.86] tracking-[-0.065em]">
            {block.title}
          </h2>
          <p className={`mt-7 text-[0.66rem] font-medium uppercase tracking-[0.25em] ${mutedText}`}>
            {section.heading}
          </p>
          <div className={`mt-8 space-y-12 border-t pt-8 ${rule}`}>
            {section.body.map((paragraph, index) => (
              <p
                key={paragraph}
                className={`max-w-xl text-base font-light leading-[1.9] sm:text-lg ${
                  index === 0 ? "text-current" : mutedText
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
          <SourceMarker marker={section.sourceMarker} />
        </div>
      </div>

      {supportingImages.length ? (
        <div className="mx-auto mt-12 max-w-[82rem] lg:mt-16">
          <div
            className={
              supportingImages.length > 1
                ? "grid gap-5 sm:grid-cols-2"
                : "ml-auto max-w-2xl"
            }
          >
            {supportingImages.map((image, index) => (
              <figure
                key={image.src}
                className={
                  index === supportingImages.length - 1 &&
                  supportingImages.length === 3
                    ? "sm:col-span-2 sm:max-w-md"
                    : ""
                }
              >
                <div className={`relative overflow-hidden border ${rule} ${index === 0 ? "aspect-[4/5]" : "aspect-[5/4]"}`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 32vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </figure>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function EditorialSection({
  section,
  tone = "dark",
}: {
  section: JournalArticleSection;
  tone?: "dark" | "paper";
}) {
  const isPaper = tone === "paper";
  const surface = isPaper
    ? "bg-[#e8e0d4] text-[#1c211f]"
    : "bg-[#07100f] text-[#f4efe2]";
  const mutedText = isPaper ? "text-[#1c211f]/68" : "text-[#f4efe2]/68";
  const rule = isPaper ? "border-[#4d534b]/18" : "border-white/10";

  return (
    <div className={`${surface} px-5 py-20 sm:px-8 sm:py-28 md:px-12 lg:py-32`}>
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.34fr_0.66fr]">
        <p className={`text-[0.6rem] font-medium uppercase tracking-[0.29em] ${mutedText}`}>
          Historical context
        </p>
        <div className={`border-t pt-8 ${rule}`}>
          <h2 className="font-serif text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.9] tracking-[-0.055em]">
            {section.heading}
          </h2>
          <div className={`mt-8 space-y-6 text-base font-light leading-[1.9] sm:text-lg ${mutedText}`}>
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <SourceMarker marker={section.sourceMarker} />
        </div>
      </div>
    </div>
  );
}

function PeriodTransition({
  block,
}: {
  block: Extract<HistoricalArticleStoryBlock, { type: "transition" }>;
}) {
  const shouldReduceMotion = useReducedMotion() === true;

  return (
    <div className="relative flex min-h-[58svh] items-end overflow-hidden bg-[#040708] px-5 py-14 text-[#f4efe2] sm:px-8 sm:py-20 md:px-12 lg:min-h-[64svh] lg:px-16 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_22%,rgba(148,172,167,0.12),transparent_24%),linear-gradient(145deg,rgba(216,201,167,0.08),transparent_35%,rgba(4,7,8,0)_70%)]" />
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto w-full max-w-[82rem]"
      >
        <p className="font-serif text-[clamp(6.5rem,17vw,15rem)] leading-none tracking-[-0.08em] text-[#d8c9a7]/84">
          {block.year}
        </p>
        <h2 className="mt-6 max-w-4xl font-serif text-[clamp(2.7rem,5.6vw,5.8rem)] leading-[0.88] tracking-[-0.06em]">
          {block.line}
        </h2>
      </motion.div>
    </div>
  );
}

function EvidenceStrip({
  article,
  facts,
}: {
  article: JournalArticle;
  facts: HistoricalArticleEvidenceFact[];
}) {
  return (
    <div className="bg-[#ded3c3] px-5 py-20 text-[#1c211f] sm:px-8 sm:py-24 md:px-12 lg:py-28">
      <div className="mx-auto max-w-[82rem]">
        <p className="text-[0.6rem] font-medium uppercase tracking-[0.29em] text-[#4a514a]/68">
          Historical evidence
        </p>
        <h2 className="mt-5 max-w-3xl font-serif text-[clamp(2.4rem,4.8vw,4.5rem)] leading-[0.92] tracking-[-0.055em]">
          Records that help the rooms speak.
        </h2>
        <ol className="mt-12 border-y border-[#4d534b]/20">
          {facts.map((fact) => {
            const source = getSource(article, fact.sourceMarker);

            return (
              <li
                key={`${fact.year}-${fact.fact}`}
                className="grid gap-5 border-b border-[#4d534b]/16 py-7 last:border-b-0 md:grid-cols-[0.2fr_0.56fr_0.24fr] md:items-start"
              >
                <p className="font-serif text-3xl tracking-[-0.05em] text-[#1c211f]">
                  {fact.year}
                </p>
                <p className="text-base font-light leading-[1.75] text-[#1c211f]/75">
                  {fact.fact}
                </p>
                {source ? (
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[0.6rem] font-medium uppercase tracking-[0.19em] text-[#3e4b46]/76 underline decoration-[#3e4b46]/32 underline-offset-4 transition-colors hover:text-[#1c211f]"
                  >
                    [{source.marker}] {source.label}
                  </a>
                ) : null}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

function HumanStorySequence({
  article,
  block,
  section,
}: {
  article: JournalArticle;
  block: Extract<HistoricalArticleStoryBlock, { type: "humanStory" }>;
  section: JournalArticleSection;
}) {
  const shouldReduceMotion = useReducedMotion() === true;
  const sources = block.sourceMarkers
    .map((marker) => getSource(article, marker))
    .filter((source): source is JournalArticleSource => Boolean(source));

  return (
    <div className="overflow-hidden bg-[#020609] px-5 py-20 text-[#f4efe2] sm:px-8 sm:py-28 md:px-12 lg:py-32">
      <div className="mx-auto max-w-[82rem]">
        <p className="text-[0.6rem] font-medium uppercase tracking-[0.3em] text-[#d8c9a7]/72">
          Night of 31 August 1944
        </p>
        <h2 className="mt-4 font-serif text-[clamp(3.2rem,7vw,7rem)] leading-[0.82] tracking-[-0.07em]">
          Lånan, Vega Archipelago
        </h2>
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div className="rounded-sm border border-[#8fafa8]/18 bg-[#061015] p-5 sm:p-7">
            <svg
              viewBox="0 0 640 170"
              role="img"
              aria-label="A simple route line from Lånan across the North Sea to Shetland"
              className="h-auto w-full"
            >
              <defs>
                <linearGradient id="lanan-route" x1="0" x2="1">
                  <stop stopColor="#d8c9a7" stopOpacity="0.94" />
                  <stop offset="1" stopColor="#8fafa8" stopOpacity="0.52" />
                </linearGradient>
              </defs>
              <motion.path
                d="M38 112 C172 26 348 158 598 54"
                fill="none"
                stroke="url(#lanan-route)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0.08, opacity: 0.4 }}
                whileInView={shouldReduceMotion ? undefined : { pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
              <circle cx="38" cy="112" r="5" fill="#f4efe2" />
              <circle cx="598" cy="54" r="5" fill="#d8c9a7" />
            </svg>
            <div className="mt-5 text-[0.58rem] font-medium uppercase tracking-[0.2em] text-[#d8c9a7]/72">
              Lånan → North Sea → Shetland
            </div>
          </div>
          <div>
            <p className="text-[0.6rem] font-medium uppercase tracking-[0.27em] text-[#d8c9a7]/70">
              Human story · later accounts
            </p>
            <h3 className="mt-5 font-serif text-[clamp(2.4rem,4.8vw,4.6rem)] leading-[0.9] tracking-[-0.055em]">
              {section.heading}
            </h3>
            <ol className="mt-10 space-y-7 border-t border-white/10 pt-8">
              {block.steps.map((step, index) => (
                <li key={step} className="grid gap-4 sm:grid-cols-[2.75rem_1fr]">
                  <span className="text-[0.62rem] font-medium tracking-[0.22em] text-[#d8c9a7]/64">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base font-light leading-[1.85] text-[#f4efe2]/70 sm:text-lg">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
            <div className="mt-10 space-y-5 border-t border-white/10 pt-7 text-sm font-light leading-[1.82] text-[#f4efe2]/62 sm:text-base">
              <p className="text-[0.58rem] font-medium uppercase tracking-[0.22em] text-[#d8c9a7]/62">
                Recorded account
              </p>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {sources.length ? (
              <div className="mt-10 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/10 pt-6">
                {sources.map((source) => (
                  <a
                    key={source.marker}
                    href={source.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[0.6rem] font-medium uppercase tracking-[0.2em] text-[#d8c9a7]/76 underline decoration-[#d8c9a7]/30 underline-offset-4 transition-colors hover:text-[#f4efe2]"
                  >
                    [{source.marker}] {source.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

function ClosingSequence({
  article,
  block,
  section,
}: {
  article: JournalArticle;
  block: Extract<HistoricalArticleStoryBlock, { type: "closing" }>;
  section: JournalArticleSection;
}) {
  const shouldReduceMotion = useReducedMotion() === true;
  const images = block.imageSrcs
    .map((src) => getImage(article, src))
    .filter((image): image is JournalArticleImage => Boolean(image));

  return (
    <div className="bg-[#07100f] px-5 py-20 text-[#f4efe2] sm:px-8 sm:py-28 md:px-12 lg:py-32">
      <div className="mx-auto max-w-[82rem]">
        <p className="max-w-4xl font-serif text-[clamp(2.7rem,5.7vw,5.6rem)] leading-[0.9] tracking-[-0.065em] text-[#f4efe2]">
          The objects remain. The routines changed. The coast remembers both.
        </p>
        <div className="mt-14 grid gap-5 md:grid-cols-[0.82fr_1.08fr_0.72fr] md:items-end">
          {images.map((image, index) => (
            <motion.figure
              key={image.src}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={index === 1 ? "md:pb-12" : ""}
            >
              <div className={`relative overflow-hidden border border-white/10 ${index === 1 ? "aspect-[4/5]" : "aspect-[3/4]"}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 768px) 28vw, 100vw"
                  className="object-cover"
                />
              </div>
            </motion.figure>
          ))}
        </div>
        <div className="mt-20 grid max-w-4xl gap-10 lg:grid-cols-[0.26fr_0.74fr]">
          <p className="text-[0.6rem] font-medium uppercase tracking-[0.29em] text-[#d8c9a7]/66">
            Final reflection
          </p>
          <div className="space-y-6 border-t border-white/10 pt-8 text-base font-light leading-[1.9] text-[#f4efe2]/70 sm:text-lg">
            <h2 className="font-serif text-[clamp(2.4rem,4.6vw,4.2rem)] leading-[0.92] tracking-[-0.055em] text-[#f4efe2]">
              {section.heading}
            </h2>
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ResearchNotes({ article }: { article: JournalArticle }) {
  return (
    <section className="bg-[#e8e0d4] px-5 py-20 text-[#1c211f] sm:px-8 sm:py-28 md:px-12 lg:py-32">
      <div className="mx-auto max-w-[82rem]">
        <p className="text-[0.6rem] font-medium uppercase tracking-[0.29em] text-[#4a514a]/68">
          Research notes
        </p>
        <h2 className="mt-5 font-serif text-[clamp(2.7rem,5vw,4.8rem)] leading-[0.9] tracking-[-0.06em]">
          Sources and further reading
        </h2>
        <div className="mt-12 grid gap-12 md:grid-cols-2">
          {article.sourceGroups?.map((group) => (
            <section key={group.title}>
              <h3 className="border-t border-[#4d534b]/20 pt-4 text-[0.61rem] font-medium uppercase tracking-[0.24em] text-[#38433f]/76">
                {group.title}
              </h3>
              <ul className="mt-6 space-y-4">
                {group.sources.map((source) => (
                  <li id={`source-${source.marker}`} key={source.marker}>
                    <a
                      href={source.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-light leading-[1.7] text-[#1c211f]/72 underline decoration-[#4d534b]/32 underline-offset-4 transition-colors hover:text-[#1c211f] sm:text-base"
                    >
                      <span className="mr-2 text-[0.6rem] font-medium tracking-[0.16em] text-[#3e4b46]/70">
                        [{source.marker}]
                      </span>
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        {article.sourcesNote ? (
          <section className="mt-14 max-w-4xl border-t border-[#4d534b]/20 pt-7">
            <h3 className="text-[0.61rem] font-medium uppercase tracking-[0.24em] text-[#38433f]/76">
              Material requiring further verification
            </h3>
            <p className="mt-5 text-sm font-light leading-[1.85] text-[#1c211f]/68 sm:text-base">
              {article.sourcesNote}
            </p>
          </section>
        ) : null}
      </div>
    </section>
  );
}

function ContinueExploring({
  article,
  relatedArticles,
}: Pick<HistoricalJournalArticleProps, "article" | "relatedArticles">) {
  return (
    <>
      {article.relatedLinks?.length ? (
        <section className="border-t border-white/10 bg-[#07100f] px-5 py-16 text-[#f4efe2] sm:px-8 sm:py-20 md:px-12">
          <div className="mx-auto max-w-[82rem]">
            <p className="text-[0.6rem] font-medium uppercase tracking-[0.29em] text-[#d8c9a7]/68">
              {article.relatedLinksLabel ?? "Continue exploring"}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {article.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-2 border border-[#8fafa8]/18 px-5 py-3 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-[#f4efe2]/76 transition-colors hover:border-[#d8c9a7]/38 hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/60"
                >
                  {link.label}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-t border-white/10 bg-[#07100f] px-5 py-20 text-[#f4efe2] sm:px-8 sm:py-24 md:px-12">
        <div className="mx-auto max-w-[82rem]">
          <p className="text-[0.6rem] font-medium uppercase tracking-[0.29em] text-[#d8c9a7]/68">
            Related journal notes
          </p>
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.map((related) => (
              <Link
                key={related.slug}
                href={`/journal/${related.slug}`}
                className="group border border-white/10 p-6 transition-colors hover:border-[#d8c9a7]/32 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/60"
              >
                <p className="text-[0.57rem] font-medium uppercase tracking-[0.23em] text-[#d8c9a7]/62">
                  {related.category}
                </p>
                <h3 className="mt-5 font-serif text-[1.9rem] leading-[0.96] tracking-[-0.04em]">
                  {related.title}
                </h3>
                <p className="mt-4 text-sm font-light leading-[1.75] text-[#f4efe2]/60">
                  {related.excerpt}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-14 border-t border-white/10 pt-7">
            <p className="text-[0.6rem] font-medium uppercase tracking-[0.29em] text-[#d8c9a7]/68">
              Planning links
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {planningLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[0.6rem] font-medium uppercase tracking-[0.19em] text-[#f4efe2]/64 underline decoration-[#d8c9a7]/30 underline-offset-4 transition-colors hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/60"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function StoryBlock({
  article,
  block,
  anchorId,
}: {
  article: JournalArticle;
  block: HistoricalArticleStoryBlock;
  anchorId?: string;
}) {
  const section = "sectionHeading" in block
    ? getSection(article, block.sectionHeading)
    : undefined;

  if (block.type === "transition") {
    return (
      <PeriodBlock periodId={block.periodId} anchorId={anchorId}>
        <PeriodTransition block={block} />
      </PeriodBlock>
    );
  }

  if (block.type === "evidence") {
    return (
      <PeriodBlock periodId={block.periodId} anchorId={anchorId}>
        <EvidenceStrip article={article} facts={block.facts} />
      </PeriodBlock>
    );
  }

  if (!section) {
    return null;
  }

  if (block.type === "intro") {
    return (
      <PeriodBlock periodId={block.periodId} anchorId={anchorId} className="bg-[#07100f] px-5 text-[#f4efe2] sm:px-8 md:px-12">
        <IntroBlock section={section} eyebrow={block.eyebrow} />
      </PeriodBlock>
    );
  }

  if (block.type === "chapter") {
    return (
      <PeriodBlock periodId={block.periodId} anchorId={anchorId}>
        <ObjectChapter article={article} block={block} section={section} />
      </PeriodBlock>
    );
  }

  if (block.type === "humanStory") {
    return (
      <PeriodBlock periodId={block.periodId} anchorId={anchorId}>
        <HumanStorySequence article={article} block={block} section={section} />
      </PeriodBlock>
    );
  }

  if (block.type === "closing") {
    return (
      <PeriodBlock periodId={block.periodId} anchorId={anchorId}>
        <ClosingSequence article={article} block={block} section={section} />
      </PeriodBlock>
    );
  }

  return (
    <PeriodBlock periodId={block.periodId} anchorId={anchorId}>
      <EditorialSection section={section} tone={block.tone} />
    </PeriodBlock>
  );
}

export function HistoricalJournalArticle({
  article,
  relatedArticles,
  experience,
}: HistoricalJournalArticleProps) {
  const seenPeriods = new Set<string>();

  return (
    <main className="min-h-screen overflow-x-clip bg-[#07100f]">
      <HistoricalHero article={article} experience={experience} />
      <section className="relative bg-[#07100f] px-5 sm:px-8 md:px-12">
        <div className="mx-auto grid max-w-[92rem] gap-10 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-14">
          <HistoricalTimeRail periods={experience.periods} />
          <div>
            {experience.storyBlocks.map((block, index) => {
              const isFirstPeriodBlock = !seenPeriods.has(block.periodId);
              seenPeriods.add(block.periodId);

              return (
                <StoryBlock
                  key={
                    "sectionHeading" in block
                      ? `${block.type}-${block.sectionHeading}`
                      : `${block.type}-${block.periodId}-${index}`
                  }
                  article={article}
                  block={block}
                  anchorId={
                    isFirstPeriodBlock ? `period-${block.periodId}` : undefined
                  }
                />
              );
            })}
          </div>
        </div>
      </section>
      <ResearchNotes article={article} />
      <ContinueExploring article={article} relatedArticles={relatedArticles} />
    </main>
  );
}
