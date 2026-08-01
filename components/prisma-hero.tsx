"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { NavBar } from "@/src/components/navigation/NavBar";

import styles from "./prisma-hero.module.css";

gsap.registerPlugin(ScrollTrigger);

type HeroScene = {
  title: string;
  label: string;
  intro: string;
  heroImage: string;
  cardImage: string;
  href: string;
  cta: string;
  backgroundPosition?: string;
};

const scenes: readonly HeroScene[] = [
  {
    title: "Norway",
    label: "Slow travel field notes",
    intro:
      "A cinematic guide to Norway’s quiet roads, dramatic fjords, northern light skies and remote places worth slowing down for.",
    heroImage: "/images/hero/preikestolen.png",
    cardImage: "/images/hero/hero (2).jpg",
    href: "/routes",
    cta: "Explore routes",
    backgroundPosition: "57% center",
  },
  {
    title: "Lofoten",
    label: "Island archipelago / Nordland",
    intro:
      "A chain of steep mountains, sheltered harbours and long coastal light, made for an unhurried drive between small fishing villages.",
    heroImage:
      "/images/destinations/lofoten/lofoten-midnight-sun-beach.jpg",
    cardImage: "/images/cards/lofoten.png",
    href: "/destinations/lofoten-islands",
    cta: "Explore Lofoten",
  },
  {
    title: "Senja",
    label: "Wild island / Troms",
    intro:
      "A quieter northern island where steep coastal ridges, narrow fjords and small communities meet along one of Norway’s most atmospheric roads.",
    heroImage: "/images/destinations/senja/senja-hero.jpg",
    cardImage: "/images/cards/senja.png",
    href: "/destinations/senja",
    cta: "Explore Senja",
  },
  {
    title: "Helgeland",
    label: "Coastal passage / Nordland",
    intro:
      "A composed journey of ferry crossings, low island silhouettes and open coastal roads along a less hurried stretch of northern Norway.",
    heroImage: "/images/helgeland/torghatten-sunset.png",
    cardImage: "/images/cards/helgeland.png",
    href: "/destinations/helgeland-coast",
    cta: "Explore Helgeland",
  },
  {
    title: "Tromsø",
    label: "Arctic city / Troms",
    intro:
      "A compact northern city framed by mountains and water, balancing warm interiors, Arctic culture and easy departures into darker skies.",
    heroImage: "/images/destinations/tromso/tromso-summer-night.jpg",
    cardImage: "/images/cards/tromso.png",
    href: "/destinations/tromso",
    cta: "Explore Tromsø",
  },
] as const;

const lastSceneIndex = scenes.length - 1;
const timelineDuration = lastSceneIndex + 0.32;

function formatSceneNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function PrismaHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const desktopRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const cardTrackRef = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLSpanElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const desktop = desktopRef.current;
    const pin = pinRef.current;
    const cardTrack = cardTrackRef.current;
    const progressFill = progressFillRef.current;

    if (!section || !desktop || !pin || !cardTrack || !progressFill) {
      return;
    }

    const motionQuery = window.matchMedia(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
    );
    let animationContext: gsap.Context | undefined;
    let refreshFrame = 0;

    const buildAnimations = () => {
      animationContext?.revert();
      animationContext = undefined;
      window.cancelAnimationFrame(refreshFrame);
      setActiveIndex(0);

      if (!motionQuery.matches) {
        return;
      }

      animationContext = gsap.context(() => {
          const backgrounds = gsap.utils.toArray<HTMLElement>(
            "[data-hero-background]",
            desktop,
          );
          const copies = gsap.utils.toArray<HTMLElement>(
            "[data-hero-copy]",
            desktop,
          );
          const cards = gsap.utils.toArray<HTMLElement>(
            "[data-hero-card]",
            cardTrack,
          );

          gsap.set(backgrounds, { autoAlpha: 0, scale: 1.035 });
          gsap.set(backgrounds[0], { autoAlpha: 1, scale: 1 });
          gsap.set(copies, { autoAlpha: 0, y: 20 });
          gsap.set(copies[0], { autoAlpha: 1, y: 0 });
          gsap.set(cards, {
            opacity: 0.42,
            scale: 0.92,
            transformOrigin: "center center",
          });
          gsap.set(cards[0], { opacity: 1, scale: 1 });
          gsap.set(cardTrack, { x: 0, willChange: "transform" });
          gsap.set(progressFill, { scaleY: 0.2, transformOrigin: "top center" });

          const updateActiveScene = (progress: number) => {
            const timelineTime = progress * timelineDuration;
            const nextIndex = Math.min(
              lastSceneIndex,
              Math.max(0, Math.floor(timelineTime + 0.34)),
            );

            setActiveIndex((current) =>
              current === nextIndex ? current : nextIndex,
            );
            gsap.set(progressFill, { scaleY: 0.2 + progress * 0.8 });
          };

          const timeline = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () =>
                `+=${Math.max(
                  window.innerHeight * lastSceneIndex * 0.88,
                  2600,
                )}`,
              pin,
              scrub: 0.7,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => updateActiveScene(self.progress),
              onRefresh: (self) => updateActiveScene(self.progress),
            },
          });

          for (let index = 1; index < scenes.length; index += 1) {
            const transitionStart = index - 1 + 0.32;

            timeline
              .to(
                backgrounds[index - 1],
                { autoAlpha: 0, duration: 0.68 },
                transitionStart,
              )
              .fromTo(
                backgrounds[index],
                { autoAlpha: 0, scale: 1.035 },
                { autoAlpha: 1, scale: 1, duration: 0.68 },
                transitionStart,
              )
              .to(
                copies[index - 1],
                { autoAlpha: 0, y: -18, duration: 0.36 },
                transitionStart,
              )
              .fromTo(
                copies[index],
                { autoAlpha: 0, y: 20 },
                { autoAlpha: 1, y: 0, duration: 0.44 },
                transitionStart + 0.2,
              )
              .to(
                cardTrack,
                {
                  x: () => -(cards[index].offsetLeft - cards[0].offsetLeft),
                  duration: 0.68,
                },
                transitionStart,
              )
              .to(
                cards[index - 1],
                { opacity: 0.42, scale: 0.92, duration: 0.68 },
                transitionStart,
              )
              .to(
                cards[index],
                { opacity: 1, scale: 1, duration: 0.68 },
                transitionStart,
              );
          }

          timeline.to({}, { duration: 0.32 }, lastSceneIndex);

          refreshFrame = window.requestAnimationFrame(() => {
            ScrollTrigger.refresh();
          });
      }, section);
    };

    buildAnimations();
    motionQuery.addEventListener("change", buildAnimations);

    return () => {
      motionQuery.removeEventListener("change", buildAnimations);
      window.cancelAnimationFrame(refreshFrame);
      animationContext?.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative z-40 w-full scroll-mt-24 bg-[#050607] text-[#f4efe2]"
    >
      <div ref={desktopRef} className={styles.desktopExperience}>
        <div
          ref={pinRef}
          className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-[#050607]"
        >
          <div className="absolute inset-0" aria-hidden="true">
            {scenes.map((scene, index) => (
              <div
                key={scene.title}
                data-hero-background
                className={`absolute inset-0 ${
                  index === 0 ? "visible opacity-100" : "invisible opacity-0"
                }`}
              >
                <Image
                  src={scene.heroImage}
                  alt=""
                  fill
                  sizes="100vw"
                  preload={index === 0}
                  loading={index === 0 ? undefined : "lazy"}
                  className="object-cover"
                  style={{ objectPosition: scene.backgroundPosition ?? "center" }}
                />
              </div>
            ))}
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(2,5,8,0.94)_0%,rgba(2,5,8,0.78)_34%,rgba(2,5,8,0.35)_63%,rgba(2,5,8,0.12)_100%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,5,8,0.46)_0%,rgba(2,5,8,0.04)_38%,rgba(2,5,8,0.62)_100%)]"
          />
          <div
            aria-hidden="true"
            className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-overlay"
          />

          <NavBar />

          <div className="relative z-10 flex h-full items-center px-6 pb-10 pt-28 xl:px-10">
            <div className="mx-auto grid w-full max-w-[96rem] grid-cols-[2.5rem_minmax(0,0.82fr)_minmax(28rem,1.18fr)] items-center gap-8 xl:grid-cols-[3rem_minmax(0,0.78fr)_minmax(32rem,1.22fr)] xl:gap-12">
              <aside
                aria-label={`Scene ${formatSceneNumber(activeIndex)} of ${formatSceneNumber(lastSceneIndex)}`}
                className="flex h-[clamp(17rem,42vh,24rem)] flex-col items-center"
              >
                <span
                  aria-hidden="true"
                  className="font-mono text-[0.62rem] tracking-[0.2em] text-[#f4efe2]/72"
                >
                  {formatSceneNumber(activeIndex)}
                </span>
                <span
                  aria-hidden="true"
                  className="relative my-4 w-px flex-1 overflow-hidden bg-[#f4efe2]/18"
                >
                  <span
                    ref={progressFillRef}
                    className="absolute inset-0 block bg-[linear-gradient(180deg,#f4efe2_0%,#d8c9a7_100%)]"
                    style={{ transform: "scaleY(0.2)", transformOrigin: "top" }}
                  />
                </span>
                <span
                  aria-hidden="true"
                  className="font-mono text-[0.62rem] tracking-[0.2em] text-[#f4efe2]/42"
                >
                  {formatSceneNumber(lastSceneIndex)}
                </span>
              </aside>

              <div className="relative h-[clamp(29rem,62vh,40rem)] min-w-0">
                {scenes.map((scene, index) => (
                  <div
                    key={scene.title}
                    data-hero-copy
                    aria-hidden={activeIndex !== index}
                    className={`absolute inset-0 flex flex-col justify-center pr-4 ${
                      index === 0
                        ? "visible opacity-100"
                        : "invisible opacity-0"
                    }`}
                  >
                    <p className="text-[0.62rem] font-medium uppercase tracking-[0.34em] text-[#d8c9a7]/82">
                      {scene.label}
                    </p>
                    {index === 0 ? (
                      <h1
                        id="hero-title"
                        className="mt-5 font-serif text-[clamp(4.4rem,7.6vw,8.75rem)] font-normal leading-[0.82] tracking-[-0.06em] text-[#f4efe2]"
                      >
                        {scene.title}
                      </h1>
                    ) : (
                      <h2 className="mt-5 font-serif text-[clamp(4.4rem,7.6vw,8.75rem)] font-normal leading-[0.82] tracking-[-0.06em] text-[#f4efe2]">
                        {scene.title}
                      </h2>
                    )}
                    <p className="mt-7 max-w-[32rem] text-sm font-light leading-[1.75] text-[#f4efe2]/76 xl:text-base">
                      {scene.intro}
                    </p>
                    <Link
                      href={scene.href}
                      tabIndex={activeIndex === index ? 0 : -1}
                      className="group mt-8 inline-flex h-12 w-fit items-center gap-4 rounded-full border border-[#f4efe2]/18 bg-[#f4efe2] py-1 pl-6 pr-1 text-sm font-medium text-[#07100f] shadow-[0_20px_70px_rgba(0,0,0,0.34)] transition-colors duration-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/65 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050607] motion-reduce:transition-none"
                    >
                      {scene.cta}
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#07100f]">
                        <ArrowRight
                          className="h-4 w-4 text-[#f4efe2]"
                          aria-hidden="true"
                        />
                      </span>
                    </Link>
                  </div>
                ))}
              </div>

              <div
                aria-hidden="true"
                className="min-w-0 overflow-hidden pl-2"
              >
                <div
                  ref={cardTrackRef}
                  className="flex w-max items-center gap-5"
                >
                  {scenes.map((scene, index) => (
                    <article
                      key={scene.title}
                      data-hero-card
                      className={`relative h-[clamp(27rem,62vh,40rem)] w-[clamp(19rem,30vw,28rem)] shrink-0 overflow-hidden rounded-[1.6rem] border border-white/14 bg-[#07100f] shadow-[0_30px_90px_rgba(0,0,0,0.34)] ${
                        index === 0 ? "scale-100 opacity-100" : "scale-[0.92] opacity-40"
                      }`}
                    >
                      <Image
                        src={scene.cardImage}
                        alt=""
                        fill
                        sizes="(min-width: 1536px) 28rem, (min-width: 1024px) 30vw, 86vw"
                        loading={index === 0 ? "eager" : "lazy"}
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,5,8,0.05)_42%,rgba(2,5,8,0.78)_100%)]" />
                      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                        <div>
                          <p className="text-[0.56rem] font-medium uppercase tracking-[0.3em] text-[#d8c9a7]/78">
                            {formatSceneNumber(index)} / {formatSceneNumber(lastSceneIndex)}
                          </p>
                          <p className="mt-2 font-serif text-[2rem] leading-none tracking-[-0.04em] text-[#f4efe2]">
                            {scene.title}
                          </p>
                        </div>
                        <span className="mb-1 h-2 w-2 rounded-full bg-[#f4efe2]/72 shadow-[0_0_0_5px_rgba(244,239,226,0.08)]" />
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.simpleExperience}>
        <div className="relative min-h-[100svh] overflow-hidden bg-[#050607]">
          <Image
            src={scenes[0].heroImage}
            alt="A traveller sitting on Preikestolen above a Norwegian fjord at dusk"
            fill
            sizes="100vw"
            className="object-cover object-[57%_center]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,5,8,0.92)_0%,rgba(2,5,8,0.58)_58%,rgba(2,5,8,0.18)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,5,8,0.4)_0%,rgba(2,5,8,0.08)_38%,rgba(2,5,8,0.84)_100%)]" />
          <NavBar />

          <div
            className={`${styles.simpleIntro} relative z-10 flex min-h-[100svh] items-end px-5 pb-12 pt-32 sm:px-8 sm:pb-16 md:px-12`}
          >
            <div className="max-w-3xl">
              <p className="text-[0.62rem] font-medium uppercase tracking-[0.34em] text-[#d8c9a7]/82">
                {scenes[0].label}
              </p>
              <h1 className="mt-5 font-serif text-[clamp(4.4rem,20vw,8.5rem)] font-normal leading-[0.82] tracking-[-0.06em] text-[#f4efe2]">
                {scenes[0].title}
              </h1>
              <p className="mt-7 max-w-[34rem] text-sm font-light leading-[1.75] text-[#f4efe2]/78 sm:text-base">
                {scenes[0].intro}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Link
                  href={scenes[0].href}
                  className="group inline-flex h-12 w-fit items-center gap-4 rounded-full border border-[#f4efe2]/18 bg-[#f4efe2] py-1 pl-6 pr-1 text-sm font-medium text-[#07100f] shadow-[0_20px_70px_rgba(0,0,0,0.34)] transition-colors duration-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/65 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050607] motion-reduce:transition-none"
                >
                  {scenes[0].cta}
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#07100f]">
                    <ArrowRight
                      className="h-4 w-4 text-[#f4efe2]"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
                <p className="font-mono text-[0.58rem] uppercase tracking-[0.24em] text-[#f4efe2]/52">
                  01 / {formatSceneNumber(lastSceneIndex)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden bg-[linear-gradient(180deg,#050607_0%,#071418_100%)] px-5 py-16 sm:px-8 sm:py-20 md:px-12">
          <div className="mx-auto max-w-[96rem]">
            <div className="max-w-2xl">
              <p className="text-[0.6rem] font-medium uppercase tracking-[0.32em] text-[#d8c9a7]/72">
                Four places to continue
              </p>
              <h2 className="mt-4 font-serif text-[clamp(2.7rem,10vw,4.5rem)] font-normal leading-[0.92] tracking-[-0.05em] text-[#f4efe2]">
                Continue through Norway
              </h2>
            </div>

            <ol className={`${styles.simpleRail} mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 sm:gap-6`}>
              {scenes.slice(1).map((scene, sceneOffset) => {
                const index = sceneOffset + 1;

                return (
                  <li
                    key={scene.title}
                    className="w-[84vw] max-w-[28rem] shrink-0 snap-start"
                  >
                    <article className="flex h-full flex-col overflow-hidden rounded-[1.45rem] border border-white/12 bg-[linear-gradient(165deg,rgba(16,26,30,0.98),rgba(7,20,24,0.98))] shadow-[0_24px_76px_rgba(0,0,0,0.28)]">
                      <div className="relative aspect-[4/5] overflow-hidden">
                        <Image
                          src={scene.cardImage}
                          alt={`${scene.title} landscape`}
                          fill
                          sizes="(min-width: 1024px) 28rem, 84vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,5,8,0.04)_54%,rgba(2,5,8,0.55)_100%)]" />
                        <p className="absolute bottom-5 left-5 font-mono text-[0.58rem] tracking-[0.22em] text-[#f4efe2]/76">
                          {formatSceneNumber(index)} / {formatSceneNumber(lastSceneIndex)}
                        </p>
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <p className="text-[0.56rem] font-medium uppercase tracking-[0.28em] text-[#d8c9a7]/72">
                          {scene.label}
                        </p>
                        <h3 className="mt-4 font-serif text-[2.5rem] leading-none tracking-[-0.045em] text-[#f4efe2]">
                          {scene.title}
                        </h3>
                        <p className="mt-5 text-sm font-light leading-[1.75] text-[#f4efe2]/68 sm:text-base">
                          {scene.intro}
                        </p>
                        <Link
                          href={scene.href}
                          className="mt-7 inline-flex min-h-11 w-fit items-center gap-3 rounded-full border border-white/14 px-5 text-[0.62rem] font-medium uppercase tracking-[0.22em] text-[#f4efe2]/82 transition-colors duration-300 hover:border-white/28 hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/60 motion-reduce:transition-none"
                        >
                          {scene.cta}
                          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </Link>
                      </div>
                    </article>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
