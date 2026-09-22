"use client";

import { Suspense, useEffect, useState } from "react";
import Script from "next/script";
import { GA4_MEASUREMENT_ID } from "@/lib/ga4";
import { CONSENT_CHANGED_EVENT, ConsentPreferences, getStoredConsent } from "@/lib/consent";
import { GA4PageView } from "./GA4PageView";

// Loads the GA4 script only once analytics consent is actually granted —
// either already stored from a previous visit, or the moment a visitor
// grants it during this session (via CookieConsent.tsx). Before that, this
// renders nothing: no request to googletagmanager.com or google-analytics.com
// is made at all, not even a cookieless one. This intentionally replaces an
// earlier version that loaded the script immediately with consent defaulted
// to "denied" — Google's gtag.js still sends a limited cookieless ping in
// that state ("Consent Mode Advanced"), which is harder to defend as
// obviously non-tracking than simply not loading the script yet.
export function GA4Loader() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (!GA4_MEASUREMENT_ID) return;

    const stored = getStoredConsent();
    if (stored?.analytics) setShouldLoad(true);

    function handleConsentChanged(e: Event) {
      const prefs = (e as CustomEvent<ConsentPreferences>).detail;
      if (prefs?.analytics) setShouldLoad(true);
    }

    window.addEventListener(CONSENT_CHANGED_EVENT, handleConsentChanged);
    return () => window.removeEventListener(CONSENT_CHANGED_EVENT, handleConsentChanged);
  }, []);

  if (!GA4_MEASUREMENT_ID || !shouldLoad) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent', 'default', { analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
          gtag('js', new Date());
          gtag('config', '${GA4_MEASUREMENT_ID}', { send_page_view: false });
        `}
      </Script>
      <Suspense fallback={null}>
        <GA4PageView />
      </Suspense>
    </>
  );
}
