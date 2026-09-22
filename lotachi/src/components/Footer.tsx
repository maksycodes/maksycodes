"use client";

import Link from "next/link";
import { footer, siteConfig } from "@/content/global";
import { trackEvent } from "@/lib/analytics";
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
          <p className="text-lg font-semibold tracking-tight">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-ink-300">{siteConfig.domain}</p>
          <p className="mt-4 max-w-xs text-sm text-ink-300">{footer.emailCapture.body}</p>
          <div className="mt-4">
            <EmailCaptureForm />
          </div>
          <SocialLinks className="mt-6" />
        </div>

        {footer.columns.map((column) => (
          <nav key={column.heading} aria-label={column.heading}>
            <h3 className="text-sm font-semibold text-ink-200">{column.heading}</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {column.links.map((link) => {
                const event = footerLinkEvent(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={event ? () => trackEvent(event, { label: link.label, placement: "footer" }) : undefined}
                      className="text-sm text-ink-300 hover:text-paper"
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
