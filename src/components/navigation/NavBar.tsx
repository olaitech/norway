"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

import { AnimatedNavText } from "./AnimatedNavText";

export type NavItem = {
  label: string;
  href: string;
};

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
  "group inline-flex items-center rounded-full px-3 py-2 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-[#f4efe2]/72 transition-[color,background-color,opacity] duration-300 hover:bg-white/[0.03] hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/45 motion-reduce:transition-colors motion-reduce:hover:bg-transparent motion-reduce:hover:opacity-90 motion-reduce:hover:underline motion-reduce:underline-offset-[0.32em] motion-reduce:decoration-[#f4efe2]/25 sm:px-3.5 sm:py-2.5 sm:text-[0.68rem] sm:tracking-[0.22em]";

const mobileLinkClassName =
  "group flex min-h-11 items-center rounded-xl px-4 py-3 text-[0.64rem] font-medium uppercase tracking-[0.18em] text-[#f4efe2]/76 transition-colors duration-300 hover:bg-white/[0.05] hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#d8c9a7]/60 motion-reduce:transition-none";

export function NavBar({
  items = primaryNavItems,
  brandHref = "/",
  brandAriaLabel = "Trips Norway home",
  brandImageSrc = "/images/branding/logo2.png",
  brandImageAlt = "Trips Norway",
  className = "",
}: NavBarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuId = useId();
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") {
        return;
      }

      setIsMobileMenuOpen(false);
      mobileMenuButtonRef.current?.focus();
    }

    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);

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

        <div className="relative lg:hidden">
          <button
            ref={mobileMenuButtonRef}
            type="button"
            aria-label={
              isMobileMenuOpen
                ? "Menu — close primary navigation"
                : "Menu — open primary navigation"
            }
            aria-expanded={isMobileMenuOpen}
            aria-controls={mobileMenuId}
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
            className="inline-flex min-h-11 items-center gap-2.5 rounded-full border border-white/12 bg-[linear-gradient(180deg,rgba(14,18,21,0.76)_0%,rgba(7,10,12,0.7)_100%)] px-4 text-[0.64rem] font-medium uppercase tracking-[0.2em] text-[#f4efe2]/86 shadow-[0_18px_55px_rgba(0,0,0,0.34)] ring-1 ring-white/[0.04] backdrop-blur-2xl transition-[color,background-color,border-color] duration-300 hover:border-white/20 hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/65 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050607] motion-reduce:transition-none"
          >
            <span>Menu</span>
            {isMobileMenuOpen ? (
              <X className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
            )}
          </button>

          <nav
            id={mobileMenuId}
            aria-label="Primary"
            hidden={!isMobileMenuOpen}
            className="absolute right-0 top-[calc(100%+0.75rem)] z-30 w-72 max-w-[calc(100vw-2.5rem)] overflow-hidden rounded-2xl border border-white/12 bg-[linear-gradient(155deg,rgba(14,18,21,0.96)_0%,rgba(5,8,10,0.94)_100%)] p-2.5 shadow-[0_28px_90px_rgba(0,0,0,0.52)] ring-1 ring-white/[0.04] backdrop-blur-2xl"
          >
            <div className="pointer-events-none absolute inset-px rounded-[calc(1rem-1px)] bg-[linear-gradient(180deg,rgba(255,255,255,0.07)_0%,rgba(255,255,255,0.02)_38%,rgba(255,255,255,0)_72%)] opacity-70" />
            <div className="relative grid grid-cols-2 gap-1">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={mobileLinkClassName}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        <nav
          aria-label="Primary"
          className="relative hidden min-w-0 max-w-full overflow-hidden rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(14,18,21,0.72)_0%,rgba(7,10,12,0.66)_100%)] shadow-[0_22px_80px_rgba(0,0,0,0.38)] ring-1 ring-white/[0.04] backdrop-blur-2xl lg:block"
        >
          <div className="pointer-events-none absolute inset-px rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.03)_36%,rgba(255,255,255,0)_72%)] opacity-70" />
          <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,rgba(216,201,167,0.08),transparent_55%)] opacity-80" />

          <div className="relative z-10 flex min-w-0 max-w-full items-center gap-1 overflow-x-auto px-3 py-2.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:gap-1.5 sm:px-4 sm:py-3 md:gap-2 md:px-5">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={linkClassName}
              >
                <AnimatedNavText text={item.label} />
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
