import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type GatewayCard = {
  gateway: string;
  meta: string;
  text: string;
  href: string;
};

const gatewayCards: GatewayCard[] = [
  {
    gateway: "Bodø",
    meta: "HELGELAND / LOFOTEN FERRY / COASTAL ROUTES",
    text: "A coastal gateway for island roads, ferry crossings and journeys north toward Lofoten.",
    href: "/routes/helgeland-coast-road-trip",
  },
  {
    gateway: "Evenes",
    meta: "LOFOTEN / VESTERÅLEN / NARVIK",
    text: "A practical arrival point for Lofoten, Vesterålen and the mountains around Narvik.",
    href: "/routes/lofoten-road-trip",
  },
  {
    gateway: "Tromsø",
    meta: "ARCTIC CITY / SENJA / NORTHERN LIGHTS",
    text: "A natural starting point for Arctic light, city stays and slow routes toward Senja.",
    href: "/northern-lights-norway",
  },
  {
    gateway: "Alta",
    meta: "FINNMARK / WINTER ROADS / ARCTIC SKY",
    text: "A northern gateway for wide landscapes, winter light and remote Arctic road routes.",
    href: "/northern-lights-norway",
  },
  {
    gateway: "Kirkenes",
    meta: "EASTERN FINNMARK / BARENTS ROUTES / REMOTE ARCTIC",
    text: "A far-north arrival for borderland landscapes and eastern Finnmark.",
    href: "/routes",
  },
];

function GatewayCardLink({ card }: { card: GatewayCard }) {
  return (
    <article className="group flex h-full flex-col rounded-[1rem] border border-white/10 bg-white/[0.025] p-5 transition-colors duration-300 hover:border-white/18 sm:p-6">
      <h3 className="font-serif text-[1.75rem] font-normal leading-none tracking-[-0.04em] text-[#f4efe2]">
        {card.gateway}
      </h3>
      <p className="mt-4 text-[0.54rem] font-medium uppercase leading-[1.8] tracking-[0.23em] text-[#d8c9a7]/76">
        {card.meta}
      </p>
      <p className="mt-5 grow text-sm font-light leading-[1.78] text-[#f4efe2]/62">
        {card.text}
      </p>
      <Link
        href={card.href}
        className="mt-7 inline-flex items-center gap-2 text-[0.58rem] font-medium uppercase tracking-[0.2em] text-[#f4efe2]/66 transition-colors hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c9a7]/55"
      >
        Open related guide
        <ArrowUpRight
          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </Link>
    </article>
  );
}

export function GatewaysToNorthernNorway() {
  return (
    <section className="relative border-t border-white/8 bg-[#05080b] py-24 text-[#f4efe2] sm:py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(126,176,192,0.075),transparent_39%),radial-gradient(circle_at_50%_96%,rgba(216,201,167,0.04),transparent_27%)]" />

      <div className="relative px-5 sm:px-8 md:px-12">
        <div className="mx-auto max-w-[56rem] text-center">
          <p className="text-[0.63rem] font-medium uppercase tracking-[0.38em] text-[#d8c9a7]/76">
            ARRIVAL MAP
          </p>
          <h2 className="mt-7 font-serif text-[clamp(2.85rem,6.7vw,5.7rem)] font-normal leading-[0.9] tracking-[-0.058em]">
            Gateways to Northern Norway
          </h2>
          <p className="mx-auto mt-7 max-w-[50rem] text-sm font-light leading-[1.9] text-[#f4efe2]/68 sm:text-base md:text-lg">
            Fly into Bodø, Evenes, Tromsø, Alta or Kirkenes — then continue
            by road, ferry and coastal routes into the landscapes that define
            the north.
          </p>
        </div>
      </div>

      <div className="relative mx-auto mt-14 w-[min(92vw,80rem)] sm:mt-16 lg:mt-20">
        <div className="overflow-hidden rounded-[1.45rem] border border-white/10 bg-[#080e15] shadow-[0_38px_120px_rgba(0,0,0,0.44),0_0_64px_rgba(126,176,192,0.07)] sm:rounded-[1.8rem]">
          <div className="relative aspect-video w-full bg-[#080e15]">
            <Image
              src="/images/map/map-norway.jpg"
              alt="Map of Norway showing the northern regions reached through Arctic arrival gateways"
              fill
              sizes="(min-width: 1392px) 1280px, 92vw"
              className="object-contain"
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_58%,rgba(3,7,11,0.16)_100%),linear-gradient(180deg,rgba(3,7,11,0.025)_0%,rgba(3,7,11,0.1)_100%)]" />
            <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_64px_rgba(2,6,10,0.26),inset_0_1px_0_rgba(244,239,226,0.05)] sm:shadow-[inset_0_0_86px_rgba(2,6,10,0.25),inset_0_1px_0_rgba(244,239,226,0.05)]" />
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:mt-10 lg:grid-cols-3 xl:grid-cols-5">
          {gatewayCards.map((card) => (
            <GatewayCardLink key={card.gateway} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
