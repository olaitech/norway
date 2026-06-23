import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export type RelatedLinkCard = {
  href: string;
  title: string;
  description: string;
  label?: string;
};

type RelatedLinkCardsProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  links: readonly RelatedLinkCard[];
  className?: string;
};

export function RelatedLinkCards({
  eyebrow = "Continue planning",
  title,
  intro,
  links,
  className = "",
}: RelatedLinkCardsProps) {
  return (
    <section className={className.trim()}>
      <div className="max-w-3xl">
        <p className="text-[0.62rem] font-medium uppercase tracking-[0.36em] text-[#d8c9a7]/68">
          {eyebrow}
        </p>
        <h2 className="mt-5 font-serif text-[clamp(2.2rem,4.4vw,3.8rem)] font-normal leading-[0.95] tracking-[-0.05em] text-[#f4efe2]">
          {title}
        </h2>
        {intro ? (
          <p className="mt-5 max-w-2xl text-sm font-light leading-[1.85] text-[#f4efe2]/64 sm:text-base md:text-lg">
            {intro}
          </p>
        ) : null}
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group block h-full rounded-[1.15rem] border border-white/10 bg-[linear-gradient(165deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))] p-6 transition-colors duration-300 hover:border-[#d8c9a7]/34 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55 sm:p-7"
          >
            {link.label ? (
              <p className="text-[0.58rem] font-medium uppercase tracking-[0.28em] text-[#d8c9a7]/68">
                {link.label}
              </p>
            ) : null}
            <div className="mt-4 flex items-start justify-between gap-4">
              <h3 className="font-serif text-[1.55rem] leading-[1.02] tracking-[-0.035em] text-[#f4efe2] sm:text-[1.7rem]">
                {link.title}
              </h3>
              <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-[#d8c9a7]/72 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
            <p className="mt-4 text-sm font-light leading-[1.8] text-[#f4efe2]/64 sm:text-base">
              {link.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
