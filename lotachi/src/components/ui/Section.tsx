import { ReactNode } from "react";
import { Container } from "./Container";

export function Section({
  id,
  className = "",
  containerClassName = "",
  children,
  ariaLabel,
}: {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
  ariaLabel?: string;
}) {
  return (
    <section id={id} aria-label={ariaLabel} className={`py-20 sm:py-28 ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm font-medium uppercase tracking-[0.14em] text-accent">{children}</p>
  );
}
