"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type FieldLogState = {
  id: string;
  number: string;
  title: string;
  observation: string;
};

const FIELD_LOG_STATES: FieldLogState[] = [
  {
    id: "quiet-morning",
    number: "01",
    title: "A Quiet Morning on Herøy",
    observation:
      "The morning began with gulls outside the cabin and coffee beside the laptop.",
  },
  {
    id: "four-days",
    number: "02",
    title: "Four Days Along the Island Roads",
    observation:
      "The road stayed close to the water, even when there was nowhere in particular to be.",
  },
  {
    id: "harbours",
    number: "03",
    title: "Harbours Beside the Road",
    observation:
      "Here, the road and harbour often seem to share the same edge.",
  },
  {
    id: "fields",
    number: "04",
    title: "Between Fields and Salt Water",
    observation:
      "Weathered timber, green fields and salt water rarely appear far apart.",
  },
  {
    id: "seloy",
    number: "05",
    title: "A Pause on Seløy",
    observation:
      "On Seløy, the field note moved indoors — towards books, baking and conversation.",
  },
  {
    id: "coast",
    number: "06",
    title: "The Coast Is Always Present",
    observation:
      "Bridges connect the islands, but the sea still defines the journey.",
  },
  {
    id: "road-worth-leaving",
    number: "06",
    title: "The Coast Is Always Present",
    observation:
      "The best stops were often the ones that had never been planned.",
  },
];

const FIELD_LOG_STATE_BY_ID = new Map(
  FIELD_LOG_STATES.map((state) => [state.id, state]),
);

export function FieldNotesFieldLog() {
  const shouldReduceMotion = useReducedMotion() === true;
  const [activeId, setActiveId] = useState("quiet-morning");
  const activeState = FIELD_LOG_STATE_BY_ID.get(activeId) ?? FIELD_LOG_STATES[0];
  const markerPosition =
    ((Number(activeState.number) - 1) / (FIELD_LOG_STATES.length - 2)) * 100;

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-field-log-section]"),
    );
    const visibleSections = new Set<HTMLElement>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            visibleSections.add(section);
          } else {
            visibleSections.delete(section);
          }
        });

        const activeSection = Array.from(visibleSections)
          .sort(
            (left, right) =>
              Number(left.dataset.fieldLogOrder) -
              Number(right.dataset.fieldLogOrder),
          )
          .at(-1);

        if (activeSection?.dataset.fieldLogSection) {
          setActiveId(activeSection.dataset.fieldLogSection);
        }
      },
      {
        rootMargin: "0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <aside
      aria-label="Field log"
      className="hidden xl:block xl:pt-10"
    >
      <div className="sticky top-[clamp(7rem,16vh,11rem)] z-10 max-w-[19rem] border-l border-[#d8c9a7]/28 pl-6">
        <p className="text-[0.58rem] font-medium uppercase tracking-[0.32em] text-[#d8c9a7]/72">
          Field log
        </p>
        <p className="mt-5 text-[0.58rem] font-medium uppercase tracking-[0.25em] text-[#f4efe2]/48">
          Herøy · Helgeland
          <br />
          July 2026
        </p>

        <div className="mt-9 flex gap-4">
          <div className="relative w-px shrink-0 bg-[#d8c9a7]/20" aria-hidden="true">
            <span
              className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#d8c9a7] transition-[top] duration-300"
              style={{ top: `${markerPosition}%` }}
            />
          </div>
          <div className="min-h-40 pb-1">
            <p className="text-[0.61rem] font-medium uppercase tracking-[0.26em] text-[#d8c9a7]/78">
              {activeState.number} / 06
            </p>
            <motion.div
              key={activeId}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.24 }}
            >
              <h2 className="mt-5 font-serif text-[1.55rem] font-normal leading-[1.02] tracking-[-0.035em] text-[#f4efe2]">
                {activeState.title}
              </h2>
              <p className="mt-5 text-sm font-light leading-[1.75] text-[#f4efe2]/58">
                “{activeState.observation}”
              </p>
            </motion.div>
          </div>
        </div>

        <p className="mt-8 text-[0.56rem] font-medium uppercase tracking-[0.25em] text-[#f4efe2]/38">
          Four days · field collection
        </p>
      </div>
    </aside>
  );
}
