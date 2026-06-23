import type { Metadata } from "next";

import { JournalPage } from "@/src/components/sections/journal/JournalPage";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "A cinematic visual archive of Norway's quiet roads, remote coastlines and northern light.",
  alternates: {
    canonical: "/journal",
  },
};

export default function JournalRoute() {
  return <JournalPage />;
}
