"use client";

import {
  useRef,
  useState,
  type KeyboardEvent,
} from "react";

type LofotenPlace = {
  title: string;
  text: string;
};

type LofotenLocationCompassProps = {
  places: readonly LofotenPlace[];
};

const orbitPositionClasses = [
  "xl:left-1/2 xl:top-0 xl:-translate-x-1/2",
  "xl:right-0 xl:top-[18%]",
  "xl:bottom-[18%] xl:right-0",
  "xl:bottom-0 xl:left-1/2 xl:-translate-x-1/2",
  "xl:bottom-[18%] xl:left-0",
  "xl:left-0 xl:top-[18%]",
] as const;

export function LofotenLocationCompass({ places }: LofotenLocationCompassProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const selectAndFocus = (index: number) => {
    const nextIndex = (index + places.length) % places.length;

    setSelectedIndex(nextIndex);
    buttonRefs.current[nextIndex]?.focus();
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      selectAndFocus(index + 1);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      selectAndFocus(index - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      selectAndFocus(0);
    } else if (event.key === "End") {
      event.preventDefault();
      selectAndFocus(places.length - 1);
    }
  };

  return (
    <div className="mt-12">
      <div className="flex items-center gap-3 text-[0.58rem] font-medium uppercase tracking-[0.28em] text-[#d8c9a7]/62">
        <span aria-hidden="true" className="h-px w-10 bg-[#d8c9a7]/30" />
        Travel orientation · Not a map
      </div>

      <div className="relative mt-7 xl:h-[38rem]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-[9%] inset-y-[7%] hidden rounded-[50%] border border-[#8fafa8]/14 xl:block"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-[16%] inset-y-[15%] hidden rounded-[50%] border border-[#d8c9a7]/8 xl:block"
        />

        <div
          role="group"
          aria-label="Choose a Lofoten place"
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:absolute xl:inset-0 xl:block"
        >
          {places.map((place, index) => {
            const isSelected = index === selectedIndex;

            return (
              <button
                key={place.title}
                ref={(button) => {
                  buttonRefs.current[index] = button;
                }}
                id={`lofoten-compass-node-${index}`}
                type="button"
                aria-pressed={isSelected}
                aria-controls={`lofoten-compass-panel-${index}`}
                onClick={() => setSelectedIndex(index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                className={`${orbitPositionClasses[index]} relative z-10 flex min-h-14 w-full items-center gap-3 rounded-[1rem] border px-4 py-3 text-left text-sm font-light leading-snug transition-[border-color,background-color,color,box-shadow] duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/60 motion-reduce:transition-none xl:absolute xl:min-h-[4.5rem] xl:w-[13.5rem] xl:justify-center xl:rounded-full xl:px-5 xl:text-center ${
                  isSelected
                    ? "border-[#d8c9a7]/46 bg-[#d8c9a7]/10 text-[#f4efe2] shadow-[0_16px_42px_rgba(0,0,0,0.24)]"
                    : "border-[#8fafa8]/14 bg-[linear-gradient(165deg,rgba(24,48,55,0.56),rgba(7,20,24,0.9))] text-[#f4efe2]/66 hover:border-[#d8c9a7]/30 hover:text-[#f4efe2]"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`h-2 w-2 shrink-0 rounded-full ${
                    isSelected ? "bg-[#d8c9a7]" : "bg-[#8fafa8]/42"
                  }`}
                />
                <span>{place.title}</span>
              </button>
            );
          })}
        </div>

        <div className="surface-fjord-media mt-6 grid min-h-[16rem] overflow-hidden rounded-[1.35rem] border-[#d8c9a7]/14 xl:absolute xl:left-1/2 xl:top-1/2 xl:mt-0 xl:w-[min(52%,36rem)] xl:-translate-x-1/2 xl:-translate-y-1/2">
          <div
            aria-hidden="true"
            className="pointer-events-none col-start-1 row-start-1 bg-[radial-gradient(circle_at_18%_10%,rgba(143,175,168,0.1),transparent_42%),linear-gradient(150deg,rgba(255,255,255,0.025),transparent_48%)]"
          />
          {places.map((place, index) => {
            const isSelected = index === selectedIndex;

            return (
              <article
                key={place.title}
                id={`lofoten-compass-panel-${index}`}
                aria-labelledby={`lofoten-compass-node-${index}`}
                className={`relative col-start-1 row-start-1 flex min-h-[16rem] flex-col justify-center p-7 transition-[opacity,transform] duration-500 ease-out motion-reduce:transform-none motion-reduce:transition-none sm:p-9 xl:p-10 ${
                  isSelected
                    ? "z-10 translate-y-0 opacity-100"
                    : "pointer-events-none z-0 translate-y-2 opacity-0"
                }`}
              >
                <p className="text-[0.58rem] font-medium uppercase tracking-[0.28em] text-[#d8c9a7]/68">
                  Selected place · {String(index + 1).padStart(2, "0")} / {String(places.length).padStart(2, "0")}
                </p>
                <h3 className="mt-5 font-serif text-[clamp(2.1rem,4vw,3.7rem)] font-normal leading-[0.95] tracking-[-0.05em] text-[#f4efe2]">
                  {place.title}
                </h3>
                <p className="mt-5 max-w-xl text-sm font-light leading-[1.85] text-[#f4efe2]/68 sm:text-base">
                  {place.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
