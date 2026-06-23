import { NorthernNorwayStory } from "@/src/components/stories/NorthernNorwayStory";
import { createPageMetadata } from "@/src/lib/metadata";

export const metadata = createPageMetadata({
  title: "Northern Norway: A Slow Journey Through Light | Trips Norway",
  description:
    "A cinematic scroll story through Lofoten, Helgeland, Senja and Tromsø, shaped by Arctic light, ferry roads, sea weather and northern skies.",
  canonical: "/stories/northern-norway",
  type: "article",
  image: {
    url: "/images/stories/northern-norway/lofoten1.jpg",
    alt: "A quiet Lofoten fishing village with blue water and steep mountains",
  },
});

export default function NorthernNorwayStoryPage() {
  return <NorthernNorwayStory />;
}
