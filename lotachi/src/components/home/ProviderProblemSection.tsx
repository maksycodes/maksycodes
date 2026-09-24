import { providerProblem } from "@/content/home";
import { Section, Eyebrow } from "../ui/Section";

export function ProviderProblemSection() {
  return (
    <Section ariaLabel="The provider problem" className="border-b border-ink-800 bg-ink-900 text-paper">
      <Eyebrow>{providerProblem.eyebrow}</Eyebrow>
      <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
        {providerProblem.heading}
      </h2>
      <p className="mt-4 max-w-2xl text-ink-200">{providerProblem.body}</p>

      <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {providerProblem.points.map((point) => (
          <div key={point.label}>
            <dt className="text-sm font-semibold text-paper">{point.label}</dt>
            <dd className="mt-1 text-sm text-ink-300">{point.body}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-10 max-w-2xl rounded-xl border border-ink-700 bg-ink-800 p-5 text-ink-200">
        {providerProblem.positioning}
      </p>
    </Section>
  );
}
