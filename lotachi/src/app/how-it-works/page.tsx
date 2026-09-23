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

          <ol className="mt-14 flex flex-col gap-8">
            {howItWorksPage.steps.map((step) => (
              <li key={step.number} className="flex gap-6 border-t border-ink-100 pt-8 first:border-t-0 first:pt-0">
                <span aria-hidden="true" className="text-sm font-medium text-accent">
                  {step.number}
                </span>
                <div>
                  <h2 className="font-semibold text-ink-900">{step.title}</h2>
                  <p className="mt-1 text-ink-600">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-12 max-w-2xl rounded-xl border border-ink-200 bg-paper-muted p-5 text-sm text-ink-600 shadow-sm">
            {howItWorksPage.note}
          </p>
        </Section>
      </main>
      <Footer />
    </>
  );
}
