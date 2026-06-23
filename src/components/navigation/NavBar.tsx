"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { useMounted } from "@/src/hooks/useMounted";

import { AnimatedNavText } from "./AnimatedNavText";

export type NavItem = {
  label: string;
  href: string;
};

const MotionLink = motion.create(Link);

export const primaryNavItems = [
  { label: "Destinations", href: "/destinations" },
  { label: "Routes", href: "/routes" },
  { label: "Guides", href: "/guides" },
  { label: "Journal", href: "/journal" },
  { label: "Map", href: "/map" },
  { label: "About", href: "/about" },
] as const satisfies readonly NavItem[];

type NavBarProps = {
  items?: readonly NavItem[];
  brandHref?: string;
  brandAriaLabel?: string;
  brandImageSrc?: string;
  brandImageAlt?: string;
  className?: string;
};

const linkClassName =
  "inline-flex items-center rounded-full px-3 py-2 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-[#f4efe2]/72 transition-[color,background-color,opacity] duration-300 hover:bg-white/[0.03] hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/45 motion-reduce:transition-colors motion-reduce:hover:bg-transparent motion-reduce:hover:opacity-90 motion-reduce:hover:underline motion-reduce:underline-offset-[0.32em] motion-reduce:decoration-[#f4efe2]/25 sm:px-3.5 sm:py-2.5 sm:text-[0.68rem] sm:tracking-[0.22em]";

export function NavBar({
  items = primaryNavItems,
  brandHref = "/",
  brandAriaLabel = "Norge home",
  brandImageSrc = "/images/branding/logo2.png",
  brandImageAlt = "",
  className = "",
}: NavBarProps) {
  const mounted = useMounted();
  const shouldReduceMotion = useReducedMotion() === true;
  const interactive = mounted && !shouldReduceMotion;

  return (
    <header
      className={`absolute inset-x-0 top-0 z-20 px-5 py-5 sm:px-8 md:px-12 ${className}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 sm:gap-6">
        <Link
          href={brandHref}
          aria-label={brandAriaLabel}
          className="flex h-24 w-24 shrink-0 items-center justify-center opacity-90 transition-opacity duration-300 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55 sm:h-32 sm:w-32"
        >
          <Image
            src={brandImageSrc}
            alt={brandImageAlt}
            width={128}
            height={128}
            priority
            className="h-full w-full object-contain"
          />
        </Link>

        <nav
          aria-label="Primary"
          className="relative min-w-0 max-w-full overflow-hidden rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(14,18,21,0.72)_0%,rgba(7,10,12,0.66)_100%)] shadow-[0_22px_80px_rgba(0,0,0,0.38)] ring-1 ring-white/[0.04] backdrop-blur-2xl"
        >
          <div className="pointer-events-none absolute inset-px rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.03)_36%,rgba(255,255,255,0)_72%)] opacity-70" />
          <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,rgba(216,201,167,0.08),transparent_55%)] opacity-80" />

          <div className="relative z-10 flex min-w-0 max-w-full items-center gap-1 overflow-x-auto px-3 py-2.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:gap-1.5 sm:px-4 sm:py-3 md:gap-2 md:px-5">
            {items.map((item) => (
              <MotionLink
                key={item.href}
                href={item.href}
                aria-label={item.label}
                initial="rest"
                animate="rest"
                whileHover={interactive ? "hover" : undefined}
                whileFocus={interactive ? "hover" : undefined}
                className={linkClassName}
              >
                <AnimatedNavText text={item.label} />
              </MotionLink>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
