// Homepage copy.

import type { OpportunityListing } from "@/types/opportunity";

export const hero = {
  eyebrow: "Early access",
  headline: "Find model opportunities. Find the right models.",
  body: "Get early access to free, discounted and other model opportunities in hair, beauty and aesthetics — with clearer information about price, supervision, eligibility and photo use, before you commit.",
  ctaModel: { label: "Join as a Model", href: "/models" },
  ctaProvider: { label: "Join as a Provider", href: "/providers" },
  ctaHowItWorks: { label: "How It Works", href: "/how-it-works" },
};

export const problem = {
  eyebrow: "Why LOTACHI exists",
  heading: "Model opportunities are scattered.",
  body: "Model opportunities are scattered across social media, mailing lists, provider databases and informal channels — making them difficult to discover for models and repetitive to manage for providers. LOTACHI is being built as one structured place to discover, match and manage model opportunities.",
  points: [
    { label: "Discovery", body: "One place to find opportunities, instead of many separate channels." },
    { label: "Matching", body: "Being built to surface opportunities to people more likely to be a fit." },
    { label: "Location & availability", body: "Filtering by where you are and when you're free, as the opportunity feed develops." },
    { label: "Eligibility", body: "Clearer requirements shown up front, where a provider sets them." },
    { label: "Last-minute needs", body: "A better way to fill gaps that come up at short notice." },
    { label: "Reduced admin", body: "Aiming to reduce time spent repeating the same recruitment process manually." },
  ],
};

export const whyModels = {
  eyebrow: "Why models may like LOTACHI",
  heading: "One place to discover opportunities.",
  items: [
    "Discover opportunities in one place",
    "Find discounted and free opportunities",
    "Filter by location, price and availability, as the opportunity feed develops",
    "Hear about last-minute opportunities during the pilot",
    "See clear provider information",
    "Only receive opportunities relevant to your interests, where possible",
  ],
  cta: { label: "Join as a Model", href: "/models" },
};

export const whyProviders = {
  eyebrow: "Why providers may like LOTACHI",
  heading: "A wider, more organised pool of models.",
  items: [
    "Being built to reach a wider pool of potential models",
    "Structured model information",
    "Being built to match more precisely against your requirements",
    "Support with last-minute or difficult-to-fill appointments during the pilot",
    "Aiming to reduce repetitive admin",
    "A pool of returning models — planned for later",
    "Eventually, more systematic management of model opportunities",
  ],
  cta: { label: "Join as a Provider", href: "/providers" },
};

export const trust = {
  eyebrow: "Trust & safety",
  heading: "What LOTACHI does — and what it doesn't.",
  statement:
    "LOTACHI helps people discover and connect with opportunities. Treatment suitability, consent, supervision and clinical decisions remain the responsibility of the relevant provider or qualified professional.",
  corePoints: [
    "LOTACHI is not the treatment or training provider — that responsibility sits with the provider you connect with.",
    "LOTACHI does not make clinical suitability decisions, and never infers suitability from photos or appearance.",
    "Providers remain responsible for consultation, consent, supervision, delivery and aftercare.",
    "Photo/video consent is always requested separately from treatment consent — never combined.",
    "Provider verification may be introduced or expanded as LOTACHI develops.",
  ],
  moreLink: { label: "Read the full trust & safety detail", href: "/safety" },
};

export const transparency = {
  id: "model-transparency",
  eyebrow: "Model transparency",
  heading: "Being a model can mean different things at different providers.",
  message: "Know what you're agreeing to before you book.",
  intro:
    "What 'being a model' involves varies a lot — who performs the service, how it's priced, whether photos are taken and what they're used for, what aftercare looks like. LOTACHI's goal is to make those differences clear on every listing, before you book, not after.",
  fields: [
    { label: "Why a model is needed", body: "Training, assessment, demonstration, portfolio, content creation and more — shown plainly, not left for you to guess." },
    { label: "Who performs it, and supervision", body: "Whether it's a student, newly qualified practitioner or experienced professional, and how they're supervised." },
    { label: "Pricing", body: "The model price, and a comparable standard price where the provider has given one." },
    { label: "Duration and eligibility", body: "How long to expect, and any requirements the provider has set." },
    { label: "Photos and video", body: "Whether any will be taken, exactly what they may be used for, and whether your face would be identifiable." },
    { label: "Aftercare and contact", body: "Provider-specific aftercare attached to your booking, and how to reach the provider afterwards." },
  ],
  mediaDistinction: {
    heading: "Treatment consent and media consent are not the same thing.",
    body: "Agreeing to a treatment or training session is separate from agreeing to be photographed or filmed. Where a provider wants to take photos or video, that's always asked for as its own, separate consent — never bundled in with anything else.",
  },
  appearanceNote:
    "Providers can state which hair types, skin types or other characteristics they're specifically seeking or equipped to work with. LOTACHI does not infer whether you're suitable for an opportunity from photos or appearance alone — that's for the provider to assess directly.",
};

