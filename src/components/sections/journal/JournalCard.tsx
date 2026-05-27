import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { JournalEntry } from "@/src/data/journal";

type JournalCardProps = {
  entry: JournalEntry;
  featured?: boolean;
  wide?: boolean;
};

function Metadata({ entry }: { entry: JournalEntry }) {
  return (
    <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.6rem] font-medium uppercase tracking-[0.28em] text-[#d8c9a7]/72">
      <span>{entry.type}</span>
      <span className="h-px w-5 bg-[#d8c9a7]/28" aria-hidden="true" />
      <span>{entry.location}</span>
    </p>
  );
}

export function JournalCard({
  entry,
  featured = false,
  wide = false,
}: JournalCardProps) {
  if (featured) {
    return (
      <Link
        href={`/journal/${entry.slug}`}
        className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
      >
        <article className="grid overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.025] shadow-[0_32px_100px_rgba(0,0,0,0.36)] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[350px] overflow-hidden sm:min-h-[450px] lg:min-h-[570px]">
            <Image
              src={entry.imageSrc}
              alt={entry.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 56vw, 100vw"
              className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.035]"
              style={{ objectPosition: entry.imagePosition }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,10,0.04)_25%,rgba(3,8,10,0.56)_100%)]" />
          </div>
          <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
            <div>
              <Metadata entry={entry} />
              <h2 className="mt-9 font-serif text-[clamp(2.5rem,4.6vw,4.15rem)] font-normal leading-[0.98] tracking-[-0.052em] text-[#f4efe2]">
                {entry.title}
              </h2>
              <p className="mt-7 max-w-lg text-base font-light leading-[1.85] text-[#f4efe2]/66 sm:text-lg">
                {entry.description}
              </p>
            </div>
            <div className="mt-12 flex items-center justify-between border-t border-white/8 pt-6 text-[0.62rem] font-medium uppercase tracking-[0.27em] text-[#f4efe2]/52">
              <span>{entry.readTime}</span>
              <ArrowUpRight className="h-4 w-4 text-[#d8c9a7]/72 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link
      href={`/journal/${entry.slug}`}
      className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
    >
      <article className="flex h-full flex-col overflow-hidden rounded-[1.2rem] border border-white/9 bg-white/[0.02] transition-[border-color,background-color] duration-500 hover:border-white/16 hover:bg-white/[0.03]">
        <div
          className={`relative overflow-hidden ${
            wide ? "aspect-[1.7/1] md:aspect-[2.15/1]" : "aspect-[1.3/1]"
          }`}
        >
          <Image
            src={entry.imageSrc}
            alt={entry.imageAlt}
            fill
            sizes={
              wide
                ? "(min-width: 1024px) 66vw, 100vw"
                : "(min-width: 1024px) 33vw, 100vw"
            }
            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.045]"
            style={{ objectPosition: entry.imagePosition }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,10,0.02)_24%,rgba(3,8,10,0.62)_100%)]" />
        </div>
        <div className="flex grow flex-col p-6 sm:p-7">
          <Metadata entry={entry} />
          <h3 className="mt-7 font-serif text-[clamp(1.75rem,3vw,2.15rem)] font-normal leading-[1.08] tracking-[-0.038em] text-[#f4efe2]">
            {entry.title}
          </h3>
          <p className="mt-4 grow text-sm font-light leading-[1.8] text-[#f4efe2]/60 sm:text-base">
            {entry.description}
          </p>
          <div className="mt-8 flex items-center justify-between border-t border-white/8 pt-5 text-[0.59rem] font-medium uppercase tracking-[0.25em] text-[#f4efe2]/46">
            <span>{entry.readTime}</span>
            <ArrowUpRight className="h-4 w-4 text-[#d8c9a7]/64 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </div>
      </article>
    </Link>
  );
}
