"use client";

import { whyModels, whyProviders } from "@/content/home";
import { trackEvent } from "@/lib/analytics";
import { Section, Eyebrow } from "../ui/Section";
import { LinkButton } from "../ui/Button";

function WhyCard({
  eyebrow,
  heading,
  items,
  cta,
  tone,
}: {
  eyebrow: string;
  heading: string;
  items: string[];
  cta: { label: string; href: string };
  tone: "model" | "provider";
}) {
  return (
    <div
      className={`flex flex-col rounded-2xl border p-8 ${
        tone === "model" ? "border-ink-100 bg-white" : "border-ink-800 bg-ink-900 text-paper"
      }`}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h3 className={`mt-3 text-2xl font-semibold tracking-tight ${tone === "provider" ? "text-paper" : "text-ink-900"}`}>
        {heading}
      </h3>
      <ul className="mt-6 flex flex-1 flex-col gap-3">
        {items.map((item) => (
          <li key={item} className={`flex gap-3 ${tone === "provider" ? "text-ink-200" : "text-ink-600"}`}>
            <span
              aria-hidden="true"
              className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${tone === "provider" ? "bg-accent-light" : "bg-accent"}`}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <LinkButton
        href={cta.href}
        variant={tone === "provider" ? "accent" : "primary"}
        className="mt-8 self-start"
        onClick={() =>
          trackEvent(tone === "provider" ? "provider_cta_clicked" : "model_cta_clicked", {
            label: cta.label,
            placement: "why_section",
          })
        }
      >
        {cta.label}
      </LinkButton>
    </div>
  );
}

export function WhySection() {
  return (
    <Section ariaLabel="Why models and providers may like LOTACHI" className="border-b border-ink-100">
      <div className="grid gap-6 lg:grid-cols-2">
        <WhyCard {...whyModels} tone="model" />
        <WhyCard {...whyProviders} tone="provider" />
      </div>
    </Section>
  );
}
