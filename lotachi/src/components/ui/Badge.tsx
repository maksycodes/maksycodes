import { ReactNode } from "react";

export function Badge({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "accent" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide ${
        tone === "accent" ? "border-accent text-accent-dark" : "border-transparent bg-ink-100 text-ink-600"
      }`}
    >
      {children}
    </span>
  );
}
