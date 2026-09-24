import type { Metadata } from "next";
import Link from "next/link";
import { providersPage } from "@/content/providers";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { ProviderForm } from "@/components/forms/ProviderForm";
import { ProviderPilotCta } from "@/components/ProviderPilotCta";

export const metadata: Metadata = {
  title: providersPage.metaTitle,
  description: providersPage.metaDescription,
};

export default function ProvidersPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Section ariaLabel="Join as a provider" watermark>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <Badge tone="accent">{providersPage.eyebrow}</Badge>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
                {providersPage.headline}
              </h1>
              <p className="mt-5 text-ink-600">{providersPage.body}</p>

              <p className="mt-4 rounded-xl border border-ink-200 bg-paper-muted p-4 text-sm text-ink-700">
                {providersPage.pilotFocusNote}
              </p>

              <div className="mt-6 rounded-2xl bg-paper-muted p-5 shadow-sm">
                <h2 className="font-semibold text-ink-900">{providersPage.pilotNote.heading}</h2>
                <p className="mt-2 text-sm text-ink-600">{providersPage.pilotNote.body}</p>
                <p className="mt-2 text-sm text-ink-500">{providersPage.pilotNote.constraints}</p>
                <ProviderPilotCta placement="providers_page" className="mt-3" />
              </div>

              <p className="mt-4 text-sm text-ink-400">
                Want more detail first?{" "}
                <Link href="/for-providers" className="text-accent underline underline-offset-2">
                  Read more for providers
                </Link>{" "}
                or see the{" "}
                <Link href="/faq" className="text-accent underline underline-offset-2">
                  FAQ
                </Link>
                .
              </p>

              <p className="mt-1 text-sm text-ink-400">
                Looking for model opportunities instead?{" "}
                <Link href="/models" className="text-accent underline underline-offset-2">
                  Join London Early Access
                </Link>
                .
              </p>
            </div>

            <div id="provider-form" className="scroll-mt-24 rounded-2xl border border-ink-100 bg-white p-6 shadow-sm sm:p-8">
              <ProviderForm />
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
