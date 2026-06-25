type GuideMetaSource = {
  label: string;
  href: string;
};

type GuideMetaFooterProps = {
  lastUpdated: string;
  sources: ReadonlyArray<GuideMetaSource>;
  className?: string;
};

function isExternalLink(href: string) {
  return /^https?:\/\//i.test(href);
}

export function GuideMetaFooter({
  lastUpdated,
  sources,
  className,
}: GuideMetaFooterProps) {
  const baseClassName =
    "rounded-[1.2rem] border border-[#8fafa8]/12 bg-[linear-gradient(165deg,rgba(23,35,38,0.82),rgba(8,17,22,0.94))] p-6 shadow-[0_20px_64px_rgba(0,0,0,0.18)] sm:p-7";
  const rootClassName = className ? `${baseClassName} ${className}` : baseClassName;

  return (
    <footer className={rootClassName}>
      <p className="text-[0.62rem] font-medium uppercase tracking-[0.28em] text-[#c6a15b]/74">
        Last updated: {lastUpdated}
      </p>

      <p className="mt-5 text-sm font-light leading-[1.75] text-[#f4efe2]/64 sm:text-base">
        Sources and further planning:
      </p>

      <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
        {sources.map((source) => {
          const external = isExternalLink(source.href);

          return (
            <li key={source.href}>
              <a
                href={source.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-[0.85rem] border border-[#8fafa8]/12 bg-[linear-gradient(165deg,rgba(23,35,38,0.82),rgba(8,17,22,0.96))] px-3.5 py-2.5 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-[#f4efe2]/74 transition-colors hover:border-[#c6a15b]/30 hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6a15b]/55 sm:text-[0.66rem]"
              >
                {source.label}
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}

export type { GuideMetaSource };
