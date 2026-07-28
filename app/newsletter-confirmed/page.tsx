import type { Metadata } from "next";
import { ArrowUpRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { NavBar } from "@/src/components/navigation/NavBar";

export const metadata: Metadata = {
  title: {
    absolute: "Email confirmed | Trips Norway",
  },
  description:
    "Your Trips Norway subscription is confirmed. The Helgeland Coast itinerary will arrive in your inbox shortly.",
  alternates: {
    canonical: "/newsletter-confirmed",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function NewsletterConfirmedPage() {
  return (
    <main className="relative isolate min-h-[100svh] overflow-hidden bg-[#040d10] text-[#f4efe2]">
      <Image
        src="/images/destinations/helgeland/helgeland-sunset.jpg"
        alt="Sunset over the Helgeland coast in Northern Norway"
        fill
        preload
        sizes="100vw"
        className="object-cover object-[42%_center] sm:object-center"
      />
      <div className="pointer-events-none absolute inset-0 bg-[#040d10]/38" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,7,10,0.66)_0%,rgba(4,13,16,0.14)_34%,rgba(2,7,10,0.8)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(2,7,10,0.42)_0%,rgba(2,7,10,0.08)_45%,rgba(2,7,10,0.56)_100%)]" />

      <NavBar />

      <section className="relative z-10 flex min-h-[100svh] items-center px-5 pb-12 pt-32 sm:px-8 sm:pb-16 sm:pt-40 md:px-12 lg:px-16 lg:pb-10 lg:pt-36">
        <div className="mx-auto w-full max-w-7xl lg:flex lg:justify-end">
          <div className="w-full max-w-xl rounded-[1.5rem] border border-[#d8c9a7]/20 bg-[linear-gradient(145deg,rgba(4,13,16,0.9),rgba(5,8,10,0.76))] p-7 shadow-[0_32px_100px_rgba(0,0,0,0.42)] backdrop-blur-sm sm:p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c6a15b]/35 bg-[#c6a15b]/10 text-[#f4efe2]">
              <Check className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
            </div>

            <p className="mt-6 text-[0.62rem] font-medium uppercase tracking-[0.32em] text-[#d8c9a7]/90">
              Email confirmed
            </p>
            <h1 className="mt-4 max-w-md font-serif text-[clamp(3rem,5.5vw,4.75rem)] font-normal leading-[0.9] tracking-[-0.058em] text-[#f4efe2]">
              You&apos;re on the list
            </h1>
            <p className="mt-5 max-w-lg text-base font-light leading-[1.85] text-[#f4efe2]/78 sm:text-lg lg:text-base">
              Your email address has been confirmed. The Helgeland Coast
              itinerary will arrive in your inbox shortly, along with
              occasional travel inspiration from Trips Norway.
            </p>
            <p className="mt-5 border-l border-[#c6a15b]/45 pl-4 text-sm font-light leading-6 text-[#d8c9a7]/90 sm:text-base">
              Quiet roads, ferry crossings and places worth slowing down for.
            </p>

            <div className="mt-8 flex flex-col items-start gap-5">
              <Link
                href="/destinations/helgeland-coast"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#c6a15b]/38 bg-[#c6a15b]/12 px-6 py-3 text-[0.66rem] font-medium uppercase tracking-[0.2em] text-[#f4efe2] transition-colors duration-300 hover:border-[#d8c9a7]/70 hover:bg-[#c6a15b]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4efe2] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071418] motion-reduce:transition-none"
              >
                Explore the Helgeland Coast
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/"
                className="rounded-sm text-sm font-light text-[#f4efe2]/72 underline decoration-[#d8c9a7]/45 underline-offset-4 transition-colors duration-300 hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4efe2] focus-visible:ring-offset-4 focus-visible:ring-offset-[#071418] motion-reduce:transition-none"
              >
                Return to Trips Norway
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
