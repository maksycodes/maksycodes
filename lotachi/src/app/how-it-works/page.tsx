import type { Metadata } from "next";
import { howItWorksPage } from "@/content/howItWorksPage";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: howItWorksPage.metaTitle,
  description: howItWorksPage.metaDescription,
};

const stageStyles: Record<string, string> = {
  available: "border-accent text-accent-dark",
  pilot: "border-ink-300 text-ink-700",
  future: "border-ink-200 text-ink-400",
};

function StageBadge({ stage }: { stage: string }) {
  const label = howItWorksPage.stageLegend.find((item) => item.stage === stage)?.label ?? stage;
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide ${stageStyles[stage] ?? stageStyles.pilot}`}
    >
      {label}
    </span>
  );
}

export default function HowItWorksPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Section ariaLabel="How it works" watermark>
          <div className="max-w-2xl">
            <Badge tone="accent">{howItWorksPage.eyebrow}</Badge>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">{howItWorksPage.heading}</h1>
            <p className="mt-5 text-ink-600">{howItWorksPage.intro}</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            {howItWorksPage.stageLegend.map((item) => (
              <div key={item.stage} className="flex items-start gap-2 rounded-xl border border-ink-100 bg-paper-muted p-3 text-xs text-ink-600 sm:max-w-[15rem]">
                <StageBadge stage={item.stage} />
                <span className="sr-only">{item.label}:</span>
                <span>{item.body}</span>
              </div>
            ))}
          </div>

          <ol className="mt-14 flex flex-col gap-8">
            {howItWorksPage.steps.map((step) => (
              <li key={step.number} className="flex gap-6 border-t border-ink-100 pt-8 first:border-t-0 first:pt-0">
                <span aria-hidden="true" className="text-sm font-medium text-accent">
                  {step.number}
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="font-semibold text-ink-900">{step.title}</h2>
                    <StageBadge stage={step.stage} />
                  </div>
                  <p className="mt-1 text-ink-600">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-12 max-w-2xl rounded-xl border border-ink-200 bg-paper-muted p-5 text-sm text-ink-600 shadow-sm">
            {howItWorksPage.note}
          </p>

          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            <div className="rounded-2xl border border-ink-100 bg-paper-muted p-6 shadow-sm sm:p-8">
              <h2 className="text-sm font-semibold text-ink-900">{howItWorksPage.forModels.heading}</h2>
              <h3 className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink-400">
                {howItWorksPage.forModels.opportunityTypesHeading}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {howItWorksPage.forModels.opportunityTypes.map((item) => (
                  <li key={item} className="rounded-full border border-ink-200 px-3 py-1 text-sm text-ink-600">
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className="mt-6 text-xs font-semibold uppercase tracking-wide text-ink-400">
                {howItWorksPage.forModels.caveatsHeading}
              </h3>
              <ul className="mt-3 flex flex-col gap-2">
                {howItWorksPage.forModels.caveats.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-ink-600">
                    <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-ink-100 bg-paper-muted p-6 shadow-sm sm:p-8">
              <h2 className="text-sm font-semibold text-ink-900">{howItWorksPage.forProviders.heading}</h2>
              <h3 className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink-400">
                {howItWorksPage.forProviders.audiencesHeading}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {howItWorksPage.forProviders.audiences.map((item) => (
                  <li key={item} className="rounded-full border border-ink-200 px-3 py-1 text-sm text-ink-600">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
