import { legalReviewNotice } from "@/content/legal";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/ui/Section";

type LegalDoc = {
  heading: string;
  sections: { heading: string; body: string }[];
};

export function LegalPageLayout({ doc }: { doc: LegalDoc }) {
  const lastUpdated = new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long" });

  return (
    <>
      <Nav />
      <main id="main-content">
        <Section ariaLabel={doc.heading}>
          <div className="mx-auto max-w-2xl">
            <h1 className="text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">{doc.heading}</h1>
            <p className="mt-2 text-sm text-ink-400">Last updated: {lastUpdated}</p>

            <p role="note" className="mt-6 rounded-xl border border-ink-200 bg-paper-muted p-4 text-sm text-ink-600">
              {legalReviewNotice}
            </p>

            <div className="mt-10 flex flex-col gap-8 text-ink-600">
              {doc.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-lg font-semibold text-ink-900">{section.heading}</h2>
                  <p className="mt-2">{section.body}</p>
                </section>
              ))}
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
