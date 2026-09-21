import type { Metadata } from "next";
import { aboutPage } from "@/content/about";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: aboutPage.metaTitle,
  description: aboutPage.metaDescription,
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Section ariaLabel="About LOTACHI">
          <div className="max-w-2xl">
            <Badge tone="accent">{aboutPage.eyebrow}</Badge>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">{aboutPage.heading}</h1>
            <p className="mt-5 text-ink-600">{aboutPage.intro}</p>

            <div className="mt-10 flex flex-col gap-8">
              <div>
                <h2 className="text-lg font-semibold text-ink-900">{aboutPage.vision.heading}</h2>
                <p className="mt-2 text-ink-600">{aboutPage.vision.body}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-ink-900">{aboutPage.stage.heading}</h2>
                <p className="mt-2 text-ink-600">{aboutPage.stage.body}</p>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
