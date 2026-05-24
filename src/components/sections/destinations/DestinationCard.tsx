"use client";

import { motion, type Variants } from "framer-motion";
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
  const cardHoverVariants: Variants = {
    hover: shouldReduceMotion
      ? {}
      : {
          y: -8,
          transition: {
            duration: 0.75,
            ease: [0.16, 1, 0.3, 1],
          },
        },
  };

  const imageVariants: Variants = {
    visible: {
      scale: 1,
    },
    hover: shouldReduceMotion
      ? {}
      : {
          scale: 1.055,
          transition: {
            duration: 1.25,
            ease: [0.16, 1, 0.3, 1],
          },
        },
  };

  const contentVariants: Variants = {
    visible: {
      y: 0,
    },
    hover: shouldReduceMotion
      ? {}
      : {
          y: -6,
          transition: {
            duration: 0.75,
            ease: [0.16, 1, 0.3, 1],
          },
        },
  };

  const arrowVariants: Variants = {
    visible: {
      x: 0,
    },
    hover: shouldReduceMotion
      ? {}
      : {
          x: 4,
          transition: {
            duration: 0.75,
            ease: [0.16, 1, 0.3, 1],
          },
      },
  };

  const arrow = animationsEnabled ? (
    <motion.span
      variants={arrowVariants}
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-[#f4efe2] backdrop-blur-md"
      aria-hidden="true"
    >
      <ArrowUpRight className="h-4 w-4" />
    </motion.span>
  ) : (
    <span
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-[#f4efe2] backdrop-blur-md"
      aria-hidden="true"
    >
      <ArrowUpRight className="h-4 w-4" />
    </span>
  );

  const content = (
    <>
      <div className="mb-5 inline-flex items-center rounded-full border border-white/12 bg-black/20 px-3 py-1 text-[0.62rem] font-medium uppercase tracking-[0.22em] text-[#f4efe2]/70 backdrop-blur-md">
        Norway
      </div>
      <div className="flex items-end justify-between gap-5">
        <div>
          <h3 className="font-serif text-3xl font-normal leading-none tracking-[-0.035em] text-[#f4efe2] sm:text-4xl">
            {title}
          </h3>
          <p className="mt-3 text-sm font-light leading-6 text-[#f4efe2]/68">
            {subtitle}
          </p>
        </div>
        {arrow}
      </div>
    </>
  );

  const cardContent = (
    <>
      {animationsEnabled ? (
        <motion.div variants={imageVariants} className="absolute inset-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
            loading={isPriority ? "eager" : undefined}
            className="object-cover"
          />
        </motion.div>
      ) : (
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
            loading={isPriority ? "eager" : undefined}
            className="object-cover"
          />
        </div>
      )}

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,10,0.04)_18%,rgba(3,8,10,0.35)_54%,rgba(3,8,10,0.88)_100%)] transition-opacity duration-700 group-hover:opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_88%,rgba(216,201,167,0.16),rgba(216,201,167,0)_42%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

      {animationsEnabled ? (
        <motion.div
          variants={contentVariants}
          className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6"
        >
          {content}
        </motion.div>
      ) : (
        <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6">
          {content}
        </div>
      )}
    </>
  );

  return (
    <Link
      href={href}
      className="block rounded-[1.35rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
    >
      {animationsEnabled ? (
        <motion.article
          variants={cardHoverVariants}
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
          whileHover="hover"
          className="group relative min-h-[430px] overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.035] shadow-[0_28px_90px_rgba(0,0,0,0.42)] outline outline-1 outline-transparent transition-[box-shadow,outline-color] duration-700 hover:shadow-[0_34px_105px_rgba(164,190,197,0.13),0_28px_90px_rgba(0,0,0,0.5)] hover:outline-white/10 sm:min-h-[500px] lg:min-h-[540px]"
        >
          {cardContent}
        </motion.article>
      ) : (
        <article className="group relative min-h-[430px] overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.035] shadow-[0_28px_90px_rgba(0,0,0,0.42)] outline outline-1 outline-transparent transition-[box-shadow,outline-color] duration-700 hover:shadow-[0_34px_105px_rgba(164,190,197,0.13),0_28px_90px_rgba(0,0,0,0.5)] hover:outline-white/10 sm:min-h-[500px] lg:min-h-[540px]">
          {cardContent}
        </article>
      )}
    </Link>
  );
}
