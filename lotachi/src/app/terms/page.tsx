import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for the Lotachi pre-launch website.",
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Section ariaLabel="Terms of use">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">Terms</h1>
            <p className="mt-2 text-sm text-ink-400">Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long" })}</p>

            <div className="mt-10 flex flex-col gap-8 text-ink-600">
              <p>
                This website (lotachi.com) is a pre-launch informational site for Lotachi. Lotachi is
                not yet operating as a live marketplace: no bookings, payments or provider listings are
                available through this site.
              </p>

              <section>
                <h2 className="text-lg font-semibold text-ink-900">Use of this site</h2>
                <p className="mt-2">
                  You may browse this site and submit the model waitlist or training provider waitlist
                  forms to express interest in Lotachi. Submitting a form does not create a contract,
                  booking, membership or partnership of any kind.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-ink-900">No medical or clinical advice</h2>
                <p className="mt-2">
                  Nothing on this site constitutes medical, clinical or safety advice. Any future
                  treatment suitability, consultation, consent and delivery decisions remain the
                  responsibility of the individual treating provider.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-ink-900">Accuracy</h2>
                <p className="mt-2">
                  This site describes Lotachi&apos;s direction and intentions during a validation stage.
                  Features, categories and terminology may change before public launch.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-ink-900">Contact</h2>
                <p className="mt-2">
                  Questions about these terms can be sent to{" "}
                  <a href={`mailto:${siteConfig.emails.general}`} className="text-accent hover:underline">
                    {siteConfig.emails.general}
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-ink-900">A note on scope</h2>
                <p className="mt-2">
                  These terms are an early, plain-language placeholder appropriate for a pre-launch
                  informational site. They will be replaced with full terms of service ahead of public
                  launch.
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
