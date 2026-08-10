import { providerSection } from "@/content/site";
import { Section, Eyebrow } from "./ui/Section";
import { ProviderForm } from "./forms/ProviderForm";

export function ProviderSection() {
  return (
    <Section id={providerSection.id} ariaLabel="Training provider waitlist" className="border-b border-ink-100">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>{providerSection.eyebrow}</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            {providerSection.heading}
          </h2>
          <div className="mt-5 flex flex-col gap-4 text-ink-600">
            {providerSection.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-paper-muted p-6">
            <h3 className="font-semibold text-ink-900">{providerSection.researchNote.heading}</h3>
            <p className="mt-2 text-sm text-ink-600">{providerSection.researchNote.body}</p>
          </div>
        </div>

        <div className="rounded-2xl border border-ink-100 bg-white p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-ink-900">{providerSection.form.heading}</h3>
          <div className="mt-6">
            <ProviderForm />
          </div>
        </div>
      </div>
    </Section>
  );
}
