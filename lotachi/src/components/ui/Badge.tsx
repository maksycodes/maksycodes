import { ReactNode } from "react";

export function Badge({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "accent" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide ${
        tone === "accent" ? "bg-accent-light text-accent-dark" : "bg-ink-100 text-ink-600"
      }`}
    >
      {children}
    </span>
  );
}
