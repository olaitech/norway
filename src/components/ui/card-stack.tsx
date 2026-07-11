"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";

export type CardStackItem = {
  id: string | number;
  title: string;
  description?: string;
  imageSrc?: string;
  href?: string;
  ctaLabel?: string;
  tag?: string;
};

export type CardStackProps<T extends CardStackItem> = {
  items: T[];
  initialIndex?: number;
  maxVisible?: number;
  cardWidth?: React.CSSProperties["width"];
  cardHeight?: React.CSSProperties["height"];
  stageHeight?: React.CSSProperties["height"];
  overlap?: number;
  spreadDeg?: number;
  perspectivePx?: number;
  depthPx?: number;
  tiltXDeg?: number;
  activeLiftPx?: number;
  activeScale?: number;
  inactiveScale?: number;
  springStiffness?: number;
  springDamping?: number;
  loop?: boolean;
  autoAdvance?: boolean;
  intervalMs?: number;
  pauseOnHover?: boolean;
  showDots?: boolean;
  className?: string;
  stageClassName?: string;
  onChangeIndex?: (index: number, item: T) => void;
  renderCard?: (item: T, state: { active: boolean }) => React.ReactNode;
};

type StackViewport = "desktop" | "tablet" | "mobile";

function wrapIndex(index: number, length: number) {
  if (length <= 0) return 0;
  return ((index % length) + length) % length;
}

function signedOffset(
  index: number,
  activeIndex: number,
  length: number,
  loop: boolean,
) {
  const raw = index - activeIndex;
  if (!loop || length <= 1) return raw;

  const wrapped = raw > 0 ? raw - length : raw + length;
  return Math.abs(wrapped) < Math.abs(raw) ? wrapped : raw;
}

function useStackViewport(): StackViewport {
  const [viewport, setViewport] = React.useState<StackViewport>("desktop");

  React.useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 639px)");
    const tabletQuery = window.matchMedia("(max-width: 1023px)");
    const updateViewport = () => {
      setViewport(
        mobileQuery.matches
          ? "mobile"
          : tabletQuery.matches
            ? "tablet"
            : "desktop",
      );
    };

    updateViewport();
    mobileQuery.addEventListener("change", updateViewport);
    tabletQuery.addEventListener("change", updateViewport);

    return () => {
      mobileQuery.removeEventListener("change", updateViewport);
      tabletQuery.removeEventListener("change", updateViewport);
    };
  }, []);

  return viewport;
}

