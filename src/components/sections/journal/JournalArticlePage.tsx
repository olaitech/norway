import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { JournalArticle } from "@/src/data/journal-articles";

import { JournalReveal } from "./JournalReveal";

type JournalArticlePageProps = {
  article: JournalArticle;
  relatedArticles: JournalArticle[];
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
  { label: "Lofoten Guide", href: "/lofoten" },
];

export function JournalArticlePage({
  article,
  relatedArticles,
}: JournalArticlePageProps) {
  return (
    <main className="min-h-screen bg-[#050607] text-[#f4efe2]">
      <section className="relative flex min-h-[78vh] flex-col overflow-hidden">
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,5,8,0.88)_0%,rgba(2,5,8,0.58)_44%,rgba(2,5,8,0.26)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,5,8,0.5)_0%,rgba(2,5,8,0.13)_38%,rgba(2,5,8,0.9)_100%)]" />

        <header className="relative z-10 px-5 py-6 sm:px-8 md:px-12">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
            <Link
              href="/journal"
              className="inline-flex items-center gap-3 text-[0.63rem] font-medium uppercase tracking-[0.27em] text-[#f4efe2]/72 transition-colors hover:text-[#f4efe2]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to journal
            </Link>
            <nav className="flex max-w-[calc(100vw-8rem)] items-center gap-4 overflow-x-auto rounded-full border border-white/10 bg-black/20 px-4 py-2.5 backdrop-blur-sm sm:gap-7 sm:px-6">
              <Link
                href="/"
                className="shrink-0 text-[0.61rem] font-medium uppercase tracking-[0.22em] text-[#f4efe2]/56 transition-colors hover:text-[#f4efe2]"
              >
                Home
              </Link>
              <span className="shrink-0 text-[0.61rem] font-medium uppercase tracking-[0.22em] text-[#d8c9a7]">
                Journal
              </span>
              <Link
                href="/routes"
                className="shrink-0 text-[0.61rem] font-medium uppercase tracking-[0.22em] text-[#f4efe2]/56 transition-colors hover:text-[#f4efe2]"
              >
                Routes
              </Link>
              <Link
                href="/map"
                className="shrink-0 text-[0.61rem] font-medium uppercase tracking-[0.22em] text-[#f4efe2]/56 transition-colors hover:text-[#f4efe2]"
              >
                Map
              </Link>
            </nav>
          </div>
        </header>

        <div className="relative z-10 mt-auto px-5 pb-14 pt-20 sm:px-8 sm:pb-16 md:px-12 lg:pb-20">
          <JournalReveal className="mx-auto max-w-7xl">
            <p className="text-[0.64rem] font-medium uppercase tracking-[0.34em] text-[#d8c9a7]/82">
              {article.category}
            </p>
            <h1 className="mt-6 max-w-5xl font-serif text-[clamp(3.1rem,8.5vw,7.4rem)] font-normal leading-[0.9] tracking-[-0.06em]">
              {article.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base font-light leading-[1.8] text-[#f4efe2]/78 sm:text-lg md:text-xl">
              {article.subtitle}
            </p>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-[0.61rem] font-medium uppercase tracking-[0.24em] text-[#f4efe2]/56">
              <span>{article.region}</span>
              <span>{article.readTime}</span>
              <span>{article.publishedLabel}</span>
              <span>{article.updatedLabel}</span>
            </div>
          </JournalReveal>
        </div>
      </section>

      <section className="relative px-5 py-20 sm:px-8 sm:py-24 md:px-12 lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(216,201,167,0.06),transparent_32%),radial-gradient(circle_at_80%_24%,rgba(151,182,190,0.08),transparent_34%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="space-y-10">
            <JournalReveal>
              <article className="rounded-[1.2rem] border border-white/9 bg-white/[0.02] p-7 sm:p-8">
                <p className="text-[0.61rem] font-medium uppercase tracking-[0.31em] text-[#d8c9a7]/72">
                  Intro
                </p>
                <p className="mt-5 text-sm font-light leading-[1.85] text-[#f4efe2]/67 sm:text-base">
                  {article.excerpt}
                </p>
              </article>
            </JournalReveal>

            <JournalReveal delay={0.05}>
              <article className="rounded-[1.2rem] border border-white/9 bg-white/[0.02] p-7 sm:p-8">
                <p className="text-[0.61rem] font-medium uppercase tracking-[0.31em] text-[#d8c9a7]/72">
                  Highlights
                </p>
                <ul className="mt-5 space-y-4">
                  {article.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-sm font-light leading-[1.78] text-[#f4efe2]/65 sm:text-base"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            </JournalReveal>

            <JournalReveal delay={0.1}>
              <article className="rounded-[1.2rem] border border-white/9 bg-white/[0.02] p-7 sm:p-8">
                <p className="text-[0.61rem] font-medium uppercase tracking-[0.31em] text-[#d8c9a7]/72">
                  Practical notes
                </p>
                <dl className="mt-5 space-y-4">
                  {article.practicalNotes.map((note) => (
                    <div key={note.label} className="border-b border-white/8 pb-4 last:border-b-0">
                      <dt className="text-[0.58rem] font-medium uppercase tracking-[0.25em] text-[#d8c9a7]/68">
                        {note.label}
                      </dt>
                      <dd className="mt-2 text-sm font-light leading-[1.75] text-[#f4efe2]/65 sm:text-base">
                        {note.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            </JournalReveal>
          </aside>

          <div className="space-y-14">
            {article.sections.map((section, index) => (
              <JournalReveal key={section.heading} delay={index * 0.05}>
                <section className="border-t border-white/8 pt-8 first:border-t-0 first:pt-0">
                  <h2 className="font-serif text-[clamp(2rem,3.7vw,3.1rem)] font-normal leading-[0.95] tracking-[-0.04em]">
                    {section.heading}
                  </h2>
                  <div className="mt-6 space-y-5">
                    {section.body.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-base font-light leading-[1.85] text-[#f4efe2]/66 sm:text-lg"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              </JournalReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 px-5 py-20 sm:px-8 sm:py-24 md:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <JournalReveal>
            <p className="text-[0.62rem] font-medium uppercase tracking-[0.33em] text-[#d8c9a7]/72">
              Related journal notes
            </p>
          </JournalReveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.map((related, index) => (
              <JournalReveal key={related.slug} delay={index * 0.045}>
                <Link
                  href={`/journal/${related.slug}`}
                  className="group block h-full rounded-[1.1rem] border border-white/9 bg-white/[0.02] p-6 transition-colors hover:border-white/16 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
                >
                  <p className="text-[0.57rem] font-medium uppercase tracking-[0.25em] text-[#d8c9a7]/68">
                    {related.category}
                  </p>
                  <h3 className="mt-5 font-serif text-[1.85rem] leading-[1] tracking-[-0.04em] text-[#f4efe2]">
                    {related.title}
                  </h3>
                  <p className="mt-4 text-sm font-light leading-[1.75] text-[#f4efe2]/62">
                    {related.excerpt}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[0.6rem] font-medium uppercase tracking-[0.24em] text-[#f4efe2]/68 group-hover:text-[#f4efe2]">
                    Read note
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </JournalReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 px-5 py-20 sm:px-8 sm:py-24 md:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <JournalReveal>
            <p className="text-[0.62rem] font-medium uppercase tracking-[0.33em] text-[#d8c9a7]/72">
              Planning links
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {planningLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-white/12 bg-white/[0.02] px-5 py-3 text-[0.61rem] font-medium uppercase tracking-[0.24em] text-[#f4efe2]/76 transition-colors hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </JournalReveal>
        </div>
      </section>

      <section className="border-t border-white/8 px-5 py-14 sm:px-8 sm:py-16 md:px-12">
        <JournalReveal className="mx-auto flex max-w-7xl flex-wrap gap-3">
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-6 py-3 text-[0.62rem] font-medium uppercase tracking-[0.24em] text-[#f4efe2]/82 transition-colors hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
          >
            Back to journal
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            href="/routes"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-transparent px-6 py-3 text-[0.62rem] font-medium uppercase tracking-[0.24em] text-[#f4efe2]/72 transition-colors hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
          >
            Explore routes
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </JournalReveal>
      </section>
    </main>
  );
}
