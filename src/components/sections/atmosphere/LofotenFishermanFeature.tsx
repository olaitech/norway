import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const videoSrc = "/video/atmosphere/lofoten-fisherman-sjar.mp4";

export function LofotenFishermanFeature() {
  return (
    <section
      aria-labelledby="lofoten-fisherman-feature-title"
      className="relative overflow-hidden bg-[#050607] px-5 py-20 text-[#f4efe2] sm:px-8 sm:py-24 md:px-12 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(216,201,167,0.07),transparent_30%),radial-gradient(circle_at_78%_36%,rgba(126,176,192,0.09),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(5,6,7,0.62),rgba(5,6,7,0))]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 xl:gap-20">
        <div className="max-w-3xl">
          <p className="text-[0.62rem] font-medium uppercase tracking-[0.37em] text-[#d8c9a7]/74">
            COASTAL MEMORY
          </p>
          <h2
            id="lofoten-fisherman-feature-title"
            className="mt-7 max-w-3xl font-serif text-[clamp(2.75rem,6.3vw,5.7rem)] font-normal leading-[0.9] tracking-[-0.058em]"
          >
            Old rhythms of the northern sea
          </h2>
          <p className="mt-7 max-w-2xl text-base font-light leading-[1.9] text-[#f4efe2]/66 sm:text-lg">
            Long before Lofoten became a destination, these waters were a
            working landscape. Small boats, cold hands, sea weather and
            generations of fishermen shaped the quiet rhythm of life along the
            Arctic coast.
          </p>
          <Link
            href="/destinations/lofoten-islands"
            className="mt-9 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-[0.63rem] font-medium uppercase tracking-[0.23em] text-[#f4efe2]/78 transition-colors hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
          >
            Explore Lofoten
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="mx-auto w-full max-w-3xl lg:ml-auto">
          <div className="relative aspect-video overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#080e15] shadow-[0_34px_100px_rgba(0,0,0,0.46),0_0_48px_rgba(126,176,192,0.07)] sm:rounded-[1.6rem]">
            <video
              aria-label="Atmospheric video of a small fishing boat on the northern sea near Lofoten"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="h-full w-full object-cover object-center motion-reduce:hidden"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
            <div className="absolute inset-0 hidden items-center justify-center bg-[linear-gradient(180deg,rgba(8,14,21,0.82),rgba(5,6,7,0.94))] px-8 text-center motion-reduce:flex">
              <p className="text-sm font-light leading-[1.8] text-[#f4efe2]/66">
                A quiet coastal film is paused for reduced motion.
              </p>
            </div>
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(3,7,11,0.04)_0%,rgba(3,7,11,0.16)_46%,rgba(3,7,11,0.74)_100%)]" />
            <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_52px_rgba(2,6,10,0.28),inset_0_1px_0_rgba(244,239,226,0.05)]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5">
              <p className="text-[0.55rem] font-medium uppercase tracking-[0.27em] text-[#d8c9a7]/72">
                Lofoten / Sea weather
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
