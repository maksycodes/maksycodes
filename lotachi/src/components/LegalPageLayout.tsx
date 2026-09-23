import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/ui/Section";

type LegalSection = { heading: string; body?: string; list?: string[]; flag?: string };
type LegalDoc = {
  heading: string;
  intro?: string;
  sections: LegalSection[];
};

export function LegalPageLayout({ doc }: { doc: LegalDoc }) {
  const lastUpdated = new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long" });

  return (
    <>
      <Nav />
      <main id="main-content">
        <Section ariaLabel={doc.heading} watermark>
          <div className="mx-auto max-w-2xl">
            <h1 className="text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">{doc.heading}</h1>
            <p className="mt-2 text-sm text-ink-400">Last updated: {lastUpdated}</p>

            {doc.intro && <p className="mt-6 text-ink-600">{doc.intro}</p>}

            <div className="mt-10 flex flex-col gap-8 text-ink-600">
              {doc.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-lg font-semibold text-ink-900">{section.heading}</h2>
                  {section.body && <p className="mt-2">{section.body}</p>}
                  {section.list && (
                    <ul className="mt-2 flex flex-col gap-1.5">
                      {section.list.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {/* section.flag holds internal solicitor-review notes — see
                      src/content/legal.ts. Deliberately not rendered here;
                      these are notes for LOTACHI/its advisors, not visitors. */}
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
