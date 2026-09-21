import { Badge } from "./Badge";

export type ExampleOpportunity = {
  category: string;
  title: string;
  location: string;
  price: string;
  notice: string;
};

export function OpportunityCard({ opportunity }: { opportunity: ExampleOpportunity }) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-ink-100 bg-white p-6">
      <div className="flex items-start justify-between gap-3">
        <Badge>{opportunity.category}</Badge>
        <Badge tone="accent">Example opportunity</Badge>
      </div>
      <h3 className="text-lg font-semibold text-ink-900">{opportunity.title}</h3>
      <dl className="flex flex-col gap-1.5 text-sm">
        {[
          { label: "Location", value: opportunity.location },
          { label: "Price", value: opportunity.price },
          { label: "Notice", value: opportunity.notice },
        ].map((row) => (
          <div key={row.label} className="flex justify-between gap-3">
            <dt className="text-ink-400">{row.label}</dt>
            <dd className="font-medium text-ink-700">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
