"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ACCEPT_ALL, REJECT_ALL, ConsentPreferences, applyConsent, getStoredConsent, saveConsent } from "@/lib/consent";

// Dispatched by the footer's "Cookie settings" link so a visitor can change
// their choice at any time after the first visit — see Footer.tsx.
export const OPEN_COOKIE_SETTINGS_EVENT = "lotachi:open-cookie-settings";

// /models and /providers have a tall single-column info block above the
// fold on first load — the full-width banner has nowhere to sit without
// overlapping a real link there. On those two pages only, start as a small
// corner trigger instead: being narrow rather than full-width, it clears
// that left-aligned content by construction, and expands to the identical
// full banner on tap.
const DENSE_PAGES = ["/models", "/providers"];

export function CookieConsent() {
  const pathname = usePathname();
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [analyticsPref, setAnalyticsPref] = useState(false);
  const [marketingPref, setMarketingPref] = useState(false);

  // Re-minimise on navigating to a fresh dense page rather than staying
  // expanded from wherever the visitor was before.
  useEffect(() => {
    setExpanded(false);
  }, [pathname]);

  useEffect(() => {
    const stored = getStoredConsent();
    let timer: ReturnType<typeof setTimeout> | undefined;

    if (stored) {
      // Consent Mode defaults to denied on every fresh page load (see
      // layout.tsx) — a returning visitor's earlier choice has to be
      // re-applied each time, it isn't remembered by Google itself.
      applyConsent(stored);
      setAnalyticsPref(stored.analytics);
      setMarketingPref(stored.marketing);
    } else {
      // A first-time visitor sees no banner for a brief moment rather than
      // having it paint instantly on top of the page — a fixed bottom
      // banner otherwise geometrically covers whatever content sits in its
      // footprint the instant the page loads, before anyone's had a chance
      // to look at it. Nothing non-essential loads regardless of this delay
      // (see GA4Loader), so this doesn't weaken consent — it just avoids
      // the banner obscuring a real link/button on first paint.
      timer = setTimeout(() => setVisible(true), 600);
    }
    setReady(true);

    function handleReopen() {
      const current = getStoredConsent();
      setAnalyticsPref(current?.analytics ?? false);
      setMarketingPref(current?.marketing ?? false);
      setShowPreferences(true);
      setVisible(true);
      setExpanded(true);
    }

    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, handleReopen);
    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, handleReopen);
    };
  }, []);

  function choose(prefs: ConsentPreferences) {
    saveConsent(prefs);
    setAnalyticsPref(prefs.analytics);
    setMarketingPref(prefs.marketing);
    setVisible(false);
    setShowPreferences(false);
  }

  if (!ready || !visible) return null;

  const minimized = DENSE_PAGES.includes(pathname) && !expanded;

  if (minimized) {
    return (
      <button
        type="button"
        onClick={() => setExpanded(true)}
        aria-label="Cookie choices — tap to accept, reject or manage"
        className="fixed bottom-3 right-3 z-50 inline-flex min-h-[44px] items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2.5 text-sm font-medium text-ink-900 shadow-lg transition-colors hover:border-ink-400 sm:bottom-4 sm:right-4"
      >
        <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-accent" />
        Cookies
      </button>
    );
  }

  return (
    <div
      role="region"
      aria-label="Cookie preferences"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-2xl rounded-2xl border border-ink-200 bg-white p-3.5 shadow-lg sm:inset-x-4 sm:bottom-4 sm:p-5"
    >
      {!showPreferences ? (
        <>
          <p className="text-xs text-ink-600 sm:text-sm">
            We use cookies to run this site and, with your permission, to understand how it&apos;s used — see our{" "}
            <Link href="/cookies" className="text-accent underline underline-offset-2">
              Cookie Policy
            </Link>
            .
          </p>
          <div className="mt-3 grid grid-cols-3 gap-2 sm:mt-4">
            <button
              type="button"
              onClick={() => choose(REJECT_ALL)}
              className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-ink-900 px-2 py-2.5 text-center text-xs font-medium text-paper transition-colors hover:bg-ink-700 sm:px-5 sm:text-sm"
            >
              Reject
            </button>
            <button
              type="button"
              onClick={() => setShowPreferences(true)}
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-ink-200 px-2 py-2.5 text-center text-xs font-medium text-ink-700 transition-colors hover:border-ink-400 sm:px-5 sm:text-sm"
            >
              Preferences
            </button>
            <button
              type="button"
              onClick={() => choose(ACCEPT_ALL)}
              className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-ink-900 px-2 py-2.5 text-center text-xs font-medium text-paper transition-colors hover:bg-ink-700 sm:px-5 sm:text-sm"
            >
              Accept all
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-sm font-semibold text-ink-900">Cookie preferences</h2>

          <div className="mt-4 flex flex-col gap-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-ink-900">Strictly necessary</p>
                <p className="text-sm text-ink-500">Required for the site to work. Always on.</p>
              </div>
              <span className="mt-0.5 shrink-0 rounded-full bg-ink-100 px-3 py-1 text-xs font-medium text-ink-500">
                Always on
              </span>
            </div>

            <label className="flex items-start justify-between gap-4">
              <span>
                <span className="block text-sm font-medium text-ink-900">Analytics</span>
                <span className="block text-sm text-ink-500">
                  Helps us understand how the site is used (Google Analytics 4). Off unless you allow it.
                </span>
              </span>
              <input
                type="checkbox"
                checked={analyticsPref}
                onChange={(e) => setAnalyticsPref(e.target.checked)}
                className="mt-1 h-5 w-5 shrink-0 rounded border-ink-300 text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              />
            </label>

            <label className="flex items-start justify-between gap-4">
              <span>
                <span className="block text-sm font-medium text-ink-900">Marketing</span>
                <span className="block text-sm text-ink-500">
                  Not currently used on this site. Shown here for transparency — nothing changes yet either way.
                </span>
              </span>
              <input
                type="checkbox"
                checked={marketingPref}
                onChange={(e) => setMarketingPref(e.target.checked)}
                className="mt-1 h-5 w-5 shrink-0 rounded border-ink-300 text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              />
            </label>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => choose(REJECT_ALL)}
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-ink-200 px-4 py-2.5 text-sm font-medium text-ink-700 transition-colors hover:border-ink-400"
            >
              Reject non-essential
            </button>
            <button
              type="button"
              onClick={() => choose({ analytics: analyticsPref, marketing: marketingPref })}
              className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-ink-900 px-4 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-ink-700"
            >
              Save preferences
            </button>
          </div>
        </>
      )}
    </div>
  );
}
