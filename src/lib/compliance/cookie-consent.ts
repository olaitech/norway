export const COOKIE_CONSENT_STORAGE_KEY = "trips-norway-cookie-consent-v1";
export const COOKIE_CONSENT_CHANGE_EVENT = "trips-norway-cookie-consent-change";

export type CookieConsentPreferences = {
  version: 1;
  analytics: boolean;
};

export type CookieConsentChangeDetail = {
  preferences: CookieConsentPreferences | null;
};

function isCookieConsentPreferences(
  value: unknown,
): value is CookieConsentPreferences {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Record<string, unknown>;

  return candidate.version === 1 && typeof candidate.analytics === "boolean";
}

export function readCookieConsentPreferences() {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const rawValue = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);

    if (!rawValue) {
      return null;
    }

    const parsedValue: unknown = JSON.parse(rawValue);

    return isCookieConsentPreferences(parsedValue) ? parsedValue : null;
  } catch {
    return null;
  }
}

export function writeCookieConsentPreferences(
  preferences: CookieConsentPreferences,
) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(
      COOKIE_CONSENT_STORAGE_KEY,
      JSON.stringify(preferences),
    );
  } catch {
    // Ignore blocked storage and still update the current session state.
  }

  window.dispatchEvent(
    new CustomEvent<CookieConsentChangeDetail>(COOKIE_CONSENT_CHANGE_EVENT, {
      detail: { preferences },
    }),
  );
}

export function clearCookieConsentPreferences() {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY);
  } catch {
    // Ignore blocked storage and still update the current session state.
  }

  window.dispatchEvent(
    new CustomEvent<CookieConsentChangeDetail>(COOKIE_CONSENT_CHANGE_EVENT, {
      detail: { preferences: null },
    }),
  );
}
