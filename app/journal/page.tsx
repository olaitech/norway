import { JournalPage } from "@/src/components/sections/journal/JournalPage";
import { createPageMetadata } from "@/src/lib/metadata";

export const metadata = createPageMetadata({
  title: "Norway Travel Journal | Field Notes from the North",
  description:
    "Cinematic field notes from Norway’s quiet roads, remote coastlines, changing weather, northern light and slow travel landscapes.",
  canonical: "/journal",
});

export default function JournalRoute() {
  return <JournalPage />;
}
