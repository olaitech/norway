import { JournalPage } from "@/src/components/sections/journal/JournalPage";
import { featuredJournalEntry } from "@/src/data/journal";
import { createPageMetadata } from "@/src/lib/metadata";

export const metadata = createPageMetadata({
  title: "Norway Travel Journal | Field Notes from the North",
  description:
    "Cinematic field notes from Norway’s quiet roads, remote coastlines, changing weather, northern light and slow travel landscapes.",
  canonical: "/journal",
  image: {
    url: featuredJournalEntry.imageSrc,
    alt: featuredJournalEntry.imageAlt,
  },
});

export default function JournalRoute() {
  return <JournalPage />;
}
