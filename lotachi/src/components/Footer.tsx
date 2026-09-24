"use client";

import Image from "next/image";
import Link from "next/link";
import { footer, siteConfig } from "@/content/global";
import { trackEvent } from "@/lib/analytics";
import { OPEN_COOKIE_SETTINGS_EVENT } from "./CookieConsent";
import { Container } from "./ui/Container";
import { SocialLinks } from "./SocialLinks";
import { EmailCaptureForm } from "./EmailCaptureForm";

function footerLinkEvent(href: string): "model_cta_clicked" | "provider_cta_clicked" | null {
  if (href === "/models") return "model_cta_clicked";
  if (href === "/providers") return "provider_cta_clicked";
  return null;
}

export function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-ink-900 text-paper">
      <Container className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="sm:col-span-2 lg:col-span-2">
          <Image
            src="/brand/lotachi-horizontal-white.png"
            alt={siteConfig.name}
            width={1350}
            height={320}
            className="h-8 w-auto"
          />
          <p className="mt-2 text-sm text-ink-300">{siteConfig.descriptor}</p>
          <p className="mt-4 max-w-xs text-sm text-ink-300">{footer.emailCapture.body}</p>
          <div className="mt-4">
            <EmailCaptureForm />
          </div>
          <SocialLinks className="mt-6" />
        </div>

        {footer.columns.map((column) => (
          <nav key={column.heading} aria-label={column.heading}>
            <h3 className="text-sm font-semibold text-ink-200">{column.heading}</h3>
            <ul className="mt-2 flex flex-col">
              {column.links.map((link) => {
                if (link.href === "#cookie-settings") {
                  return (
                    <li key={link.href}>
                      <button
                        type="button"
                        onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))}
                        className="flex min-h-[44px] items-center text-sm text-ink-300 hover:text-paper"
                      >
                        {link.label}
                      </button>
                    </li>
                  );
                }
                const event = footerLinkEvent(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={event ? () => trackEvent(event, { label: link.label, placement: "footer" }) : undefined}
                      className="flex min-h-[44px] items-center text-sm text-ink-300 hover:text-paper"
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        ))}
      </Container>
      <Container className="flex flex-col gap-2 border-t border-ink-700 py-6 text-sm text-ink-300 sm:flex-row sm:justify-between">
        <p>{footer.copyright}</p>
        <p>{footer.status}</p>
      </Container>
    </footer>
  );
}
