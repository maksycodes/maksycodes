"use client";

import { earlyAccess } from "@/content/home";
import { trackEvent } from "@/lib/analytics";
import { Section, Eyebrow } from "../ui/Section";
import { Badge } from "../ui/Badge";
import { LinkButton } from "../ui/Button";

export function EarlyAccessSection() {
  return (
    <Section ariaLabel="Early access" className="border-b border-ink-100">
      <div className="mx-auto flex max-w-2xl flex-col items-start gap-5">
        <Badge tone="accent">{earlyAccess.badge}</Badge>
        <Eyebrow>{earlyAccess.eyebrow}</Eyebrow>
        <h2 className="text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">{earlyAccess.heading}</h2>
        <p className="text-ink-600">{earlyAccess.body}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <LinkButton
            href={earlyAccess.ctaModel.href}
            variant="accent"
            onClick={() => trackEvent("model_cta_clicked", { label: earlyAccess.ctaModel.label, placement: "early_access" })}
          >
            {earlyAccess.ctaModel.label}
          </LinkButton>
          <LinkButton
            href={earlyAccess.ctaProvider.href}
            variant="outline"
            onClick={() => trackEvent("provider_cta_clicked", { label: earlyAccess.ctaProvider.label, placement: "early_access" })}
          >
            {earlyAccess.ctaProvider.label}
          </LinkButton>
        </div>
      </div>
    </Section>
  );
}
