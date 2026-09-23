import type { Metadata } from "next";
import { faqPage } from "@/content/faq";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: faqPage.metaTitle,
  description: faqPage.metaDescription,
};

export default function FAQPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Section ariaLabel="Frequently asked questions" watermark>
          <Badge tone="accent">{faqPage.eyebrow}</Badge>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">{faqPage.heading}</h1>

          <div className="mt-14 grid gap-14 lg:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold text-ink-900">{faqPage.modelsHeading}</h2>
              <div className="mt-6">
                <FAQAccordion items={faqPage.models} />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-ink-900">{faqPage.providersHeading}</h2>
              <div className="mt-6">
                <FAQAccordion items={faqPage.providers} />
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
