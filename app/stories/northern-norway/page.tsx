import { NorthernNorwayStory } from "@/src/components/stories/NorthernNorwayStory";
import { createPageMetadata } from "@/src/lib/metadata";
import {
  JsonLd,
  createArticleJsonLd,
  createBreadcrumbListJsonLd,
} from "@/src/lib/seo/jsonLd";

const STORY_HEADLINE = "Northern Norway: A Slow Journey Through Light";
const STORY_TITLE = `${STORY_HEADLINE} | Trips Norway`;
const STORY_DESCRIPTION =
  "A cinematic scroll story through Lofoten, Helgeland, Senja and Tromsø, shaped by Arctic light, ferry roads, sea weather and northern skies.";
const STORY_CANONICAL = "/stories/northern-norway";
const STORY_IMAGE = "/images/stories/northern-norway/lofoten1.jpg";

export const metadata = createPageMetadata({
  title: STORY_TITLE,
  description: STORY_DESCRIPTION,
  canonical: STORY_CANONICAL,
  type: "article",
  image: {
    url: STORY_IMAGE,
    alt: "A quiet Lofoten fishing village with blue water and steep mountains",
  },
});

export default function NorthernNorwayStoryPage() {
  return (
    <>
      <JsonLd
        value={[
          createBreadcrumbListJsonLd([
            { name: "Home", href: "/" },
            {
              name: STORY_HEADLINE,
              href: STORY_CANONICAL,
            },
          ]),
          createArticleJsonLd({
            headline: STORY_HEADLINE,
            description: STORY_DESCRIPTION,
            url: STORY_CANONICAL,
            image: STORY_IMAGE,
            articleSection: "Stories",
          }),
        ]}
      />
      <NorthernNorwayStory />
    </>
  );
}
