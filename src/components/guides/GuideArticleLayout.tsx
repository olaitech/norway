import Link from "next/link";
import type { ReactNode } from "react";

import { GuideMetaFooter } from "@/src/components/shared/GuideMetaFooter";

type GuideSource = {
  label: string;
  href: string;
};

type GuideArticleLayoutProps = {
  title: string;
  subtitle?: string;
  category: string;
  readTime: string;
  lastUpdated: string;
  sources?: GuideSource[];
  children: ReactNode;
};

export function GuideArticleLayout({
  title,
  subtitle,
  category,
  readTime,
  lastUpdated,
  sources,
  children,
}: GuideArticleLayoutProps) {
  const hasSources = Boolean(sources && sources.length > 0);

  return (
    <main className="min-h-screen bg-[#050607] text-[#f4efe2]">
      <section className="relative overflow-hidden px-5 pb-12 pt-8 sm:px-8 sm:pb-14 sm:pt-10 md:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(216,201,167,0.08),transparent_30%),radial-gradient(circle_at_82%_16%,rgba(126,176,192,0.1),transparent_34%)]" />

        <div className="relative mx-auto max-w-4xl">
          <Link
            href="/guides"
            className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.02] px-4 py-2 text-[0.61rem] font-medium uppercase tracking-[0.24em] text-[#f4efe2]/74 transition-colors hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
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
              <span>Practical guide</span>
              <span>{readTime}</span>
              <span>Updated {lastUpdated}</span>
            </div>
          </header>
        </div>
      </section>

      <section className="border-t border-white/8 px-5 py-12 sm:px-8 sm:py-14 md:px-12 lg:py-16">
        <article className="mx-auto max-w-4xl">
          <div className="rounded-[1.25rem] border border-white/10 bg-[linear-gradient(165deg,rgba(255,255,255,0.03),rgba(255,255,255,0.012))] p-6 sm:p-8 md:p-10">
            <div className="[&_a]:text-[#d8c9a7]/86 [&_a]:underline [&_a]:decoration-[#d8c9a7]/35 [&_a]:underline-offset-4 [&_a]:transition-colors [&_a:hover]:text-[#f4efe2] [&_blockquote]:mt-7 [&_blockquote]:border-l [&_blockquote]:border-[#d8c9a7]/35 [&_blockquote]:pl-4 [&_blockquote]:text-[#f4efe2]/72 [&_h2]:mt-12 [&_h2]:font-serif [&_h2]:text-[clamp(2rem,4vw,3.1rem)] [&_h2]:font-normal [&_h2]:leading-[0.95] [&_h2]:tracking-[-0.04em] [&_h2]:text-[#f4efe2] [&_h3]:mt-9 [&_h3]:font-serif [&_h3]:text-[clamp(1.5rem,3.2vw,2.2rem)] [&_h3]:font-normal [&_h3]:leading-[1.02] [&_h3]:tracking-[-0.03em] [&_h3]:text-[#f4efe2] [&_li]:mt-2 [&_li]:text-base [&_li]:font-light [&_li]:leading-[1.8] [&_li]:text-[#f4efe2]/68 [&_ol]:mt-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:mt-5 [&_p]:text-base [&_p]:font-light [&_p]:leading-[1.85] [&_p]:text-[#f4efe2]/70 [&_table]:mt-7 [&_table]:w-full [&_table]:border-collapse [&_table]:overflow-hidden [&_table]:rounded-[0.9rem] [&_table]:border [&_table]:border-white/10 [&_tbody_tr]:border-t [&_tbody_tr]:border-white/10 [&_td]:px-3 [&_td]:py-3 [&_td]:text-sm [&_td]:font-light [&_td]:text-[#f4efe2]/68 [&_th]:bg-white/[0.03] [&_th]:px-3 [&_th]:py-3 [&_th]:text-left [&_th]:text-xs [&_th]:font-medium [&_th]:uppercase [&_th]:tracking-[0.2em] [&_th]:text-[#d8c9a7]/76 [&_ul]:mt-5 [&_ul]:list-disc [&_ul]:pl-5">
              {children}
            </div>
          </div>

          {hasSources ? (
            <GuideMetaFooter
              className="mt-8"
              lastUpdated={lastUpdated}
              sources={sources ?? []}
            />
          ) : null}
        </article>
      </section>
    </main>
  );
}

export type { GuideArticleLayoutProps, GuideSource };
