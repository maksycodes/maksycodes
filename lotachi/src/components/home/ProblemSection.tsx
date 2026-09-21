import { problem } from "@/content/home";
import { Section, Eyebrow } from "../ui/Section";

export function ProblemSection() {
  return (
    <Section ariaLabel="Why LOTACHI exists" className="border-b border-ink-100">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>{problem.eyebrow}</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">{problem.heading}</h2>
          <p className="mt-5 text-ink-600">{problem.body}</p>
        </div>
        <dl className="grid gap-6 sm:grid-cols-2">
          {problem.points.map((point) => (
            <div key={point.label}>
              <dt className="text-sm font-semibold text-ink-900">{point.label}</dt>
              <dd className="mt-1 text-sm text-ink-600">{point.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
