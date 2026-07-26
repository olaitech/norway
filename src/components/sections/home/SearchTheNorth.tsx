"use client";

import { ArrowUpRight, Search } from "lucide-react";
import Link from "next/link";
import { startTransition, useDeferredValue, useState } from "react";

import { SectionHeading } from "@/src/components/ui/section-heading";
import {
  getGuidedSearchRecommendation,
  getGuidedSearchResults,
  normalizeGuidedSearchText,
} from "@/src/lib/search/guidedSearch";
import { guidedSearchSuggestions } from "@/src/lib/search/guidedSearchIndex";

export function SearchTheNorth() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const normalizedQuery = normalizeGuidedSearchText(deferredQuery);
  const hasQuery = normalizedQuery.length > 0;

  const rankedResults = hasQuery ? getGuidedSearchResults(deferredQuery) : [];
  const topResults = rankedResults.slice(0, 8);
  const recommendation = getGuidedSearchRecommendation(topResults);
  const bestResultId = recommendation?.bestResult.id;
  const secondaryResults = bestResultId
    ? topResults.filter((result) => result.id !== bestResultId).slice(0, 7)
    : topResults;
  const showNoResults = hasQuery && topResults.length === 0;

  return (
    <section
      aria-labelledby="search-the-north-title"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#18212a_0%,#22303a_20%,#35424b_36%,#58534c_52%,#7d7165_68%,#a09486_84%,#b9b0a4_100%)] px-5 pt-10 pb-16 text-[#1d1814] sm:px-8 sm:pt-12 sm:pb-20 md:px-12 lg:pt-14 lg:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_16%,rgba(244,237,229,0.08),transparent_36%),radial-gradient(circle_at_78%_22%,rgba(119,144,152,0.085),transparent_38%),radial-gradient(circle_at_52%_84%,rgba(199,185,169,0.11),transparent_45%)]" />
      <div className="home-transition-dark-to-warm pointer-events-none absolute inset-x-0 top-0 h-20 sm:h-24 lg:h-28" />
      <div className="home-transition-warm-to-dark pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-20 lg:h-24" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          id="search-the-north-title"
          eyebrow="Search archive"
          heading="Search the north"
          intro="Find ferries, road trips, places to stay, northern lights advice, camping rules and practical travel notes across the guide."
          eyebrowClassName="text-[#cbb9a5]/78"
          headingClassName="text-[#f2ece4]"
          introClassName="text-[#efe6db]/74"
        />

        <div className="mt-10 rounded-[1.35rem] border border-[#99846f]/30 bg-[linear-gradient(165deg,rgba(236,228,219,0.9),rgba(215,205,192,0.74))] p-5 shadow-[0_18px_58px_rgba(20,16,12,0.16)] backdrop-blur-sm sm:p-6 lg:p-7">
          <label
            htmlFor="home-search-the-north"
            className="mb-3 inline-block text-[0.62rem] font-medium uppercase tracking-[0.29em] text-[#716050]/82"
          >
            Find guidance
          </label>
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#615448]/60"
              aria-hidden="true"
            />
            <input
              id="home-search-the-north"
              type="search"
              value={query}
              onChange={(event) => {
                const nextQuery = event.currentTarget.value;
                startTransition(() => setQuery(nextQuery));
              }}
              placeholder='Try "Senja ferry", "Tromso northern lights", "Lofoten ferry"...'
              className="w-full rounded-[1.05rem] border border-[#a89480]/38 bg-[#f1e9df]/96 py-3.5 pl-11 pr-4 text-sm font-light text-[#1d1814]/90 outline-none placeholder:text-[#1d1814]/42 focus:border-[#8b7663]/52 focus:ring-2 focus:ring-[#8b7663]/24 sm:text-base"
            />
          </div>

          <div className="mt-5 flex flex-wrap gap-2.5">
            {guidedSearchSuggestions.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => {
                  startTransition(() => setQuery(suggestion));
                }}
                className="rounded-full border border-[#a89480]/34 bg-[#ede4d8]/82 px-4 py-2 text-[0.62rem] font-medium uppercase tracking-[0.2em] text-[#4b4035]/78 transition-colors hover:border-[#8b7663]/48 hover:text-[#1d1814] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b7663]/48"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8">
          {!hasQuery ? (
            <p className="rounded-[1rem] border border-[#99846f]/22 bg-[#ece4d9]/72 px-5 py-4 text-sm font-light leading-[1.78] text-[#1d1814]/64 sm:text-base">
              Start with a keyword or a suggested search to explore matching
              guides.
            </p>
          ) : null}

          {showNoResults ? (
            <p className="rounded-[1rem] border border-[#99846f]/22 bg-[#ece4d9]/72 px-5 py-4 text-sm font-light leading-[1.78] text-[#1d1814]/64 sm:text-base">
              No direct match yet. Try broader terms like{" "}
              <span className="text-[#1d1814]/88">
                northern lights, ferry, where to stay, camping
              </span>{" "}
              or <span className="text-[#1d1814]/88">best time to visit</span>.
            </p>
          ) : null}

          {recommendation ? (
            <Link
              href={recommendation.bestResult.href}
              className="internal-card-link group mb-4 block rounded-[1.2rem] border border-[#99846f]/30 bg-[linear-gradient(168deg,rgba(236,229,220,0.94),rgba(220,210,197,0.84)_42%,rgba(206,195,180,0.76))] p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b7663]/48 sm:p-7"
            >
              <p className="text-[0.58rem] font-medium uppercase tracking-[0.3em] text-[#716050]/84">
                Recommended result
              </p>
              <h3 data-card-title className="mt-4 font-serif text-[clamp(1.8rem,3.4vw,2.5rem)] leading-[0.98] tracking-[-0.035em] text-[#1d1814]">
                Best match: {recommendation.bestResult.title}
              </h3>
              <p className="mt-4 max-w-4xl text-sm font-light leading-[1.78] text-[#1d1814]/64 sm:text-base">
                {recommendation.bestResult.description}
              </p>
              <div className="mt-5 flex items-center justify-between gap-4">
                <p className="text-[0.62rem] font-medium uppercase tracking-[0.2em] text-[#1d1814]/54">
                  {recommendation.bestResult.href}
                </p>
                <span data-card-cue className="inline-flex items-center gap-2 text-[0.58rem] font-medium uppercase tracking-[0.24em] text-[#1d1814]/72">
                  Open section
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ) : null}

          {secondaryResults.length > 0 ? (
            <>
              {recommendation ? (
                <p className="mb-4 text-[0.6rem] font-medium uppercase tracking-[0.24em] text-[#1d1814]/52">
                  More matches
                </p>
              ) : null}
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {secondaryResults.map((result) => (
                  <Link
                    key={result.id}
                    href={result.href}
                    className="internal-card-link group h-full rounded-[1.15rem] border border-[#99846f]/24 bg-[linear-gradient(170deg,rgba(236,229,220,0.84),rgba(220,210,197,0.7))] p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b7663]/48 sm:p-6"
                  >
                    <p className="text-[0.58rem] font-medium uppercase tracking-[0.26em] text-[#716050]/82">
                      {result.category}
                    </p>
                    <h3 data-card-title className="mt-4 font-serif text-[1.75rem] leading-[1.02] tracking-[-0.033em] text-[#1d1814]">
                      {result.title}
                    </h3>
                    <p className="mt-4 text-sm font-light leading-[1.78] text-[#1d1814]/62 sm:text-[0.97rem]">
                      {result.description}
                    </p>
                    <div className="mt-5 flex items-center justify-between gap-4">
                      <p className="text-[0.62rem] font-medium uppercase tracking-[0.2em] text-[#1d1814]/50">
                        {result.href}
                      </p>
                      <span data-card-cue className="inline-flex items-center gap-2 text-[0.58rem] font-medium uppercase tracking-[0.24em] text-[#1d1814]/68">
                        Open page
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}
