import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/src/components/layout/Footer";
import {
  DEFAULT_SOCIAL_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/src/config/site";

import "./globals.css";

const siteName = SITE_NAME;
const siteDescription = SITE_DESCRIPTION;
const socialImage = DEFAULT_SOCIAL_IMAGE;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
      className={`${geistSans.variable} ${geistMono.variable} relative h-full scroll-smooth antialiased motion-reduce:scroll-auto`}
    >
      <body id="top" className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
