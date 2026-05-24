"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type CSSProperties } from "react";

import { useMounted } from "@/src/hooks/useMounted";

const fadeMask: CSSProperties = {
  WebkitMaskImage:
    "linear-gradient(180deg, transparent 0%, black 12%, black 88%, transparent 100%)",
  maskImage:
    "linear-gradient(180deg, transparent 0%, black 12%, black 88%, transparent 100%)",
};

const grainStyle: CSSProperties = {
  backgroundImage:
    "radial-gradient(circle at 18% 22%, rgba(255,255,255,0.18) 0 0.65px, transparent 0.75px), radial-gradient(circle at 72% 64%, rgba(255,255,255,0.12) 0 0.65px, transparent 0.75px)",
  backgroundPosition: "0 0, 11px 13px",
  backgroundSize: "23px 23px, 29px 29px",
};

const glowInitial = { opacity: 0.12, scale: 1 };
const lowerMistInitial = { x: "0vw", opacity: 0.06 };
const upperMistInitial = { x: "-3vw", opacity: 0.055 };

export function AmbientDivider() {
  const mounted = useMounted();
  const shouldReduceMotion = useReducedMotion() === true;
  const animationsEnabled = mounted && !shouldReduceMotion;

  return (
    <div
      className="pointer-events-none relative z-30 -mt-24 -mb-20 h-[220px] overflow-hidden isolate sm:-mt-28 sm:-mb-24 sm:h-[240px] lg:-mt-32 lg:-mb-28 lg:h-[270px]"
      aria-hidden="true"
      style={fadeMask}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,7,0)_0%,rgba(4,7,10,0.52)_28%,rgba(2,5,8,0.92)_54%,rgba(4,7,10,0.72)_78%,rgba(5,6,7,0)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_68%_50%,rgba(59,118,130,0.055),rgba(17,42,50,0.035)_38%,rgba(5,8,10,0)_68%)]" />

      {animationsEnabled ? (
        <>
          <motion.div
            className="absolute left-[68%] top-1/2 h-44 w-[58vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(96,181,198,0.12),rgba(52,111,126,0.07)_38%,rgba(5,8,10,0)_72%)] blur-2xl"
            initial={glowInitial}
            animate={{ opacity: [0.12, 0.18, 0.13], scale: [1, 1.018, 1] }}
            transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute bottom-10 -right-[24vw] h-32 w-[76vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(210,224,223,0.055),rgba(92,145,157,0.055)_42%,rgba(5,8,10,0)_72%)] blur-2xl"
            initial={lowerMistInitial}
            animate={{ x: ["0vw", "-12vw", "0vw"], opacity: [0.06, 0.1, 0.07] }}
            transition={{ duration: 62, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute left-[8%] top-[42%] h-20 w-[70vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(232,241,240,0.045),rgba(174,203,207,0.035)_44%,rgba(5,8,10,0)_72%)] blur-xl"
            initial={upperMistInitial}
            animate={{ x: ["-3vw", "7vw", "-3vw"], opacity: [0.055, 0.09, 0.06] }}
            transition={{ duration: 46, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      ) : (
        <>
          <div
            className="absolute left-[68%] top-1/2 h-44 w-[58vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(96,181,198,0.12),rgba(52,111,126,0.07)_38%,rgba(5,8,10,0)_72%)] blur-2xl"
            style={{ opacity: mounted && shouldReduceMotion ? 0.16 : glowInitial.opacity }}
          />
          <div
            className="absolute bottom-10 -right-[24vw] h-32 w-[76vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(210,224,223,0.055),rgba(92,145,157,0.055)_42%,rgba(5,8,10,0)_72%)] blur-2xl"
            style={{
              opacity:
                mounted && shouldReduceMotion ? 0.09 : lowerMistInitial.opacity,
            }}
          />
          <div
            className="absolute left-[8%] top-[42%] h-20 w-[70vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(232,241,240,0.045),rgba(174,203,207,0.035)_44%,rgba(5,8,10,0)_72%)] blur-xl"
            style={{
              opacity:
                mounted && shouldReduceMotion ? 0.08 : upperMistInitial.opacity,
            }}
          />
        </>
      )}

      <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(5,6,7,0),rgba(5,6,7,0.34),rgba(5,6,7,0))]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,rgba(5,6,7,0),rgba(5,6,7,0.58),rgba(5,6,7,0))]" />
      <div className="absolute inset-0 opacity-[0.025] mix-blend-overlay" style={grainStyle} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0)_42%,rgba(0,0,0,0.3)_100%)]" />
    </div>
  );
}