export const earlyAccess = {
  eyebrow: "Early access",
  heading: "Help build LOTACHI from the start.",
  body: "LOTACHI is currently building its founding model and provider community while testing real model-filling workflows. Join now and help shape the platform.",
  badge: "Founding Models & Early Provider Partners",
  ctaModel: { label: "Join as a Model", href: "/models" },
  ctaProvider: { label: "Join as a Provider", href: "/providers" },
};

// Illustrative only — not live opportunities. Every card using this data
// must be labelled "Example opportunity" in the UI. Shaped to the
// OpportunityListing type (src/types/opportunity.ts) so the cards
// demonstrate the transparency a real listing is designed to provide.
export const exampleOpportunities: OpportunityListing[] = [
  {
    id: "example-hair-colour-correction",
    category: "Hair",
    title: "Colour correction — model needed",
    location: "Manchester",
    reason: "Training",
    performedBy: "Final-stage hairdressing student",
    supervision: "Supervised throughout by a qualified tutor",
    priceType: "Free",
    modelPrice: "Free",
    comparablePrice: "£85–£120 at standard salon rate",
    durationMinutes: 180,
    eligibility: ["Hair not chemically coloured within the last 4 weeks"],
    modelCharacteristicsSought: "Looking for a range of hair types and lengths — ask if you're unsure whether yours fits",
    media: { photosOrVideoTaken: true, usage: ["Training records", "Portfolio"], faceIdentifiable: false, requiresSeparateConsent: true },
    aftercareProvided: true,
    cancellationPolicy: "Please give at least 48 hours' notice if you can't attend",
    notice: "This week",
  },
  {
    id: "example-aesthetics-consultation",
    category: "Aesthetics",
    title: "Consultation & assessment practice",
    location: "London",
    reason: "Assessment",
    performedBy: "Qualified aesthetics practitioner completing an assessment module",
    supervision: "Assessed by an external examiner; the practitioner is already qualified",
    priceType: "Discounted",
    modelPrice: "£20",
    comparablePrice: "£60 standard consultation rate",
    durationMinutes: 45,
    eligibility: ["Full consultation carried out before anything proceeds"],
    modelCharacteristicsSought: null,
    media: { photosOrVideoTaken: true, usage: ["Clinical notes", "Assessment"], faceIdentifiable: true, requiresSeparateConsent: true },
    aftercareProvided: true,
    cancellationPolicy: "At least 24 hours' notice requested",
    notice: "Flexible dates",
  },
  {
    id: "example-spmu-portfolio-brows",
    category: "SPMU",
    title: "Portfolio session — brows",
    location: "Birmingham",
    reason: "Portfolio",
    performedBy: "Newly qualified SPMU practitioner",
    supervision: "Working independently as a newly qualified practitioner; academy remains available for support",
    priceType: "Free",
    modelPrice: "Free",
    comparablePrice: "£150–£250 typical studio rate",
    durationMinutes: 120,
    eligibility: ["Not currently pregnant or breastfeeding", "No previous SPMU in the treatment area"],
    modelCharacteristicsSought: "Looking for a range of brow shapes and skin tones for portfolio variety",
    media: { photosOrVideoTaken: true, usage: ["Portfolio", "Social media"], faceIdentifiable: true, requiresSeparateConsent: true },
    aftercareProvided: true,
    cancellationPolicy: "This slot is last-minute — please only apply if you can definitely attend",
    notice: "Last-minute",
  },
  {
    id: "example-nails-newly-qualified",
    category: "Nails",
    title: "Newly qualified practitioner practice",
    location: "Leeds",
    reason: "Newly qualified practitioner",
    performedBy: "Newly qualified nail technician",
    supervision: "Salon owner available on-site throughout",
    priceType: "Discounted",
    modelPrice: "£20",
    comparablePrice: "£45 standard salon price",
    durationMinutes: 60,
    eligibility: ["No known nail or skin conditions affecting the treatment area"],
    modelCharacteristicsSought: null,
    media: { photosOrVideoTaken: false, usage: [], faceIdentifiable: false, requiresSeparateConsent: false },
    aftercareProvided: true,
    cancellationPolicy: "Please give at least 24 hours' notice",
    notice: "Next 2 weeks",
  },
];

export const comingSoonFeed = {
  eyebrow: "Coming soon",
  heading: "A preview of what the opportunity feed could look like.",
  body: "These are example opportunities to illustrate the idea — not opportunities you can currently book. Open “See full details” on any card to see the kind of transparency a real listing is designed to give you.",
};
