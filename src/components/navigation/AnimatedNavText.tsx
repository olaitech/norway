"use client";

import { motion } from "framer-motion";

import styles from "./AnimatedNavText.module.css";

const navTextEase = [0.22, 1, 0.36, 1] as const;

const topLetterVariants = {
  rest: (index: number) => ({
    y: "0%",
    rotateX: 0,
    opacity: 1,
    transition: {
      duration: 0.28,
      delay: index * 0.018,
      ease: navTextEase,
    },
  }),
  hover: (index: number) => ({
    y: "-108%",
    rotateX: -16,
    opacity: 0,
    transition: {
      duration: 0.28,
      delay: index * 0.018,
      ease: navTextEase,
    },
  }),
} as const;

const bottomLetterVariants = {
  rest: (index: number) => ({
    y: "108%",
    rotateX: 12,
    opacity: 0,
    transition: {
      duration: 0.28,
      delay: index * 0.018,
      ease: navTextEase,
    },
  }),
  hover: (index: number) => ({
    y: "0%",
    rotateX: 0,
    opacity: 1,
    transition: {
      duration: 0.28,
      delay: index * 0.018,
      ease: navTextEase,
    },
  }),
} as const;

type AnimatedNavTextProps = {
  text: string;
  className?: string;
};

export function AnimatedNavText({ text, className = "" }: AnimatedNavTextProps) {
  const letters = Array.from(text);

  return (
    <span aria-hidden="true" className={className || undefined}>
      <span aria-hidden="true" className="inline-flex items-center gap-[0.14em]">
        {letters.map((letter, index) =>
          letter === " " ? (
            <span
              key={`${text}-${index}`}
              aria-hidden="true"
              className="inline-block w-[0.32em]"
            />
          ) : (
            <span
              key={`${text}-${index}`}
              aria-hidden="true"
              className="relative inline-grid h-[1em] overflow-hidden align-middle leading-none [perspective:900px]"
            >
              <motion.span
                aria-hidden="true"
                custom={index}
                variants={topLetterVariants}
                data-letter={letter}
                className={`${styles.letterGlyph} col-start-1 row-start-1 origin-bottom will-change-transform [backface-visibility:hidden]`}
              />
              <motion.span
                aria-hidden="true"
                custom={index}
                variants={bottomLetterVariants}
                data-letter={letter}
                className={`${styles.letterGlyph} col-start-1 row-start-1 origin-bottom will-change-transform [backface-visibility:hidden]`}
              />
            </span>
          ),
        )}
      </span>
    </span>
  );
}
