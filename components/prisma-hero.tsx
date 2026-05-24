"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { type CSSProperties, useRef } from "react";

import { useMounted } from "@/src/hooks/useMounted";

/* ---------------- WordsPullUp ---------------- */
interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: CSSProperties;
}

export const WordsPullUp = ({ text, className = "", showAsterisk = false, style }: WordsPullUpProps) => {
  const mounted = useMounted();
  const shouldReduceMotion = useReducedMotion() === true;
  const animationsEnabled = mounted && !shouldReduceMotion;
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        const content = (
          <>
            {word}
            {showAsterisk && isLast && (
              <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">*</span>
            )}
          </>
        );

        return animationsEnabled ? (
          <motion.span
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block relative"
            style={{ marginRight: isLast ? 0 : "0.25em" }}
          >
            {content}
          </motion.span>
        ) : (
          <span
            key={i}
            className="inline-block relative"
            style={{ marginRight: isLast ? 0 : "0.25em" }}
          >
            {content}
          </span>
        );
      })}
    </span>
  );
};

/* ---------------- WordsPullUpMultiStyle ---------------- */
interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
  style?: CSSProperties;
}

export const WordsPullUpMultiStyle = ({ segments, className = "", style }: WordsPullUpMultiStyleProps) => {
  const mounted = useMounted();
  const shouldReduceMotion = useReducedMotion() === true;
  const animationsEnabled = mounted && !shouldReduceMotion;
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  const words: { word: string; className?: string }[] = [];
  segments.forEach((seg) => {
    seg.text.split(" ").forEach((w) => {
      if (w) words.push({ word: w, className: seg.className });
    });
  });

  return (
    <span ref={ref} className={`inline-flex flex-wrap justify-center ${className}`} style={style}>
      {words.map((w, i) =>
        animationsEnabled ? (
          <motion.span
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className={`inline-block ${w.className ?? ""}`}
            style={{ marginRight: "0.25em" }}
          >
            {w.word}
          </motion.span>
        ) : (
          <span
            key={i}
            className={`inline-block ${w.className ?? ""}`}
            style={{ marginRight: "0.25em" }}
          >
            {w.word}
          </span>
        ),
      )}
    </span>
  );
};

/* ---------------- Hero ---------------- */
const navItems = [
  { label: "Destinations", href: "#destinations" },
  { label: "Routes", href: "/routes" },
  { label: "Journal", href: "/journal" },
  { label: "Map", href: "/map" },
  { label: "About", href: "#" },
];

