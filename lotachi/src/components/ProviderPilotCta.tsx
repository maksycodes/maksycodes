"use client";

import { providersPage } from "@/content/providers";
import { trackEvent } from "@/lib/analytics";
import { LinkButton } from "@/components/ui/Button";

export function ProviderPilotCta({
  label,
  href,
  placement,
  className = "mt-4",
  variant = "accent",
}: {
  label?: string;
  href?: string;
  placement: string;
  className?: string;
  // Pass "inverse" when this sits on a dark (bg-ink-900) surface — the
  // default solid style would otherwise be invisible against it.
  variant?: "accent" | "inverse";
}) {
  const cta = providersPage.pilotNote.cta;
  const resolvedLabel = label ?? cta.label;
  const resolvedHref = href ?? cta.href;

  return (
    <LinkButton
      href={resolvedHref}
      variant={variant}
      className={className}
      onClick={() => trackEvent("provider_pilot_clicked", { label: resolvedLabel, placement })}
    >
      {resolvedLabel}
    </LinkButton>
  );
}
