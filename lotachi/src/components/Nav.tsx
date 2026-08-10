"use client";

import { useState } from "react";
import { nav, siteConfig } from "@/content/site";
import { LinkButton } from "./ui/Button";
import { Container } from "./ui/Container";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink-100 bg-paper/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <a href="#main-content" className="text-lg font-semibold tracking-tight text-ink-900">
          {siteConfig.name}
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {nav.links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-ink-700 hover:text-ink-900">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LinkButton href={nav.ctaModel.href} variant="outline" className="px-5 py-2.5">
            {nav.ctaModel.label}
          </LinkButton>
          <LinkButton href={nav.ctaProvider.href} variant="accent" className="px-5 py-2.5">
            {nav.ctaProvider.label}
          </LinkButton>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-full p-2 text-ink-900 lg:hidden"
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
        <div id="mobile-menu" className="border-t border-ink-100 bg-paper lg:hidden">
          <Container className="flex flex-col gap-4 py-6">
            <nav aria-label="Mobile" className="flex flex-col gap-4">
              {nav.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-ink-700 hover:text-ink-900"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-3 pt-2">
              <LinkButton href={nav.ctaModel.href} variant="outline" onClick={() => setOpen(false)}>
                {nav.ctaModel.label}
              </LinkButton>
              <LinkButton href={nav.ctaProvider.href} variant="accent" onClick={() => setOpen(false)}>
                {nav.ctaProvider.label}
              </LinkButton>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
