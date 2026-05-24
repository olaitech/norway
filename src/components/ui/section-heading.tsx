type SectionHeadingProps = {
  eyebrow: string;
  heading: string;
  intro?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  heading,
  intro,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <p className="mb-4 text-[0.68rem] font-medium uppercase tracking-[0.36em] text-[#d8c9a7]/76">
        {eyebrow}
      </p>
      <h2 className="font-serif text-[clamp(2.65rem,6vw,5.75rem)] font-normal leading-[0.95] tracking-[-0.045em] text-[#f4efe2]">
        {heading}
      </h2>
      {intro ? (
        <p className="mt-6 max-w-2xl text-sm font-light leading-[1.75] text-[#f4efe2]/62 sm:text-base md:text-lg">
          {intro}
        </p>
      ) : null}
    </div>
  );
}
