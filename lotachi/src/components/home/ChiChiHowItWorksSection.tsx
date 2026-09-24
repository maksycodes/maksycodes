import { chiChiHowItWorks } from "@/content/home";
import { Section, Eyebrow } from "../ui/Section";

export function ChiChiHowItWorksSection() {
  return (
    <Section ariaLabel="How it works for Chi Chis" className="border-b border-ink-100">
      <Eyebrow>{chiChiHowItWorks.eyebrow}</Eyebrow>
      <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
        {chiChiHowItWorks.heading}
      </h2>
      <p className="mt-4 max-w-2xl text-ink-600">{chiChiHowItWorks.intro}</p>

      <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {chiChiHowItWorks.steps.map((step) => (
          <li key={step.number} className="flex flex-col gap-3">
            <span aria-hidden="true" className="text-sm font-medium text-accent">
              {step.number}
            </span>
            <h3 className="text-lg font-semibold text-ink-900">{step.title}</h3>
            <p className="text-ink-600">{step.body}</p>
            {step.stage === "future" && (
              <span className="inline-flex w-fit items-center rounded-full border border-ink-200 px-3 py-1 text-xs font-medium uppercase tracking-wide text-ink-400">
                Coming with the LOTACHI marketplace
              </span>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
