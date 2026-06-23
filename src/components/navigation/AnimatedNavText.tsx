"use client";

import { motion } from "framer-motion";
const navTextVariants = {
  rest: {
    y: 0,
    scale: 1,
    opacity: 1,
  },
  hover: {
    y: -1,
    scale: 1.015,
    opacity: 1,
  },
} as const;

type AnimatedNavTextProps = {
  text: string;
  className?: string;
};

export function AnimatedNavText({ text, className = "" }: AnimatedNavTextProps) {
  return (
    <motion.span
      aria-hidden="true"
      variants={navTextVariants}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className={className || "inline-block"}
    >
      {text}
    </motion.span>
  );
}
