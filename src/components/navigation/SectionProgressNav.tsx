"use client";

import { useEffect, useState } from "react";

type SectionProgressItem = {
  id: string;
  label: string;
};

const defaultItems = [
  { id: "hero", label: "Hero" },
  { id: "routes", label: "Routes" },
  { id: "start-here", label: "Start" },
  { id: "moments", label: "Moments" },
  { id: "destinations", label: "Destinations" },
] as const satisfies readonly SectionProgressItem[];

const observerThresholds = Array.from({ length: 21 }, (_, index) => index / 20);

type LenisLike = {
  scrollTo: (target: Element | string | number, options?: { immediate?: boolean }) => void;
};

declare global {
  interface Window {
    lenis?: LenisLike;
  }
}

type SectionProgressNavProps = {
  items?: readonly SectionProgressItem[];
  className?: string;
};

function prefersReducedMotion() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function SectionProgressNav({
  items = defaultItems,
  className = "",
}: SectionProgressNavProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    if (!items.length) {
      return;
    }

    const sectionElements = items
      .map((item, index) => {
        const element = document.getElementById(item.id);

        if (!element) {
          return null;
        }

        return {
          ...item,
          element,
          index,
        };
      })
      .filter(
        (
          section,
        ): section is {
          id: string;
          label: string;
          element: HTMLElement;
          index: number;
        } => section !== null,
      );

    if (!sectionElements.length) {
      return;
    }

    const updateActiveSection = () => {
      const viewportHeight = window.innerHeight;
      const anchorLine = viewportHeight * 0.35;

      let nextId = sectionElements[0].id;
      let nextDistance = Number.POSITIVE_INFINITY;
      let nextIndex = sectionElements[0].index;

      for (const section of sectionElements) {
        const rect = section.element.getBoundingClientRect();
        const isVisible = rect.bottom > 0 && rect.top < viewportHeight;

        if (!isVisible) {
          continue;
        }

        if (rect.top <= anchorLine && rect.bottom >= anchorLine) {
          nextId = section.id;
          break;
        }

        const distance =
          rect.top > anchorLine ? rect.top - anchorLine : anchorLine - rect.bottom;

        if (distance < nextDistance || (distance === nextDistance && section.index < nextIndex)) {
          nextDistance = distance;
          nextIndex = section.index;
          nextId = section.id;
        }
      }

      setActiveId((current) => (current === nextId ? current : nextId));
    };

    const observer = new IntersectionObserver(updateActiveSection, {
      root: null,
      threshold: observerThresholds,
    });

    sectionElements.forEach(({ element }) => observer.observe(element));
    updateActiveSection();

    return () => {
      observer.disconnect();
    };
  }, [items]);

  const handleScrollToSection = (id: string) => {
    const target = document.getElementById(id);

    if (!target) {
      return;
    }

    const reduceMotion = prefersReducedMotion();
    const lenis = window.lenis;

    if (lenis && typeof lenis.scrollTo === "function") {
      lenis.scrollTo(target, { immediate: reduceMotion });
      return;
    }

    target.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  if (!items.length) {
    return null;
  }

  return (
    <nav
      aria-label="Homepage section progress"
      className={`pointer-events-none fixed left-5 top-1/2 z-30 hidden -translate-y-1/2 lg:block ${className}`}
    >
      <div className="pointer-events-auto w-[11.5rem] rounded-[1.35rem] border border-[#8fafa8]/12 bg-[linear-gradient(180deg,rgba(16,26,30,0.78)_0%,rgba(8,17,22,0.54)_100%)] px-4 py-4 text-[#f4efe2] shadow-[0_20px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl">
        <p className="text-[0.52rem] font-medium uppercase tracking-[0.38em] text-[#c6a15b]/40">
          Section index
        </p>

        <div className="mt-4">
          <div className="relative pl-5">
            <span
              aria-hidden="true"
              className="absolute left-[0.34rem] top-1 bottom-1 w-px bg-[linear-gradient(180deg,rgba(244,239,226,0.28)_0%,rgba(244,239,226,0.06)_100%)]"
            />

            <ul className="space-y-2">
              {items.map((item) => {
                const isActive = activeId === item.id;

                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      aria-current={isActive ? "location" : undefined}
                      aria-label={`Scroll to ${item.label} section`}
                      onClick={() => {
                        setActiveId(item.id);
                        handleScrollToSection(item.id);
                      }}
                      className="group flex w-full items-center gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/45"
                    >
                      <span
                        aria-hidden="true"
                        className="relative flex h-3.5 w-3.5 items-center justify-center"
                      >
                        <span
                        className={`h-2 w-2 rounded-full border transition-colors duration-300 motion-reduce:transition-none ${
                          isActive
                              ? "border-[#e7e0d3] bg-[#e7e0d3] shadow-[0_0_0_5px_rgba(231,224,211,0.08)]"
                              : "border-[#afa796]/25 bg-[#afa796]/18"
                          }`}
                        />
                      </span>

                      <span
                        className={`whitespace-nowrap text-[0.57rem] font-medium uppercase tracking-[0.3em] transition-colors duration-300 motion-reduce:transition-none ${
                          isActive ? "text-[#f4efe2]" : "text-[#afa796]/52 group-hover:text-[#f4efe2]/78"
                        }`}
                      >
                        {item.label}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
