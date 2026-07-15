"use client";

import type { KeyboardEvent } from "react";

import type {
  RouteFinderAnswerValue,
  RouteFinderQuestion,
} from "@/src/data/route-finder";

type RouteFinderStepProps = {
  question: RouteFinderQuestion;
  selectedValue?: RouteFinderAnswerValue;
  onSelect: (value: RouteFinderAnswerValue) => void;
};

export function RouteFinderStep({
  question,
  selectedValue,
  onSelect,
}: RouteFinderStepProps) {
  const questionId = `route-finder-${question.id}`;

  function handleOptionKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    currentIndex: number,
  ) {
    if (!['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft'].includes(event.key)) {
      return;
    }

    event.preventDefault();
    const direction = event.key === 'ArrowDown' || event.key === 'ArrowRight' ? 1 : -1;
    const nextIndex = (currentIndex + direction + question.choices.length) % question.choices.length;
    const nextChoice = question.choices[nextIndex]!;

    onSelect(nextChoice.id);
    document.getElementById(`${questionId}-${nextChoice.id}`)?.focus();
  }

  return (
    <fieldset className="border-0 p-0">
      <legend className="sr-only">{question.title}</legend>
      <p className="text-[0.62rem] font-medium uppercase tracking-[0.32em] text-[#c6a15b]/78">
        {question.eyebrow}
      </p>
      <h3 id={questionId} className="mt-4 max-w-2xl font-serif text-[clamp(2.25rem,5vw,4.3rem)] font-normal leading-[0.92] tracking-[-0.05em] text-[#f4efe2]">
        {question.title}
      </h3>
      <p className="mt-4 max-w-2xl text-sm font-light leading-[1.82] text-[#f4efe2]/66 sm:text-base">
        {question.description}
      </p>
      <div role="radiogroup" aria-labelledby={questionId} className="mt-8 grid gap-3 sm:grid-cols-2">
        {question.choices.map((choice, index) => {
          const isSelected = selectedValue === choice.id;

          return (
            <button
              key={choice.id}
              id={`${questionId}-${choice.id}`}
              type="button"
              role="radio"
              aria-checked={isSelected}
              tabIndex={isSelected || (!selectedValue && index === 0) ? 0 : -1}
              onClick={() => onSelect(choice.id)}
              onKeyDown={(event) => handleOptionKeyDown(event, index)}
              className={`group min-h-28 rounded-[1rem] border p-5 text-left transition-[border-color,background-color,transform] duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#071418] ${
                isSelected
                  ? "border-[#c6a15b]/56 bg-[linear-gradient(135deg,rgba(198,161,91,0.15),rgba(143,175,168,0.08))]"
                  : "border-white/10 bg-white/[0.025] hover:border-[#d8c9a7]/34 hover:bg-white/[0.05]"
              }`}
            >
              <span className="flex items-start justify-between gap-4">
                <span className="font-serif text-2xl leading-none tracking-[-0.03em] text-[#f4efe2]">
                  {choice.label}
                </span>
                <span
                  aria-hidden="true"
                  className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${isSelected ? "border-[#d8c9a7]" : "border-white/30"}`}
                >
                  {isSelected ? <span className="h-1.5 w-1.5 rounded-full bg-[#d8c9a7]" /> : null}
                </span>
              </span>
              <span className="mt-3 block text-sm font-light leading-6 text-[#f4efe2]/58">
                {choice.description}
              </span>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
