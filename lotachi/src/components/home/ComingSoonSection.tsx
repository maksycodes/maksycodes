import { comingSoonFeed, exampleOpportunities } from "@/content/home";
import { Section, Eyebrow } from "../ui/Section";
import { OpportunityCard } from "../ui/OpportunityCard";

export function ComingSoonSection() {
  return (
    <Section ariaLabel="Coming soon" className="border-b border-ink-100 bg-paper-muted">
      <Eyebrow>{comingSoonFeed.eyebrow}</Eyebrow>
      <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
        {comingSoonFeed.heading}
      </h2>
      <p className="mt-4 max-w-2xl text-ink-600">{comingSoonFeed.body}</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {exampleOpportunities.map((opportunity) => (
          <OpportunityCard key={opportunity.id} opportunity={opportunity} />
        ))}
      </div>
    </Section>
  );
}
