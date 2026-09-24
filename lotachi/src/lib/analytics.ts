"use client";

// GA4 integration + lightweight analytics stub.
//
// GA4 is NOT active until you set NEXT_PUBLIC_GA4_MEASUREMENT_ID (see
// .env.example). With no ID set, no gtag script is loaded and no request
// ever reaches Google — trackEvent() just logs to the console in
// development so event names/payloads can be sanity-checked early.
//
// When you DO set a real Measurement ID, GA4 is wired up with Google's
// Consent Mode v2, defaulting analytics_storage to "denied" (see
// src/app/layout.tsx). That means no analytics cookies are set, and no
// data reaches GA4, until something calls
// `window.gtag('consent', 'update', { analytics_storage: 'granted' })`.
// This site does not yet have a cookie-consent banner to do that — add one
// before relying on GA4 data, to stay compliant with UK PECR/GDPR. See
// README.md "Analytics & UTM tracking" for the full explanation.

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export { GA4_MEASUREMENT_ID } from "./ga4";
import { GA4_MEASUREMENT_ID } from "./ga4";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;
type UtmKey = (typeof UTM_KEYS)[number];
type UtmParams = Partial<Record<UtmKey, string>>;

const STORAGE_KEY = "lotachi_utm_params";

// Captures utm_* query params (e.g. a TikTok, Instagram, Facebook, LinkedIn
// or email campaign link like /models?utm_source=tiktok&utm_campaign=launch)
// on first load and persists them for the session, so they can be attached
// to both Formspree submissions and GA4 conversion events later — even if
// the visitor lands on one page and converts on another.
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

// The conversion/engagement events this site actively tracks. Extra ad-hoc
// event names (e.g. "nav_click") are still allowed — see the `string & {}`
// fallback below — but these are the ones GA4 dashboards/funnels should be
// built around.
export type AnalyticsEvent =
  | "model_signup_started"
  | "model_signup_completed"
  | "provider_signup_started"
  | "provider_signup_completed"
  | "contact_form_submitted"
  | "model_cta_clicked"
  | "provider_cta_clicked"
  | "provider_pilot_clicked"
  | "social_link_clicked"
  | "category_selected"
  | "postcode_captured"
  | "short_notice_selected"
  | "faq_interaction"
  | (string & {});

export function trackEvent(event: AnalyticsEvent, payload: Record<string, unknown> = {}): void {
  const enrichedPayload = { ...payload, ...getUtmParams() };

  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.debug("[analytics]", event, enrichedPayload);
  }

  if (typeof window !== "undefined" && GA4_MEASUREMENT_ID && typeof window.gtag === "function") {
    window.gtag("event", event, enrichedPayload);
  }
}

// Called on every client-side route change (see components/GA4PageView.tsx)
// since GA4's automatic page_view only fires once, on initial script load —
// the Next.js App Router doesn't reload the page on internal navigation, so
// without this, only the very first page a visitor lands on gets counted.
export function pageview(url: string): void {
  if (typeof window === "undefined" || !GA4_MEASUREMENT_ID || typeof window.gtag !== "function") return;
  window.gtag("event", "page_view", {
    page_path: url,
    page_location: window.location.href,
    ...getUtmParams(),
  });
}
