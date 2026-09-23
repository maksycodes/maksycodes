import { modelSteps } from "@/content/home";
import { Section, Eyebrow } from "../ui/Section";
import { StepFlow } from "../ui/StepFlow";

export function ModelStepsSection() {
  return (
    <Section id={modelSteps.id} ariaLabel="How it works for models" className="border-b border-ink-100">
      <Eyebrow>{modelSteps.eyebrow}</Eyebrow>
      <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
        {modelSteps.heading}
      </h2>

      <div className="mt-12">
        <StepFlow steps={modelSteps.steps} />
      </div>

      <div className="mt-12 grid gap-8 rounded-2xl bg-paper-muted p-6 shadow-sm sm:grid-cols-2 sm:p-8">
        <div>
          <h3 className="text-sm font-semibold text-ink-900">Opportunities may include</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {modelSteps.opportunityTypes.map((item) => (
              <li key={item} className="rounded-full border border-ink-200 px-3 py-1 text-sm text-ink-600">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-ink-900">Worth knowing</h3>
          <ul className="mt-3 flex flex-col gap-2">
            {modelSteps.caveats.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-ink-600">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