const PrismaHero = () => {
  const mounted = useMounted();
  const shouldReduceMotion = useReducedMotion() === true;
  const animationsEnabled = mounted && !shouldReduceMotion;

  return (
    <section className="h-screen min-h-[640px] w-full bg-[#050607] text-[#f4efe2]">
      <div className="relative h-full w-full overflow-hidden">
        {/* Cinematic background */}
        {animationsEnabled ? (
          <motion.div
            initial={{ scale: 1.04, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src="/images/hero/preikestolen.png"
              alt="A traveler standing on Preikestolen above a Norwegian fjord"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[57%_50%]"
            />
          </motion.div>
        ) : (
          <div className="absolute inset-0">
            <Image
              src="/images/hero/preikestolen.png"
              alt="A traveler standing on Preikestolen above a Norwegian fjord"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[57%_50%]"
            />
          </div>
        )}

        {/* Slow mist overlay */}
        <div className="hero-mist pointer-events-none absolute inset-0" aria-hidden="true">
          <span className="hero-mist-layer hero-mist-layer-a" />
          <span className="hero-mist-layer hero-mist-layer-b" />
          <span className="hero-mist-layer hero-mist-layer-c" />
        </div>

        {/* Noise overlay */}
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.22] mix-blend-overlay" />

        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(2,5,8,0.92)_0%,rgba(2,5,8,0.68)_34%,rgba(2,5,8,0.2)_62%,rgba(2,5,8,0.04)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,5,8,0.42)_0%,rgba(2,5,8,0.05)_45%,rgba(2,5,8,0.76)_100%)]" />

        {/* Navbar */}
        <nav className="absolute left-0 right-0 top-0 z-20 px-5 py-5 sm:px-8 md:px-12">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
            <Link
              href="/"
              aria-label="Norge home"
              className="flex h-[72px] w-[72px] shrink-0 items-center justify-center opacity-90 transition-opacity duration-300 hover:opacity-100 sm:h-12 sm:w-12"
            >
              <Image
                src="/images/branding/logo-norge-removebg-preview.png"
                alt=""
                width={72}
                height={72}
                className="h-full w-full object-contain"
              />
            </Link>
            <div className="flex max-w-[calc(100vw-8rem)] items-center gap-5 overflow-x-auto rounded-full border border-white/10 bg-black/18 px-4 py-2.5 backdrop-blur-md sm:gap-8 sm:px-5 md:gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="shrink-0 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-[#f4efe2]/72 transition-colors hover:text-[#f4efe2] sm:text-[0.68rem] sm:tracking-[0.22em]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Hero content */}
        <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-10 sm:px-8 sm:pb-12 md:px-12 lg:pb-16">
          <div className="mx-auto grid max-w-7xl grid-cols-12 items-end gap-6">
            <div className="col-span-12 max-w-5xl lg:col-span-8">
              {animationsEnabled ? (
                <motion.p
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-4 text-[0.68rem] font-medium uppercase tracking-[0.36em] text-[#d8c9a7]/80 sm:mb-5"
                >
                  Slow travel field notes
                </motion.p>
              ) : (
                <p className="mb-4 text-[0.68rem] font-medium uppercase tracking-[0.36em] text-[#d8c9a7]/80 sm:mb-5">
                  Slow travel field notes
                </p>
              )}
              <h1
                className="font-serif text-[clamp(4.75rem,15vw,13rem)] font-normal leading-[0.82] tracking-[-0.055em] text-[#f4efe2]"
              >
                <WordsPullUp text="Norway" />
              </h1>
            </div>

            <div className="col-span-12 flex max-w-xl flex-col gap-6 pb-1 sm:pb-2 lg:col-span-4 lg:justify-self-end">
              {animationsEnabled ? (
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="max-w-[34rem] text-sm font-light leading-[1.65] text-[#f4efe2]/78 sm:text-base md:text-lg"
                >
                  A cinematic guide to Norway&rsquo;s quiet roads, dramatic fjords, northern light skies and remote places worth slowing down for.
                </motion.p>
              ) : (
                <p className="max-w-[34rem] text-sm font-light leading-[1.65] text-[#f4efe2]/78 sm:text-base md:text-lg">
                  A cinematic guide to Norway&rsquo;s quiet roads, dramatic fjords, northern light skies and remote places worth slowing down for.
                </p>
              )}

              {animationsEnabled ? (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href="/routes"
                    className="group inline-flex h-12 items-center gap-4 self-start rounded-full border border-[#f4efe2]/18 bg-[#f4efe2] py-1 pl-6 pr-1 text-sm font-medium text-[#07100f] shadow-[0_20px_70px_rgba(0,0,0,0.35)] transition-all hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55 sm:h-[3.25rem] sm:text-base"
                  >
                    Explore routes
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#07100f] transition-transform group-hover:scale-105 sm:h-11 sm:w-11">
                      <ArrowRight className="h-4 w-4 text-[#f4efe2]" />
                    </span>
                  </Link>
                </motion.div>
              ) : (
                <Link
                  href="/routes"
                  className="group inline-flex h-12 items-center gap-4 self-start rounded-full border border-[#f4efe2]/18 bg-[#f4efe2] py-1 pl-6 pr-1 text-sm font-medium text-[#07100f] shadow-[0_20px_70px_rgba(0,0,0,0.35)] transition-all hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55 sm:h-[3.25rem] sm:text-base"
                >
                  Explore routes
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#07100f] transition-transform group-hover:scale-105 sm:h-11 sm:w-11">
                    <ArrowRight className="h-4 w-4 text-[#f4efe2]" />
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { PrismaHero };
