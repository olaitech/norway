import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import type { AffiliateItem } from "@/src/types/affiliate";
import { AffiliateDisclosure } from "./AffiliateDisclosure";

export type AffiliateCardOptions = {
  /** Use false only when a visible AffiliateDisclosure accompanies the group. */
  showDisclosure?: boolean;
  headingLevel?: 2 | 3 | 4;
};

/** Shared presentation; callers use the type-specific public card components. */
export function AffiliateCard({
  item,
  showDisclosure = true,
  headingLevel = 3,
}: AffiliateCardOptions & { item: AffiliateItem }) {
  if (item.status !== "active") return null;

  const Heading = `h${headingLevel}` as "h2" | "h3" | "h4";
  const isCollection = item.type === "collection";
  const ctaLabel = item.ctaLabel ?? (isCollection ? "Explore options" : "Find on eBay");

  return (
    <article className="group relative isolate flex h-full min-w-0 flex-col rounded-[1.15rem] border border-white/15 bg-[#080e15] p-6 text-[#f4efe2] [overflow-wrap:anywhere] sm:p-7">
      {item.imageUrl ? (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[inherit]">
          <Image
            src={item.imageUrl.split("/").map(encodeURIComponent).join("/")}
            alt=""
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 640px"
            loading="lazy"
            className="object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-[#080e15]/40" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,14,21,0.45)_0%,rgba(8,14,21,0.55)_45%,rgba(8,14,21,0.9)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,14,21,0.35),transparent)]" />
        </div>
      ) : (
        <div aria-hidden="true" className="mb-6 h-px w-12 bg-[#d8c9a7]/50" />
      )}
      <div className="flex flex-wrap items-center gap-3">
        <p className="text-xs uppercase tracking-[0.18em] text-[#d8c9a7] [overflow-wrap:anywhere]">
          {item.eyebrow ?? (isCollection ? "Curated selection" : "Travel equipment")}
        </p>
        {item.badge ? (
          <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-[#d8c9a7] [overflow-wrap:anywhere]">
            {item.badge}
          </span>
        ) : null}
      </div>
      <Heading className="mt-4 font-serif text-2xl leading-tight tracking-[-0.025em] [overflow-wrap:anywhere] sm:text-3xl">
        {item.name}
      </Heading>
      {item.brand ? <p className="mt-2 text-sm text-[#b9c0c3]">{item.brand}</p> : null}
      {item.hook ? <p className="mt-4 text-base leading-relaxed text-[#d8c9a7]">{item.hook}</p> : null}
      <p className="mt-4 text-sm leading-[1.8] text-[#c2c8cb] [overflow-wrap:anywhere] sm:text-base">
        {item.description}
      </p>
      {isCollection ? <p className="mt-4 text-xs text-[#b9c0c3]">Browse a selection on eBay.</p> : null}
      <div className="mt-auto pt-6">
        <a
          href={item.affiliateUrl}
          target="_blank"
          rel="sponsored nofollow noopener noreferrer"
          className="inline-flex min-h-11 max-w-full items-center gap-2 rounded-md py-2 text-sm text-[#f4efe2] underline decoration-white/30 underline-offset-4 hover:decoration-[#d8c9a7] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8c9a7]"
        >
          <span className="[overflow-wrap:anywhere]">{ctaLabel}</span>
          <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
          <span className="sr-only"> — {item.name} (opens in a new tab)</span>
        </a>
        {showDisclosure ? <div className="mt-3"><AffiliateDisclosure text={item.disclosure} /></div> : null}
      </div>
    </article>
  );
}
