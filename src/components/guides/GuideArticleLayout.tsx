import Link from "next/link";
import type { ReactNode } from "react";

import { GuideMetaFooter } from "@/src/components/shared/GuideMetaFooter";
import {
  RelatedLinkCards,
  type RelatedLinkCard,
} from "@/src/components/shared/RelatedLinkCards";
import {
  JsonLd,
  createArticleJsonLd,
  createBreadcrumbListJsonLd,
  createFaqJsonLd,
  type FaqItem,
} from "@/src/lib/seo/jsonLd";

type GuideSource = {
  label: string;
  href: string;
};

const CURRENT_SITE_WIDE_REFRESH_DATE = "2026-06-25";

type GuideArticleLayoutProps = {
  title: string;
  subtitle?: string;
  category: string;
  metaLabel?: string;
  readTime: string;
  lastUpdated: string;
  dateModified?: string;
  canonicalPath: string;
  answerBlock?: ReactNode;
  featureSection?: ReactNode;
  faqItems?: readonly FaqItem[];
  trustBox?: ReactNode;
  sources?: GuideSource[];
  relatedLinks?: readonly RelatedLinkCard[];
  relatedEyebrow?: string;
  relatedTitle?: string;
  relatedIntro?: string;
  children: ReactNode;
};

export function GuideArticleLayout({
  title,
  subtitle,
  category,
  metaLabel = "Practical guide",
  readTime,
  lastUpdated,
  dateModified,
  canonicalPath,
  answerBlock,
  featureSection,
  faqItems,
  trustBox,
  sources,
  relatedLinks,
  relatedEyebrow,
  relatedTitle = "Related planning paths",
  relatedIntro = "Keep the trip moving with a few calm next steps.",
  children,
}: GuideArticleLayoutProps) {
  const hasSources = Boolean(sources && sources.length > 0);
  const hasRelatedLinks = Boolean(relatedLinks && relatedLinks.length > 0);
  const hasFaqItems = Boolean(faqItems && faqItems.length > 0);
  const guideBreadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Guides", href: "/guides" },
    { name: title, href: canonicalPath },
  ] as const;

  return (
    <>
      <JsonLd
        value={[
          createBreadcrumbListJsonLd(guideBreadcrumbs),
          createArticleJsonLd({
            headline: title,
            description: subtitle ?? title,
            url: canonicalPath,
            articleSection: category,
            dateModified: dateModified ?? CURRENT_SITE_WIDE_REFRESH_DATE,
          }),
          ...(hasFaqItems ? [createFaqJsonLd(faqItems ?? [])] : []),
        ]}
      />
      <main className="min-h-screen bg-[linear-gradient(180deg,var(--deep-fjord)_0%,var(--polar-night)_100%)] text-[#f4efe2]">
      <section className="relative overflow-hidden px-5 pb-12 pt-8 sm:px-8 sm:pb-14 sm:pt-10 md:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(143,175,168,0.08),transparent_30%),radial-gradient(circle_at_82%_16%,rgba(198,161,91,0.1),transparent_34%),linear-gradient(180deg,rgba(16,26,30,0.24),rgba(5,8,10,0))]" />

        <div className="relative mx-auto max-w-4xl">
          <Link
            href="/guides"
            className="inline-flex items-center rounded-full border border-[#8fafa8]/12 bg-[linear-gradient(180deg,rgba(16,26,30,0.76),rgba(8,17,22,0.5))] px-4 py-2 text-[0.61rem] font-medium uppercase tracking-[0.24em] text-[#f4efe2]/74 transition-colors hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6a15b]/55"
          >
            Back to Practical Guides
          </Link>

          <header className="mt-10 border-t border-white/8 pt-10 sm:pt-12">
            <p className="text-[0.62rem] font-medium uppercase tracking-[0.32em] text-[#d8c9a7]/76">
              {category}
            </p>
            <h1 className="mt-6 font-serif text-[clamp(2.6rem,7.5vw,5rem)] font-normal leading-[0.9] tracking-[-0.055em] text-[#f4efe2]">
              {title}
            </h1>
            {subtitle ? (
              <p className="mt-6 max-w-3xl text-base font-light leading-[1.82] text-[#f4efe2]/72 sm:text-lg">
                {subtitle}
              </p>
            ) : null}

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.62rem] font-medium uppercase tracking-[0.24em] text-[#f4efe2]/56">
              <span>{metaLabel}</span>
              <span>{readTime}</span>
              <span>Updated {lastUpdated}</span>
            </div>
          </header>
        </div>
      </section>

      <section className="border-t border-white/8 bg-[linear-gradient(180deg,rgba(8,17,22,0.2),rgba(5,8,10,0.1))] px-5 py-12 sm:px-8 sm:py-14 md:px-12 lg:py-16">
        <article className="mx-auto max-w-4xl">
          {answerBlock ? <div className="mb-8">{answerBlock}</div> : null}
          {featureSection ? <div className="mb-12">{featureSection}</div> : null}
          <div className="rounded-[1.25rem] border border-[#8fafa8]/12 bg-[linear-gradient(165deg,rgba(23,35,38,0.84),rgba(8,17,22,0.94))] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.22)] sm:p-8 md:p-10">
          <div className="[&_a]:text-[#c6a15b]/86 [&_a]:underline [&_a]:decoration-[#c6a15b]/35 [&_a]:underline-offset-4 [&_a]:transition-colors [&_a:hover]:text-[#f4efe2] [&_blockquote]:mt-7 [&_blockquote]:border-l [&_blockquote]:border-[#c6a15b]/35 [&_blockquote]:pl-4 [&_blockquote]:text-[#f4efe2]/72 [&_h2]:mt-12 [&_h2]:font-serif [&_h2]:text-[clamp(2rem,4vw,3.1rem)] [&_h2]:font-normal [&_h2]:leading-[0.95] [&_h2]:tracking-[-0.04em] [&_h2]:text-[#f4efe2] [&_h3]:mt-9 [&_h3]:font-serif [&_h3]:text-[clamp(1.5rem,3.2vw,2.2rem)] [&_h3]:font-normal [&_h3]:leading-[1.02] [&_h3]:tracking-[-0.03em] [&_h3]:text-[#f4efe2] [&_li]:mt-2 [&_li]:text-base [&_li]:font-light [&_li]:leading-[1.8] [&_li]:text-[#f4efe2]/68 [&_ol]:mt-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:mt-5 [&_p]:text-base [&_p]:font-light [&_p]:leading-[1.85] [&_p]:text-[#f4efe2]/70 [&_table]:mt-7 [&_table]:w-full [&_table]:border-collapse [&_table]:overflow-hidden [&_table]:rounded-[0.9rem] [&_table]:border [&_table]:border-white/10 [&_tbody_tr]:border-t [&_tbody_tr]:border-white/10 [&_td]:px-3 [&_td]:py-3 [&_td]:text-sm [&_td]:font-light [&_td]:text-[#f4efe2]/68 [&_th]:bg-white/[0.03] [&_th]:px-3 [&_th]:py-3 [&_th]:text-left [&_th]:text-xs [&_th]:font-medium [&_th]:uppercase [&_th]:tracking-[0.2em] [&_th]:text-[#c6a15b]/76 [&_ul]:mt-5 [&_ul]:list-disc [&_ul]:pl-5">
              {children}
          </div>
          </div>

          {hasFaqItems ? (
            <section className="mt-12 border-t border-white/8 pt-12 sm:mt-14 sm:pt-14">
              <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
                <div className="max-w-xl">
                  <p className="text-[0.62rem] font-medium uppercase tracking-[0.31em] text-[#d8c9a7]/72">
                    FAQ
                  </p>
                  <h2 className="mt-5 font-serif text-[clamp(2rem,4vw,3.1rem)] font-normal leading-[0.95] tracking-[-0.04em] text-[#f4efe2]">
                    Planning questions
                  </h2>
                  <p className="mt-5 max-w-lg text-sm font-light leading-[1.85] text-[#f4efe2]/64 sm:text-base">
                    Short answers to the decisions that most often shape the
                    route, timing and pace of the trip.
                  </p>
                </div>
                <div className="space-y-4">
                  {faqItems?.map((item) => (
                    <article
                      key={item.question}
                      className="rounded-[1rem] border border-[#8fafa8]/12 bg-[linear-gradient(165deg,rgba(23,35,38,0.74),rgba(8,17,22,0.92))] px-5 py-5 shadow-[0_16px_52px_rgba(0,0,0,0.18)] sm:px-6"
                    >
                      <h3 className="font-serif text-[1.25rem] font-normal leading-[1.1] tracking-[-0.03em] text-[#f4efe2] sm:text-[1.4rem]">
                        {item.question}
                      </h3>
                      <p className="mt-3 text-sm font-light leading-[1.85] text-[#f4efe2]/68 sm:text-base">
                        {item.answer}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          ) : null}

          {hasRelatedLinks ? (
            <RelatedLinkCards
              className="mt-10"
              eyebrow={relatedEyebrow}
              title={relatedTitle}
              intro={relatedIntro}
              links={relatedLinks ?? []}
            />
          ) : null}

          {trustBox ? (
            <div className="mt-8">{trustBox}</div>
          ) : hasSources ? (
            <GuideMetaFooter
              className="mt-8"
              lastUpdated={lastUpdated}
              sources={sources ?? []}
            />
          ) : null}
        </article>
      </section>
      </main>
    </>
  );
}

export type { GuideArticleLayoutProps, GuideSource };
