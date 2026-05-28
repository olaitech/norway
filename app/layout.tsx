import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/src/components/layout/Footer";

import "./globals.css";

const siteUrl = "https://norway-umber.vercel.app";
const siteName = "Norway Travel Knowledge Portal";
const siteDescription =
  "A cinematic travel knowledge portal for Norway and Northern Norway, built around slow travel, dramatic landscapes, scenic routes, fjords, northern light skies and responsible destination guidance.";
const socialImage = {
  url: "/images/hero/preikestolen.png",
  width: 1672,
  height: 941,
  alt: "A cinematic Norwegian fjord landscape seen from Preikestolen",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  icons: {
    icon: [
      {
        url: "/images/branding/logo-norge-removebg-preview.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/images/branding/logo-norge-removebg-preview.png",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: siteName,
    description: siteDescription,
    siteName,
    locale: "en_US",
    type: "website",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [socialImage.url],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased motion-reduce:scroll-auto`}
    >
      <body id="top" className="min-h-full flex flex-col">
        {children}
        <Footer />
      </body>
    </html>
  );
}
