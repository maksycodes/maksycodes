"use client";

import { providersPage } from "@/content/providers";
import { trackEvent } from "@/lib/analytics";
import { LinkButton } from "@/components/ui/Button";

export function ProviderPilotCta({
  label,
  href,
  placement,
  className = "mt-4",
}: {
  label?: string;
  href?: string;
  placement: string;
  className?: string;
}) {
  const cta = providersPage.pilotNote.cta;
  const resolvedLabel = label ?? cta.label;
  const resolvedHref = href ?? cta.href;

  return (
    <LinkButton
      href={resolvedHref}
      variant="accent"
      className={className}
      onClick={() => trackEvent("provider_pilot_clicked", { label: resolvedLabel, placement })}
    >
      {resolvedLabel}
    </LinkButton>
  );
}
