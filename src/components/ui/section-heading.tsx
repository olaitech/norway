type SectionHeadingProps = {
  id?: string;
  eyebrow: string;
  heading: string;
  intro?: string;
  className?: string;
  eyebrowClassName?: string;
  headingClassName?: string;
  introClassName?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  heading,
  intro,
  className = "",
  eyebrowClassName = "",
  headingClassName = "",
  introClassName = "",
}: SectionHeadingProps) {
  return (
    <div id={id} className={`max-w-3xl ${className}`}>
      <p
        className={`mb-4 text-[0.68rem] font-medium uppercase tracking-[0.36em] text-[#d8c9a7]/76 ${eyebrowClassName}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-serif text-[clamp(2.65rem,6vw,5.75rem)] font-normal leading-[0.95] tracking-[-0.045em] text-[#f4efe2] ${headingClassName}`}
      >
        {heading}
      </h2>
      {intro ? (
        <p
          className={`mt-6 max-w-2xl text-sm font-light leading-[1.75] text-[#f4efe2]/62 sm:text-base md:text-lg ${introClassName}`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
