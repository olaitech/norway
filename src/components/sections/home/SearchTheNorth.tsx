"use client";

import { ArrowUpRight, Search } from "lucide-react";
import Link from "next/link";
import { startTransition, useDeferredValue, useState } from "react";

import { SectionHeading } from "@/src/components/ui/section-heading";
import {
  homeSearchIndex,
  homeSearchSuggestions,
  type HomeSearchEntry,
} from "@/src/data/home-search-index";

type RankedSearchResult = HomeSearchEntry & {
  score: number;
};

function normalizeSearchText(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function scoreSearchEntry(entry: HomeSearchEntry, normalizedQuery: string) {
  if (!normalizedQuery) {
    return 0;
  }

  const title = normalizeSearchText(entry.title);
  const description = normalizeSearchText(entry.description);
  const category = normalizeSearchText(entry.category);
  const route = normalizeSearchText(entry.route);
  const keywords = entry.keywords.map(normalizeSearchText);
  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);

  let score = 0;

  if (title.includes(normalizedQuery)) score += 48;
  if (description.includes(normalizedQuery)) score += 30;
  if (route.includes(normalizedQuery)) score += 20;
  if (category.includes(normalizedQuery)) score += 12;
  if (keywords.some((keyword) => keyword.includes(normalizedQuery))) score += 28;

  for (const token of tokens) {
    if (title.includes(token)) score += 9;
    if (description.includes(token)) score += 6;
    if (route.includes(token)) score += 5;
    if (category.includes(token)) score += 4;
    if (keywords.some((keyword) => keyword.includes(token))) score += 8;
  }

  return score;
}

export function SearchTheNorth() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const normalizedQuery = normalizeSearchText(deferredQuery);
  const hasQuery = normalizedQuery.length > 0;

  const rankedResults: RankedSearchResult[] = hasQuery
    ? homeSearchIndex
        .map((entry) => ({
          ...entry,
          score: scoreSearchEntry(entry, normalizedQuery),
        }))
        .filter((entry) => entry.score > 0)
        .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
    : [];

  const topResults = rankedResults.slice(0, 8);

  return (
    <section
      aria-labelledby="search-the-north-title"
      className="relative overflow-hidden bg-[#050607] px-5 pt-10 pb-16 text-[#f4efe2] sm:px-8 sm:pt-12 sm:pb-20 md:px-12 lg:pt-14 lg:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_16%,rgba(216,201,167,0.08),transparent_34%),radial-gradient(circle_at_78%_22%,rgba(126,176,192,0.1),transparent_38%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Search archive"
          heading="Search the north"
          intro="Find ferries, road trips, places to stay, northern lights advice, camping rules and practical travel notes across the guide."
        />

        <div className="mt-10 rounded-[1.35rem] border border-white/10 bg-[linear-gradient(165deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5 shadow-[0_22px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-6 lg:p-7">
          <label
            htmlFor="home-search-the-north"
            className="mb-3 inline-block text-[0.62rem] font-medium uppercase tracking-[0.29em] text-[#d8c9a7]/72"
          >
            Find guidance
          </label>
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#f4efe2]/46"
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
              placeholder='Try "Senja ferry", "Tromsø northern lights", "Lofoten rorbuer"...'
              className="w-full rounded-[1.05rem] border border-white/12 bg-[#080a0d]/78 py-3.5 pl-11 pr-4 text-sm font-light text-[#f4efe2]/88 outline-none placeholder:text-[#f4efe2]/45 focus:border-[#d8c9a7]/45 focus:ring-2 focus:ring-[#d8c9a7]/35 sm:text-base"
            />
          </div>

          <div className="mt-5 flex flex-wrap gap-2.5">
            {homeSearchSuggestions.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => {
                  startTransition(() => setQuery(suggestion));
                }}
                className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-[0.62rem] font-medium uppercase tracking-[0.2em] text-[#f4efe2]/74 transition-colors hover:border-[#d8c9a7]/34 hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8">
          {!hasQuery ? (
            <p className="rounded-[1rem] border border-white/10 bg-white/[0.02] px-5 py-4 text-sm font-light leading-[1.78] text-[#f4efe2]/62 sm:text-base">
              Start with a keyword or a suggested search to explore matching
              guides.
            </p>
          ) : null}

          {hasQuery && topResults.length === 0 ? (
            <p className="rounded-[1rem] border border-white/10 bg-white/[0.02] px-5 py-4 text-sm font-light leading-[1.78] text-[#f4efe2]/62 sm:text-base">
              No direct match yet. Try broader terms like
              {" "}
              <span className="text-[#f4efe2]/82">
                northern lights, ferry, where to stay, camping
              </span>
              {" "}
              or
              {" "}
              <span className="text-[#f4efe2]/82">best time to visit</span>.
            </p>
          ) : null}

          {topResults.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {topResults.map((result) => (
                <Link
                  key={result.href}
                  href={result.href}
                  className="group h-full rounded-[1.15rem] border border-white/10 bg-[linear-gradient(170deg,rgba(255,255,255,0.035),rgba(255,255,255,0.014))] p-5 transition-colors hover:border-[#d8c9a7]/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55 sm:p-6"
                >
                  <p className="text-[0.58rem] font-medium uppercase tracking-[0.26em] text-[#d8c9a7]/74">
                    {result.category}
                  </p>
                  <h3 className="mt-4 font-serif text-[1.75rem] leading-[1.02] tracking-[-0.033em] text-[#f4efe2]">
                    {result.title}
                  </h3>
                  <p className="mt-4 text-sm font-light leading-[1.78] text-[#f4efe2]/64 sm:text-[0.97rem]">
                    {result.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between gap-4">
                    <p className="text-[0.62rem] font-medium uppercase tracking-[0.2em] text-[#f4efe2]/52">
                      {result.route}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[0.58rem] font-medium uppercase tracking-[0.24em] text-[#f4efe2]/72 transition-colors group-hover:text-[#f4efe2]">
                      Open page
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
