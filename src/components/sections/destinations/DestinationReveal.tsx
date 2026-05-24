"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { useMounted } from "@/src/hooks/useMounted";

type DestinationRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function DestinationReveal({
  children,
  className,
  delay = 0,
}: DestinationRevealProps) {
  const mounted = useMounted();
  const shouldReduceMotion = useReducedMotion() === true;

  if (!mounted || shouldReduceMotion) {
    return <section className={className}>{children}</section>;
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
