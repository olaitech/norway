"use client";

import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

import { useMounted } from "@/src/hooks/useMounted";

export type StickyScrollItem = {
  title: string;
  description: string;
  meta: string;
  href: string;
  image: string;
};

type StickyScrollRevealProps = {
  content: StickyScrollItem[];
};

export function StickyScrollReveal({ content }: StickyScrollRevealProps) {
  const [activeItem, setActiveItem] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mounted = useMounted();
  const shouldReduceMotion = useReducedMotion() === true;
  const animationsEnabled = mounted && !shouldReduceMotion;
  const hasContent = content.length > 0;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!content.length) return;
    const lastIndex = content.length - 1;
    const segmentSize = 1 / content.length;
    const nextIndex = Math.min(
      lastIndex,
      Math.max(0, Math.floor(latest / segmentSize + 0.3)),
    );
    setActiveItem((current) => (current === nextIndex ? current : nextIndex));
  });

  if (!hasContent) {
    return null;
  }

  const active = content[Math.min(activeItem, content.length - 1)];

  return (
    <div ref={containerRef} className="relative mx-auto mt-14 max-w-7xl">
      <div className="hidden gap-12 lg:grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
        <div className="space-y-12 pr-2">
          {content.map((item, index) => {
            const isActive = index === activeItem;
            const itemClassName =
              "rounded-2xl border border-white/8 bg-white/[0.015] px-7 py-8";

            const itemContent = (
              <>
                <p className="text-[0.61rem] font-medium uppercase tracking-[0.28em] text-[#d8c9a7]/78">
                  {item.meta}
                </p>
                <h3 className="mt-5 font-serif text-[clamp(2rem,3.2vw,3rem)] leading-[0.96] tracking-[-0.04em] text-[#f4efe2]">
                  {item.title}
                </h3>
                <p className="mt-5 max-w-xl text-base font-light leading-[1.85] text-[#f4efe2]/68">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-[0.62rem] font-medium uppercase tracking-[0.24em] text-[#f4efe2]/82 transition-colors hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
                >
                  Open guide
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </>
            );

            if (!animationsEnabled) {
              return (
                <article
                  key={`${item.href}-${index}`}
                  className={`${itemClassName} ${isActive ? "opacity-100" : "opacity-45"}`}
                >
                  {itemContent}
                </article>
              );
            }

            return (
              <motion.article
                key={`${item.href}-${index}`}
                animate={{
                  opacity: isActive ? 1 : 0.38,
                  y: isActive ? 0 : 8,
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className={itemClassName}
              >
                {itemContent}
              </motion.article>
            );
          })}
        </div>

        <div className="sticky top-24 h-[calc(100vh-8rem)] min-h-[32rem]">
          <div className="relative h-full overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.02] shadow-[0_28px_100px_rgba(0,0,0,0.45)]">
            {animationsEnabled ? (
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`${active.href}-${activeItem}`}
                  initial={{ opacity: 0.72, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0.72, scale: 0.995 }}
                  transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,10,0.08)_8%,rgba(3,8,10,0.28)_45%,rgba(3,8,10,0.92)_100%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_20%,rgba(151,182,190,0.14),rgba(151,182,190,0)_52%)]" />
                  <div className="absolute inset-x-0 bottom-0 z-10 p-8">
                    <p className="text-[0.58rem] font-medium uppercase tracking-[0.3em] text-[#d8c9a7]/76">
                      {active.meta}
                    </p>
                    <h4 className="mt-4 font-serif text-[clamp(2rem,2.8vw,3rem)] leading-[0.95] tracking-[-0.04em] text-[#f4efe2]">
                      {active.title}
                    </h4>
                  </div>
                </motion.div>
              </AnimatePresence>
            ) : (
              <div className="absolute inset-0">
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,10,0.08)_8%,rgba(3,8,10,0.28)_45%,rgba(3,8,10,0.92)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_20%,rgba(151,182,190,0.14),rgba(151,182,190,0)_52%)]" />
                <div className="absolute inset-x-0 bottom-0 z-10 p-8">
                  <p className="text-[0.58rem] font-medium uppercase tracking-[0.3em] text-[#d8c9a7]/76">
                    {active.meta}
                  </p>
                  <h4 className="mt-4 font-serif text-[clamp(2rem,2.8vw,3rem)] leading-[0.95] tracking-[-0.04em] text-[#f4efe2]">
                    {active.title}
                  </h4>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-5 lg:hidden">
        {content.map((item, index) => (
          <article
            key={`${item.href}-${index}`}
            className="overflow-hidden rounded-[1.3rem] border border-white/10 bg-white/[0.02]"
          >
            <div className="relative h-60">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 768px) calc(100vw - 6rem), (min-width: 640px) calc(100vw - 4rem), calc(100vw - 2.5rem)"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,10,0.04)_0%,rgba(3,8,10,0.6)_100%)]" />
            </div>
            <div className="px-6 py-6">
              <p className="text-[0.58rem] font-medium uppercase tracking-[0.27em] text-[#d8c9a7]/78">
                {item.meta}
              </p>
              <h3 className="mt-4 font-serif text-[2rem] leading-[0.96] tracking-[-0.04em] text-[#f4efe2]">
                {item.title}
              </h3>
              <p className="mt-4 text-sm font-light leading-[1.8] text-[#f4efe2]/68">
                {item.description}
              </p>
              <Link
                href={item.href}
                className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-[0.61rem] font-medium uppercase tracking-[0.24em] text-[#f4efe2]/82"
              >
                Open guide
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
