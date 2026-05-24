import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { Destination } from "@/src/data/destinations";
import { getRelatedDestinations } from "@/src/data/destinations";

import { DestinationReveal } from "./DestinationReveal";

type DestinationPageProps = {
  destination: Destination;
};

type SectionIntroProps = {
  label: string;
  title: string;
};

function SectionIntro({ label, title }: SectionIntroProps) {
  return (
    <div className="max-w-xl">
      <p className="text-[0.65rem] font-medium uppercase tracking-[0.34em] text-[#d8c9a7]/72">
        {label}
      </p>
      <h2 className="mt-4 font-serif text-[clamp(2.2rem,4vw,3.7rem)] font-normal leading-[0.98] tracking-[-0.045em] text-[#f4efe2]">
        {title}
      </h2>
    </div>
  );
}

export function DestinationPage({ destination }: DestinationPageProps) {
  const relatedDestinations = getRelatedDestinations(destination.slug);

  return (
    <main className="min-h-screen bg-[#050607] text-[#f4efe2]">
      <section className="relative flex min-h-screen flex-col overflow-hidden">
        <Image
          src={destination.imageSrc}
          alt={destination.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: destination.imagePosition }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,5,8,0.9)_0%,rgba(2,5,8,0.62)_45%,rgba(2,5,8,0.18)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,5,8,0.54)_0%,rgba(2,5,8,0.12)_34%,rgba(2,5,8,0.9)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_36%,rgba(218,201,163,0.08),rgba(218,201,163,0)_36%)]" />

        <header className="relative z-10 px-5 py-6 sm:px-8 md:px-12">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
            <Link
              href="/"
              className="flex items-center gap-3 text-[0.66rem] font-medium uppercase tracking-[0.25em] text-[#f4efe2]/74 transition-colors hover:text-[#f4efe2]"
            >
              <ArrowLeft className="h-4 w-4" />
              Norge
            </Link>
            <Link
              href="/#destinations"
              className="rounded-full border border-white/12 bg-black/20 px-5 py-3 text-[0.62rem] font-medium uppercase tracking-[0.24em] text-[#f4efe2]/78 backdrop-blur-md transition-colors hover:border-white/22 hover:text-[#f4efe2]"
            >
              All destinations
            </Link>
          </div>
        </header>

        <div className="relative z-10 mt-auto px-5 pb-14 pt-28 sm:px-8 sm:pb-16 md:px-12 lg:pb-20">
          <div className="mx-auto max-w-7xl">
            <DestinationReveal className="max-w-5xl">
              <p className="mb-5 text-[0.68rem] font-medium uppercase tracking-[0.38em] text-[#d8c9a7]/84">
                {destination.label}
              </p>
              <h1 className="font-serif text-[clamp(3.6rem,10vw,9.75rem)] font-normal leading-[0.88] tracking-[-0.06em] text-[#f4efe2]">
                {destination.title}
              </h1>
              <p className="mt-7 max-w-2xl text-base font-light leading-[1.75] text-[#f4efe2]/76 sm:text-lg md:text-xl">
                {destination.intro}
              </p>
            </DestinationReveal>
          </div>
        </div>
      </section>

      <DestinationReveal className="border-y border-white/8 bg-white/[0.015] px-5 sm:px-8 md:px-12">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 py-9 md:grid-cols-4 md:py-11">
          {destination.facts.map((fact) => (
            <div
              key={fact.label}
              className="border-white/10 pr-5 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
            >
              <dt className="text-[0.62rem] font-medium uppercase tracking-[0.3em] text-[#d8c9a7]/62">
                {fact.label}
              </dt>
              <dd className="mt-3 text-sm font-light text-[#f4efe2]/82 sm:text-base">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </DestinationReveal>

      <div className="px-5 py-20 sm:px-8 sm:py-24 md:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl space-y-24 sm:space-y-28">
          <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <DestinationReveal>
              <SectionIntro label="01 / Perspective" title="Why visit" />
            </DestinationReveal>
            <DestinationReveal
              delay={0.08}
              className="space-y-6 text-base font-light leading-[1.85] text-[#f4efe2]/68 sm:text-lg"
            >
              {destination.whyVisit.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </DestinationReveal>
          </section>

          <section className="border-t border-white/8 pt-16 sm:pt-20">
            <DestinationReveal>
              <SectionIntro label="02 / Seasons" title="Best time to visit" />
            </DestinationReveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {destination.bestTime.map((season, index) => (
                <DestinationReveal key={season.title} delay={index * 0.06}>
                  <article className="h-full rounded-[1.2rem] border border-white/8 bg-white/[0.025] p-7 sm:p-8">
                    <h3 className="font-serif text-2xl tracking-[-0.03em] text-[#f4efe2]">
                      {season.title}
                    </h3>
                    <p className="mt-4 text-sm font-light leading-[1.8] text-[#f4efe2]/64 sm:text-base">
                      {season.description}
                    </p>
                  </article>
                </DestinationReveal>
              ))}
            </div>
          </section>

          <section className="border-t border-white/8 pt-16 sm:pt-20">
            <DestinationReveal>
              <SectionIntro label="03 / Experiences" title="Things to do" />
            </DestinationReveal>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {destination.thingsToDo.map((activity, index) => (
                <DestinationReveal key={activity.title} delay={index * 0.05}>
                  <article className="h-full rounded-[1.2rem] border border-white/8 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-7">
                    <p className="text-[0.62rem] font-medium uppercase tracking-[0.29em] text-[#d8c9a7]/62">
                      0{index + 1}
                    </p>
                    <h3 className="mt-7 font-serif text-2xl tracking-[-0.03em] text-[#f4efe2]">
                      {activity.title}
                    </h3>
                    <p className="mt-4 text-sm font-light leading-[1.8] text-[#f4efe2]/64">
                      {activity.description}
                    </p>
                  </article>
                </DestinationReveal>
              ))}
            </div>
          </section>

          <section className="border-t border-white/8 pt-16 sm:pt-20">
            <DestinationReveal>
              <SectionIntro label="04 / Itinerary" title="Suggested route" />
            </DestinationReveal>
            <div className="mt-12 divide-y divide-white/8 border-y border-white/8">
              {destination.route.map((stop, index) => (
                <DestinationReveal
                  key={stop.title}
                  delay={index * 0.05}
                  className="grid gap-4 py-8 sm:grid-cols-[10rem_1fr] md:grid-cols-[12rem_0.7fr_1fr] md:items-start"
                >
                  <p className="text-[0.64rem] font-medium uppercase tracking-[0.29em] text-[#d8c9a7]/68">
                    {stop.days}
                  </p>
                  <h3 className="font-serif text-2xl tracking-[-0.03em] text-[#f4efe2]">
                    {stop.title}
                  </h3>
                  <p className="text-sm font-light leading-[1.8] text-[#f4efe2]/62 sm:text-base">
                    {stop.description}
                  </p>
                </DestinationReveal>
              ))}
            </div>
          </section>

          <section className="grid gap-5 border-t border-white/8 pt-16 sm:pt-20 lg:grid-cols-2">
            <DestinationReveal>
              <article className="h-full rounded-[1.35rem] border border-white/8 bg-white/[0.02] p-8 sm:p-10">
                <SectionIntro label="05 / Stillness" title="Quiet moments" />
                <p className="mt-8 text-base font-light leading-[1.85] text-[#f4efe2]/66 sm:text-lg">
                  {destination.quietMoments}
                </p>
              </article>
            </DestinationReveal>
            <DestinationReveal delay={0.08}>
              <article className="h-full rounded-[1.35rem] border border-white/8 bg-white/[0.02] p-8 sm:p-10">
                <SectionIntro label="06 / Light" title="Photography notes" />
                <p className="mt-8 text-base font-light leading-[1.85] text-[#f4efe2]/66 sm:text-lg">
                  {destination.photographyNotes}
                </p>
              </article>
            </DestinationReveal>
          </section>

          <section className="grid gap-10 border-t border-white/8 pt-16 sm:pt-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <DestinationReveal>
              <SectionIntro label="07 / Planning" title="FAQ" />
            </DestinationReveal>
            <DestinationReveal delay={0.08} className="divide-y divide-white/8">
              {destination.faq.map((item) => (
                <details key={item.question} className="group py-6 first:pt-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl tracking-[-0.025em] text-[#f4efe2] marker:hidden sm:text-2xl">
                    {item.question}
                    <span className="text-lg font-light text-[#d8c9a7]/72 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="max-w-xl pt-5 text-sm font-light leading-[1.85] text-[#f4efe2]/64 sm:text-base">
                    {item.answer}
                  </p>
                </details>
              ))}
            </DestinationReveal>
          </section>
        </div>
      </div>

      <section className="border-t border-white/8 px-5 py-20 sm:px-8 sm:py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <DestinationReveal>
            <SectionIntro
              label="Continue north"
              title="Related destinations"
            />
          </DestinationReveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {relatedDestinations.map((related, index) => (
              <DestinationReveal key={related.slug} delay={index * 0.05}>
                <Link
                  href={`/destinations/${related.slug}`}
                  className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
                >
                  <article className="relative min-h-[340px] overflow-hidden rounded-[1.2rem] border border-white/10">
                    <Image
                      src={related.imageSrc}
                      alt={related.imageAlt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,10,0.06)_20%,rgba(3,8,10,0.86)_100%)]" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-6">
                      <div>
                        <p className="mb-3 text-[0.6rem] uppercase tracking-[0.28em] text-[#d8c9a7]/74">
                          Destination
                        </p>
                        <h3 className="font-serif text-3xl tracking-[-0.04em]">
                          {related.title}
                        </h3>
                      </div>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-[#f4efe2]/76 transition-transform duration-500 group-hover:translate-x-1" />
                    </div>
                  </article>
                </Link>
              </DestinationReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
