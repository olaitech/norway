type RouteFinderProgressProps = {
  currentStep: number;
  totalSteps: number;
};

export function RouteFinderProgress({
  currentStep,
  totalSteps,
}: RouteFinderProgressProps) {
  return (
    <ol className="grid grid-cols-4 gap-2" aria-label="Route finder progress">
      {Array.from({ length: totalSteps }, (_, index) => {
        const isCurrent = index === currentStep;
        const isComplete = index < currentStep;

        return (
          <li key={index} className="min-w-0">
            <div
              className={`h-px ${isComplete || isCurrent ? "bg-[#c6a15b]" : "bg-white/14"}`}
              aria-current={isCurrent ? "step" : undefined}
            />
            <p className={`mt-2 text-[0.57rem] font-medium uppercase tracking-[0.2em] ${isCurrent ? "text-[#d8c9a7]" : "text-[#f4efe2]/42"}`}>
              {String(index + 1).padStart(2, "0")}
            </p>
          </li>
        );
      })}
    </ol>
  );
}
