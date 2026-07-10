"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type HelgelandPlace = {
  title: string;
  label: string;
  text: string;
  priority?: boolean;
};

type HelgelandStackedPlacesProps = {
  places: readonly HelgelandPlace[];
};

const featuredGroups = [
  {
    label: "South Helgeland",
    title: "Brønnøysund and Torghatten",
    placeTitles: ["Brønnøysund", "Torghatten"],
    image: {
      src: "/images/helgeland/torghatten-sunset.png",
      alt: "Torghatten mountain above the Helgeland coast in warm sunset light",
      caption: "AI-created atmospheric illustration of Torghatten at sunset.",
    },
  },
  {
    label: "Vega Archipelago",
    title: "Vega",
    placeTitles: ["Vega"],
  },
  {
    label: "Central Helgeland",
    title: "Sandnessjøen and the Seven Sisters",
    placeTitles: ["Sandnessjøen", "The Seven Sisters"],
  },
  {
    label: "Island roads",
    title: "Herøy and Dønna",
    placeTitles: ["Herøy and Dønna"],
  },
  {
    label: "Outer islands",
    title: "Lovund and Træna",
    placeTitles: ["Lovund and Træna"],
  },
  {
    label: "Northern coast",
    title: "Rødøy and the northern coast",
    placeTitles: ["Rødøy"],
  },
] as const;

const featuredPlaceTitles = new Set<string>(
  featuredGroups.flatMap((group) => group.placeTitles),
);

