"use client";

import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

import type { SeoCard } from "@/src/data/seo-pages";

const nodePositions = [
  { x: 50, y: 8 },
  { x: 77, y: 18 },
  { x: 91, y: 43 },
  { x: 86, y: 71 },
  { x: 64, y: 89 },
  { x: 36, y: 89 },
  { x: 14, y: 71 },
  { x: 9, y: 43 },
  { x: 23, y: 18 },
] as const;

const relatedFjords: Record<string, readonly string[]> = {
  Geirangerfjord: ["Hjørundfjord", "Nordfjord"],
  Nærøyfjord: ["Aurlandsfjord", "Sognefjord"],
  Sognefjord: ["Nærøyfjord", "Aurlandsfjord"],
  Hardangerfjord: ["Lysefjord", "Sognefjord"],
  Lysefjord: ["Hardangerfjord"],
  Aurlandsfjord: ["Nærøyfjord", "Sognefjord"],
  Nordfjord: ["Geirangerfjord"],
  Hjørundfjord: ["Geirangerfjord"],
  Trollfjord: ["Fjords of Norway"],
};

type FjordConstellationProps = {
  cards: readonly SeoCard[];
};

export function FjordConstellation({ cards }: FjordConstellationProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const nodeRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeCard = cards[activeIndex];
  const activePosition = nodePositions[activeIndex];
  const activeRelated = relatedFjords[activeCard.title] ?? ["Fjords of Norway"];

  function moveSelection(nextIndex: number) {
    const normalizedIndex = (nextIndex + cards.length) % cards.length;
    setActiveIndex(normalizedIndex);
    nodeRefs.current[normalizedIndex]?.focus();
  }

  return (
    <div className="mt-10">
      <div className="hidden gap-8 md:grid xl:grid-cols-[minmax(0,1.4fr)_minmax(19rem,0.6fr)] xl:items-center">
        <div className="group relative mx-auto aspect-square w-full max-w-[38rem] rounded-full border border-[#8fafa8]/10 bg-[radial-gradient(circle_at_center,rgba(23,35,38,0.86)_0%,rgba(8,17,22,0.9)_48%,rgba(5,8,10,0.96)_76%)] shadow-[0_30px_100px_rgba(0,0,0,0.26)] xl:max-w-[42rem]">
          <svg
            viewBox="0 0 100 100"
            aria-hidden="true"
            focusable="false"
            className="pointer-events-none absolute inset-0 h-full w-full motion-safe:animate-spin motion-safe:[animation-duration:90s] motion-reduce:animate-none group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]"
          >
            <circle cx="50" cy="50" r="17" fill="none" stroke="rgba(143,175,168,0.13)" strokeWidth="0.18" strokeDasharray="0.8 2.4" />
            <circle cx="50" cy="50" r="29" fill="none" stroke="rgba(198,161,91,0.11)" strokeWidth="0.18" strokeDasharray="1.2 3" />
            <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(143,175,168,0.16)" strokeWidth="0.18" strokeDasharray="0.7 2" />
          </svg>

          <svg
            viewBox="0 0 100 100"
            aria-hidden="true"
            focusable="false"
            className="pointer-events-none absolute inset-0 h-full w-full"
          >
            <line x1="50" y1="50" x2={activePosition.x} y2={activePosition.y} stroke="rgba(198,161,91,0.34)" strokeWidth="0.28" />
            {activeRelated.map((relatedTitle) => {
              const relatedIndex = cards.findIndex((card) => card.title === relatedTitle);
              const relatedPosition = nodePositions[relatedIndex];

              if (!relatedPosition) return null;

              return (
                <line
                  key={relatedTitle}
                  x1={activePosition.x}
                  y1={activePosition.y}
                  x2={relatedPosition.x}
                  y2={relatedPosition.y}
                  stroke="rgba(143,175,168,0.28)"
                  strokeWidth="0.24"
                  strokeDasharray="0.8 1.2"
                />
              );
            })}
          </svg>

          <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#c6a15b]/24 bg-[radial-gradient(circle_at_42%_36%,rgba(198,161,91,0.13),rgba(12,22,26,0.96)_66%)] px-4 text-center shadow-[0_0_38px_rgba(198,161,91,0.07)] lg:h-36 lg:w-36">
            <p className="font-serif text-xl leading-none tracking-[-0.04em] text-[#f4efe2] lg:text-2xl">Fjords of Norway</p>
            <p className="mt-2 text-[0.58rem] font-light leading-relaxed text-[#f4efe2]/58">Landscapes shaped by ice, water and slower journeys.</p>
          </div>

          {cards.map((card, index) => {
            const position = nodePositions[index];
            const isActive = index === activeIndex;

            return (
              <button
                key={card.title}
                ref={(node) => {
                  nodeRefs.current[index] = node;
                }}
                id={`fjord-node-${index}`}
                type="button"
                aria-pressed={isActive}
                aria-controls="fjord-constellation-panel"
                onClick={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onKeyDown={(event) => {
                  if (["ArrowRight", "ArrowDown"].includes(event.key)) {
                    event.preventDefault();
                    moveSelection(activeIndex + 1);
                  } else if (["ArrowLeft", "ArrowUp"].includes(event.key)) {
                    event.preventDefault();
                    moveSelection(activeIndex - 1);
                  } else if (event.key === "Home") {
                    event.preventDefault();
                    moveSelection(0);
                  } else if (event.key === "End") {
                    event.preventDefault();
                    moveSelection(cards.length - 1);
                  }
                }}
                className={`absolute z-10 flex min-h-11 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border px-3 py-2 text-center text-[0.64rem] font-medium leading-tight transition-[border-color,background-color,color,box-shadow,transform] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/75 focus-visible:ring-offset-2 focus-visible:ring-offset-[#081116] lg:w-32 lg:text-[0.7rem] ${
                  isActive
                    ? "scale-[1.04] border-[#c6a15b]/52 bg-[#c6a15b]/13 text-[#f4efe2] shadow-[0_0_24px_rgba(198,161,91,0.12)]"
                    : "border-[#8fafa8]/22 bg-[#0c171b]/92 text-[#f4efe2]/72 hover:border-[#c6a15b]/34 hover:text-[#f4efe2]"
                }`}
                style={{ left: `${position.x}%`, top: `${position.y}%` }}
              >
                <span className="mr-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c6a15b]/75" aria-hidden="true" />
                {card.title}
              </button>
            );
          })}
        </div>

        <article
          id="fjord-constellation-panel"
          role="region"
          aria-live="polite"
          aria-labelledby={`fjord-node-${activeIndex}`}
          className="rounded-[1.35rem] border border-[#8fafa8]/14 bg-[linear-gradient(165deg,rgba(23,35,38,0.84),rgba(8,17,22,0.96))] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.24)] sm:p-8"
        >
          <p className="text-[0.6rem] font-medium uppercase tracking-[0.29em] text-[#c6a15b]/76">{activeCard.label}</p>
          <h3 className="mt-4 font-serif text-[clamp(2rem,3.6vw,3rem)] leading-[0.96] tracking-[-0.045em] text-[#f4efe2]">
            {activeCard.externalUrl ? (
              <a
                href={activeCard.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit the official ${activeCard.title} destination guide in a new tab`}
                className="group/title inline-flex max-w-full items-center gap-2 rounded-sm transition-[color,transform,box-shadow] duration-200 hover:scale-[1.02] hover:text-[#d8c9a7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/75 focus-visible:ring-offset-2 focus-visible:ring-offset-[#081116] motion-reduce:transition-[color,box-shadow] motion-reduce:hover:scale-100"
              >
                <span className="min-w-0">{activeCard.title}</span>
                <ExternalLink
                  className="h-[0.58em] w-[0.58em] shrink-0 opacity-0 transition-opacity duration-200 group-hover/title:opacity-100 group-focus-visible/title:opacity-100 motion-reduce:transition-none motion-reduce:group-hover/title:opacity-0 motion-reduce:group-focus-visible/title:opacity-0"
                  aria-hidden="true"
                />
              </a>
            ) : (
              activeCard.title
            )}
          </h3>
          <p className="mt-5 text-sm font-light leading-[1.82] text-[#f4efe2]/68 sm:text-base">{activeCard.description}</p>
          {activeCard.secondaryExternalUrl ? (
            <a
              href={activeCard.secondaryExternalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full border border-[#c6a15b]/22 px-4 py-2 text-[0.62rem] font-medium uppercase tracking-[0.21em] text-[#d8c9a7]/84 transition-colors hover:border-[#d8c9a7]/55 hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/75 focus-visible:ring-offset-2 focus-visible:ring-offset-[#081116]"
            >
              Further regional guide
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          ) : null}
          <div className="mt-8 border-t border-white/8 pt-5">
            <p className="text-[0.58rem] font-medium uppercase tracking-[0.26em] text-[#f4efe2]/44">Related landscapes</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {activeRelated.map((title) => (
                <span key={title} className="rounded-full border border-[#c6a15b]/16 bg-[#c6a15b]/6 px-3 py-1.5 text-xs text-[#d8c9a7]/76">{title}</span>
              ))}
            </div>
          </div>
        </article>
      </div>

      <div className="space-y-3 md:hidden">
        {cards.map((card) => (
          <article key={card.title} className="rounded-[1.15rem] border border-[#8fafa8]/14 bg-[linear-gradient(165deg,rgba(23,35,38,0.82),rgba(8,17,22,0.95))] p-5 shadow-[0_16px_50px_rgba(0,0,0,0.18)]">
            <p className="text-[0.58rem] font-medium uppercase tracking-[0.26em] text-[#c6a15b]/74">{card.label}</p>
            <h3 className="mt-3 font-serif text-[1.55rem] leading-none tracking-[-0.035em] text-[#f4efe2]">{card.title}</h3>
            <p className="mt-3 text-sm font-light leading-[1.78] text-[#f4efe2]/66">{card.description}</p>
            {card.secondaryExternalUrl ? (
              <a
                href={card.secondaryExternalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full border border-[#8fafa8]/22 px-3.5 py-2 text-[0.6rem] font-medium uppercase tracking-[0.19em] text-[#f4efe2]/72 transition-colors hover:border-[#d8c9a7]/42 hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/75 focus-visible:ring-offset-2 focus-visible:ring-offset-[#081116]"
              >
                Further regional guide
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  );
}
