"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ACCEPT_ALL, REJECT_ALL, ConsentPreferences, applyConsent, getStoredConsent, saveConsent } from "@/lib/consent";

// Dispatched by the footer's "Cookie settings" link so a visitor can change
// their choice at any time after the first visit — see Footer.tsx.
export const OPEN_COOKIE_SETTINGS_EVENT = "lotachi:open-cookie-settings";

export function CookieConsent() {
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsPref, setAnalyticsPref] = useState(false);
  const [marketingPref, setMarketingPref] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (stored) {
      // Consent Mode defaults to denied on every fresh page load (see
      // layout.tsx) — a returning visitor's earlier choice has to be
      // re-applied each time, it isn't remembered by Google itself.
      applyConsent(stored);
      setAnalyticsPref(stored.analytics);
      setMarketingPref(stored.marketing);
    } else {
      setVisible(true);
    }
    setReady(true);

    function handleReopen() {
      const current = getStoredConsent();
      setAnalyticsPref(current?.analytics ?? false);
      setMarketingPref(current?.marketing ?? false);
      setShowPreferences(true);
      setVisible(true);
    }

    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, handleReopen);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, handleReopen);
  }, []);

  function choose(prefs: ConsentPreferences) {
    saveConsent(prefs);
    setAnalyticsPref(prefs.analytics);
    setMarketingPref(prefs.marketing);
    setVisible(false);
    setShowPreferences(false);
  }

  if (!ready || !visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie preferences"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-2xl rounded-2xl border border-ink-200 bg-white p-5 shadow-lg sm:p-6"
    >
      {!showPreferences ? (
        <>
          <p className="text-sm text-ink-600">
            We use strictly necessary storage to run this site. With your permission, we&apos;d also like to use
            analytics to understand how it&apos;s used — see our{" "}
            <Link href="/cookies" className="text-accent underline underline-offset-2">
              Cookie Policy
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={() => choose(REJECT_ALL)}
              className="inline-flex items-center justify-center rounded-full bg-ink-900 px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-ink-700"
            >
              Reject non-essential
            </button>
            <button
              type="button"
              onClick={() => setShowPreferences(true)}
              className="inline-flex items-center justify-center rounded-full border border-ink-200 px-5 py-2.5 text-sm font-medium text-ink-700 transition-colors hover:border-ink-400"
            >
              Manage preferences
            </button>
            <button
              type="button"
              onClick={() => choose(ACCEPT_ALL)}
              className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-accent-dark"
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

          <div className="mt-5 flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={() => choose(REJECT_ALL)}
              className="inline-flex items-center justify-center rounded-full border border-ink-200 px-5 py-2.5 text-sm font-medium text-ink-700 transition-colors hover:border-ink-400"
            >
              Reject non-essential
            </button>
            <button
              type="button"
              onClick={() => choose({ analytics: analyticsPref, marketing: marketingPref })}
              className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-accent-dark"
            >
              Save preferences
            </button>
          </div>
        </>
      )}
    </div>
  );
}
