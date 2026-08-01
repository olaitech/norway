import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ferryGuideHref = "/guides/norway-ferry-guide-for-tourists";

const ferryFacts = [
  "Live departures",
  "14 ferry connections",
  "Harbour cameras",
] as const;

export function FerryGuideFeature() {
  return (
    <section
      id="ferries"
      aria-labelledby="ferry-guide-card-title"
      className="relative overflow-hidden scroll-mt-24 bg-[linear-gradient(180deg,#0d1218_0%,#0c1015_44%,#0a0e12_100%)] px-5 pt-16 pb-8 text-[#f7f3ed] sm:px-8 sm:pt-20 sm:pb-10 md:px-12 lg:pt-24 lg:pb-12"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(216,201,167,0.08),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(120,165,177,0.08),transparent_30%),radial-gradient(circle_at_50%_82%,rgba(255,255,255,0.02),transparent_40%)]" />
      <div className="home-transition-warm-to-dark pointer-events-none absolute inset-x-0 top-0 h-20 sm:h-24 lg:h-28" />

      <div className="relative mx-auto max-w-7xl">
        <Link
          href={ferryGuideHref}
          className="group relative isolate flex min-h-[38rem] items-end overflow-hidden rounded-[1.75rem] border border-white/12 bg-[#07100f] px-6 py-8 shadow-[0_26px_90px_rgba(0,0,0,0.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/80 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0d1218] sm:min-h-[39rem] sm:px-9 sm:py-10 lg:min-h-[34rem] lg:items-center lg:py-12 lg:pr-12 lg:pl-[10.5rem] xl:min-h-[36rem] xl:pr-16 xl:pl-44"
        >
          <Image
            src="/images/cards/norway-ferry-guide-card.jpg"
            alt=""
            fill
            sizes="(max-width: 639px) calc(100vw - 2.5rem), (max-width: 767px) calc(100vw - 4rem), (max-width: 1279px) calc(100vw - 6rem), 80rem"
            className="object-cover object-[88%_center] transition-transform duration-700 ease-out group-hover:scale-[1.015] motion-reduce:transform-none motion-reduce:transition-none sm:object-[78%_center] md:object-[70%_center] lg:object-center"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(5,8,11,0.98)_0%,rgba(5,8,11,0.9)_58%,rgba(5,8,11,0.5)_100%)] sm:bg-[linear-gradient(90deg,rgba(5,8,11,0.97)_0%,rgba(5,8,11,0.86)_52%,rgba(5,8,11,0.32)_100%)] lg:bg-[linear-gradient(90deg,rgba(5,8,11,0.96)_0%,rgba(5,8,11,0.82)_38%,rgba(5,8,11,0.28)_68%,rgba(5,8,11,0.04)_100%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,11,0.08)_0%,rgba(5,8,11,0.14)_42%,rgba(5,8,11,0.62)_100%)] lg:bg-[linear-gradient(180deg,rgba(5,8,11,0.08)_0%,rgba(5,8,11,0.02)_56%,rgba(5,8,11,0.22)_100%)]" />

          <div className="relative z-10 max-w-2xl">
            <p className="text-[0.58rem] font-medium uppercase tracking-[0.3em] text-[#d8c9a7]/86 sm:text-[0.62rem] sm:tracking-[0.37em]">
              Live ferries <span aria-hidden="true">·</span> Travel planning
            </p>
            <h2
              id="ferry-guide-card-title"
              className="mt-5 max-w-xl font-serif text-[2.65rem] leading-[0.98] tracking-[-0.045em] text-[#f4efe2] sm:text-[3.35rem] lg:text-[4.25rem]"
            >
              Plan your ferry journey
            </h2>
            <p className="mt-5 max-w-[39rem] text-sm font-light leading-[1.8] text-[#f4efe2]/76 sm:mt-6 sm:text-base sm:leading-[1.85]">
              Check live departures for ferry connections across Nordland, view harbour cameras and find practical advice about routes, payment and travelling with a car or campervan.
            </p>

            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-[0.62rem] font-medium uppercase tracking-[0.2em] text-[#f4efe2]/72 sm:mt-7 sm:gap-x-6">
              {ferryFacts.map((fact) => (
                <li key={fact} className="flex items-center gap-2.5">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#9ecad8]/80"
                  />
                  {fact}
                </li>
              ))}
            </ul>

            <span className="mt-8 inline-flex min-h-11 items-center gap-3 rounded-full border border-[#d8c9a7]/34 bg-[#f4efe2]/10 px-5 py-3 text-[0.62rem] font-medium uppercase tracking-[0.22em] text-[#f4efe2] backdrop-blur-sm transition-[background-color,border-color] duration-300 group-hover:border-[#d8c9a7]/58 group-hover:bg-[#f4efe2]/16 motion-reduce:transition-none sm:mt-9 sm:px-6">
              Check live departures
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
              />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