export function CardStack<T extends CardStackItem>({
  items,
  initialIndex = 0,
  maxVisible = 5,
  cardWidth = "clamp(15rem, 38vw, 31rem)",
  cardHeight = "clamp(25rem, 43vw, 31rem)",
  stageHeight = "clamp(29.5rem, 50vw, 37rem)",
  overlap = 0.66,
  spreadDeg = 28,
  perspectivePx = 1100,
  depthPx = 84,
  tiltXDeg = 7,
  activeLiftPx = 16,
  activeScale = 1.015,
  inactiveScale = 0.96,
  springStiffness = 240,
  springDamping = 30,
  loop = true,
  autoAdvance = false,
  intervalMs = 5500,
  pauseOnHover = true,
  showDots = true,
  className,
  stageClassName,
  onChangeIndex,
  renderCard,
}: CardStackProps<T>) {
  const reduceMotion = useReducedMotion();
  const viewport = useStackViewport();
  const length = items.length;
  const [activeIndex, setActiveIndex] = React.useState(() =>
    wrapIndex(initialIndex, length),
  );
  const [hovering, setHovering] = React.useState(false);
  const [hasFocus, setHasFocus] = React.useState(false);
  const [documentVisible, setDocumentVisible] = React.useState(true);
  const instructionId = React.useId();

  React.useEffect(() => {
    const updateVisibility = () => {
      setDocumentVisible(document.visibilityState === "visible");
    };

    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);

    return () => {
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  React.useEffect(() => {
    if (!length) return;
    onChangeIndex?.(activeIndex, items[activeIndex]!);
  }, [activeIndex, items, length, onChangeIndex]);

  const selectIndex = React.useCallback(
    (index: number) => {
      setActiveIndex(wrapIndex(index, length));
    },
    [length],
  );

  const previous = React.useCallback(() => {
    if (!length) return;
    setActiveIndex((index) => {
      if (!loop && index === 0) return index;
      return wrapIndex(index - 1, length);
    });
  }, [length, loop]);

  const next = React.useCallback(() => {
    if (!length) return;
    setActiveIndex((index) => {
      if (!loop && index === length - 1) return index;
      return wrapIndex(index + 1, length);
    });
  }, [length, loop]);

  React.useEffect(() => {
    if (
      !autoAdvance ||
      reduceMotion ||
      !length ||
      (pauseOnHover && hovering) ||
      hasFocus ||
      !documentVisible
    ) {
      return;
    }

    const timer = window.setInterval(next, Math.max(700, intervalMs));
    return () => window.clearInterval(timer);
  }, [
    activeIndex,
    autoAdvance,
    documentVisible,
    hasFocus,
    hovering,
    intervalMs,
    length,
    next,
    pauseOnHover,
    reduceMotion,
  ]);

  if (!length) return null;

  const activeItem = items[activeIndex]!;
  const maxOffset = Math.min(
    Math.floor(maxVisible / 2),
    viewport === "desktop" ? 2 : 1,
  );
  const responsiveOverlap =
    viewport === "mobile"
      ? Math.max(overlap, 0.78)
      : viewport === "tablet"
        ? Math.max(overlap, 0.7)
        : overlap;
  const responsiveSpread =
    viewport === "mobile" ? 0 : viewport === "tablet" ? spreadDeg * 0.55 : spreadDeg;
  const responsiveDepth =
    viewport === "mobile"
      ? depthPx * 0.18
      : viewport === "tablet"
        ? depthPx * 0.5
        : depthPx;
  const responsiveTilt =
    viewport === "mobile" ? 0 : viewport === "tablet" ? tiltXDeg * 0.55 : tiltXDeg;
  const responsiveLift =
    reduceMotion || viewport === "mobile" ? activeLiftPx * 0.5 : activeLiftPx;
  const stepDeg = maxOffset > 0 ? responsiveSpread / maxOffset : 0;

  return (
    <div
      className={clsx("w-full", className)}
      onPointerEnter={() => setHovering(true)}
      onPointerLeave={() => setHovering(false)}
      onFocusCapture={() => setHasFocus(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setHasFocus(false);
        }
      }}
    >
      <div
        className={clsx(
          "relative w-full overflow-x-clip focus-visible:outline-none",
          stageClassName,
        )}
        style={{ height: stageHeight }}
        tabIndex={0}
        role="region"
        aria-label="Fjord journey planning cards"
        aria-describedby={instructionId}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            previous();
          }

          if (event.key === "ArrowRight") {
            event.preventDefault();
            next();
          }
        }}
      >
        <p id={instructionId} className="sr-only">
          Use the left and right arrow keys, swipe the active card, or use the
          position buttons to choose a planning path.
        </p>
        <p className="sr-only" aria-live="polite" aria-atomic="true">
          Showing {activeItem.title}, card {activeIndex + 1} of {length}.
        </p>

        <div
          className="pointer-events-none absolute inset-x-[12%] top-[8%] h-[45%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(143,175,168,0.12),transparent_68%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-[8%] bottom-[4%] h-[30%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(198,161,91,0.08),transparent_70%)]"
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 flex items-end justify-center"
          style={{ perspective: `${perspectivePx}px` }}
        >
          <AnimatePresence initial={false}>
            {items.map((item, index) => {
              const offset = signedOffset(index, activeIndex, length, loop);
              const absoluteOffset = Math.abs(offset);

              if (absoluteOffset > maxOffset) return null;

              const isActive = offset === 0;
              const cardOffset = `${offset * (1 - responsiveOverlap) * 100}%`;
              const arcOffset = absoluteOffset * (viewport === "mobile" ? 4 : 10);
              const cardLift = isActive ? -responsiveLift : 0;
              const rotateZ = offset * stepDeg;
              const rotateX = isActive ? 0 : responsiveTilt;
              const depth = -absoluteOffset * responsiveDepth;

              return (
                <motion.div
                  key={item.id}
                  className={clsx(
                    "absolute bottom-0 overflow-hidden rounded-[1.35rem] border bg-[#081116] shadow-[0_24px_70px_rgba(0,0,0,0.28)] select-none",
                    isActive
                      ? "cursor-grab border-[#c6a15b]/46 active:cursor-grabbing"
                      : "cursor-pointer border-[#8fafa8]/18",
                  )}
                  style={{
                    width: cardWidth,
                    height: cardHeight,
                    zIndex: 100 - absoluteOffset,
                    transformStyle: "preserve-3d",
                  }}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          x: cardOffset,
                          y: arcOffset + 20,
                          rotateZ,
                          rotateX,
                        }
                  }
                  animate={{
                    opacity: isActive ? 1 : 0.72,
                    x: cardOffset,
                    y: arcOffset + cardLift,
                    rotateZ,
                    rotateX,
                    scale: isActive ? activeScale : inactiveScale,
                  }}
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : {
                          type: "spring",
                          stiffness: springStiffness,
                          damping: springDamping,
                        }
                  }
                  aria-hidden={isActive ? undefined : true}
                  drag={isActive ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.16}
                  dragSnapToOrigin
                  onDragEnd={
                    isActive
                      ? (_event, info) => {
                          const swipeThreshold = viewport === "mobile" ? 52 : 84;

                          if (
                            info.offset.x > swipeThreshold ||
                            info.velocity.x > 650
                          ) {
                            previous();
                          } else if (
                            info.offset.x < -swipeThreshold ||
                            info.velocity.x < -650
                          ) {
                            next();
                          }
                        }
                      : undefined
                  }
                  onClick={() => {
                    if (!isActive) selectIndex(index);
                  }}
                >
                  <div
                    className="h-full w-full"
                    style={{
                      transform: `translateZ(${depth}px)`,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {renderCard ? (
                      renderCard(item, { active: isActive })
                    ) : (
                      <DefaultFanCard item={item} />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {showDots ? (
        <div className="mt-5 flex justify-center">
          <div className="flex items-center gap-1" aria-label="Choose a planning path">
            {items.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => selectIndex(index)}
                  className="grid h-11 w-11 place-items-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/75 focus-visible:ring-offset-2 focus-visible:ring-offset-[#081116]"
                  aria-label={`Show ${item.title}`}
                  aria-current={isActive ? "true" : undefined}
                >
                  <span
                    className={clsx(
                      "block h-2 w-2 origin-center rounded-full transition-[transform,background-color] duration-300",
                      isActive
                        ? "scale-x-[3.5] bg-[#c6a15b]"
                        : "scale-x-100 bg-[#f4efe2]/32 hover:bg-[#f4efe2]/58",
                    )}
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function DefaultFanCard({ item }: { item: CardStackItem }) {
  return (
    <div className="flex h-full w-full flex-col justify-end bg-[linear-gradient(165deg,#172326,#081116)] p-6 text-[#f4efe2]">
      {item.tag ? (
        <p className="text-[0.6rem] font-medium uppercase tracking-[0.28em] text-[#c6a15b]/76">
          {item.tag}
        </p>
      ) : null}
      <h3 className="mt-4 font-serif text-3xl leading-[0.96] tracking-[-0.04em]">
        {item.title}
      </h3>
      {item.description ? (
        <p className="mt-4 text-sm font-light leading-[1.75] text-[#f4efe2]/68">
          {item.description}
        </p>
      ) : null}
    </div>
  );
}
