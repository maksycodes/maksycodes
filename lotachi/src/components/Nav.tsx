"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { nav, siteConfig } from "@/content/global";
import { LinkButton } from "./ui/Button";
import { Container } from "./ui/Container";
import { trackEvent } from "@/lib/analytics";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // A shadow that appears once the page has actually scrolled — a small,
  // continuous cue distinguishing "at the top" from "scrolled", rather
  // than a permanent shadow that means nothing.
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 8);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-ink-100 bg-paper/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <Link href="/" aria-label={siteConfig.name} className="flex items-center">
          <Image
            src="/brand/lotachi-horizontal-colour.png"
            alt={siteConfig.name}
            width={1350}
            height={320}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 xl:flex">
          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => trackEvent("nav_click", { label: link.label })}
              className="text-sm font-medium text-ink-700 hover:text-ink-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <LinkButton
            href={nav.ctaModel.href}
            variant="outline"
            className="px-5 py-2.5"
            onClick={() => trackEvent("model_cta_clicked", { label: nav.ctaModel.label, placement: "nav" })}
          >
            {nav.ctaModel.label}
          </LinkButton>
          <LinkButton
            href={nav.ctaProvider.href}
            variant="accent"
            className="px-5 py-2.5"
            onClick={() => trackEvent("provider_cta_clicked", { label: nav.ctaProvider.label, placement: "nav" })}
          >
            {nav.ctaProvider.label}
          </LinkButton>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink-900 xl:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </Container>

      {open && (
        <div id="mobile-menu" className="border-t border-ink-100 bg-paper xl:hidden">
          <Container className="flex flex-col gap-4 py-6">
            <nav aria-label="Mobile" className="flex flex-col">
              {nav.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[44px] items-center text-base font-medium text-ink-700 hover:text-ink-900"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3 pt-2">
              <LinkButton
                href={nav.ctaModel.href}
                variant="outline"
                onClick={() => {
                  setOpen(false);
                  trackEvent("model_cta_clicked", { label: nav.ctaModel.label, placement: "nav_mobile" });
                }}
              >
                {nav.ctaModel.label}
              </LinkButton>
              <LinkButton
                href={nav.ctaProvider.href}
                variant="accent"
                onClick={() => {
                  setOpen(false);
                  trackEvent("provider_cta_clicked", { label: nav.ctaProvider.label, placement: "nav_mobile" });
                }}
              >
                {nav.ctaProvider.label}
              </LinkButton>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
