"use client";

import { motion } from "framer-motion";

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
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="inline-flex items-center gap-[0.14em]">
        {letters.map((letter, index) =>
          letter === " " ? (
            <span key={`${text}-${index}`} className="inline-block w-[0.32em]" />
          ) : (
            <span
              key={`${text}-${index}`}
              className="relative inline-grid h-[1em] overflow-hidden align-middle leading-none [perspective:900px]"
            >
              <motion.span
                aria-hidden="true"
                custom={index}
                variants={topLetterVariants}
                className="col-start-1 row-start-1 inline-block origin-bottom will-change-transform [backface-visibility:hidden]"
              >
                {letter}
              </motion.span>
              <motion.span
                aria-hidden="true"
                custom={index}
                variants={bottomLetterVariants}
                className="col-start-1 row-start-1 inline-block origin-bottom will-change-transform [backface-visibility:hidden]"
              >
                {letter}
              </motion.span>
            </span>
          ),
        )}
      </span>
    </span>
  );
}
