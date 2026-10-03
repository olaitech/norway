export type DestinationQuickFact = {
  label: string;
  value: string;
};

export type DestinationQuickFactsProps = {
  facts: readonly DestinationQuickFact[];
};

export function DestinationQuickFacts({ facts }: DestinationQuickFactsProps) {
  if (facts.length === 0) {
    return null;
  }

  return (
    <dl className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      {facts.map((fact) => (
        <div
          key={fact.label}
          className="min-w-0 border-t border-[#8fafa8]/12 pt-5"
        >
          <dt className="text-xs font-medium uppercase tracking-[0.2em] text-[#d8c9a7]/80">
            {fact.label}
          </dt>
          <dd className="mt-3 break-words text-sm font-light leading-7 text-[#f4efe2]/85 sm:text-base">
            {fact.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
