"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

import {
  type RouteFinderAnswerValue,
  type RouteFinderAnswers,
  routeFinderQuestions,
} from "@/src/data/route-finder";
import { matchRoutes } from "@/src/lib/route-matcher";

import { RouteFinderProgress } from "./RouteFinderProgress";
import { RouteFinderResults } from "./RouteFinderResults";
import { RouteFinderStep } from "./RouteFinderStep";

export function RouteFinder() {
  const [answers, setAnswers] = useState<RouteFinderAnswers>({});
  const [currentStep, setCurrentStep] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const shouldReduceMotion = useReducedMotion() === true;
  const question = routeFinderQuestions[currentStep]!;
  const hasSelectedAnswer = Boolean(answers[question.id]);
  const isLastStep = currentStep === routeFinderQuestions.length - 1;
  const results = showResults ? matchRoutes(answers).slice(0, 3) : [];
  const transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const };

  function selectAnswer(value: RouteFinderAnswerValue) {
    setAnswers((current) => ({ ...current, [question.id]: value }));
  }

  function continueRouteFinder() {
    if (!hasSelectedAnswer) return;

    if (isLastStep) {
      setShowResults(true);
      return;
    }

    setCurrentStep((step) => step + 1);
  }

  function restartRouteFinder() {
    setAnswers({});
    setCurrentStep(0);
    setShowResults(false);
  }

  return (
    <section aria-labelledby="route-finder-heading" className="border-t border-white/8 pt-14 sm:pt-16">
      <div className="overflow-hidden rounded-[1.35rem] border border-[#8fafa8]/14 bg-[radial-gradient(circle_at_86%_8%,rgba(198,161,91,0.11),transparent_28%),radial-gradient(circle_at_8%_100%,rgba(143,175,168,0.1),transparent_36%),linear-gradient(145deg,rgba(20,35,38,0.94),rgba(5,13,17,0.98))] p-6 shadow-[0_26px_90px_rgba(0,0,0,0.24)] sm:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.76fr_1.24fr] lg:gap-16">
          <div>
            <p className="text-[0.62rem] font-medium uppercase tracking-[0.34em] text-[#c6a15b]/80">
              Route finder
            </p>
            <h2 id="route-finder-heading" className="mt-4 max-w-md font-serif text-[clamp(2.35rem,4.4vw,4.4rem)] font-normal leading-[0.91] tracking-[-0.055em] text-[#f4efe2]">
              Find a route with room to breathe.
            </h2>
            <p className="mt-5 max-w-md text-sm font-light leading-[1.82] text-[#f4efe2]/68 sm:text-base">
              Four quiet decisions connect your available time, preferred landscape and travel rhythm to the guides already on Trips Norway.
            </p>
          </div>

          <div className="min-w-0">
            {showResults ? (
              <RouteFinderResults recommendations={results} onRestart={restartRouteFinder} />
            ) : (
              <>
                <RouteFinderProgress currentStep={currentStep} totalSteps={routeFinderQuestions.length} />
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={question.id}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
                    transition={transition}
                    className="mt-9"
                  >
                    <RouteFinderStep
                      question={question}
                      selectedValue={answers[question.id]}
                      onSelect={selectAnswer}
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="mt-8 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setCurrentStep((step) => Math.max(0, step - 1))}
                    disabled={currentStep === 0}
                    className="inline-flex min-h-11 items-center gap-2 border-b border-white/22 px-1 text-[0.61rem] font-medium uppercase tracking-[0.22em] text-[#f4efe2]/72 transition-colors hover:border-[#d8c9a7]/58 hover:text-[#f4efe2] disabled:cursor-not-allowed disabled:opacity-35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#071418]"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={continueRouteFinder}
                    disabled={!hasSelectedAnswer}
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#d8c9a7]/38 bg-[#d8c9a7]/10 px-5 text-[0.61rem] font-medium uppercase tracking-[0.22em] text-[#f4efe2] transition-colors hover:border-[#d8c9a7]/70 hover:bg-[#d8c9a7]/16 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#071418]"
                  >
                    {isLastStep ? "See my route" : "Continue"}
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
