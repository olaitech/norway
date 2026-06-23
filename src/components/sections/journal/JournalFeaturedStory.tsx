import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function JournalFeaturedStory() {
  return (
    <Link
      href="/stories/northern-norway"
      className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
    >
      <article className="grid overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.025] shadow-[0_32px_100px_rgba(0,0,0,0.36)] transition-[border-color,background-color] duration-500 hover:border-white/16 hover:bg-white/[0.03] lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative min-h-[320px] overflow-hidden sm:min-h-[420px] lg:min-h-[520px]">
          <Image
            src="/images/stories/northern-norway/lofoten1.jpg"
            alt="A Lofoten fishing village with blue water and steep mountains behind it"
            fill
            sizes="(min-width: 1024px) 54vw, 100vw"
            className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.035]"
            style={{ objectPosition: "center 46%" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,10,0.05)_22%,rgba(3,8,10,0.2)_52%,rgba(3,8,10,0.58)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,rgba(5,7,10,0),rgba(5,7,10,0.42))]" />
        </div>

        <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
          <div>
            <p className="text-[0.63rem] font-medium uppercase tracking-[0.36em] text-[#d8c9a7]/64">
              Featured Story
            </p>
            <h2 className="mt-7 font-serif text-[clamp(2.5rem,4.7vw,4.25rem)] font-normal leading-[0.98] tracking-[-0.052em] text-[#f4efe2]">
              Northern Norway: A Slow Journey Through Light
            </h2>
            <p className="mt-7 max-w-lg text-base font-light leading-[1.9] text-[#f4efe2]/66 sm:text-lg">
              A cinematic scroll journey through Arctic light, ferry roads,
              sea weather, mountain silhouettes and the quiet rhythm of
              Northern Norway.
            </p>
          </div>

          <div className="mt-12 flex items-center justify-between border-t border-white/8 pt-6 text-[0.62rem] font-medium uppercase tracking-[0.27em] text-[#f4efe2]/52">
            <span>Read the story</span>
            <ArrowUpRight className="h-4 w-4 text-[#d8c9a7]/72 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </div>
      </article>
    </Link>
  );
}
