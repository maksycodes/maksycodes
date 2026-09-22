// Shared types describing what a real LOTACHI opportunity listing — and a
// completed booking's aftercare — are designed to hold once the platform is
// live. Nothing on the current site reads live data against these types;
// the example opportunity cards on the homepage are static content shaped
// to match them, so the UI already demonstrates the transparency a real
// listing will provide. See src/content/home.ts for the example data and
// src/components/ui/OpportunityCard.tsx for how it's rendered.
//
// Core principle this schema exists to enforce: "Know what you're agreeing
// to before you book." Treatment consent and media/content consent are
// always modelled as separate fields — never combined into one flag.

export type ModelReason =
  | "Training"
  | "Assessment"
  | "Demonstration"
  | "Portfolio"
  | "Social-media/content creation"
  | "Newly qualified practitioner"
  | "New service/treatment"
  | "Other";

export type PriceType = "Free" | "Discounted" | "Paid" | "Expenses only";

export type MediaUsage =
  | "Clinical notes"
  | "Training records"
  | "Assessment"
  | "Portfolio"
  | "Website"
  | "Social media"
  | "Paid advertising";

// Media/content consent is deliberately its own object, separate from
// treatment consent, which sits with the provider's own consultation
// process and is never represented by LOTACHI as a single "I consent" tick.
export type MediaConsent = {
  photosOrVideoTaken: boolean;
  // Empty when photosOrVideoTaken is false. Only the uses a provider has
  // actually said apply to this opportunity — never inferred or assumed.
  usage: MediaUsage[];
  faceIdentifiable: boolean;
  // True whenever photosOrVideoTaken is true: media consent must always be
  // requested as its own, separate step from treatment consent.
  requiresSeparateConsent: boolean;
};

// Attached to a completed booking once the platform supports bookings.
// providerInstructions must come from the provider who delivered the
// session — LOTACHI does not author or auto-generate aftercare content on
// a provider's behalf, generic or otherwise.
export type BookingAftercare = {
  providerInstructions: string | null;
  attachedAt: string | null; // ISO date the provider added it
  providerContact: {
    method: string; // e.g. "Phone", "Email", "In-app message"
    detail: string;
  } | null;
};

export type OpportunityListing = {
  id: string;
  category: string;
  title: string;
  location: string;

  // Why the model is required — shown up front, not inferred.
  reason: ModelReason;

  // Who performs the service and how they're supervised. Free text because
  // supervision arrangements vary a lot by provider and category.
  performedBy: string;
  supervision: string;

  priceType: PriceType;
  modelPrice: string;
  // Only shown when the provider has actually supplied a comparable price.
  comparablePrice: string | null;

  durationMinutes: number;

  // Short, plain-language eligibility requirements as set by the provider.
  eligibility: string[];

  // Optional: characteristics a provider is specifically seeking or
  // equipped to work with (e.g. a hair type, skin type or Fitzpatrick
  // range). Never used by LOTACHI to infer suitability on its own —
  // suitability is always confirmed by the provider directly.
  modelCharacteristicsSought: string | null;

  media: MediaConsent;

  aftercareProvided: boolean;
  cancellationPolicy: string;

  notice: string; // e.g. "This week", "Last-minute"
};
