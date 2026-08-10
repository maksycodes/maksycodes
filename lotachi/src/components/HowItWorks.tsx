import { howItWorks } from "@/content/site";
import { Section, Eyebrow } from "./ui/Section";

export function HowItWorks() {
  return (
    <Section ariaLabel="How it could work" className="border-b border-ink-100 bg-paper-muted">
      <Eyebrow>{howItWorks.eyebrow}</Eyebrow>
      <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
        {howItWorks.heading}
      </h2>

      <ol className="mt-12 grid gap-8 sm:grid-cols-3">
        {howItWorks.steps.map((step) => (
          <li key={step.number} className="flex flex-col gap-3">
            <span aria-hidden="true" className="text-sm font-medium text-accent">
              {step.number}
            </span>
            <h3 className="text-lg font-semibold text-ink-900">{step.title}</h3>
            <p className="text-ink-600">{step.body}</p>
          </li>
        ))}
      </ol>

      <p className="mt-12 max-w-2xl border-t border-ink-200 pt-6 text-sm text-ink-500">{howItWorks.note}</p>
    </Section>
  );
}
