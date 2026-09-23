"use client";

import { hero } from "@/content/home";
import { trackEvent } from "@/lib/analytics";
import { Badge } from "../ui/Badge";
import { LinkButton } from "../ui/Button";
import { Container } from "../ui/Container";
import { BrandWatermark } from "../ui/BrandWatermark";

export function Hero() {
  return (
    <section aria-label="Introduction" className="relative overflow-hidden border-b border-ink-100 py-20 sm:py-28">
      <BrandWatermark />
      <Container className="relative max-w-3xl">
        <div className="flex items-center gap-2 motion-safe:animate-rise-in">
          <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-accent motion-safe:animate-dot-settle" />
          <Badge tone="accent">{hero.eyebrow}</Badge>
        </div>
        <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-ink-900 sm:text-6xl motion-safe:animate-rise-in [animation-delay:80ms]">
          {hero.headline}
        </h1>
        <p className="mt-6 text-lg text-ink-600 motion-safe:animate-rise-in [animation-delay:160ms]">{hero.body}</p>
        <div className="mt-10 flex flex-col gap-3 motion-safe:animate-rise-in [animation-delay:240ms] sm:flex-row">
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
        <a
          href={hero.ctaHowItWorks.href}
          className="mt-6 inline-block text-sm font-medium text-ink-500 underline-offset-4 motion-safe:animate-rise-in [animation-delay:300ms] hover:text-ink-900 hover:underline"
        >
          {hero.ctaHowItWorks.label} ↓
        </a>
      </Container>
    </section>
  );
}
