import type { Metadata } from "next";
import { forModelsPage } from "@/content/forModels";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: forModelsPage.metaTitle,
  description: forModelsPage.metaDescription,
};

export default function ForModelsPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Section ariaLabel="For models" watermark>
          <div className="max-w-2xl">
            <Badge tone="accent">{forModelsPage.eyebrow}</Badge>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">{forModelsPage.heading}</h1>
            <p className="mt-5 text-ink-600">{forModelsPage.intro}</p>
            <LinkButton href={forModelsPage.cta.href} variant="accent" className="mt-8">
              {forModelsPage.cta.label}
            </LinkButton>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {forModelsPage.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-semibold text-ink-900">{section.heading}</h2>
                <p className="mt-2 text-sm text-ink-600">{section.body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section ariaLabel="Model FAQs" className="border-t border-ink-100 bg-paper-muted">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">Questions models ask</h2>
          <div className="mt-10 max-w-3xl">
            <FAQAccordion items={forModelsPage.faqs} />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
