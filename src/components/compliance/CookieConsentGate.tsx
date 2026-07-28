"use client";

import { Analytics } from "@vercel/analytics/next";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import {
  COOKIE_CONSENT_CHANGE_EVENT,
  COOKIE_CONSENT_STORAGE_KEY,
  type CookieConsentChangeDetail,
  readCookieConsentPreferences,
  type CookieConsentPreferences,
  writeCookieConsentPreferences,
} from "@/src/lib/compliance/cookie-consent";

function CookieConsentBanner({
  onAccept,
  onReject,
}: {
  onAccept: () => void;
  onReject: () => void;
}) {
  return (
    <aside
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 pt-2 sm:px-6 sm:pb-6"
    >
      <div className="mx-auto max-w-5xl rounded-[1.35rem] border border-[#8fafa8]/14 bg-[linear-gradient(165deg,rgba(8,17,22,0.94),rgba(18,28,31,0.98))] px-5 py-5 shadow-[0_28px_100px_rgba(0,0,0,0.42)] backdrop-blur-xl sm:px-6 sm:py-6 lg:px-7">
        <div className="grid gap-5 lg:grid-cols-[1.15fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-[0.58rem] font-medium uppercase tracking-[0.34em] text-[#d8c9a7]/70">
              Privacy and cookies
            </p>
            <h2 className="mt-3 font-serif text-[clamp(1.45rem,2.8vw,2.1rem)] font-normal leading-[0.98] tracking-[-0.04em] text-[#f4efe2]">
              A lighter way to remember your choice.
            </h2>
            <p className="mt-3 max-w-2xl text-sm font-light leading-[1.8] text-[#f4efe2]/66 sm:text-base">
              Trips Norway uses only the storage needed to remember this
              preference and newsletter-dialog choices unless you allow
              optional analytics. The newsletter form is provided by Sender.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
            <button
              type="button"
              onClick={onAccept}
              className="inline-flex items-center justify-center rounded-full border border-[#c6a15b]/24 bg-[linear-gradient(165deg,rgba(198,161,91,0.16),rgba(143,175,168,0.06))] px-4 py-3 text-[0.62rem] font-medium uppercase tracking-[0.24em] text-[#f4efe2] transition-colors hover:border-[#c6a15b]/40 hover:text-[#fffaf2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6a15b]/55"
            >
              Accept all
            </button>
            <button
              type="button"
              onClick={onReject}
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-transparent px-4 py-3 text-[0.62rem] font-medium uppercase tracking-[0.24em] text-[#f4efe2]/76 transition-colors hover:border-white/22 hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6a15b]/45"
            >
              Reject non-essential
            </button>
            <Link
              href="/privacy-settings"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-4 py-3 text-[0.62rem] font-medium uppercase tracking-[0.24em] text-[#f4efe2]/74 transition-colors hover:border-[#c6a15b]/28 hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6a15b]/45"
            >
              Manage preferences
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}

export function CookieConsentGate() {
  const [preferences, setPreferences] = useState<CookieConsentPreferences | null>(
    null,
  );
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const syncPreferences = () => {
      setPreferences(readCookieConsentPreferences());
      setHasLoaded(true);
    };

    syncPreferences();

    const handleConsentChange = (event: Event) => {
      const customEvent = event as CustomEvent<CookieConsentChangeDetail>;
      const nextPreferences = customEvent.detail?.preferences;

      if (nextPreferences) {
        setPreferences(nextPreferences);
        setHasLoaded(true);
        return;
      }

      syncPreferences();
    };
    const handleStorage = (event: StorageEvent) => {
      if (event.key !== COOKIE_CONSENT_STORAGE_KEY) {
        return;
      }

      syncPreferences();
    };

    window.addEventListener(COOKIE_CONSENT_CHANGE_EVENT, handleConsentChange);
    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener(
        COOKIE_CONSENT_CHANGE_EVENT,
        handleConsentChange,
      );
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const handleAccept = () => {
    const nextPreferences: CookieConsentPreferences = {
      version: 1,
      analytics: true,
    };

    setPreferences(nextPreferences);
    writeCookieConsentPreferences(nextPreferences);
  };

  const handleReject = () => {
    const nextPreferences: CookieConsentPreferences = {
      version: 1,
      analytics: false,
    };

    setPreferences(nextPreferences);
    writeCookieConsentPreferences(nextPreferences);
  };

  return (
    <>
      {preferences?.analytics ? <Analytics /> : null}
      {hasLoaded && preferences === null ? (
        <CookieConsentBanner onAccept={handleAccept} onReject={handleReject} />
      ) : null}
    </>
  );
}
