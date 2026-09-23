import { transparency } from "@/content/home";
import { Section, Eyebrow } from "../ui/Section";

export function ModelTransparencySection() {
  return (
    <Section id={transparency.id} ariaLabel="Model transparency" className="border-b border-ink-100">
      <Eyebrow>{transparency.eyebrow}</Eyebrow>
      <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
        {transparency.heading}
      </h2>
      <p className="mt-4 max-w-2xl text-lg font-medium text-accent-dark">{transparency.message}</p>
      <p className="mt-4 max-w-2xl text-ink-600">{transparency.intro}</p>

      <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {transparency.fields.map((field) => (
          <div key={field.label}>
            <dt className="text-sm font-semibold text-ink-900">{field.label}</dt>
            <dd className="mt-1 text-sm text-ink-600">{field.body}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-ink-200 bg-paper-muted p-6 shadow-sm">
          <h3 className="font-semibold text-ink-900">{transparency.mediaDistinction.heading}</h3>
          <p className="mt-2 text-sm text-ink-600">{transparency.mediaDistinction.body}</p>
        </div>
        <div className="rounded-2xl border border-ink-200 bg-paper-muted p-6 shadow-sm">
          <h3 className="font-semibold text-ink-900">Suitability isn&apos;t inferred from appearance.</h3>
          <p className="mt-2 text-sm text-ink-600">{transparency.appearanceNote}</p>
        </div>
      </div>
    </Section>
  );
}
