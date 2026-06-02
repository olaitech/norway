"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type CSSProperties } from "react";

import { useMounted } from "@/src/hooks/useMounted";

const fadeMask: CSSProperties = {
  WebkitMaskImage:
    "linear-gradient(180deg, transparent 0%, black 14%, black 86%, transparent 100%)",
  maskImage:
    "linear-gradient(180deg, transparent 0%, black 14%, black 86%, transparent 100%)",
};

const grainStyle: CSSProperties = {
  backgroundImage:
    "radial-gradient(circle at 18% 22%, rgba(255,255,255,0.18) 0 0.65px, transparent 0.75px), radial-gradient(circle at 72% 64%, rgba(255,255,255,0.12) 0 0.65px, transparent 0.75px)",
  backgroundPosition: "0 0, 11px 13px",
  backgroundSize: "23px 23px, 29px 29px",
};

const glowInitial = { opacity: 0.08, scale: 1 };
const lowerMistInitial = { x: "0vw", opacity: 0.045 };
const upperMistInitial = { x: "-3vw", opacity: 0.04 };

export function AmbientDivider() {
  const mounted = useMounted();
  const shouldReduceMotion = useReducedMotion() === true;
  const animationsEnabled = mounted && !shouldReduceMotion;

  return (
    <div
      className="pointer-events-none relative z-30 -mt-10 -mb-14 h-[140px] overflow-hidden isolate sm:-mt-12 sm:-mb-16 sm:h-[152px] lg:-mt-12 lg:-mb-16 lg:h-[164px]"
      aria-hidden="true"
      style={fadeMask}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(231,221,207,0)_0%,rgba(208,189,165,0.24)_30%,rgba(143,126,106,0.24)_52%,rgba(21,30,40,0.42)_76%,rgba(17,24,33,0)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_68%_50%,rgba(126,176,192,0.05),rgba(115,101,84,0.04)_38%,rgba(17,24,33,0)_68%)]" />

      {animationsEnabled ? (
        <>
          <motion.div
            className="absolute left-[68%] top-1/2 h-44 w-[58vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(96,181,198,0.12),rgba(52,111,126,0.07)_38%,rgba(5,8,10,0)_72%)] blur-2xl"
            initial={glowInitial}
            animate={{ opacity: [0.08, 0.13, 0.09], scale: [1, 1.014, 1] }}
            transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute bottom-8 -right-[22vw] h-28 w-[70vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(231,221,207,0.16),rgba(161,138,109,0.1)_42%,rgba(17,24,33,0)_72%)] blur-2xl"
            initial={lowerMistInitial}
            animate={{ x: ["0vw", "-10vw", "0vw"], opacity: [0.045, 0.08, 0.05] }}
            transition={{ duration: 62, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute left-[8%] top-[42%] h-20 w-[70vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(244,239,232,0.16),rgba(174,203,207,0.04)_44%,rgba(17,24,33,0)_72%)] blur-xl"
            initial={upperMistInitial}
            animate={{ x: ["-3vw", "6vw", "-3vw"], opacity: [0.04, 0.068, 0.045] }}
            transition={{ duration: 46, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      ) : (
        <>
          <div
            className="absolute left-[68%] top-1/2 h-44 w-[58vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(96,181,198,0.12),rgba(52,111,126,0.07)_38%,rgba(17,24,33,0)_72%)] blur-2xl"
            style={{ opacity: mounted && shouldReduceMotion ? 0.11 : glowInitial.opacity }}
          />
          <div
            className="absolute bottom-8 -right-[22vw] h-28 w-[70vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(231,221,207,0.16),rgba(161,138,109,0.1)_42%,rgba(17,24,33,0)_72%)] blur-2xl"
            style={{
              opacity:
                mounted && shouldReduceMotion ? 0.065 : lowerMistInitial.opacity,
            }}
          />
          <div
            className="absolute left-[8%] top-[42%] h-20 w-[70vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(244,239,232,0.16),rgba(174,203,207,0.04)_44%,rgba(17,24,33,0)_72%)] blur-xl"
            style={{
              opacity:
                mounted && shouldReduceMotion ? 0.055 : upperMistInitial.opacity,
            }}
          />
        </>
      )}

      <div className="absolute inset-x-0 top-0 h-16 bg-[linear-gradient(180deg,rgba(231,221,207,0),rgba(123,108,89,0.12),rgba(231,221,207,0))]" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(180deg,rgba(17,24,33,0),rgba(17,24,33,0.4),rgba(17,24,33,0))]" />
      <div className="absolute inset-0 opacity-[0.025] mix-blend-overlay" style={grainStyle} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0)_42%,rgba(0,0,0,0.3)_100%)]" />
    </div>
  );
}
