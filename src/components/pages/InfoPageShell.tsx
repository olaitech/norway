import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { type ReactNode } from "react";

type InfoPageAction = {
  label: string;
  href: string;
};

type InfoPageShellProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
  actions?: readonly InfoPageAction[];
  bottomContent?: ReactNode;
};

export function InfoPageShell({
  eyebrow,
  title,
  intro,
  children,
  actions = [],
  bottomContent,
}: InfoPageShellProps) {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,var(--deep-fjord)_0%,var(--polar-night)_100%)] text-[#f4efe2]">
      <section className="relative overflow-hidden px-5 pb-16 pt-6 sm:px-8 sm:pb-20 md:px-12 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(143,175,168,0.08),transparent_30%),radial-gradient(circle_at_82%_12%,rgba(198,161,91,0.08),transparent_34%),linear-gradient(180deg,rgba(16,26,30,0.28),rgba(5,8,10,0))]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[30rem] bg-[linear-gradient(180deg,rgba(8,17,22,0.54),transparent)]" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between gap-6">
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-[0.63rem] font-medium uppercase tracking-[0.27em] text-[#f4efe2]/68 transition-colors hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6a15b]/55"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            Home
          </Link>
          <nav
            aria-label="Related pages"
            className="flex items-center gap-4 rounded-full border border-[#8fafa8]/12 bg-[linear-gradient(180deg,rgba(16,26,30,0.78),rgba(8,17,22,0.54))] px-4 py-2.5 backdrop-blur-sm sm:gap-7 sm:px-6"
          >
            <Link
              href="/map"
              className="text-[0.61rem] font-medium uppercase tracking-[0.22em] text-[#f4efe2]/56 transition-colors hover:text-[#f4efe2]"
            >
              Map
            </Link>
            <Link
              href="/journal"
              className="hidden text-[0.61rem] font-medium uppercase tracking-[0.22em] text-[#f4efe2]/56 transition-colors hover:text-[#f4efe2] sm:block"
            >
              Journal
            </Link>
          </nav>
        </header>

        <div className="relative z-10 mx-auto max-w-7xl pt-24 sm:pt-28 lg:pt-36">
          <p className="text-[0.67rem] font-medium uppercase tracking-[0.4em] text-[#d8c9a7]/78">
            {eyebrow}
          </p>
          <h1 className="mt-6 max-w-5xl font-serif text-[clamp(3rem,7.7vw,7rem)] font-normal leading-[0.9] tracking-[-0.058em]">
            {title}
          </h1>
          <p className="mt-8 max-w-3xl text-base font-light leading-[1.85] text-[#f4efe2]/72 sm:text-lg md:text-xl">
            {intro}
          </p>
        </div>
      </section>

      <section className="relative border-t border-white/8 bg-[linear-gradient(180deg,rgba(8,17,22,0.22),rgba(5,8,10,0.1))] px-5 py-16 sm:px-8 sm:py-20 md:px-12 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_84%_20%,rgba(143,175,168,0.07),transparent_34%),radial-gradient(circle_at_12%_84%,rgba(198,161,91,0.05),transparent_32%)]" />
        <div className="relative mx-auto max-w-7xl">{children}</div>
      </section>

      {actions.length > 0 ? (
        <section className="border-t border-white/8 px-5 py-14 sm:px-8 sm:py-16 md:px-12">
          <div className="mx-auto max-w-7xl rounded-[1.35rem] border border-[#8fafa8]/12 bg-[linear-gradient(165deg,rgba(23,35,38,0.84),rgba(8,17,22,0.94))] p-7 shadow-[0_24px_90px_rgba(0,0,0,0.22)] sm:p-9">
            <p className="text-[0.62rem] font-medium uppercase tracking-[0.31em] text-[#c6a15b]/76">
              Continue exploring
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {actions.map((action) => (
                <Link
                  key={action.href}
                  href={action.href}
                  className="inline-flex items-center gap-2 rounded-full border border-[#c6a15b]/20 bg-[linear-gradient(165deg,rgba(198,161,91,0.08),rgba(143,175,168,0.04))] px-5 py-3 text-[0.63rem] font-medium uppercase tracking-[0.23em] text-[#f4efe2]/78 transition-colors hover:border-[#c6a15b]/34 hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6a15b]/55"
                >
                  {action.label}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {bottomContent ? (
        <section className="border-t border-white/8 px-5 py-14 sm:px-8 sm:py-16 md:px-12">
          <div className="mx-auto max-w-7xl">{bottomContent}</div>
        </section>
      ) : null}
    </main>
  );
}
