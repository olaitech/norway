import {
  featuredJournalEntry,
  journalEntries,
} from "@/src/data/journal";

import { JournalCard } from "./JournalCard";
import { JournalHero } from "./JournalHero";
import { JournalReveal } from "./JournalReveal";

export function JournalPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050607] text-[#f4efe2]">
      <JournalHero />

      <section className="relative z-10 px-5 py-20 sm:px-8 sm:py-24 md:px-12 lg:py-32">
        <JournalReveal className="mx-auto max-w-7xl">
          <p className="mb-8 text-[0.63rem] font-medium uppercase tracking-[0.36em] text-[#d8c9a7]/64">
            Featured field note
          </p>
          <JournalCard entry={featuredJournalEntry} featured />
        </JournalReveal>
      </section>

      <section className="relative z-10 border-t border-white/8 px-5 py-20 sm:px-8 sm:py-24 md:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <JournalReveal className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.63rem] font-medium uppercase tracking-[0.36em] text-[#d8c9a7]/64">
                Archive index
              </p>
              <h2 className="mt-5 font-serif text-[clamp(2.6rem,5vw,4.6rem)] font-normal leading-none tracking-[-0.05em]">
                Field observations
              </h2>
            </div>
            <p className="max-w-sm text-sm font-light leading-[1.8] text-[#f4efe2]/48 sm:text-right">
              Light, weather and distance recorded across the Norwegian coast.
            </p>
          </JournalReveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {journalEntries.map((entry, index) => (
              <JournalReveal
                key={entry.slug}
                delay={index * 0.045}
                className={index === 0 ? "md:col-span-2" : undefined}
              >
                <JournalCard entry={entry} wide={index === 0} />
              </JournalReveal>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/8 px-5 py-10 sm:px-8 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-[0.59rem] font-medium uppercase tracking-[0.28em] text-[#f4efe2]/38 sm:flex-row sm:items-center sm:justify-between">
          <p>Visual notes from the north</p>
          <p>The archive expands with the seasons</p>
        </div>
      </footer>
    </main>
  );
}
