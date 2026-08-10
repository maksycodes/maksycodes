import { faq } from "@/content/site";
import { Section, Eyebrow } from "./ui/Section";

export function FAQ() {
  return (
    <Section id={faq.id} ariaLabel="Frequently asked questions" className="border-b border-ink-100 bg-paper-muted">
      <Eyebrow>{faq.eyebrow}</Eyebrow>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">{faq.heading}</h2>

      <div className="mt-10 flex max-w-3xl flex-col divide-y divide-ink-200 border-t border-b border-ink-200">
        {faq.items.map((item) => (
          <details key={item.question} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-ink-900">
              {item.question}
              <span aria-hidden="true" className="shrink-0 text-ink-400 transition-transform group-open:rotate-45">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2v14M2 9h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
            </summary>
            <p className="mt-3 text-ink-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
