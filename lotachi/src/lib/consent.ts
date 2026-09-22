"use client";

// Owns the visitor's cookie-consent choice: reading/writing it to
// localStorage (not a cookie — remembering "what the visitor chose" is
// itself strictly necessary and doesn't require its own consent), and
// translating that choice into a Google Consent Mode v2 update.
//
// The GA4 script itself is NOT loaded until analytics consent is actually
// granted — see components/GA4Loader.tsx, which listens for
// CONSENT_CHANGED_EVENT below to load it the moment consent is first given,
// without needing a page reload. This file only calls gtag('consent',
// 'update', ...) for the case where the script is already loaded and a
// visitor is changing an existing choice.
//
// Marketing/advertising signals (ad_storage, ad_user_data,
// ad_personalization) are always sent as "denied" regardless of the stored
// preference, because no marketing/advertising cookie or pixel actually
// exists on this site yet — there is nothing to grant. The "marketing"
// preference is still recorded for transparency and is wired up here ready
// for the day a real marketing technology is added; update applyConsent()
// at that point to actually gate it.

export type ConsentPreferences = {
  analytics: boolean;
  marketing: boolean;
};

type StoredConsent = ConsentPreferences & {
  timestamp: string;
  version: number;
};

const STORAGE_KEY = "lotachi_cookie_consent";
const CONSENT_VERSION = 1;

export const CONSENT_CHANGED_EVENT = "lotachi:consent-changed";

export const ACCEPT_ALL: ConsentPreferences = { analytics: true, marketing: true };
export const REJECT_ALL: ConsentPreferences = { analytics: false, marketing: false };

export function getStoredConsent(): StoredConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function applyConsent(prefs: ConsentPreferences): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("consent", "update", {
    analytics_storage: prefs.analytics ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

// Deletes any GA4 cookies already set in the browser. Called whenever
// analytics consent is denied/withdrawn, so a "reject" or "change your mind"
// choice actually removes prior tracking cookies rather than only stopping
// new ones — gtag.js isn't guaranteed to clean these up itself on denial.
function clearAnalyticsCookies(): void {
  if (typeof document === "undefined") return;
  const names = document.cookie
    .split(";")
    .map((c) => c.trim().split("=")[0])
    .filter((name) => name === "_ga" || name.startsWith("_ga_"));
  names.forEach((name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  });
}

export function saveConsent(prefs: ConsentPreferences): void {
  const stored: StoredConsent = { ...prefs, timestamp: new Date().toISOString(), version: CONSENT_VERSION };
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
    } catch {
      // localStorage unavailable (e.g. private browsing) — the choice just
      // won't persist, so the banner will show again next visit.
    }
  }

  if (!prefs.analytics) clearAnalyticsCookies();
  applyConsent(prefs);

  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(CONSENT_CHANGED_EVENT, { detail: prefs }));
  }
}
