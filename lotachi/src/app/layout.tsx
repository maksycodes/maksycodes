import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import "./globals.css";
import { siteConfig } from "@/content/global";
import { UtmCapture } from "@/components/UtmCapture";
import { GA4PageView } from "@/components/GA4PageView";
import { CookieConsent } from "@/components/CookieConsent";
import { GA4_MEASUREMENT_ID } from "@/lib/ga4";

// Temporary typeface. Swap for the final LOTACHI type choice in this file
// once the brand identity is complete — see README.md "Brand identity".
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = `https://${siteConfig.domain}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteUrl,
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body className="font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <UtmCapture />

        {/*
          GA4 only loads when NEXT_PUBLIC_GA4_MEASUREMENT_ID is set — see
          .env.example and README.md "Analytics & UTM tracking". Consent
          Mode v2 defaults every signal to "denied" here; the CookieConsent
          component (mounted below, sitewide) is what's allowed to call
          gtag('consent','update',...) once a visitor has made a choice —
          see src/lib/consent.ts.
        */}
        {GA4_MEASUREMENT_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
                gtag('js', new Date());
                gtag('config', '${GA4_MEASUREMENT_ID}', { send_page_view: false });
              `}
            </Script>
            <Suspense fallback={null}>
              <GA4PageView />
            </Suspense>
          </>
        )}

        <CookieConsent />

        {children}
      </body>
    </html>
  );
}
