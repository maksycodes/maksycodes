import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

const base =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60";

const variants = {
  primary: "bg-ink-900 text-paper hover:bg-ink-700",
  accent: "bg-accent text-paper hover:bg-accent-dark",
  outline: "border border-ink-900 text-ink-900 hover:bg-ink-900 hover:text-paper",
};

type Variant = keyof typeof variants;

export function LinkButton({
  variant = "primary",
  className = "",
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant }) {
  return <a className={`${base} ${variants[variant]} ${className}`} {...props} />;
}

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
