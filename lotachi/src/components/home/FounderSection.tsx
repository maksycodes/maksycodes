"use client";

import { founderHome } from "@/content/home";
import { trackEvent } from "@/lib/analytics";
import { Section, Eyebrow } from "../ui/Section";
import { LinkButton } from "../ui/Button";

export function FounderSection() {
  return (
    <Section ariaLabel="Why LOTACHI exists" className="border-b border-ink-100">
      <div className="mx-auto flex max-w-2xl flex-col items-start gap-4">
        <Eyebrow>{founderHome.eyebrow}</Eyebrow>
        <h2 className="text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">{founderHome.heading}</h2>
        <p className="text-ink-600">{founderHome.body}</p>
        <LinkButton
          href={founderHome.cta.href}
          variant="outline"
          onClick={() => trackEvent("about_cta_clicked", { label: founderHome.cta.label, placement: "founder_section" })}
        >
          {founderHome.cta.label}
        </LinkButton>
      </div>
    </Section>
  );
}
