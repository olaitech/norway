"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { JournalReveal } from "./JournalReveal";

export function JournalHero() {
  const [videoFailed, setVideoFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    void video.play().catch(() => setVideoFailed(true));
  }, []);

  return (
    <section className="relative isolate flex min-h-screen flex-col overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 bg-black">
        {videoFailed && (
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_62%_34%,rgba(137,121,93,0.18),transparent_30%),linear-gradient(145deg,#07100f_0%,#030607_58%,#000_100%)]"
          />
        )}

        {!videoFailed && (
          <video
            ref={videoRef}
            className="absolute inset-0 z-0 h-full w-full object-cover"
            autoPlay
            muted
            playsInline
            preload="auto"
            controls={false}
            aria-hidden="true"
            onError={() => setVideoFailed(true)}
            onEnded={(event) => event.currentTarget.pause()}
          >
            <source src="/video/journal/lofoten.mp4" type="video/mp4" />
          </video>
        )}
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(3,7,9,0.66)_0%,rgba(3,7,9,0.43)_42%,rgba(3,7,9,0.18)_74%,rgba(3,7,9,0.28)_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(3,7,9,0.34)_0%,rgba(3,7,9,0.1)_35%,rgba(3,7,9,0.78)_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_46%,rgba(2,5,7,0.37)_100%)]" />

      <header className="relative z-20 px-5 py-6 sm:px-8 md:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <Link
            href="/"
            aria-label="Norge home"
            className="flex items-center gap-3 text-[0.64rem] font-medium uppercase tracking-[0.27em] text-[#f4efe2]/72 transition-colors hover:text-[#f4efe2]"
          >
            <Image
              src="/images/branding/logo-norge-removebg-preview.png"
              alt=""
              width={48}
              height={48}
              className="h-11 w-11 object-contain"
            />
            Norge
          </Link>
          <nav className="flex max-w-[calc(100vw-7.5rem)] items-center gap-4 overflow-x-auto rounded-full border border-white/10 bg-black/20 px-4 py-2.5 backdrop-blur-sm sm:gap-7 sm:px-6">
            <Link
              href="/"
              className="hidden shrink-0 text-[0.61rem] font-medium uppercase tracking-[0.22em] text-[#f4efe2]/56 transition-colors hover:text-[#f4efe2] sm:block"
            >
              Home
            </Link>
            <Link
              href="/#destinations"
              className="hidden shrink-0 text-[0.61rem] font-medium uppercase tracking-[0.22em] text-[#f4efe2]/56 transition-colors hover:text-[#f4efe2] sm:block"
            >
              Destinations
            </Link>
            <span className="shrink-0 text-[0.61rem] font-medium uppercase tracking-[0.22em] text-[#d8c9a7]">
              Journal
            </span>
            <Link
              href="/map"
              className="shrink-0 text-[0.61rem] font-medium uppercase tracking-[0.22em] text-[#f4efe2]/56 transition-colors hover:text-[#f4efe2]"
            >
              Map
            </Link>
          </nav>
        </div>
      </header>

      <div className="relative z-20 mt-auto px-5 pb-14 pt-24 sm:px-8 sm:pb-16 md:px-12 lg:pb-20">
        <JournalReveal className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-b border-white/12 pb-12 sm:pb-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20 lg:pb-16">
            <div>
              <p className="text-[0.63rem] font-medium uppercase tracking-[0.4em] text-[#d8c9a7]/82 sm:text-[0.67rem]">
                Norway visual archive
              </p>
              <h1 className="mt-7 font-serif text-[clamp(4.4rem,12vw,10.5rem)] font-normal leading-[0.84] tracking-[-0.065em]">
                Journal
              </h1>
            </div>
            <div className="max-w-2xl">
              <p className="mb-7 text-[0.59rem] font-medium uppercase tracking-[0.3em] text-[#d8c9a7]/66 sm:text-[0.63rem]">
                Field notes / Routes / Light
              </p>
              <p className="text-base font-light leading-[1.9] text-[#f4efe2]/75 sm:text-lg md:text-xl">
                A visual archive of Norway&rsquo;s quiet roads, remote
                coastlines, changing weather and northern light. Written like
                field notes from the edge of the map.
              </p>
            </div>
          </div>
        </JournalReveal>
      </div>
    </section>
  );
}
