import { trust } from "@/content/home";
import { Section, Eyebrow } from "../ui/Section";

function List({ heading, items, tone }: { heading: string; items: string[]; tone: "does" | "doesNot" }) {
  return (
    <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm sm:p-8">
      <h3 className="text-sm font-semibold text-ink-900">{heading}</h3>
      <ul className="mt-4 flex flex-col gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm text-ink-600">
            <span aria-hidden="true" className={`mt-0.5 shrink-0 ${tone === "does" ? "text-accent" : "text-ink-400"}`}>
              {tone === "does" ? "✓" : "✕"}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TrustSection() {
  return (
    <Section id="trust" ariaLabel="Trust and safety" className="border-b border-ink-100 bg-paper-muted">
      <Eyebrow>{trust.eyebrow}</Eyebrow>
      <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">{trust.heading}</h2>
      <p className="mt-5 max-w-2xl rounded-xl border border-ink-200 bg-white p-5 text-ink-700">{trust.statement}</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <List heading="What LOTACHI does" items={trust.does} tone="does" />
        <List heading="What LOTACHI does not do" items={trust.doesNot} tone="doesNot" />
      </div>

      <div className="mt-8 max-w-2xl">
        <h3 className="text-sm font-semibold text-ink-900">Principles we&apos;re building around</h3>
        <ul className="mt-4 flex flex-col gap-2">
          {trust.principles.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-ink-600">
              <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
