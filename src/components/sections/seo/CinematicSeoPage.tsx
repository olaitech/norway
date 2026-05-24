import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { SeoCard, SeoPageData, SeoSection } from "@/src/data/seo-pages";

type CinematicSeoPageProps = {
  page: SeoPageData;
};

function SectionHeader({ section }: { section: SeoSection }) {
  return (
    <div className="max-w-3xl">
      <p className="text-[0.63rem] font-medium uppercase tracking-[0.33em] text-[#d8c9a7]/72">
        {section.label}
      </p>
      <h2 className="mt-4 font-serif text-[clamp(2.1rem,4.6vw,4rem)] font-normal leading-[0.95] tracking-[-0.045em] text-[#f4efe2]">
        {section.title}
      </h2>
      <p className="mt-5 text-sm font-light leading-[1.85] text-[#f4efe2]/65 sm:text-base md:text-lg">
        {section.intro}
      </p>
    </div>
  );
}

function ContentCard({ card }: { card: SeoCard }) {
  const content = (
    <article className="group h-full rounded-[1.2rem] border border-white/10 bg-[linear-gradient(165deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.015)_100%)] p-7 sm:p-8">
      {card.label ? (
        <p className="text-[0.6rem] font-medium uppercase tracking-[0.29em] text-[#d8c9a7]/74">
          {card.label}
        </p>
      ) : null}
      <h3 className="mt-4 font-serif text-[1.7rem] leading-[0.98] tracking-[-0.035em] text-[#f4efe2] sm:text-[1.9rem]">
        {card.title}
      </h3>
      <p className="mt-4 text-sm font-light leading-[1.8] text-[#f4efe2]/64 sm:text-base">
        {card.description}
      </p>
      {card.href ? (
        <span className="mt-6 inline-flex items-center gap-2 text-[0.62rem] font-medium uppercase tracking-[0.24em] text-[#f4efe2]/74 transition-colors group-hover:text-[#f4efe2]">
          Open guide
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
      ) : null}
    </article>
  );

  if (!card.href) {
    return content;
  }

  return (
    <Link
      href={card.href}
      className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
    >
      {content}
    </Link>
  );
}

export function CinematicSeoPage({ page }: CinematicSeoPageProps) {
  return (
    <main className="min-h-screen bg-[#050607] text-[#f4efe2]">
      <section className="relative flex min-h-[74vh] flex-col overflow-hidden">
        <Image
          src={page.hero.imageSrc}
          alt={page.hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{
            objectPosition: page.hero.imagePosition ?? "center",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,5,8,0.9)_0%,rgba(2,5,8,0.64)_42%,rgba(2,5,8,0.28)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,5,8,0.48)_0%,rgba(2,5,8,0.15)_42%,rgba(2,5,8,0.9)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_26%,rgba(216,201,167,0.11),rgba(216,201,167,0)_36%)]" />

        <header className="relative z-10 px-5 py-6 sm:px-8 md:px-12">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-5">
            <Link
              href="/"
              className="inline-flex items-center gap-3 text-[0.63rem] font-medium uppercase tracking-[0.27em] text-[#f4efe2]/72 transition-colors hover:text-[#f4efe2]"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              Norge
            </Link>
            <nav className="flex max-w-[calc(100vw-8rem)] items-center gap-3 overflow-x-auto rounded-full border border-white/12 bg-black/24 px-4 py-2.5 backdrop-blur-sm sm:gap-6 sm:px-6">
              <Link
                href="/"
                className="shrink-0 text-[0.61rem] font-medium uppercase tracking-[0.22em] text-[#f4efe2]/58 transition-colors hover:text-[#f4efe2]"
              >
                Home
              </Link>
              <Link
                href="/#destinations"
                className="hidden shrink-0 text-[0.61rem] font-medium uppercase tracking-[0.22em] text-[#f4efe2]/58 transition-colors hover:text-[#f4efe2] sm:block"
              >
                Destinations
              </Link>
              <span className="shrink-0 text-[0.61rem] font-medium uppercase tracking-[0.22em] text-[#d8c9a7]">
                Routes
              </span>
              <Link
                href="/journal"
                className="hidden shrink-0 text-[0.61rem] font-medium uppercase tracking-[0.22em] text-[#f4efe2]/58 transition-colors hover:text-[#f4efe2] sm:block"
              >
                Journal
              </Link>
              <Link
                href="/map"
                className="shrink-0 text-[0.61rem] font-medium uppercase tracking-[0.22em] text-[#f4efe2]/58 transition-colors hover:text-[#f4efe2]"
              >
                Map
              </Link>
            </nav>
          </div>
        </header>

        <div className="relative z-10 mt-auto px-5 pb-14 pt-20 sm:px-8 sm:pb-16 md:px-12 lg:pb-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-[0.66rem] font-medium uppercase tracking-[0.38em] text-[#d8c9a7]/82">
              {page.hero.label}
            </p>
            <h1 className="mt-5 max-w-5xl font-serif text-[clamp(3.35rem,9.5vw,8.4rem)] font-normal leading-[0.88] tracking-[-0.06em]">
              {page.hero.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base font-light leading-[1.82] text-[#f4efe2]/74 sm:text-lg md:text-xl">
              {page.hero.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="relative px-5 py-20 sm:px-8 sm:py-24 md:px-12 lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(216,201,167,0.06),transparent_30%),radial-gradient(circle_at_80%_24%,rgba(151,182,190,0.08),transparent_34%)]" />
        <div className="relative mx-auto max-w-7xl space-y-20 sm:space-y-24">
          {page.sections.map((section) => (
            <section key={section.title} className="border-t border-white/8 pt-14 sm:pt-16">
              <SectionHeader section={section} />
              <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {section.cards.map((card) => (
                  <ContentCard key={card.title} card={card} />
                ))}
              </div>
            </section>
          ))}

          <section className="border-t border-white/8 pt-14 sm:pt-16">
            <p className="text-[0.62rem] font-medium uppercase tracking-[0.32em] text-[#d8c9a7]/70">
              Related paths
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {page.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-white/12 bg-white/[0.02] px-5 py-3 text-[0.63rem] font-medium uppercase tracking-[0.23em] text-[#f4efe2]/78 transition-colors hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </section>

          <section className="border-t border-white/8 pt-14 sm:pt-16">
            <article className="rounded-[1.3rem] border border-white/10 bg-white/[0.02] p-8 sm:p-10">
              <p className="text-[0.62rem] font-medium uppercase tracking-[0.31em] text-[#d8c9a7]/76">
                {page.cta.label}
              </p>
              <p className="mt-5 max-w-2xl text-base font-light leading-[1.82] text-[#f4efe2]/70 sm:text-lg">
                {page.cta.text}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={page.cta.primaryHref}
                  className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/[0.04] px-5 py-3 text-[0.63rem] font-medium uppercase tracking-[0.23em] text-[#f4efe2]/86 transition-colors hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
                >
                  {page.cta.primaryLabel}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
                <Link
                  href={page.cta.secondaryHref}
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-transparent px-5 py-3 text-[0.63rem] font-medium uppercase tracking-[0.23em] text-[#f4efe2]/74 transition-colors hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
                >
                  {page.cta.secondaryLabel}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </article>
          </section>
        </div>
      </section>
    </main>
  );
}

