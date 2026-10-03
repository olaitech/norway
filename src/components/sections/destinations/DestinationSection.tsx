import type { ReactNode } from "react";

export type DestinationSectionProps = {
  id: string;
  eyebrow?: string;
  heading: string;
  intro?: string;
  children: ReactNode;
};

export function DestinationSection({
  id,
  eyebrow,
  heading,
  intro,
  children,
}: DestinationSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="surface-fjord border-y border-[#8fafa8]/12 px-5 py-16 text-[#f4efe2] sm:px-8 sm:py-20 md:px-12 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <header className="min-w-0 max-w-xl">
          {eyebrow ? (
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.34em] text-[#d8c9a7]/80">
              {eyebrow}
            </p>
          ) : null}
          <h2
            id={headingId}
            className="mt-4 break-words font-serif text-[clamp(2.2rem,4vw,3.7rem)] font-normal leading-[0.98] tracking-[-0.045em]"
          >
            {heading}
          </h2>
          {intro ? (
            <p className="mt-6 text-base font-light leading-[1.85] text-[#f4efe2]/80 sm:text-lg">
              {intro}
            </p>
          ) : null}
        </header>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
