import type { Metadata } from "next";
import Link from "next/link";
import { modelsPage } from "@/content/models";
import { siteConfig } from "@/content/global";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { SocialLinks } from "@/components/SocialLinks";
import { ModelForm } from "@/components/forms/ModelForm";

export const metadata: Metadata = {
  title: modelsPage.metaTitle,
  description: modelsPage.metaDescription,
};

export default function ModelsPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Section ariaLabel="Join as a model" watermark>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <Badge tone="accent">{modelsPage.eyebrow}</Badge>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
                {modelsPage.headline}
              </h1>
              <p className="mt-5 text-ink-600">{modelsPage.body}</p>

              <p className="mt-4 rounded-xl border border-ink-200 bg-paper-muted p-4 text-sm text-ink-700">
                {modelsPage.pilotFocusNote}
              </p>

              <p className="mt-4 text-sm text-ink-500">{modelsPage.note}</p>
              <p className="mt-2 text-sm text-ink-500">{modelsPage.privacyNote}</p>
              <p className="mt-2 text-sm text-ink-500">{modelsPage.paymentNote}</p>
              <p className="mt-2 text-sm text-ink-500">{modelsPage.ageNote}</p>

              <div className="mt-6 rounded-2xl border border-ink-100 bg-white p-5 shadow-sm">
                <h2 className="text-sm font-semibold text-ink-900">{modelsPage.social.heading}</h2>
                <p className="mt-2 text-sm text-ink-600">{modelsPage.social.body}</p>
                <SocialLinks className="mt-3 [&_a]:border-ink-200 [&_a]:text-ink-600 [&_a:hover]:border-ink-900 [&_a:hover]:text-ink-900" />
              </div>

              <p className="mt-4 text-sm text-ink-400">
                Not ready to sign up yet?{" "}
                <Link href="/how-it-works" className="text-accent underline underline-offset-2">
                  See how it works
                </Link>{" "}
                or read the{" "}
                <Link href="/faq" className="text-accent underline underline-offset-2">
                  FAQ
                </Link>
                .
              </p>

              <p className="mt-1 text-sm text-ink-400">
                Interested in listing opportunities instead?{" "}
                <Link href="/providers" className="text-accent underline underline-offset-2">
                  Become a Founding Provider
                </Link>
                .
              </p>
            </div>

            <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-lg font-semibold text-ink-900">{modelsPage.formHeading}</h2>
              <p className="mt-1 text-sm text-ink-500">{modelsPage.formIntro}</p>
              <div className="mt-6">
                <ModelForm />
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
