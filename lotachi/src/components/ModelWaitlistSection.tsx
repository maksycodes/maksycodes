import { modelWaitlist } from "@/content/site";
import { Section, Eyebrow } from "./ui/Section";
import { ModelForm } from "./forms/ModelForm";

export function ModelWaitlistSection() {
  return (
    <Section id={modelWaitlist.id} ariaLabel="Model waitlist" className="border-b border-ink-100 bg-paper-muted">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>{modelWaitlist.eyebrow}</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            {modelWaitlist.heading}
          </h2>
          <p className="mt-5 max-w-md text-ink-600">{modelWaitlist.body}</p>
        </div>

        <div className="rounded-2xl border border-ink-100 bg-white p-6 sm:p-8">
          <ModelForm />
        </div>
      </div>
    </Section>
  );
}
