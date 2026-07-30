import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kamera.atlas.vegvesen.no",
        port: "",
        pathname: "/api/images/3000614_1",
      },
      {
        protocol: "https",
        hostname: "kamera.atlas.vegvesen.no",
        port: "",
        pathname: "/api/images/1800234_1",
      },
    ],
  },
};

export default nextConfig;
