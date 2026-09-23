import Link from "next/link";
import { trust } from "@/content/home";
import { Section, Eyebrow } from "../ui/Section";

export function TrustSection() {
  return (
    <Section id="trust" ariaLabel="Trust and safety" className="border-b border-ink-100 bg-paper-muted">
      <Eyebrow>{trust.eyebrow}</Eyebrow>
      <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">{trust.heading}</h2>
      <p className="mt-5 max-w-2xl rounded-xl border border-ink-200 bg-white p-5 text-ink-700 shadow-sm">{trust.statement}</p>

      <ul className="mt-8 flex max-w-2xl flex-col gap-3">
        {trust.corePoints.map((item) => (
          <li key={item} className="flex gap-3 text-sm text-ink-600">
            <span aria-hidden="true" className="mt-0.5 shrink-0 text-accent">
              ✓
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <Link href={trust.moreLink.href} className="mt-6 inline-flex text-sm font-medium text-accent underline underline-offset-2">
        {trust.moreLink.label}
      </Link>
    </Section>
  );
}
