import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Lotachi collects, uses and stores information during pre-launch validation.",
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Section ariaLabel="Privacy policy">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">Privacy</h1>
            <p className="mt-2 text-sm text-ink-400">Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long" })}</p>

            <div className="mt-10 flex flex-col gap-8 text-ink-600">
              <p>
                Lotachi is currently in pre-launch validation. This page explains what information we
                collect through this website, why we collect it, and how you can ask us to delete it.
                It will be replaced with a fuller privacy policy ahead of public launch.
              </p>

              <section>
                <h2 className="text-lg font-semibold text-ink-900">What we collect</h2>
                <p className="mt-2">
                  If you join the model waitlist, we collect your first name, email address, postcode or
                  city, and any treatment categories you select.
                </p>
                <p className="mt-2">
                  If you join the training provider waitlist, we collect your name, organisation, job
                  title, email address, city, and any of the following you choose to provide: phone
                  number, website, training categories, approximate training volume, best time to
                  contact, whether you&apos;re open to a short research conversation, and any message you
                  send.
                </p>
                <p className="mt-2">
                  We do not ask for, and you should not submit, any medical or treatment-history
                  information through these forms.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-ink-900">Why we collect it</h2>
                <p className="mt-2">
                  We use this information to build a pre-launch waitlist, to contact you about
                  Lotachi&apos;s development, and — for training providers — to run short research
                  conversations about current practical-training and model-recruitment practices. We
                  only contact you about research if you tell us you&apos;re open to it.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-ink-900">Where it&apos;s stored</h2>
                <p className="mt-2">
                  Waitlist submissions are processed by our form provider, Formspree, and delivered to
                  Lotachi&apos;s email inbox. We do not sell or share this information with third parties for
                  marketing purposes.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-ink-900">Requesting deletion</h2>
                <p className="mt-2">
                  You can ask us to delete your information at any time by emailing{" "}
                  <a href={`mailto:${siteConfig.emails.general}`} className="text-accent hover:underline">
                    {siteConfig.emails.general}
                  </a>{" "}
                  from the email address you submitted. We&apos;ll confirm once it&apos;s been removed.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-ink-900">A note on scope</h2>
                <p className="mt-2">
                  This is an early-stage, plain-language description of our current practices, not a
                  formal legal compliance statement. It will be reviewed and expanded as Lotachi
                  develops.
                </p>
              </section>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
