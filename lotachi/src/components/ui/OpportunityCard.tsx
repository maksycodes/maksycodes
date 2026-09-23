import { Badge } from "./Badge";
import type { OpportunityListing } from "@/types/opportunity";

function formatDuration(minutes: number) {
  if (minutes < 60) return `${minutes} min`;
  const hours = minutes / 60;
  return hours === 1 ? "1 hour" : `${hours % 1 === 0 ? hours : hours.toFixed(1)} hours`;
}

export function OpportunityCard({ opportunity }: { opportunity: OpportunityListing }) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-ink-100 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <Badge>{opportunity.category}</Badge>
        <Badge tone="accent">Illustrative example — not a live listing</Badge>
      </div>
      <h3 className="text-lg font-semibold text-ink-900">{opportunity.title}</h3>

      <dl className="flex flex-col gap-1.5 text-sm">
        {[
          { label: "Needed for", value: opportunity.reason },
          { label: "Location", value: opportunity.location },
          { label: "Price", value: opportunity.comparablePrice ? `${opportunity.modelPrice} (illustrative comparison: ${opportunity.comparablePrice})` : opportunity.modelPrice },
          { label: "Duration", value: formatDuration(opportunity.durationMinutes) },
          { label: "Notice", value: opportunity.notice },
        ].map((row) => (
          <div key={row.label} className="flex justify-between gap-3">
            <dt className="text-ink-400">{row.label}</dt>
            <dd className="text-right font-medium text-ink-700">{row.value}</dd>
          </div>
        ))}
      </dl>

      <div className="flex flex-wrap gap-2">
        {opportunity.media.photosOrVideoTaken ? (
          <Badge>Photos/video taken</Badge>
        ) : (
          <Badge>No photos/video</Badge>
        )}
        {opportunity.aftercareProvided && <Badge>Aftercare provided</Badge>}
      </div>

      <details className="group mt-1 border-t border-ink-100 pt-3">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-medium text-ink-900">
          See full details
          <span aria-hidden="true" className="text-ink-400 transition-transform group-open:rotate-45">
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
              <path d="M9 2v14M2 9h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
        </summary>

        <div className="mt-4 flex flex-col gap-4 text-sm text-ink-600 motion-safe:group-open:animate-rise-in">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-ink-400">Who performs it</h4>
            <p className="mt-1">{opportunity.performedBy}</p>
            <p className="mt-1 text-ink-500">{opportunity.supervision}</p>
          </div>

          {opportunity.modelCharacteristicsSought && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-ink-400">Provider is seeking</h4>
              <p className="mt-1">{opportunity.modelCharacteristicsSought}</p>
            </div>
          )}

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-ink-400">Eligibility</h4>
            <ul className="mt-1 flex flex-col gap-1">
              {opportunity.eligibility.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-ink-400">Photos &amp; video</h4>
            {opportunity.media.photosOrVideoTaken ? (
              <>
                <p className="mt-1">
                  Used for: {opportunity.media.usage.join(", ")}. Face identifiable:{" "}
                  {opportunity.media.faceIdentifiable ? "yes" : "no"}.
                </p>
                <p className="mt-1 text-ink-500">
                  {opportunity.media.requiresSeparateConsent
                    ? "This is asked for as separate media consent — agreeing to the treatment does not mean agreeing to this."
                    : ""}
                </p>
              </>
            ) : (
              <p className="mt-1">No photos or video are taken for this opportunity.</p>
            )}
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-ink-400">Aftercare &amp; support</h4>
            <p className="mt-1">
              {opportunity.aftercareProvided
                ? "Written aftercare from the provider is attached once your booking is complete, along with how to contact them if you have a concern afterwards."
                : "No specific aftercare applies to this opportunity."}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-ink-400">Cancellations</h4>
            <p className="mt-1">{opportunity.cancellationPolicy}</p>
          </div>
        </div>
      </details>
    </div>
  );
}
