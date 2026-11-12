"use client";

import Image from "next/image";
import { founderHome } from "@/content/home";
import { trackEvent } from "@/lib/analytics";
import { Section, Eyebrow } from "../ui/Section";
import { LinkButton } from "../ui/Button";

export function FounderSection() {
  return (
    <Section ariaLabel="Who we are" className="border-b border-ink-100">
      <div className="mx-auto flex max-w-2xl flex-col items-start gap-6 sm:flex-row sm:items-center">
        <Image
          src={founderHome.photo.src}
          alt={founderHome.photo.alt}
          width={112}
          height={112}
          className="h-28 w-28 shrink-0 rounded-full object-cover"
        />
        <div className="flex flex-col items-start gap-4">
          <Eyebrow>{founderHome.eyebrow}</Eyebrow>
          <h2 className="text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">{founderHome.heading}</h2>
          <p className="text-ink-600">{founderHome.body}</p>
          <a
            href={founderHome.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("social_link_clicked", { platform: "linkedin", placement: "founder_section" })}
            className="text-sm font-medium text-ink-500 underline-offset-4 hover:text-ink-900 hover:underline"
          >
            LinkedIn ↗
          </a>
          <p className="text-sm text-ink-400">{founderHome.tradingStatus}</p>
          <LinkButton
            href={founderHome.cta.href}
            variant="outline"
            onClick={() => trackEvent("about_cta_clicked", { label: founderHome.cta.label, placement: "founder_section" })}
          >
            {founderHome.cta.label}
          </LinkButton>
        </div>
      </div>
    </Section>
  );
}
