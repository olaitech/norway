"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { useMounted } from "@/src/hooks/useMounted";

type DestinationCardProps = {
  href: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  index: number;
  isVisible: boolean;
  shouldReduceMotion: boolean;
  isPriority?: boolean;
};

export function DestinationCard({
  href,
  title,
  subtitle,
  imageSrc,
  imageAlt,
  index,
  isVisible,
  isPriority = false,
  shouldReduceMotion,
}: DestinationCardProps) {
  const mounted = useMounted();
  const animationsEnabled = mounted && !shouldReduceMotion;

  const arrow = (
    <span
      data-card-cue
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#beb29f] bg-[#d6ccbc]/70 text-[#1c1a17] shadow-[0_8px_18px_rgba(0,0,0,0.12)]"
      aria-hidden="true"
    >
      <ArrowUpRight className="h-4 w-4" />
    </span>
  );

  const content = (
    <>
      <div className="mb-5 inline-flex items-center rounded-full border border-[#beb29f] bg-[#d6ccbc]/70 px-3 py-1 text-[0.62rem] font-medium uppercase tracking-[0.22em] text-[#9d8458]">
        Norway
      </div>
      <div className="flex items-end justify-between gap-5">
        <div>
          <h3
            data-card-title
            className="font-serif text-3xl font-normal leading-none tracking-[-0.035em] text-[#1c1a17] sm:text-4xl"
          >
            {title}
          </h3>
          <p className="mt-3 text-sm font-light leading-6 text-[#4e4a43]">
            {subtitle}
          </p>
        </div>
        {arrow}
      </div>
    </>
  );

  const cardContent = (
    <>
      <div className="absolute inset-0">
        <Image
          data-card-image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
          loading={isPriority ? "eager" : undefined}
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,10,0.05)_18%,rgba(3,8,10,0.22)_54%,rgba(3,8,10,0.62)_100%)]" />

      <div className="absolute inset-x-3 bottom-3 z-10 rounded-[1.05rem] border border-[#beb29f] bg-[#ddd4c4]/95 p-5 shadow-[0_14px_34px_rgba(0,0,0,0.18)] backdrop-blur-[2px] sm:inset-x-4 sm:bottom-4 sm:p-6">
        {content}
      </div>
    </>
  );

  return (
    <Link
      href={href}
      className="internal-card-link block rounded-[1.35rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
    >
      {animationsEnabled ? (
        <motion.article
          initial={{ opacity: 0, y: 18 }}
          animate={
            isVisible
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 18 }
          }
          transition={{
            opacity: {
              duration: 0.8,
              delay: 0.16 + index * 0.12,
              ease: [0.16, 1, 0.3, 1],
            },
            y: {
              duration: 0.8,
              delay: 0.16 + index * 0.12,
              ease: [0.16, 1, 0.3, 1],
            },
          }}
          className="relative min-h-[430px] overflow-hidden rounded-[1.35rem] border border-[#beb29f]/35 bg-[#080a09] shadow-[0_28px_90px_rgba(0,0,0,0.42)] outline outline-1 outline-transparent sm:min-h-[500px] lg:min-h-[540px]"
        >
          {cardContent}
        </motion.article>
      ) : (
        <article className="relative min-h-[430px] overflow-hidden rounded-[1.35rem] border border-[#beb29f]/35 bg-[#080a09] shadow-[0_28px_90px_rgba(0,0,0,0.42)] outline outline-1 outline-transparent sm:min-h-[500px] lg:min-h-[540px]">
          {cardContent}
        </article>
      )}
    </Link>
  );
}
