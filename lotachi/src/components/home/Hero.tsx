"use client";

import { hero } from "@/content/home";
import { trackEvent } from "@/lib/analytics";
import { Badge } from "../ui/Badge";
import { LinkButton } from "../ui/Button";
import { Container } from "../ui/Container";

export function Hero() {
  return (
    <section aria-label="Introduction" className="border-b border-ink-100 py-20 sm:py-28">
      <Container className="max-w-3xl">
        <Badge tone="accent">{hero.eyebrow}</Badge>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">{hero.headline}</h1>
        <p className="mt-6 text-lg text-ink-600">{hero.body}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <LinkButton
            href={hero.ctaModel.href}
            variant="accent"
            onClick={() => trackEvent("model_cta_clicked", { label: hero.ctaModel.label, placement: "hero" })}
          >
            {hero.ctaModel.label}
          </LinkButton>
          <LinkButton
            href={hero.ctaProvider.href}
            variant="outline"
            onClick={() => trackEvent("provider_cta_clicked", { label: hero.ctaProvider.label, placement: "hero" })}
          >
            {hero.ctaProvider.label}
          </LinkButton>
        </div>
        <a href={hero.ctaHowItWorks.href} className="mt-6 inline-block text-sm font-medium text-ink-500 underline-offset-4 hover:text-ink-900 hover:underline">
          {hero.ctaHowItWorks.label} ↓
        </a>
      </Container>
    </section>
  );
}
