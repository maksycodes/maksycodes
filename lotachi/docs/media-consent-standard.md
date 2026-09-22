# LOTACHI Media & Photography Consent Standard (Draft)

**Status:** internal product/legal requirements document — not published on the
website. Not final legal advice; a UK-qualified solicitor should review this
before it's implemented in the product or relied on operationally.

**Purpose:** define, in one place, exactly what every LOTACHI opportunity
listing must disclose about photography and video, so that (a) providers know
what's required of them, (b) the product can be built to enforce it, and (c)
treatment consent and media consent are never collapsed into a single vague
tick-box.

This standard is already reflected in the public-facing site in three places,
which this document should stay consistent with:
- `src/types/opportunity.ts` — the `OpportunityListing`/`MediaConsent` data
  shape a real listing is designed to hold.
- The homepage "Model transparency" section and example opportunity cards
  (`src/content/home.ts`, `src/components/ui/OpportunityCard.tsx`).
- Provider Terms, "Photography, video and media consent"
  (`src/content/legal.ts`).

## The core rule

**Treatment consent and media consent are two separate things, and must never
be bundled into one consent statement or one tick-box.**

- A model agreeing to a treatment, training session, assessment or
  demonstration has **not**, by that act alone, agreed to be photographed or
  filmed.
- A model **declining** photography, video, or a specific use of it (for
  example, declining marketing/social-media use while accepting clinical
  record use) must **never** be treated or recorded as though they declined
  the treatment itself.
- Each use case below must be capable of being accepted or declined
  independently — a provider cannot present "clinical records" consent and
  "paid advertising" consent as a single bundled choice.

## Required disclosures per opportunity

Every opportunity listing must disclose, before a model applies or books:

1. **Whether photography/video is required or optional** for this specific
   opportunity (a provider cannot silently require it without saying so).
2. **Whether the model would be identifiable** (face visible / recognisable),
   as distinct from anonymised or close-up/body-part-only imagery.
3. **What the photography/video will be used for**, disclosed per category,
   not as one bundled "media use" line:
   - Clinical or client-record use (internal records tied to the treatment)
   - Teaching or assessment use (training records, external examiner
     evidence)
   - Portfolio use (the practitioner's own portfolio)
   - Website use (the provider's own website)
   - Organic social media use (unpaid posts on the provider's own channels)
   - Paid advertising use (any paid promotion/ad spend using the content)
4. **Whether content may remain published after the model withdraws consent**,
   where that's legally possible for the use in question (see the note on
   erasure below) — a provider must not represent withdrawal as guaranteeing
   immediate removal from every place content has been published if that
   isn't realistic or accurate for that use case.

## Consent mechanics

- Media consent must be captured as its own, explicit, affirmative step —
  never inferred from booking, attending, or agreeing to the treatment.
- Where a model consents to some uses (e.g. clinical records) but not others
  (e.g. paid advertising), the provider's records and any published content
  must respect that split — not treat "some consent" as "all consent."
- Consent should be revisitable: a model should be able to see what they
  agreed to, and how to ask a provider to reconsider or withdraw a specific
  use, once account/booking functionality exists.

## Implementation notes for the product

- The `MediaConsent` type already models `photosOrVideoTaken`,
  `usage: MediaUsage[]`, `faceIdentifiable`, and `requiresSeparateConsent` as
  independent fields — any future listing/booking UI should keep these as
  separate, independently-toggleable inputs, not a single free-text or
  single-checkbox field.
- A future consent-capture flow (once bookings exist) should record consent
  per usage category, with a timestamp, so a "some but not all" state is
  representable and auditable.
- A future withdrawal/erasure flow needs to distinguish "stop future use"
  from "remove already-published content," since the latter may not always
  be legally required or technically possible (see below).

## Points needing solicitor input before this becomes operational

- **UK GDPR Article 17 (right to erasure) interaction with published
  content.** If a model withdraws consent for, e.g., social media use after
  content has already been posted, what is LOTACHI's/the provider's
  obligation regarding already-published copies, cached versions, or
  third-party shares? This needs a documented, legally reviewed position
  before any real photography/video consent is captured.
- **Whether "clinical/client-record" retention can continue independently of
  withdrawn marketing consent** (i.e. a provider's own regulatory/insurance
  record-keeping obligations vs. a model's marketing opt-out) — likely yes,
  but the exact framing needs confirming.
- **Minors.** If models under 18 are ever permitted, photography/video
  consent almost certainly needs a parental/guardian consent layer — out of
  scope until the minimum-age policy (see the checklists document) is
  decided.
- **Special-category data.** Photographs of a person are, in some contexts,
  biometric or health-adjacent data under UK GDPR — confirm whether Article 9
  applies to any specific use case (e.g. clinical/treatment-area imagery)
  before implementation.
