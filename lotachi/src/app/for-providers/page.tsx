import type { Metadata } from "next";
import { forProvidersPage } from "@/content/forProviders";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { ProviderPilotCta } from "@/components/ProviderPilotCta";

export const metadata: Metadata = {
  title: forProvidersPage.metaTitle,
  description: forProvidersPage.metaDescription,
};

export default function ForProvidersPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Section ariaLabel="For providers" watermark>
          <div className="max-w-2xl">
            <Badge tone="accent">{forProvidersPage.eyebrow}</Badge>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
              {forProvidersPage.heading}
            </h1>
            <p className="mt-5 text-ink-600">{forProvidersPage.intro}</p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {forProvidersPage.sections.map((section) => (
              <div key={section.heading} className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
                <h2 className="font-semibold text-ink-900">{section.heading}</h2>
                <p className="mt-2 text-sm text-ink-600">{section.body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section ariaLabel="Provider pilot" className="border-t border-ink-100 bg-ink-900 text-paper">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight">{forProvidersPage.pilot.heading}</h2>
            <p className="mt-3 text-ink-200">{forProvidersPage.pilot.body}</p>
            <p className="mt-2 text-sm text-ink-300">{forProvidersPage.pilot.constraints}</p>
            <ProviderPilotCta
              label={forProvidersPage.pilot.cta.label}
              href={forProvidersPage.pilot.cta.href}
              placement="for_providers_page"
              className="mt-6"
              variant="inverse"
            />
          </div>
        </Section>

        <Section ariaLabel="Built with provider conversations" className="border-t border-ink-100">
          <div className="max-w-2xl">
            <h2 className="text-xl font-semibold text-ink-900">{forProvidersPage.builtWith.heading}</h2>
            <p className="mt-3 text-ink-600">{forProvidersPage.builtWith.body}</p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
