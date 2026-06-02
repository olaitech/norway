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
      className="relative overflow-hidden bg-[linear-gradient(180deg,#1a2430_0%,#2f3a45_14%,#cdbda8_52%,#e8dfd1_84%,#ece5d9_100%)] px-5 pt-10 pb-16 text-[#1b1815] sm:px-8 sm:pt-12 sm:pb-20 md:px-12 lg:pt-14 lg:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_16%,rgba(247,243,237,0.12),transparent_34%),radial-gradient(circle_at_78%_22%,rgba(126,176,192,0.11),transparent_38%),radial-gradient(circle_at_52%_84%,rgba(216,201,181,0.16),transparent_45%)]" />
      <div className="home-transition-dark-to-warm pointer-events-none absolute inset-x-0 top-0 h-16" />
      <div className="home-transition-warm-to-dark pointer-events-none absolute inset-x-0 bottom-0 h-16" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Search archive"
          heading="Search the north"
          intro="Find ferries, road trips, places to stay, northern lights advice, camping rules and practical travel notes across the guide."
          eyebrowClassName="text-[#d8c9b5]/82"
          headingClassName="text-[#f7f3ed]"
          introClassName="text-[#f7f3ed]/76"
        />

        <div className="mt-10 rounded-[1.35rem] border border-[#8f7d67]/35 bg-[linear-gradient(165deg,rgba(244,239,232,0.92),rgba(231,221,207,0.78))] p-5 shadow-[0_22px_80px_rgba(20,16,12,0.2)] backdrop-blur-sm sm:p-6 lg:p-7">
          <label
            htmlFor="home-search-the-north"
            className="mb-3 inline-block text-[0.62rem] font-medium uppercase tracking-[0.29em] text-[#7a6752]/86"
          >
            Find guidance
          </label>
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5f5346]/66"
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
              className="w-full rounded-[1.05rem] border border-[#b7a38e]/46 bg-[#f7f3ed]/95 py-3.5 pl-11 pr-4 text-sm font-light text-[#1b1815]/92 outline-none placeholder:text-[#1b1815]/45 focus:border-[#8f7d67]/58 focus:ring-2 focus:ring-[#8f7d67]/32 sm:text-base"
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
                className="rounded-full border border-[#b7a38e]/42 bg-[#f4efe8]/85 px-4 py-2 text-[0.62rem] font-medium uppercase tracking-[0.2em] text-[#4b3f34]/82 transition-colors hover:border-[#8f7d67]/52 hover:text-[#1b1815] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f7d67]/55"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8">
          {!hasQuery ? (
            <p className="rounded-[1rem] border border-[#8f7d67]/28 bg-[#f4efe8]/78 px-5 py-4 text-sm font-light leading-[1.78] text-[#1b1815]/68 sm:text-base">
              Start with a keyword or a suggested search to explore matching
              guides.
            </p>
          ) : null}

          {showNoResults ? (
            <p className="rounded-[1rem] border border-[#8f7d67]/28 bg-[#f4efe8]/78 px-5 py-4 text-sm font-light leading-[1.78] text-[#1b1815]/68 sm:text-base">
              No direct match yet. Try broader terms like{" "}
              <span className="text-[#1b1815]/90">
                northern lights, ferry, where to stay, camping
              </span>{" "}
              or <span className="text-[#1b1815]/90">best time to visit</span>.
            </p>
          ) : null}

          {recommendation ? (
            <Link
              href={recommendation.bestResult.href}
              className="group mb-4 block rounded-[1.2rem] border border-[#8f7d67]/35 bg-[linear-gradient(168deg,rgba(244,239,232,0.95),rgba(231,221,207,0.86)_42%,rgba(216,201,181,0.78))] p-6 transition-colors hover:border-[#7f6d58]/48 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f7d67]/55 sm:p-7"
            >
              <p className="text-[0.58rem] font-medium uppercase tracking-[0.3em] text-[#7a6752]/88">
                Recommended result
              </p>
              <h3 className="mt-4 font-serif text-[clamp(1.8rem,3.4vw,2.5rem)] leading-[0.98] tracking-[-0.035em] text-[#1b1815]">
                Best match: {recommendation.bestResult.title}
              </h3>
              <p className="mt-4 max-w-4xl text-sm font-light leading-[1.78] text-[#1b1815]/68 sm:text-base">
                {recommendation.bestResult.description}
              </p>
              <div className="mt-5 flex items-center justify-between gap-4">
                <p className="text-[0.62rem] font-medium uppercase tracking-[0.2em] text-[#1b1815]/56">
                  {recommendation.bestResult.href}
                </p>
                <span className="inline-flex items-center gap-2 text-[0.58rem] font-medium uppercase tracking-[0.24em] text-[#1b1815]/76 transition-colors group-hover:text-[#1b1815]">
                  Open section
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ) : null}

          {secondaryResults.length > 0 ? (
            <>
              {recommendation ? (
                <p className="mb-4 text-[0.6rem] font-medium uppercase tracking-[0.24em] text-[#1b1815]/54">
                  More matches
                </p>
              ) : null}
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {secondaryResults.map((result) => (
                  <Link
                    key={result.id}
                    href={result.href}
                    className="group h-full rounded-[1.15rem] border border-[#8f7d67]/28 bg-[linear-gradient(170deg,rgba(244,239,232,0.86),rgba(231,221,207,0.72))] p-5 transition-colors hover:border-[#7f6d58]/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f7d67]/55 sm:p-6"
                  >
                    <p className="text-[0.58rem] font-medium uppercase tracking-[0.26em] text-[#7a6752]/84">
                      {result.category}
                    </p>
                    <h3 className="mt-4 font-serif text-[1.75rem] leading-[1.02] tracking-[-0.033em] text-[#1b1815]">
                      {result.title}
                    </h3>
                    <p className="mt-4 text-sm font-light leading-[1.78] text-[#1b1815]/66 sm:text-[0.97rem]">
                      {result.description}
                    </p>
                    <div className="mt-5 flex items-center justify-between gap-4">
                      <p className="text-[0.62rem] font-medium uppercase tracking-[0.2em] text-[#1b1815]/52">
                        {result.href}
                      </p>
                      <span className="inline-flex items-center gap-2 text-[0.58rem] font-medium uppercase tracking-[0.24em] text-[#1b1815]/72 transition-colors group-hover:text-[#1b1815]">
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
