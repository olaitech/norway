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
    "rounded-[1.2rem] border border-white/10 bg-[linear-gradient(165deg,rgba(255,255,255,0.026),rgba(255,255,255,0.014))] p-6 sm:p-7";
  const rootClassName = className ? `${baseClassName} ${className}` : baseClassName;

  return (
    <footer className={rootClassName}>
      <p className="text-[0.62rem] font-medium uppercase tracking-[0.28em] text-[#d8c9a7]/74">
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
                className="inline-flex items-center gap-2 rounded-[0.85rem] border border-white/8 bg-black/15 px-3.5 py-2.5 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-[#f4efe2]/74 transition-colors hover:border-[#d8c9a7]/30 hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55 sm:text-[0.66rem]"
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
