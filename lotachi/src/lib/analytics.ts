"use client";

// Lightweight, provider-agnostic analytics stub.
//
// No analytics vendor is wired up yet. trackEvent() currently just logs to
// the console in development so event names/payloads can be sanity-checked
// early. To connect a real provider (GA4, PostHog, Segment, etc.), replace
// the body of trackEvent() with that provider's call — every call site in
// the app already passes a stable event name and payload shape.
//
// UTM parameters are captured on first load and persisted for the session
// so they can be attached to form submissions for basic source attribution
// (e.g. a TikTok campaign landing on /models?utm_source=tiktok).

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;
type UtmKey = (typeof UTM_KEYS)[number];
type UtmParams = Partial<Record<UtmKey, string>>;

const STORAGE_KEY = "lotachi_utm_params";

export function captureUtmParams(): void {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const found: UtmParams = {};
  UTM_KEYS.forEach((key) => {
    const value = params.get(key);
    if (value) found[key] = value;
  });

  if (Object.keys(found).length > 0) {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(found));
    } catch {
      // sessionStorage unavailable (e.g. private browsing) — safe to skip.
    }
  }
}

export function getUtmParams(): UtmParams {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export type AnalyticsEvent =
  | "cta_click"
  | "form_start"
  | "form_complete"
  | "form_error"
  | "nav_click";

export function trackEvent(event: AnalyticsEvent, payload: Record<string, unknown> = {}): void {
  // TODO: connect a real analytics provider here (GA4 / PostHog / Segment).
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.debug("[analytics]", event, { ...payload, ...getUtmParams() });
  }
}
