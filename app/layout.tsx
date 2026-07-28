import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

import { GlobalShaderBackground } from "@/src/components/backgrounds/GlobalShaderBackground";
import { CookieConsentGate } from "@/src/components/compliance/CookieConsentGate";
import { Footer } from "@/src/components/layout/Footer";
import { NewsletterSignupDialog } from "@/src/components/newsletter/NewsletterSignupDialog";
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

const senderUniversalScript = `
window.tripsNorwaySenderFormsReady = function () {
  window.dispatchEvent(new Event('trips-norway-sender-forms-ready'));
};

(function (s, e, n, d, er) {
  s['Sender'] = er;
  s[er] = s[er] || function () {
    (s[er].q = s[er].q || []).push(arguments)
  }, s[er].l = 1 * new Date();
  s[er].on = function(event, callback) {
    s[er].listeners = s[er].listeners || {};
    (s[er].listeners[event] = s[er].listeners[event] || []).push(callback);
  };
  var a = e.createElement(n),
      m = e.getElementsByTagName(n)[0];
  a.async = 1;
  a.src = d;
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://cdn.sender.net/accounts_resources/universal.js?explicit=true&onload=tripsNorwaySenderFormsReady', 'sender');
sender('a7a05949148518')
`;

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
        <GlobalShaderBackground />
        <div className="relative z-10 flex min-h-full flex-col">
          {children}
          <NewsletterSignupDialog />
          <CookieConsentGate />
          <Footer />
        </div>
        <Script id="sender-universal" strategy="afterInteractive">
          {senderUniversalScript}
        </Script>
      </body>
    </html>
  );
}
