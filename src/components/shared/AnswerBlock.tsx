type AnswerBlockProps = {
  label?: string;
  title: string;
  summary: string;
  bullets?: readonly string[];
  className?: string;
  id?: string;
};

function toStableId(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function AnswerBlock({
  label = "At a glance",
  title,
  summary,
  bullets,
  className,
  id,
}: AnswerBlockProps) {
  const titleId = id ?? `answer-block-${toStableId(title)}`;
  const hasBullets = Boolean(bullets && bullets.length > 0);
  const baseClassName =
    "relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(165deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))] p-6 sm:p-7 md:p-8";
  const rootClassName = className
    ? `${baseClassName} ${className}`
    : baseClassName;

  return (
    <section aria-labelledby={titleId} className={rootClassName}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(216,201,167,0.08),transparent_34%),radial-gradient(circle_at_84%_16%,rgba(126,176,192,0.08),transparent_36%)]" />
      <div className="relative">
        <p className="text-[0.6rem] font-medium uppercase tracking-[0.32em] text-[#d8c9a7]/74">
          {label}
        </p>
        <h2
          id={titleId}
          className="mt-4 max-w-3xl font-serif text-[clamp(1.9rem,4.6vw,3.25rem)] font-normal leading-[0.98] tracking-[-0.04em] text-[#f4efe2]"
        >
          {title}
        </h2>
        <p className="mt-4 max-w-3xl text-sm font-light leading-[1.82] text-[#f4efe2]/68 sm:text-base">
          {summary}
        </p>

        {hasBullets ? (
          <ul className="mt-6 space-y-3">
            {bullets?.map((bullet) => (
              <li
                key={bullet}
                className="flex gap-3 text-sm font-light leading-[1.78] text-[#f4efe2]/72 sm:text-base"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d8c9a7]/65"
                  aria-hidden="true"
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}

export type { AnswerBlockProps };