export function HelgelandStackedPlaces({ places }: HelgelandStackedPlacesProps) {
  const stackRef = useRef<HTMLDivElement>(null);
  const resolvedGroups = featuredGroups.map((group) => ({
    ...group,
    places: group.placeTitles.map(
      (title) => places.find((place) => place.title === title)!,
    ),
  }));
  const remainingPlaces = places.filter(
    (place) => !featuredPlaceTitles.has(place.title),
  );

  useEffect(() => {
    const stack = stackRef.current;

    if (!stack) {
      return;
    }

    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add(
        "(min-width: 1280px) and (prefers-reduced-motion: no-preference)",
        () => {
          const cards = gsap.utils.toArray<HTMLElement>(
            "[data-helgeland-stack-card]",
            stack,
          );
          const surfaces = cards.map(
            (card) => card.querySelector<HTMLElement>("[data-helgeland-card-surface]")!,
          );
          const animations = cards.slice(0, -1).map((card, index) =>
            gsap.to(surfaces[index], {
              scale: 0.985,
              transformOrigin: "center top",
              ease: "none",
              scrollTrigger: {
                trigger: cards[index + 1],
                start: "top 76%",
                end: "top 22%",
                scrub: 0.6,
                invalidateOnRefresh: true,
              },
            }),
          );

          return () => {
            animations.forEach((animation) => {
              animation.scrollTrigger?.kill();
              animation.kill();
            });
            gsap.set(surfaces, { clearProps: "transform" });
          };
        },
      );
    }, stack);

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  return (
    <div ref={stackRef} className="mt-12">
      <ol className="space-y-6 xl:space-y-10 xl:pb-24">
        {resolvedGroups.map((group, index) => (
          <li
            key={group.title}
            data-helgeland-stack-card
            className="relative xl:sticky motion-reduce:xl:static"
            style={{
              top: `calc(6.5rem + ${index * 0.85}rem)`,
              zIndex: index + 1,
            }}
          >
            <article
              data-helgeland-card-surface
              className="surface-fjord-media relative min-h-[22rem] overflow-hidden rounded-[1.35rem] border-[#d8c9a7]/16 xl:min-h-[27rem]"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,#101a1e_0%,#071418_100%)]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_5%,rgba(143,175,168,0.1),transparent_36%),linear-gradient(145deg,rgba(255,255,255,0.025),transparent_42%)]"
              />
              <div
                className={`relative grid min-h-[inherit] ${
                  "image" in group
                    ? "lg:grid-cols-[minmax(0,1.04fr)_minmax(22rem,0.96fr)]"
                    : "xl:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)]"
                }`}
              >
                <header className="flex flex-col p-7 sm:p-9 xl:p-10">
                  <div className="flex items-center justify-between gap-5">
                    <p className="text-[0.59rem] font-medium uppercase tracking-[0.29em] text-[#d8c9a7]/72">
                      {group.label}
                    </p>
                    <p className="font-mono text-[0.58rem] tracking-[0.2em] text-[#f4efe2]/36">
                      {String(index + 1).padStart(2, "0")} / {String(resolvedGroups.length).padStart(2, "0")}
                    </p>
                  </div>
                  <h3 className="mt-8 max-w-2xl font-serif text-[clamp(2.35rem,5vw,4.7rem)] font-normal leading-[0.92] tracking-[-0.05em] text-[#f4efe2]">
                    {group.title}
                  </h3>
                </header>

                <div
                  className={`flex flex-col justify-center gap-7 border-white/8 p-7 sm:p-9 xl:p-10 ${
                    "image" in group
                      ? "border-t lg:col-start-1 lg:row-start-2"
                      : "border-t xl:border-l xl:border-t-0"
                  }`}
                >
                  {group.places.map((place) => (
                    <div key={place.title} className="max-w-2xl">
                      <p className="text-[0.58rem] font-medium uppercase tracking-[0.25em] text-[#d8c9a7]/62">
                        {place.label}
                      </p>
                      {group.places.length > 1 ? (
                        <h4 className="mt-3 font-serif text-2xl leading-tight tracking-[-0.035em] text-[#f4efe2] sm:text-[1.75rem]">
                          {place.title}
                        </h4>
                      ) : null}
                      <p className="mt-4 text-sm font-light leading-[1.85] text-[#f4efe2]/68 sm:text-base">
                        {place.text}
                      </p>
                    </div>
                  ))}
                </div>

                {"image" in group ? (
                  <figure className="flex flex-col border-t border-white/8 p-2 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center lg:border-l lg:border-t-0">
                    <div className="relative aspect-video overflow-hidden rounded-[1.05rem]">
                      <Image
                        src={group.image.src}
                        alt={group.image.alt}
                        fill
                        sizes="(min-width: 1280px) 520px, (min-width: 1024px) 44vw, 92vw"
                        className="object-cover"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,5,8,0.02)_48%,rgba(2,5,8,0.3)_100%)]"
                      />
                    </div>
                    <figcaption className="px-3 pb-2 pt-3 text-[0.68rem] font-light leading-relaxed text-[#f4efe2]/50 sm:px-4 sm:text-xs">
                      {group.image.caption}
                    </figcaption>
                  </figure>
                ) : null}
              </div>
            </article>
          </li>
        ))}
      </ol>

      <div className="border-t border-white/8 pt-12 sm:pt-14">
        <div className="max-w-2xl">
          <p className="text-[0.6rem] font-medium uppercase tracking-[0.29em] text-[#d8c9a7]/68">
            Further along the route
          </p>
          <h3 className="mt-4 font-serif text-[clamp(2rem,4vw,3.3rem)] font-normal leading-[0.98] tracking-[-0.045em] text-[#f4efe2]">
            Quieter bases and gateways
          </h3>
          <p className="mt-5 text-sm font-light leading-[1.85] text-[#f4efe2]/62 sm:text-base">
            Useful places for connecting island stays, coastal stages and inland arrivals without adding another major chapter to the route.
          </p>
        </div>

        <ul className="mt-9 grid gap-5 md:grid-cols-2">
          {remainingPlaces.map((place) => (
            <li key={place.title}>
              <article className="h-full rounded-[1.15rem] border border-white/8 bg-white/[0.022] p-6 sm:p-7">
                <p className="text-[0.57rem] font-medium uppercase tracking-[0.27em] text-[#d8c9a7]/58">
                  {place.label}
                </p>
                <h4 className="mt-4 font-serif text-[1.75rem] leading-none tracking-[-0.04em] text-[#f4efe2]">
                  {place.title}
                </h4>
                <p className="mt-4 text-sm font-light leading-[1.82] text-[#f4efe2]/60">
                  {place.text}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
