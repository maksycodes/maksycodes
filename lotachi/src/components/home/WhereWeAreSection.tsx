import { whereWeAre } from "@/content/home";
import { Section, Eyebrow } from "../ui/Section";
import { SignupCounter } from "./SignupCounter";

export function WhereWeAreSection() {
  return (
    <Section ariaLabel="Where we are" className="border-b border-ink-100 bg-paper-muted">
      <div className="mx-auto flex max-w-2xl flex-col items-start gap-4">
        <Eyebrow>{whereWeAre.eyebrow}</Eyebrow>
        <h2 className="text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">{whereWeAre.heading}</h2>

        <SignupCounter />

        <p className="text-ink-600">{whereWeAre.stat}</p>

        <figure className="mt-2 w-full rounded-2xl border border-ink-200 bg-white p-5">
          <blockquote className="text-ink-700">
            <p>&ldquo;{whereWeAre.quote.body}&rdquo;</p>
          </blockquote>
          <figcaption className="mt-3 flex items-center gap-1.5 text-xs font-medium text-accent-dark">
            <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {whereWeAre.quote.isPlaceholder ? "Placeholder — not a real quote yet" : `— ${whereWeAre.quote.attribution}`}
          </figcaption>
        </figure>
      </div>
    </Section>
  );
}
