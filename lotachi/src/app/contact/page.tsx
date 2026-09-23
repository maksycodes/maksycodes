import type { Metadata } from "next";
import { contactPage } from "@/content/contact";
import { siteConfig } from "@/content/global";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: contactPage.metaTitle,
  description: contactPage.metaDescription,
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Section ariaLabel="Contact" watermark>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Badge tone="accent">{contactPage.eyebrow}</Badge>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">{contactPage.heading}</h1>
              <p className="mt-5 text-ink-600">{contactPage.body}</p>

              <dl className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-12">
                <div>
                  <dt className="text-sm text-ink-400">General enquiries</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${siteConfig.emails.general}`} className="text-lg font-medium text-accent hover:underline">
                      {siteConfig.emails.general}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-ink-400">Provider enquiries</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${siteConfig.emails.providers}`} className="text-lg font-medium text-accent hover:underline">
                      {siteConfig.emails.providers}
                    </a>
                  </dd>
                </div>
              </dl>

              <div id="partnerships" className="mt-10 rounded-2xl bg-paper-muted p-6 shadow-sm scroll-mt-24">
                <h2 className="font-semibold text-ink-900">{contactPage.partnerships.heading}</h2>
                <p className="mt-2 text-sm text-ink-600">{contactPage.partnerships.body}</p>
              </div>

              <div id="feedback" className="mt-6 rounded-2xl bg-paper-muted p-6 shadow-sm scroll-mt-24">
                <h2 className="font-semibold text-ink-900">{contactPage.feedback.heading}</h2>
                <p className="mt-2 text-sm text-ink-600">{contactPage.feedback.body}</p>
              </div>
            </div>

            <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm sm:p-8">
              <ContactForm />
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
