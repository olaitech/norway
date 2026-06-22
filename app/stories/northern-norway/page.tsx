import type { Metadata } from "next";

import { NorthernNorwayStory } from "@/src/components/stories/NorthernNorwayStory";

const title = "Northern Norway: A Slow Journey Through Light";
const description =
  "A cinematic scroll story through Lofoten, Helgeland, Senja and Tromso, shaped by sea light, ferry crossings, weather and the long northern night.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/stories/northern-norway",
  },
  openGraph: {
    title,
    description,
    type: "article",
    url: "/stories/northern-norway",
    images: [
      {
        url: "/images/stories/northern-norway/lofoten1.jpg",
        alt: "A quiet Lofoten fishing village with blue water and steep mountains",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/stories/northern-norway/lofoten1.jpg"],
  },
};

export default function NorthernNorwayStoryPage() {
  return <NorthernNorwayStory />;
}
