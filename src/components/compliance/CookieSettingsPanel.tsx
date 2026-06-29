"use client";

import { useEffect, useState } from "react";

import {
  COOKIE_CONSENT_CHANGE_EVENT,
  COOKIE_CONSENT_STORAGE_KEY,
  type CookieConsentChangeDetail,
  clearCookieConsentPreferences,
  readCookieConsentPreferences,
  type CookieConsentPreferences,
  writeCookieConsentPreferences,
} from "@/src/lib/compliance/cookie-consent";

const defaultPreferences: CookieConsentPreferences = {
  version: 1,
  analytics: false,
};

export function CookieSettingsPanel() {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [statusMessage, setStatusMessage] = useState(
    "Your choice is stored locally in this browser.",
  );

  useEffect(() => {
    const syncPreferences = () => {
      const preferences = readCookieConsentPreferences();
      setAnalyticsEnabled(Boolean(preferences?.analytics));
      setHasLoaded(true);
    };

    syncPreferences();

    const handleConsentChange = (event: Event) => {
      const customEvent = event as CustomEvent<CookieConsentChangeDetail>;
      const nextPreferences = customEvent.detail?.preferences;

      if (nextPreferences) {
        setAnalyticsEnabled(nextPreferences.analytics);
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

  const savePreference = (nextValue: boolean) => {
    const nextPreferences: CookieConsentPreferences = {
      version: 1,
      analytics: nextValue,
    };

    setAnalyticsEnabled(nextValue);
    writeCookieConsentPreferences(nextPreferences);
    setStatusMessage(
      nextValue
        ? "Analytics is enabled and stored locally."
        : "Necessary-only preference saved locally.",
    );
  };

  const clearPreference = () => {
    clearCookieConsentPreferences();
    setAnalyticsEnabled(defaultPreferences.analytics);
    setStatusMessage(
      "Saved choice cleared. The banner will appear again on your next visit.",
    );
  };

  return (
    <section
      aria-labelledby="cookie-settings-title"
      className="rounded-[1.35rem] border border-[#8fafa8]/12 bg-[linear-gradient(165deg,rgba(23,35,38,0.84),rgba(8,17,22,0.94))] p-7 shadow-[0_22px_70px_rgba(0,0,0,0.18)] sm:p-9"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-[0.62rem] font-medium uppercase tracking-[0.31em] text-[#c6a15b]/76">
            Preference center
          </p>
          <h2
            id="cookie-settings-title"
            className="mt-5 font-serif text-[clamp(2rem,4vw,3.6rem)] font-normal leading-[0.96] tracking-[-0.045em] text-[#f4efe2]"
          >
            Optional analytics
          </h2>
          <p className="mt-6 text-sm font-light leading-[1.85] text-[#f4efe2]/66 sm:text-base">
            Trips Norway currently uses one optional measurement tool. Keep it
            off if you prefer not to share page-usage data.
          </p>
        </div>

        <span className="w-fit rounded-full border border-[#d8c9a7]/30 bg-[#d8c9a7]/10 px-3 py-1 text-[0.58rem] font-medium uppercase tracking-[0.22em] text-[#d8c9a7]/85">
          {hasLoaded
            ? analyticsEnabled
              ? "Analytics on"
              : "Necessary only"
            : "Loading"}
        </span>
      </div>

      <label className="mt-8 flex cursor-pointer items-start gap-4 rounded-[1.15rem] border border-white/10 bg-white/[0.025] px-5 py-4 transition-colors hover:border-[#c6a15b]/20">
        <input
          type="checkbox"
          checked={analyticsEnabled}
          onChange={(event) => setAnalyticsEnabled(event.currentTarget.checked)}
          className="mt-1 h-4 w-4 rounded border-white/20 bg-transparent text-[#c6a15b] focus:ring-[#c6a15b]/40"
        />
        <span className="block">
          <span className="block text-sm font-medium text-[#f4efe2]">
            Allow Vercel Analytics
          </span>
          <span className="mt-2 block text-sm font-light leading-[1.8] text-[#f4efe2]/64">
            This helps measure broad page use so the editorial site can stay
            useful. It is not required for the travel content itself.
          </span>
        </span>
      </label>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <button
          type="button"
          onClick={() => savePreference(analyticsEnabled)}
          className="inline-flex items-center justify-center rounded-full border border-[#c6a15b]/20 bg-[linear-gradient(165deg,rgba(198,161,91,0.1),rgba(143,175,168,0.05))] px-5 py-3 text-[0.63rem] font-medium uppercase tracking-[0.23em] text-[#f4efe2]/84 transition-colors hover:border-[#c6a15b]/34 hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6a15b]/55"
        >
          Save choice
        </button>
        <button
          type="button"
          onClick={() => savePreference(false)}
          className="inline-flex items-center justify-center rounded-full border border-white/12 bg-transparent px-5 py-3 text-[0.63rem] font-medium uppercase tracking-[0.23em] text-[#f4efe2]/76 transition-colors hover:border-white/22 hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6a15b]/45"
        >
          Use necessary only
        </button>
        <button
          type="button"
          onClick={clearPreference}
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-[0.63rem] font-medium uppercase tracking-[0.23em] text-[#f4efe2]/68 transition-colors hover:border-white/20 hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6a15b]/45"
        >
          Clear saved choice
        </button>
      </div>

      <p
        className="mt-5 text-sm font-light leading-[1.85] text-[#f4efe2]/58"
        aria-live="polite"
      >
        {statusMessage}
      </p>
    </section>
  );
}
