import { providerSteps } from "@/content/home";
import { Section, Eyebrow } from "../ui/Section";
import { StepFlow } from "../ui/StepFlow";

export function ProviderStepsSection() {
  return (
    <Section ariaLabel="How it works for providers" className="border-b border-ink-100 bg-paper-muted">
      <Eyebrow>{providerSteps.eyebrow}</Eyebrow>
      <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
        {providerSteps.heading}
      </h2>

      <div className="mt-12">
        <StepFlow steps={providerSteps.steps} />
      </div>

      <div className="mt-12 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
        <h3 className="text-sm font-semibold text-ink-900">Being designed for</h3>
        <ul className="mt-3 flex flex-wrap gap-2">
          {providerSteps.audiences.map((item) => (
            <li key={item} className="rounded-full border border-ink-200 px-3 py-1 text-sm text-ink-600">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
