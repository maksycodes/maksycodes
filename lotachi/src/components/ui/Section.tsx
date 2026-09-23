import { ReactNode } from "react";
import { Container } from "./Container";
import { BrandWatermark } from "./BrandWatermark";

export function Section({
  id,
  className = "",
  containerClassName = "",
  children,
  ariaLabel,
  watermark = false,
}: {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
  ariaLabel?: string;
  // Set on a page's top/hero section only, matching the homepage — renders
  // the faint logo-symbol corner flourish behind the section's content.
  watermark?: boolean;
}) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`py-20 sm:py-28 ${watermark ? "relative overflow-hidden" : ""} ${className}`}
    >
      {watermark && <BrandWatermark />}
      <Container className={`relative ${containerClassName}`}>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm font-medium uppercase tracking-[0.14em] text-accent">{children}</p>
  );
}
