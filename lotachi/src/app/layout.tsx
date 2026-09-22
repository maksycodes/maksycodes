import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/content/global";
import { UtmCapture } from "@/components/UtmCapture";
import { GA4Loader } from "@/components/GA4Loader";
import { CookieConsent } from "@/components/CookieConsent";

// LOTACHI's supporting typeface, per the brand guidelines.
const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-instrument-sans",
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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={instrumentSans.variable}>
      <body className="font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <UtmCapture />

        {/*
          GA4Loader only injects the GA4 script once analytics consent is
          actually granted (stored from a prior visit, or granted live via
          CookieConsent below) — see components/GA4Loader.tsx and
          lib/consent.ts. Nothing Google-related loads before that, not even
          a cookieless ping.
        */}
        <GA4Loader />

        <CookieConsent />

        {children}
      </body>
    </html>
  );
}
