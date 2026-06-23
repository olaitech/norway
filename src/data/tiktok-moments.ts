export type TikTokMoment = {
  title: string;
  location: string;
  description: string;
  tiktokUrl: string;
};

export const tiktokMoments = [
  {
    title: "A small window into the journey",
    location: "Northern Norway",
    description:
      "A short field moment from the road - quiet light, open landscapes and the feeling of slowing down in Norway.",
    tiktokUrl: "https://www.tiktok.com/@tripsnorway/video/7654576721307503894",
  },
  {
    title: "Rainy summer day",
    location: "Mosjoen",
    description:
      "A soft summer moment from Mosjoen - rain in the air, calm streets and the quiet mood of Northern Norway.",
    tiktokUrl: "https://www.tiktok.com/@tripsnorway/video/7654568516015688982",
  },
  {
    title: "Summer day in Lofoten",
    location: "Lofoten",
    description:
      "A quiet summer glimpse from Lofoten - soft daylight, coastal air and the simple beauty of travelling slowly through Northern Norway.",
    tiktokUrl: "https://www.tiktok.com/@tripsnorway/video/7654537163563928854",
  },
] as const satisfies readonly TikTokMoment[];
