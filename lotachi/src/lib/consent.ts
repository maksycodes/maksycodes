"use client";

// Owns the visitor's cookie-consent choice: reading/writing it to
// localStorage (not a cookie — remembering "what the visitor chose" is
// itself strictly necessary and doesn't require its own consent), and
// translating that choice into a Google Consent Mode v2 update.
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
  applyConsent(prefs);
}
