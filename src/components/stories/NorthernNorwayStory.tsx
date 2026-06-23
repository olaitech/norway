"use client";

import { ArrowUpRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import { RelatedLinkCards } from "@/src/components/shared/RelatedLinkCards";
import { useMounted } from "@/src/hooks/useMounted";

type StoryAsset = {
  src: string;
  alt: string;
  caption: string;
  position?: string;
};

type StoryLink = {
  label: string;
  href: string;
  description: string;
};

type StoryChapter = {
  id: string;
  label: string;
  title: string;
  intro: string;
  body: string;
  note: string;
  reverse?: boolean;
  primary: StoryAsset;
  secondary: StoryAsset;
  links: readonly StoryLink[];
};

const storyChapters: readonly StoryChapter[] = [
  {
    id: "lofoten-light-and-sea",
    label: "01 / Lofoten light and sea",
    title: "Fishing villages, short roads and water everywhere",
    intro:
      "The journey opens in Lofoten, where sea, harbor and mountain sit close together and the light changes the coast almost by the minute.",
    body:
      "This chapter is about pace more than distance. Each road return brings you back to the water, with red cabins, white beaches and a horizon that keeps widening.",
    note: "Harbor light / evening sea / compact distances",
    primary: {
      src: "/images/stories/northern-norway/lofoten1.jpg",
      alt: "A Lofoten fishing village with blue water and steep mountains behind it",
      caption: "Harbor life between sea and rock",
      position: "center 45%",
    },
    secondary: {
      src: "/images/stories/northern-norway/pexels-therato-5524671.jpg",
      alt: "A warm Arctic shoreline at sunset with a dark mountain silhouette",
      caption: "Low light across the shoreline",
      position: "center 55%",
    },
    links: [
      {
        label: "Lofoten destination guide",
        href: "/destinations/lofoten-islands",
        description: "A deeper look at villages, routes and light.",
      },
      {
        label: "Lofoten road trip",
        href: "/routes/lofoten-road-trip",
        description: "A slower route rhythm through the islands.",
      },
    ],
  },
  {
    id: "helgeland-coast-and-ferry-roads",
    label: "02 / Helgeland coast and ferry roads",
    title: "A coastline that asks you to slow down",
    intro:
      "Helgeland feels scattered in the best way. The route is built from crossings, islands and the pauses that ferries create in the day.",
    body:
      "Instead of a single line, the coastline becomes a sequence of small decisions: wait, board, cross, continue. That rhythm is what gives the region its calm.",
    note: "Island crossings / coastal pauses / longer margins",
    reverse: true,
    primary: {
      src: "/images/stories/northern-norway/ferry.jpg",
      alt: "A ferry moving through a narrow Norwegian fjord between green mountains",
      caption: "A crossing that becomes part of the journey",
      position: "center 53%",
    },
    secondary: {
      src: "/images/stories/northern-norway/helgeland.jpg",
      alt: "Sunset over the Helgeland coast with calm water and dark mountain shapes",
      caption: "Coastal light stretched over the sea",
      position: "center 50%",
    },
    links: [
      {
        label: "Helgeland coast route",
        href: "/routes/helgeland-coast-road-trip",
        description: "Island hopping, ferries and quiet roads.",
      },
      {
        label: "Norway ferry guide",
        href: "/guides/norway-ferry-guide-for-tourists",
        description: "A practical overview of crossings and timing.",
      },
    ],
  },
  {
    id: "senja-mountains-and-weather",
    label: "03 / Senja mountains and weather",
    title: "Raw coastline, mist and changing weather",
    intro:
      "Senja is the chapter where the landscape turns more severe. The mountains rise sharply, the weather shifts quickly and the coast feels wider and quieter.",
    body:
      "The best days here are rarely the most settled ones. Cloud, wind and low sun can soften the edges of the island and make the whole place feel more intimate.",
    note: "Mist / cliffs / weather as atmosphere",
    primary: {
      src: "/images/stories/northern-norway/pexels-therato-14145671.jpg",
      alt: "Snow-dusted northern mountains reflected in pale water at dusk",
      caption: "Weather pressing close to the shoreline",
      position: "center 52%",
    },
    secondary: {
      src: "/images/stories/northern-norway/pexels-therato-9366780.jpg",
      alt: "A dramatic Arctic beach with dark rock and a glowing sunset sky",
      caption: "A shoreline that changes with the sky",
      position: "center 55%",
    },
    links: [
      {
        label: "Best time to visit Norway",
        href: "/best-time-to-visit-norway",
        description: "Match Senja with the season that suits it best.",
      },
      {
        label: "Norway road trip routes",
        href: "/norway-road-trip-routes",
        description: "Use the landscape to shape your route rhythm.",
      },
    ],
  },
  {
    id: "tromso-and-northern-lights",
    label: "04 / Tromso and northern lights",
    title: "Arctic night, city light and the sky above the north",
    intro:
      "The final chapter moves toward Tromso, where the coast becomes a winter frame for aurora, dark water and the quiet pulse of the city.",
    body:
      "When the night settles in, the north feels less like a destination and more like a ceiling of weather, stars and moving color. The journey ends by looking upward.",
    note: "Aurora / winter horizon / long nights",
    reverse: true,
    primary: {
      src: "/images/stories/northern-norway/pexels-petra-nesti-1766376-27257801.jpg",
      alt: "Northern lights above a snowy Arctic landscape at night",
      caption: "Aurora drawing light across the sky",
      position: "center 44%",
    },
    secondary: {
      src: "/images/stories/northern-norway/pexels-francesco-ungaro-30173394.jpg",
      alt: "Aurora glowing above dark mountains and water in the Arctic night",
      caption: "A slower, darker counterpoint to the coast",
      position: "center 50%",
    },
    links: [
      {
        label: "Northern lights guide",
        href: "/guides/how-to-see-the-northern-lights-in-norway",
        description: "Where to base yourself and when to go.",
      },
      {
        label: "Tromso destination hub",
        href: "/destinations/tromso",
        description: "A city base for winter and aurora travel.",
      },
    ],
  },
];

const practicalLinks = [
  {
    label: "Routes",
    title: "Explore the route hub",
    href: "/routes",
    description: "Compare the northern arcs and choose the right road-trip shape.",
  },
  {
    label: "Ferries",
    title: "Understand ferry travel in Norway",
    href: "/guides/norway-ferry-guide-for-tourists",
    description: "Put crossings into the rhythm of the trip before finalizing the route.",
  },
  {
    label: "Northern lights",
    title: "See where northern lights travel fits best",
    href: "/guides/how-to-see-the-northern-lights-in-norway",
    description: "Match the story's darker chapters to a real aurora plan.",
  },
  {
    label: "Seasons",
    title: "Choose the best season for the north",
    href: "/guides/best-time-to-visit-northern-norway",
    description: "Align roads, light and weather before you book.",
  },
  {
    label: "Responsibility",
    title: "Keep the trip calm and low-impact",
    href: "/responsible-travel",
    description: "Move carefully through communities and fragile coastal places.",
  },
  {
    label: "Map",
    title: "Open the Norway travel map",
    href: "/map",
    description: "Trace the coast before locking in where to stop and sleep.",
  },
] as const;

function StoryImageFrame({
  asset,
  className = "",
  priority = false,
  sizes,
  showCaption = true,
  chromeless = false,
}: {
  asset: StoryAsset;
  className?: string;
  priority?: boolean;
  sizes: string;
  showCaption?: boolean;
  chromeless?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden ${
        chromeless
          ? "rounded-none border-0 bg-transparent shadow-none"
          : "rounded-[2rem] border border-white/10 bg-[#081015] shadow-[0_28px_90px_rgba(0,0,0,0.38)]"
      } ${className}`.trim()}
    >
      <Image
        src={asset.src}
        alt={asset.alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
        style={{ objectPosition: asset.position ?? "center" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,7,10,0)_35%,rgba(4,7,10,0.44)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(126,176,192,0.08),transparent_34%)]" />
      {showCaption ? (
        <p className="absolute bottom-4 left-4 max-w-[78%] text-[0.56rem] font-medium uppercase tracking-[0.3em] text-[#f4efe2]/74">
          {asset.caption}
        </p>
      ) : null}
    </div>
  );
}

function StoryLinkPill({ link }: { link: StoryLink }) {
  return (
    <Link
      href={link.href}
      className="group flex w-full items-start gap-3 rounded-full border border-white/10 bg-white/[0.025] px-4 py-3 text-left transition-colors hover:border-[#b79b63]/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b79b63]/45"
    >
      <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#f4efe2]/70 transition-colors group-hover:text-[#f4efe2]">
        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block text-[0.62rem] font-medium uppercase tracking-[0.24em] text-[#f4efe2]/82">
          {link.label}
        </span>
        <span className="mt-1 block text-sm font-light leading-6 text-[#f4efe2]/56">
          {link.description}
        </span>
      </span>
    </Link>
  );
}

function StoryChapterMobile({ chapter }: { chapter: StoryChapter }) {
  return (
    <div className="lg:hidden motion-reduce:!block">
      <div className="relative mx-auto max-w-7xl space-y-5">
        <p className="text-[0.62rem] font-medium uppercase tracking-[0.38em] text-[#d8c9a7]/74">
          {chapter.label}
        </p>
        <div className="max-w-3xl">
          <h2 className="font-serif text-[clamp(2.4rem,7vw,4rem)] font-normal leading-[0.92] tracking-[-0.05em] text-[#f4efe2]">
            {chapter.title}
          </h2>
          <p className="mt-5 text-sm font-light leading-[1.9] text-[#f4efe2]/68 sm:text-base">
            {chapter.intro}
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
          <StoryImageFrame
            asset={chapter.primary}
            priority={false}
            sizes="(min-width: 1024px) 0vw, (min-width: 640px) 55vw, 100vw"
            className="aspect-[4/5]"
          />
          <StoryImageFrame
            asset={chapter.secondary}
            priority={false}
            sizes="(min-width: 1024px) 0vw, (min-width: 640px) 45vw, 100vw"
            className="aspect-[4/5] sm:translate-y-6"
            showCaption={false}
          />
        </div>

        <p className="max-w-3xl text-sm font-light leading-[1.9] text-[#f4efe2]/62 sm:text-base">
          {chapter.body}
        </p>

        <p className="text-[0.58rem] font-medium uppercase tracking-[0.3em] text-[#d8c9a7]/52">
          {chapter.note}
        </p>

        <div className="flex flex-wrap gap-3">
          {chapter.links.map((link) => (
            <StoryLinkPill key={link.href} link={link} />
          ))}
        </div>
      </div>
    </div>
  );
}

function StoryChapterDesktop({
  chapter,
  index,
  priority,
}: {
  chapter: StoryChapter;
  index: number;
  priority: boolean;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion() === true;
  const mounted = useMounted();
  const animationsEnabled = mounted && !shouldReduceMotion;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 28,
    stiffness: 110,
    mass: 0.6,
  });

  const copyOpacity = useTransform(
    smoothProgress,
    [0, 0.15, 0.85, 1],
    [0.32, 1, 1, 0.62],
  );
  const copyY = useTransform(smoothProgress, [0, 1], ["14px", "-14px"]);

  const mediaX = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    chapter.reverse ? ["-10%", "0%", "5%"] : ["10%", "0%", "-5%"],
  );
  const mediaY = useTransform(smoothProgress, [0, 0.5, 1], ["0%", "2%", "0%"]);
  const mediaScale = useTransform(smoothProgress, [0, 0.5, 1], [1.06, 1, 1.03]);
  const mediaRotate = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    chapter.reverse ? ["-1.25deg", "0deg", "0.75deg"] : ["1.25deg", "0deg", "-0.75deg"],
  );

  const insetX = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    chapter.reverse ? ["8%", "0%", "-4%"] : ["-8%", "0%", "4%"],
  );
  const insetY = useTransform(smoothProgress, [0, 0.5, 1], ["8%", "0%", "-4%"]);
  const insetScale = useTransform(smoothProgress, [0, 0.5, 1], [0.95, 1, 0.98]);
  const insetOpacity = useTransform(
    smoothProgress,
    [0, 0.18, 0.85, 1],
    [0.08, 1, 1, 0.38],
  );

  const sectionBackgroundClassName =
    index % 2 === 0
      ? "bg-[linear-gradient(180deg,#09121a_0%,#05070a_100%)]"
      : "bg-[linear-gradient(180deg,#070b10_0%,#0b1117_100%)]";
  const sectionGlowClassName =
    index % 2 === 0
      ? "bg-[radial-gradient(circle_at_16%_18%,rgba(126,176,192,0.12),transparent_34%),radial-gradient(circle_at_84%_24%,rgba(216,201,167,0.07),transparent_32%),radial-gradient(circle_at_52%_82%,rgba(91,130,142,0.08),transparent_34%)]"
      : "bg-[radial-gradient(circle_at_16%_18%,rgba(216,201,167,0.08),transparent_34%),radial-gradient(circle_at_82%_24%,rgba(126,176,192,0.1),transparent_32%),radial-gradient(circle_at_52%_82%,rgba(72,102,114,0.08),transparent_34%)]";
  const desktopGridClassName = chapter.reverse
    ? "xl:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]"
    : "xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]";
  const overlapClassName = index === 0 ? "" : "-mt-8 sm:-mt-10 lg:-mt-[14vh] xl:-mt-[16vh]";

  return (
    <section
      ref={sectionRef}
      id={chapter.id}
      aria-labelledby={`${chapter.id}-title`}
      className={`relative scroll-mt-24 overflow-hidden ${overlapClassName} ${sectionBackgroundClassName} px-5 py-10 text-[#f4efe2] sm:px-8 sm:py-12 md:px-12 lg:py-0`}
    >
      <div className={`pointer-events-none absolute inset-0 ${sectionGlowClassName}`} />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
        animate={
          animationsEnabled
            ? {
                opacity: [0.7, 0.9, 0.76],
              }
            : undefined
        }
        transition={
          animationsEnabled
            ? { duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
            : undefined
        }
      >
        <motion.div
          className="absolute left-[-12%] top-[4%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(126,176,192,0.18),rgba(126,176,192,0.08)_34%,rgba(5,7,10,0)_72%)] blur-3xl"
          animate={
            animationsEnabled
              ? {
                  x: ["0%", "4%", "0%"],
                  y: ["0%", "3%", "0%"],
                }
              : undefined
          }
          transition={
            animationsEnabled
              ? { duration: 26, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
              : undefined
          }
        />
        <motion.div
          className="absolute right-[-10%] bottom-[6%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(216,201,167,0.11),rgba(216,201,167,0.05)_36%,rgba(5,7,10,0)_74%)] blur-3xl"
          animate={
            animationsEnabled
              ? {
                  x: ["0%", "-3%", "0%"],
                  y: ["0%", "-2%", "0%"],
                }
              : undefined
          }
          transition={
            animationsEnabled
              ? { duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
              : undefined
          }
        />
      </motion.div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(244,239,226,0.02),rgba(244,239,226,0))]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,rgba(244,239,226,0),rgba(244,239,226,0.02))]" />

      <div className="hidden lg:block motion-reduce:!hidden">
        <div className="relative mx-auto max-w-7xl lg:min-h-[clamp(155vh,175vh,205vh)]">
          <div className="lg:sticky lg:top-0 lg:flex lg:min-h-[100svh] lg:items-start lg:pt-[7vh]">
            <div
              className={`grid w-full gap-10 xl:gap-16 ${desktopGridClassName}`}
            >
              <motion.div
                style={
                  animationsEnabled
                    ? {
                        opacity: copyOpacity,
                        y: copyY,
                      }
                    : undefined
                }
                className={`flex max-w-xl flex-col justify-center ${
                  chapter.reverse ? "xl:order-2" : ""
                }`}
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="h-12 w-px bg-gradient-to-b from-transparent via-white/22 to-transparent" />
                  <p className="text-[0.62rem] font-medium uppercase tracking-[0.38em] text-[#d8c9a7]/74">
                    {chapter.label}
                  </p>
                </div>

                <h2
                  id={`${chapter.id}-title`}
                  className="max-w-2xl font-serif text-[clamp(3rem,5.9vw,5.6rem)] font-normal leading-[0.9] tracking-[-0.055em] text-[#f4efe2]"
                >
                  {chapter.title}
                </h2>

                <p className="mt-6 max-w-xl text-base font-light leading-[1.95] text-[#f4efe2]/68 sm:text-lg">
                  {chapter.intro}
                </p>

                <p className="mt-6 max-w-xl text-sm font-light leading-[1.9] text-[#f4efe2]/58 sm:text-base">
                  {chapter.body}
                </p>

                <p className="mt-7 text-[0.58rem] font-medium uppercase tracking-[0.3em] text-[#d8c9a7]/50">
                  {chapter.note}
                </p>

                <div className="mt-8 flex flex-col gap-3">
                  {chapter.links.map((link) => (
                    <StoryLinkPill key={link.href} link={link} />
                  ))}
                </div>
              </motion.div>

              <div className={`relative flex items-center justify-center ${chapter.reverse ? "xl:order-1" : ""}`}>
                <motion.div
                  style={
                    animationsEnabled
                      ? {
                          x: mediaX,
                          y: mediaY,
                          scale: mediaScale,
                          rotate: mediaRotate,
                        }
                      : undefined
                  }
                className="relative w-full max-w-[38rem] overflow-visible"
              >
                  <StoryImageFrame
                    asset={chapter.primary}
                    priority={priority}
                    sizes="(min-width: 1280px) 38rem, (min-width: 1024px) 44vw, 100vw"
                    className="aspect-[4/5]"
                  />

                  <motion.div
                    style={
                      animationsEnabled
                        ? {
                            x: insetX,
                            y: insetY,
                            scale: insetScale,
                            opacity: insetOpacity,
                          }
                        : undefined
                    }
                    className={`absolute -bottom-10 h-[46%] w-[44%] overflow-hidden rounded-[1.6rem] border border-white/12 bg-[#081015] shadow-[0_22px_70px_rgba(0,0,0,0.32)] ${
                      chapter.reverse ? "-left-8" : "-right-8"
                    }`}
                  >
                    <StoryImageFrame
                      asset={chapter.secondary}
                      priority={false}
                      sizes="(min-width: 1280px) 18rem, 40vw"
                      className="h-full w-full"
                      showCaption={false}
                      chromeless
                    />
                  </motion.div>

                  <div
                    className={`absolute -bottom-5 ${
                      chapter.reverse ? "left-8" : "right-8"
                    } rounded-full border border-white/10 bg-[#05070a]/65 px-4 py-2 backdrop-blur-sm`}
                  >
                    <p className="text-[0.54rem] font-medium uppercase tracking-[0.3em] text-[#f4efe2]/72">
                      {chapter.note}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <StoryChapterMobile chapter={chapter} />
    </section>
  );
}

export function NorthernNorwayStory() {
  const heroRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion() === true;
  const mounted = useMounted();
  const animationsEnabled = mounted && !shouldReduceMotion;

  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroImageY = useTransform(heroScrollProgress, [0, 1], ["0%", "12%"]);
  const heroGlowX = useTransform(heroScrollProgress, [0, 1], ["0%", "6%"]);
  const heroGlowY = useTransform(heroScrollProgress, [0, 1], ["0%", "8%"]);
  const heroGlowOpacity = useTransform(heroScrollProgress, [0, 1], [0.46, 0.2]);
  const heroTitleY = useTransform(heroScrollProgress, [0, 1], ["0px", "-18px"]);
  const heroTitleOpacity = useTransform(heroScrollProgress, [0, 1], [1, 0.7]);

  return (
    <main className="relative overflow-x-clip bg-[#05070a] text-[#f4efe2]">
      <section
        ref={heroRef}
        className="relative isolate flex min-h-[100svh] overflow-hidden bg-[#05070a]"
      >
        <Image
          src="/images/stories/northern-norway/pexels-therato-14699577.jpg"
          alt="A quiet Arctic coastline at sunset with mountains in silhouette"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 48%" }}
        />

        <motion.div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,10,0.92)_0%,rgba(5,7,10,0.54)_42%,rgba(5,7,10,0.26)_100%)]"
          style={
            animationsEnabled
              ? {
                  x: heroGlowX,
                  y: heroGlowY,
                  opacity: heroGlowOpacity,
                }
              : undefined
          }
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,10,0.42)_0%,rgba(5,7,10,0.08)_38%,rgba(5,7,10,0.9)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(126,176,192,0.16),transparent_34%),radial-gradient(circle_at_80%_22%,rgba(216,201,167,0.08),transparent_30%)]" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-end px-5 pb-14 pt-8 sm:px-8 sm:pb-16 md:px-12 lg:pb-20">
          <div className="mb-5 flex items-center gap-4">
            <div className="h-12 w-px bg-gradient-to-b from-transparent via-white/25 to-transparent" />
            <p className="text-[0.62rem] font-medium uppercase tracking-[0.4em] text-[#d8c9a7]/78">
              Story / Northern Norway
            </p>
          </div>

          <motion.div
            style={
              animationsEnabled
                ? {
                    y: heroTitleY,
                    opacity: heroTitleOpacity,
                  }
                : undefined
            }
            className="max-w-4xl"
          >
            <h1 className="font-serif text-[clamp(3.7rem,9vw,8.8rem)] font-normal leading-[0.88] tracking-[-0.065em] text-[#f4efe2]">
              Northern Norway: A Slow Journey Through Light
            </h1>
            <p className="mt-6 max-w-2xl text-base font-light leading-[1.95] text-[#f4efe2]/74 sm:text-lg md:text-xl">
              A calm scroll story through Lofoten, Helgeland, Senja and Tromso,
              shaped by sea light, ferry crossings, changing weather and the
              long northern night.
            </p>
          </motion.div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="#lofoten-light-and-sea"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-[0.62rem] font-medium uppercase tracking-[0.24em] text-[#f4efe2]/82 transition-colors hover:border-[#b79b63]/35 hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b79b63]/45"
            >
              Begin the story
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
            <p className="text-[0.58rem] font-medium uppercase tracking-[0.34em] text-[#d8c9a7]/52">
              Six scenes / slow travel / full-width imagery
            </p>
          </div>

          <div className="mt-12 flex items-center gap-4 text-[#f4efe2]/56">
            <span className="text-[0.58rem] font-medium uppercase tracking-[0.32em]">
              Scroll slowly
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 via-white/18 to-transparent" />
            <ChevronDown className="h-4 w-4" aria-hidden="true" />
          </div>
        </div>
      </section>

      {storyChapters.map((chapter, index) => (
        <StoryChapterDesktop
          key={chapter.id}
          chapter={chapter}
          index={index}
          priority={index === 0}
        />
      ))}

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#0c1218_0%,#050706_100%)] px-5 py-16 text-[#f4efe2] sm:px-8 sm:py-20 md:px-12 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(216,201,167,0.08),transparent_32%),radial-gradient(circle_at_84%_20%,rgba(126,176,192,0.08),transparent_32%),radial-gradient(circle_at_52%_78%,rgba(180,205,210,0.05),transparent_36%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(244,239,226,0.02),rgba(244,239,226,0))]" />

        <div className="relative mx-auto max-w-7xl">
          <RelatedLinkCards
            eyebrow="Continue planning"
            title="Plan the journey behind the story"
            intro="Turn the atmosphere into a real route with guides to ferries, seasons, northern lights and slower coastal travel."
            links={practicalLinks}
          />
        </div>
      </section>
    </main>
  );
}
