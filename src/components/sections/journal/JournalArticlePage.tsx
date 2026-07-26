import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type {
  JournalArticle,
  JournalArticleImageGroup,
  JournalArticleSection,
  JournalArticleSourceGroup,
  JournalArticleTimelineItem,
} from "@/src/data/journal-articles";
import {
  JsonLd,
  createArticleJsonLd,
  createBreadcrumbListJsonLd,
} from "@/src/lib/seo/jsonLd";

import { HistoricalJournalArticle } from "./HistoricalJournalArticle";
import { FieldNotesFieldLog } from "./FieldNotesFieldLog";
import { JournalReveal } from "./JournalReveal";

type JournalArticlePageProps = {
  article: JournalArticle;
  relatedArticles: JournalArticle[];
};

function ArticleImageGroup({ group }: { group: JournalArticleImageGroup }) {
  return (
    <figure className="mt-8">
      <div
        className={
          group.images.length > 1
            ? "grid gap-4 sm:grid-cols-2"
            : "max-w-md"
        }
      >
        {group.images.map((image) => (
          <div
            key={image.src}
            className="min-w-0"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.1rem] border border-white/8 bg-[#07100f]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={
                  group.images.length > 1
                    ? "(min-width: 1024px) 25vw, (min-width: 640px) 40vw, 100vw"
                    : "(min-width: 1024px) 34vw, (min-width: 640px) 50vw, 100vw"
                }
                className="object-cover"
              />
            </div>
            {image.label ? (
              <p className="mt-3 text-[0.57rem] font-medium uppercase tracking-[0.22em] text-[#d8c9a7]/62">
                {image.label}
              </p>
            ) : null}
            {image.caption ? (
              <p className="mt-2 text-xs font-light leading-[1.65] text-[#f4efe2]/50">
                {image.caption}
              </p>
            ) : null}
          </div>
        ))}
      </div>
      {group.caption ? (
        <figcaption className="mt-3 text-xs font-light leading-[1.7] text-[#f4efe2]/46">
          {group.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function ArticleBodySection({
  section,
  delay,
  isSubsection = false,
  fieldLogSection,
  fieldLogOrder,
}: {
  section: JournalArticleSection;
  delay: number;
  isSubsection?: boolean;
  fieldLogSection?: string;
  fieldLogOrder?: number;
}) {
  const Heading = isSubsection ? "h3" : "h2";
  const isTestimony = section.variant === "testimony";

  return (
    <JournalReveal delay={delay}>
      <section
        className={
          isTestimony
            ? "rounded-[1.2rem] border border-[#c6a15b]/24 bg-[linear-gradient(135deg,rgba(198,161,91,0.12),rgba(10,22,25,0.64))] p-7 sm:p-9"
            : "border-t border-white/8 pt-8 first:border-t-0 first:pt-0"
        }
      >
        {isTestimony ? (
          <p className="text-[0.61rem] font-medium uppercase tracking-[0.31em] text-[#d8c9a7]/72">
            Human story · later accounts
          </p>
        ) : null}
        <Heading
          data-field-log-order={fieldLogOrder}
          data-field-log-section={fieldLogSection}
          className={`font-serif text-[clamp(2rem,3.7vw,3.1rem)] font-normal leading-[0.95] tracking-[-0.04em] ${isTestimony ? "mt-5" : ""}`}
        >
          {section.heading}
        </Heading>
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
        {section.image ? (
          <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-[1.1rem] border border-white/8">
            <Image
              src={section.image.src}
              alt={section.image.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        ) : null}
        {section.imageGroups?.map((group) => (
          <ArticleImageGroup
            key={group.images.map((image) => image.src).join("-")}
            group={group}
          />
        ))}
        {section.sourceMarker ? (
          <p className="mt-7 text-[0.58rem] font-medium uppercase tracking-[0.24em] text-[#d8c9a7]/64">
            Sources {section.sourceMarker}
          </p>
        ) : null}
      </section>
    </JournalReveal>
  );
}

function TimelineRail({ items }: { items: JournalArticleTimelineItem[] }) {
  return (
    <JournalReveal delay={0.15}>
      <article className="surface-fjord rounded-[1.2rem] p-7 sm:p-8">
        <p className="text-[0.61rem] font-medium uppercase tracking-[0.31em] text-[#d8c9a7]/72">
          Period rail
        </p>
        <ol className="mt-5 space-y-0 border-l border-[#d8c9a7]/22">
          {items.map((item) => (
            <li key={item.period} className="relative pl-5 pb-5 last:pb-0">
              <span className="absolute -left-[3px] top-1.5 h-1.5 w-1.5 rounded-full bg-[#d8c9a7]" />
              <p className="text-[0.6rem] font-medium uppercase tracking-[0.21em] text-[#d8c9a7]/72">
                {item.period}
              </p>
              <p className="mt-1.5 text-sm font-light leading-[1.7] text-[#f4efe2]/65">
                {item.label}
              </p>
            </li>
          ))}
        </ol>
      </article>
    </JournalReveal>
  );
}

function ArticleSources({
  groups,
  note,
}: {
  groups: JournalArticleSourceGroup[];
  note?: string;
}) {
  return (
    <JournalReveal delay={0.2}>
      <section className="border-t border-white/8 pt-10">
        <p className="text-[0.61rem] font-medium uppercase tracking-[0.31em] text-[#d8c9a7]/72">
          Research note
        </p>
        <h2 className="mt-5 font-serif text-[clamp(2rem,3.7vw,3.1rem)] font-normal leading-[0.95] tracking-[-0.04em]">
          Sources and further reading
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {groups.map((group) => (
            <section key={group.title}>
              <h3 className="text-[0.63rem] font-medium uppercase tracking-[0.25em] text-[#d8c9a7]/76">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {group.sources.map((source) => (
                  <li
                    key={source.marker}
                    className="text-sm font-light leading-[1.7] text-[#f4efe2]/66"
                  >
                    <span className="mr-2 text-[0.6rem] font-medium tracking-[0.14em] text-[#d8c9a7]/72">
                      [{source.marker}]
                    </span>
                    <a
                      href={source.href}
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-[#d8c9a7]/35 underline-offset-4 transition-colors hover:text-[#f4efe2]"
                    >
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        {note ? (
          <p className="mt-10 max-w-3xl border-l border-[#d8c9a7]/28 pl-5 text-sm font-light leading-[1.8] text-[#f4efe2]/60 sm:text-base">
            {note}
          </p>
        ) : null}
      </section>
    </JournalReveal>
  );
}

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
  { label: "Lofoten Guide", href: "/destinations/lofoten-islands" },
];

export function JournalArticlePage({
  article,
  relatedArticles,
}: JournalArticlePageProps) {
  const canonicalPath = `/journal/${article.slug}`;
  const isHeroyFieldNotes = article.slug === "field-notes-heroy-helgeland";
  const fieldLogSectionByHeading: Record<string, [string, number]> = {
    "Harbours Beside the Road": ["harbours", 3],
    "Between Fields and Salt Water": ["fields", 4],
    "A Pause on Seløy": ["seloy", 5],
    "The Coast Is Always Present": ["coast", 6],
    "The road worth leaving": ["road-worth-leaving", 7],
  };

  return (
    <>
      <JsonLd
        value={[
          createBreadcrumbListJsonLd([
            { name: "Home", href: "/" },
            { name: "Journal", href: "/journal" },
            { name: article.title, href: canonicalPath },
          ]),
          createArticleJsonLd({
            headline: article.title,
            description: article.seoDescription,
            url: canonicalPath,
            image: article.image,
            articleSection: article.schemaSection ?? article.category,
            datePublished: article.publishedDate,
            dateModified: article.updatedDate,
          }),
        ]}
      />
      {article.historicalExperience ? (
        <HistoricalJournalArticle
          article={article}
          relatedArticles={relatedArticles}
          experience={article.historicalExperience}
        />
      ) : (
      <main className="surface-fjord-shell min-h-screen text-[#f4efe2]">
      <section className="relative flex min-h-[78vh] flex-col overflow-hidden">
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          priority
          sizes="100vw"
          className={
            article.heroImageFit === "contain"
              ? "object-contain brightness-[1.04]"
              : "object-cover brightness-[1.04]"
          }
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,5,8,0.84)_0%,rgba(2,5,8,0.48)_44%,rgba(2,5,8,0.18)_100%)]"
          style={{ opacity: article.heroOverlayOpacity ?? 1 }}
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,5,8,0.43)_0%,rgba(2,5,8,0.1)_38%,rgba(2,5,8,0.82)_100%)]"
          style={{ opacity: article.heroOverlayOpacity ?? 1 }}
        />

        <header className="relative z-10 px-5 py-6 sm:px-8 md:px-12">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
            <Link
              href="/journal"
              className="inline-flex items-center gap-3 text-[0.63rem] font-medium uppercase tracking-[0.27em] text-[#f4efe2]/72 transition-colors hover:text-[#f4efe2]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to journal
            </Link>
            <nav className="flex max-w-[calc(100vw-8rem)] items-center gap-4 overflow-x-auto rounded-full border border-[#8fafa8]/12 bg-[linear-gradient(180deg,rgba(16,26,30,0.76),rgba(8,17,22,0.52))] px-4 py-2.5 backdrop-blur-sm sm:gap-7 sm:px-6">
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
              {article.kicker ?? article.category}
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
        <div className="relative mx-auto grid max-w-7xl items-stretch gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="space-y-10 self-stretch">
            {isHeroyFieldNotes ? <FieldNotesFieldLog /> : null}
            <JournalReveal>
              <article className="surface-fjord rounded-[1.2rem] p-7 sm:p-8">
                <p className="text-[0.61rem] font-medium uppercase tracking-[0.31em] text-[#d8c9a7]/72">
                  Intro
                </p>
                <p className="mt-5 text-sm font-light leading-[1.85] text-[#f4efe2]/67 sm:text-base">
                  {article.excerpt}
                </p>
              </article>
            </JournalReveal>

            <JournalReveal delay={0.05}>
              <article className="surface-fjord rounded-[1.2rem] p-7 sm:p-8">
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
              <article className="surface-fjord rounded-[1.2rem] p-7 sm:p-8">
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
            {article.timeline?.length ? (
              <TimelineRail items={article.timeline} />
            ) : null}
          </aside>

          <div className="space-y-14">
            {article.fieldNoteEntries?.length ? (
              <div className="space-y-16">
                {article.fieldNoteEntries.map((entry, entryIndex) => (
                  <section
                    key={`${entry.dateLabel}-${entry.title}`}
                    className="border-t border-white/8 pt-12 first:border-t-0 first:pt-0"
                  >
                    <p className="text-[0.62rem] font-medium uppercase tracking-[0.32em] text-[#d8c9a7]/72">
                      {entry.dateLabel}
                    </p>
                    <h2
                      data-field-log-order={
                        isHeroyFieldNotes ? (entryIndex === 0 ? 1 : 2) : undefined
                      }
                      data-field-log-section={
                        isHeroyFieldNotes
                          ? entryIndex === 0
                            ? "quiet-morning"
                            : "four-days"
                          : undefined
                      }
                      className="mt-5 font-serif text-[clamp(2.5rem,4.6vw,4rem)] font-normal leading-[0.95] tracking-[-0.05em]"
                    >
                      {entry.title}
                    </h2>
                    <div className="mt-10 space-y-14">
                      {entry.sections.map((section, sectionIndex) => (
                        <ArticleBodySection
                          key={section.heading}
                          section={section}
                          delay={(entryIndex + sectionIndex) * 0.05}
                          isSubsection
                          fieldLogSection={
                            isHeroyFieldNotes
                              ? fieldLogSectionByHeading[section.heading]?.[0]
                              : undefined
                          }
                          fieldLogOrder={
                            isHeroyFieldNotes
                              ? fieldLogSectionByHeading[section.heading]?.[1]
                              : undefined
                          }
                        />
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            ) : (
              article.sections?.map((section, index) => (
                <ArticleBodySection
                  key={section.heading}
                  section={section}
                  delay={index * 0.05}
                />
              ))
            )}
            {article.sourceGroups?.length ? (
              <ArticleSources
                groups={article.sourceGroups}
                note={article.sourcesNote}
              />
            ) : null}
          </div>
        </div>
      </section>

      {article.relatedLinks?.length ? (
        <section className="border-t border-white/8 px-5 py-20 sm:px-8 sm:py-24 md:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <JournalReveal>
              <p className="text-[0.62rem] font-medium uppercase tracking-[0.33em] text-[#d8c9a7]/72">
              {article.relatedLinksLabel ?? "Continue from Herøy"}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {article.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-full border border-[#8fafa8]/12 bg-[linear-gradient(180deg,rgba(16,26,30,0.72),rgba(8,17,22,0.52))] px-5 py-3 text-[0.61rem] font-medium uppercase tracking-[0.24em] text-[#f4efe2]/76 transition-colors hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </JournalReveal>
          </div>
        </section>
      ) : null}

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
                  className="internal-card-link surface-fjord group block h-full rounded-[1.1rem] p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
                >
                  <p className="text-[0.57rem] font-medium uppercase tracking-[0.25em] text-[#d8c9a7]/68">
                    {related.category}
                  </p>
                  <h3
                    data-card-title
                    className="mt-5 font-serif text-[1.85rem] leading-[1] tracking-[-0.04em] text-[#f4efe2]"
                  >
                    {related.title}
                  </h3>
                  <p className="mt-4 text-sm font-light leading-[1.75] text-[#f4efe2]/62">
                    {related.excerpt}
                  </p>
                  <span
                    data-card-cue
                    className="mt-6 inline-flex items-center gap-2 text-[0.6rem] font-medium uppercase tracking-[0.24em] text-[#f4efe2]/68"
                  >
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
                  className="rounded-full border border-[#8fafa8]/12 bg-[linear-gradient(180deg,rgba(16,26,30,0.72),rgba(8,17,22,0.52))] px-5 py-3 text-[0.61rem] font-medium uppercase tracking-[0.24em] text-[#f4efe2]/76 transition-colors hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
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
            className="inline-flex items-center gap-2 rounded-full border border-[#8fafa8]/12 bg-[linear-gradient(180deg,rgba(16,26,30,0.76),rgba(8,17,22,0.52))] px-6 py-3 text-[0.62rem] font-medium uppercase tracking-[0.24em] text-[#f4efe2]/82 transition-colors hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
          >
            Back to journal
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            href="/routes"
            className="inline-flex items-center gap-2 rounded-full border border-[#8fafa8]/12 bg-transparent px-6 py-3 text-[0.62rem] font-medium uppercase tracking-[0.24em] text-[#f4efe2]/72 transition-colors hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
          >
            Explore routes
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </JournalReveal>
      </section>
      </main>
      )}
    </>
  );
}
