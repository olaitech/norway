import Image from "next/image";
import Link from "next/link";

export function FeaturedFjordsGuide() {
  return (
    <section
      aria-labelledby="featured-fjords-guide-heading"
      className="border-t border-white/8 pt-14 sm:pt-16"
    >
      <figure className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] border border-[#d8c9a7]/16 bg-[#07100f] sm:aspect-[16/9] lg:aspect-[16/8] xl:aspect-[16/7]">
        <Image
          src="/images/destinations/fjords/norway-fjord1.jpg"
          alt="Norwegian fjord landscape surrounded by steep mountains"
          fill
          sizes="(min-width: 1280px) 1280px, (min-width: 768px) calc(100vw - 6rem), calc(100vw - 2.5rem)"
          className="object-cover"
          style={{ objectPosition: "center 60%" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,10,0.02)_16%,rgba(5,8,10,0.78)_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,8,10,0.74)_0%,rgba(5,8,10,0.46)_42%,rgba(5,8,10,0)_76%)]"
        />
        <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
          <p className="text-[0.62rem] font-medium uppercase tracking-[0.34em] text-[#d8c9a7]/88">
            FEATURED GUIDE
          </p>
          <h2
            id="featured-fjords-guide-heading"
            className="mt-4 max-w-3xl font-serif text-[clamp(2.65rem,5.8vw,5.4rem)] font-normal leading-[0.9] tracking-[-0.055em] text-[#f4efe2]"
          >
            Fjords of Norway
          </h2>
          <p className="mt-5 max-w-xl text-base font-light leading-[1.82] text-[#f4efe2]/82 sm:text-lg">
            {"A journey through Norway's most spectacular landscapes, their regions, routes, and seasons."}
          </p>
          <Link
            href="/fjords-of-norway"
            aria-label="Explore the Fjords of Norway guide"
            className="mt-6 inline-flex min-h-11 items-center gap-3 border-y border-[#d8c9a7]/48 px-2 text-[0.63rem] font-medium uppercase tracking-[0.25em] text-[#f4efe2] transition-colors hover:border-[#f4efe2]/78 hover:bg-white/5 hover:text-[#d8c9a7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6a15b]/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#07100f]"
          >
            EXPLORE THE FJORDS <span aria-hidden="true">→</span>
          </Link>
        </figcaption>
      </figure>
    </section>
  );
}
