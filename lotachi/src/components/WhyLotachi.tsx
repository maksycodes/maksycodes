import { whyLotachi } from "@/content/site";
import { Section, Eyebrow } from "./ui/Section";

function Card({ heading, items }: { heading: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-ink-100 bg-white p-8">
      <h3 className="text-xl font-semibold text-ink-900">{heading}</h3>
      <ul className="mt-5 flex flex-col gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-ink-600">
            <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function WhyLotachi() {
  return (
    <Section id="for-models" ariaLabel="Why Lotachi" className="border-b border-ink-100">
      <Eyebrow>{whyLotachi.eyebrow}</Eyebrow>
      <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
        {whyLotachi.heading}
      </h2>
      <p className="mt-4 max-w-2xl text-ink-500">{whyLotachi.intro}</p>

      <div id="for-providers" className="mt-12 grid gap-6 sm:grid-cols-2">
        <Card heading={whyLotachi.models.heading} items={whyLotachi.models.items} />
        <Card heading={whyLotachi.providers.heading} items={whyLotachi.providers.items} />
      </div>
    </Section>
  );
}
