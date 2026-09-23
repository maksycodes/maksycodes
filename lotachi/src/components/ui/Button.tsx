import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

const base =
  "inline-flex min-h-[44px] items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60";

// "accent" is a solid-fill button style, kept as an alias of "primary" —
// the brand's Terracotta accent colour is reserved for small highlights
// (links, focus rings, the logo's own dot) and must never fill a button.
const variants = {
  primary: "bg-ink-900 text-paper hover:bg-ink-700",
  accent: "bg-ink-900 text-paper hover:bg-ink-700",
  outline: "border border-ink-900 text-ink-900 hover:bg-ink-900 hover:text-paper",
  // For a solid button placed on an ink-900 (dark) surface, e.g. a dark
  // card — "primary"/"accent" would be invisible against that background.
  inverse: "bg-paper text-ink-900 hover:bg-paper-muted",
};

type Variant = keyof typeof variants;

function isExternalHref(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
}

export function LinkButton({
  variant = "primary",
  className = "",
  href,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant; href: string }) {
  const classes = `${base} ${variants[variant]} ${className}`;
  if (isExternalHref(href)) {
    return <a href={href} className={classes} {...props} />;
  }
  return <Link href={href} className={classes} {...props} />;
}

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
