"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { useMounted } from "@/src/hooks/useMounted";

type FerryVideoHeroProps = {
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  lastUpdated: string;
};

export function FerryVideoHero({
  title,
  subtitle,
  category,
  readTime,
  lastUpdated,
}: FerryVideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [canAutoplay, setCanAutoplay] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const mounted = useMounted();
  const shouldReduceMotion = useReducedMotion() === true;

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => {
      if (motionQuery.matches) {
        videoRef.current?.pause();
        setShowVideo(false);
      }

      setCanAutoplay(!motionQuery.matches);
    };

    syncMotionPreference();
    motionQuery.addEventListener("change", syncMotionPreference);

    return () => {
      motionQuery.removeEventListener("change", syncMotionPreference);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!canAutoplay || !video) {
      return;
    }

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    void video.play().catch(() => setShowVideo(false));
  }, [canAutoplay]);

  const heroCopy = (
    <div className="max-w-3xl">
      <p className="text-[0.61rem] font-medium uppercase tracking-[0.34em] text-[#d8c9a7]/88 sm:text-[0.66rem]">
        {category}
      </p>
      <p className="mt-6 max-w-3xl font-serif text-[clamp(3rem,7.8vw,7.25rem)] font-normal leading-[0.86] tracking-[-0.06em] text-[#f4efe2] sm:mt-7">
        Crossing Norway, one fjord at a time
      </p>
      <h1 className="mt-7 font-serif text-[clamp(2rem,4vw,3.35rem)] font-normal leading-[0.94] tracking-[-0.045em] text-[#f4efe2] sm:mt-8">
        {title}
      </h1>
      <p className="mt-5 max-w-2xl text-base font-light leading-[1.8] text-[#f4efe2]/76 sm:mt-6 sm:text-lg">
        {subtitle}
      </p>
      <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.6rem] font-medium uppercase tracking-[0.23em] text-[#f4efe2]/62 sm:mt-8 sm:text-[0.62rem]">
        <span>Practical guide</span>
        <span>{readTime}</span>
        <span>Updated {lastUpdated}</span>
      </div>
    </div>
  );

  return (
    <section className="relative isolate min-h-[600px] overflow-hidden bg-[#03080c] px-5 pb-14 pt-8 text-[#f4efe2] sm:min-h-[660px] sm:px-8 sm:pb-16 sm:pt-10 md:min-h-[700px] md:px-12 lg:min-h-[740px] lg:pb-20">
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src="/images/ferry-hero-poster.png"
          alt=""
          fill
          preload
          sizes="100vw"
          className="object-cover object-[58%_center] sm:object-center"
        />
        {canAutoplay ? (
          <video
            ref={videoRef}
            autoPlay
            className={`absolute inset-0 h-full w-full object-cover object-[58%_center] transition-opacity duration-500 sm:object-center motion-reduce:transition-none ${
              showVideo ? "opacity-100" : "opacity-0"
            }`}
            muted
            playsInline
            preload="metadata"
            poster="/images/ferry-hero-poster.png"
            controls={false}
            aria-hidden="true"
            tabIndex={-1}
            onPlaying={() => setShowVideo(true)}
            onEnded={(event) => event.currentTarget.pause()}
            onError={(event) => {
              event.currentTarget.pause();
              setShowVideo(false);
            }}
          >
            <source src="/video/norway-ferry-hero.mp4" type="video/mp4" />
          </video>
        ) : null}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(2,7,11,0.96)_0%,rgba(2,7,11,0.84)_34%,rgba(2,7,11,0.44)_62%,rgba(2,7,11,0.12)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,7,11,0.38)_0%,rgba(2,7,11,0.08)_42%,rgba(2,7,11,0.9)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_28%,rgba(80,121,136,0.12),transparent_38%),radial-gradient(ellipse_at_18%_74%,rgba(3,7,11,0.4),transparent_52%)]" />

      <div className="relative z-10 mx-auto flex min-h-[542px] max-w-7xl flex-col sm:min-h-[584px] md:min-h-[624px] lg:min-h-[664px]">
        <Link
          href="/guides"
          className="inline-flex w-fit items-center rounded-full border border-[#8fafa8]/16 bg-[#071217]/48 px-4 py-2 text-[0.61rem] font-medium uppercase tracking-[0.24em] text-[#f4efe2]/78 backdrop-blur-sm transition-colors hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6a15b]/55"
        >
          Back to Practical Guides
        </Link>

        <header className="mt-auto border-t border-white/12 pt-8 sm:pt-10">
          {mounted && !shouldReduceMotion ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.65,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {heroCopy}
            </motion.div>
          ) : (
            heroCopy
          )}
        </header>
      </div>
    </section>
  );
}
