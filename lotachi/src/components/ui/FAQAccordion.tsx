type FaqItem = { question: string; answer: string };

export function FAQAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="flex flex-col divide-y divide-ink-200 border-t border-b border-ink-200">
      {items.map((item) => (
        <details key={item.question} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-ink-900">
            {item.question}
            <span aria-hidden="true" className="shrink-0 text-ink-400 transition-transform group-open:rotate-45">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 2v14M2 9h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
          </summary>
          <p className="mt-3 text-ink-600 motion-safe:group-open:animate-rise-in">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
