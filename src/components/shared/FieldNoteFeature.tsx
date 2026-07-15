import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type FieldNoteFeatureProps = {
  eyebrow: ReactNode;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
  imageSrc: string;
  imageAlt: string;
};

export function FieldNoteFeature({
  eyebrow,
  title,
  description,
  href,
  linkLabel,
  imageSrc,
  imageAlt,
}: FieldNoteFeatureProps) {
  return (
    <article className="rounded-[1.1rem] border border-white/8 bg-white/[0.02] p-6 sm:p-7">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
        <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-[0.85rem] sm:w-40">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 640px) 10rem, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-[0.6rem] font-medium uppercase tracking-[0.31em] text-[#d8c9a7]/72">
            {eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-[clamp(1.8rem,3.2vw,2.5rem)] font-normal leading-[1] tracking-[-0.04em] text-[#f4efe2]">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm font-light leading-[1.8] text-[#f4efe2]/64 sm:text-base">
            {description}
          </p>
          <Link
            href={href}
            className="mt-5 inline-flex w-fit items-center gap-2 text-[0.62rem] font-medium uppercase tracking-[0.24em] text-[#d8c9a7] transition-colors hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
          >
            {linkLabel}
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
