import Link from "next/link";

type TrustBoxSource = {
  label: string;
  href: string;
};

type TrustBoxProps = {
  label?: string;
  title: string;
  summary: string;
  bullets?: readonly string[];
  sources?: readonly TrustBoxSource[];
  lastUpdated?: string;
  reviewedFor?: string;
  editorialNote?: string;
  safetyNote?: string;
  tone?: "dark" | "light";
  className?: string;
  id?: string;
};

type ToneStyles = {
  shell: string;
  label: string;
  title: string;
  summary: string;
  metaLabel: string;
  metaValue: string;
  noteLabel: string;
  note: string;
  bullet: string;
  sourcesLabel: string;
  chip: string;
  divider: string;
};

const toneStyles: Record<NonNullable<TrustBoxProps["tone"]>, ToneStyles> = {
  dark: {
    shell:
      "border-white/10 bg-[linear-gradient(165deg,rgba(255,255,255,0.03),rgba(255,255,255,0.014))]",
    label: "text-[#d8c9a7]/72",
    title: "text-[#f4efe2]",
    summary: "text-[#f4efe2]/66",
    metaLabel: "text-[#d8c9a7]/70",
    metaValue: "text-[#f4efe2]/72",
    noteLabel: "text-[#d8c9a7]/70",
    note: "text-[#f4efe2]/68",
    bullet: "border-white/8 bg-black/12 text-[#f4efe2]/72",
    sourcesLabel: "text-[#d8c9a7]/70",
    chip: "border-white/8 bg-black/15 text-[#f4efe2]/76 hover:border-[#d8c9a7]/30 hover:text-[#f4efe2]",
    divider: "border-white/8",
  },
  light: {
    shell:
      "border-black/10 bg-[linear-gradient(165deg,rgba(255,255,255,0.92),rgba(244,240,230,0.84))]",
    label: "text-[#6c5f45]/74",
    title: "text-[#172022]",
    summary: "text-[#1b2224]/68",
    metaLabel: "text-[#6c5f45]/72",
    metaValue: "text-[#1b2224]/80",
    noteLabel: "text-[#6c5f45]/72",
    note: "text-[#1b2224]/68",
    bullet: "border-black/10 bg-black/[0.03] text-[#1b2224]/78",
    sourcesLabel: "text-[#6c5f45]/72",
    chip: "border-black/10 bg-white/[0.5] text-[#1b2224]/80 hover:border-[#6c5f45]/30 hover:text-[#172022]",
    divider: "border-black/10",
  },
};

function isExternalLink(href: string) {
  return /^https?:\/\//i.test(href);
}

function toStableId(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function SourceChip({
  source,
  className = "",
}: {
  source: TrustBoxSource;
  className?: string;
}) {
  const external = isExternalLink(source.href);
  const baseClassName =
    "inline-flex items-center rounded-full border px-3.5 py-2 text-[0.62rem] font-medium uppercase tracking-[0.21em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55";
  const rootClassName = className ? `${baseClassName} ${className}` : baseClassName;

  if (!external) {
    return (
      <Link href={source.href} className={rootClassName}>
        {source.label}
      </Link>
    );
  }

  return (
    <a
      href={source.href}
      target="_blank"
      rel="noopener noreferrer"
      className={rootClassName}
    >
      {source.label}
    </a>
  );
}

export function TrustBox({
  label = "Editorial note",
  title,
  summary,
  bullets,
  sources,
  lastUpdated,
  reviewedFor,
  editorialNote,
  safetyNote,
  tone = "dark",
  className,
  id,
}: TrustBoxProps) {
  const styles = toneStyles[tone];
  const baseClassName = "rounded-[1.2rem] border p-6 sm:p-7";
  const rootClassName = className
    ? `${baseClassName} ${styles.shell} ${className}`
    : `${baseClassName} ${styles.shell}`;
  const titleId = id ?? `trustbox-${toStableId(title)}`;
  const hasMetadata = Boolean(lastUpdated || reviewedFor);
  const hasNotes = Boolean(editorialNote || safetyNote);
  const hasSources = Boolean(sources && sources.length > 0);

  return (
    <aside aria-labelledby={titleId} className={rootClassName}>
      <p className={`text-[0.6rem] font-medium uppercase tracking-[0.31em] ${styles.label}`}>
        {label}
      </p>
      <h3
        id={titleId}
        className={`mt-5 font-serif text-[clamp(1.85rem,4.4vw,3.15rem)] font-normal leading-[0.98] tracking-[-0.04em] ${styles.title}`}
      >
        {title}
      </h3>
      <p className={`mt-5 max-w-3xl text-sm font-light leading-[1.8] sm:text-base ${styles.summary}`}>
        {summary}
      </p>

      {bullets && bullets.length > 0 ? (
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {bullets.map((bullet) => (
            <li
              key={bullet}
              className={`rounded-[0.95rem] border px-4 py-3 text-sm font-light leading-[1.7] ${styles.bullet}`}
            >
              {bullet}
            </li>
          ))}
        </ul>
      ) : null}

      {hasMetadata ? (
        <dl className={`mt-6 flex flex-wrap gap-x-6 gap-y-3 border-t pt-5 ${styles.divider}`}>
          {lastUpdated ? (
            <div>
              <dt className={`text-[0.6rem] font-medium uppercase tracking-[0.24em] ${styles.metaLabel}`}>
                Last updated
              </dt>
              <dd className={`mt-2 text-sm font-light ${styles.metaValue}`}>
                {lastUpdated}
              </dd>
            </div>
          ) : null}
          {reviewedFor ? (
            <div>
              <dt className={`text-[0.6rem] font-medium uppercase tracking-[0.24em] ${styles.metaLabel}`}>
                Reviewed for
              </dt>
              <dd className={`mt-2 text-sm font-light ${styles.metaValue}`}>
                {reviewedFor}
              </dd>
            </div>
          ) : null}
        </dl>
      ) : null}

      {hasNotes ? (
        <div className={`mt-6 space-y-4 border-t pt-5 ${styles.divider}`}>
          {editorialNote ? (
            <p className={`text-sm font-light leading-[1.8] ${styles.note}`}>
              <span
                className={`mb-2 block text-[0.6rem] font-medium uppercase tracking-[0.24em] ${styles.noteLabel}`}
              >
                Editorial note
              </span>
              {editorialNote}
            </p>
          ) : null}
          {safetyNote ? (
            <p className={`text-sm font-light leading-[1.8] ${styles.note}`}>
              <span
                className={`mb-2 block text-[0.6rem] font-medium uppercase tracking-[0.24em] ${styles.noteLabel}`}
              >
                Safety note
              </span>
              {safetyNote}
            </p>
          ) : null}
        </div>
      ) : null}

      {hasSources ? (
        <div className={`mt-6 border-t pt-5 ${styles.divider}`}>
          <p className={`text-[0.6rem] font-medium uppercase tracking-[0.28em] ${styles.sourcesLabel}`}>
            Selected sources
          </p>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {sources?.map((source) => (
              <li key={source.href}>
                <SourceChip source={source} className={styles.chip} />
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </aside>
  );
}

export type { TrustBoxProps, TrustBoxSource };
