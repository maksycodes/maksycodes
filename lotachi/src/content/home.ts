// Homepage copy.

import type { OpportunityListing } from "@/types/opportunity";

export const hero = {
  eyebrow: "London early access",
  headline: "Find model opportunities. Find the right models.",
  body: "LOTACHI connects Chi Chis — the people who take part in model opportunities — with training providers who need suitable, reliable models. We're building our founding community in hair, beauty, aesthetics, nails and SPMU, starting in London.",
  ctaModel: { label: "Join as a Chi Chi", href: "/models" },
  ctaProvider: { label: "Become a Founding Provider", href: "/providers" },
  ctaHowItWorks: { label: "How It Works", href: "/how-it-works" },
};

export const chiChiHowItWorks = {
  eyebrow: "For Chi Chis",
  heading: "How it works, as a Chi Chi.",
  intro: "A Chi Chi is what we call anyone in the LOTACHI community looking for a model opportunity — you're a Chi Chi even before you're matched to a specific one.",
  steps: [
    { number: "01", title: "Discover", body: "Browse the kind of model opportunities available near you — training, assessments, portfolio work and more.", stage: "pilot" as const },
    { number: "02", title: "Check requirements", body: "See who's looking, what's involved, and what's expected before you commit to anything.", stage: "pilot" as const },
    { number: "03", title: "Join or express interest", body: "Full in-platform booking is coming with the LOTACHI marketplace. Today, join early access and we'll be in touch about relevant opportunities.", stage: "future" as const },
    { number: "04", title: "Attend", body: "Turn up, take part, and get the aftercare and contact details the provider has given you.", stage: "pilot" as const },
  ],
};

export const whyModels = {
  eyebrow: "Why Chi Chis choose LOTACHI",
  heading: "One place to discover model opportunities.",
  items: [
    "Discover opportunities in one place",
    "Find discounted and free opportunities",
    "Filter by location, price and availability, as the opportunity feed develops",
    "Hear about last-minute opportunities during the pilot",
    "See clear provider information",
    "Only receive opportunities relevant to your interests, where possible",
  ],
  cta: { label: "Join as a Chi Chi", href: "/models" },
};

export const providerProblem = {
  eyebrow: "The provider problem",
  heading: "Still finding models through WhatsApp, Instagram, spreadsheets and old databases?",
  body: "Most providers recruit models the same fragmented way: a post here, a message there, a spreadsheet nobody keeps up to date. It works until it doesn't — an unsuitable enquiry, a specialist requirement nobody in your database fits, a cancellation the night before a session.",
  points: [
    { label: "Unsuitable enquiries", body: "Hours spent replying to people who were never going to be a fit." },
    { label: "Difficult-to-fill requirements", body: "Specific hair, skin or treatment needs your usual channels rarely cover." },
    { label: "No-shows and late cancellations", body: "A session at risk with no quick way to find a replacement." },
    { label: "Staff time", body: "Recruiting models manually instead of running your business." },
    { label: "Fragmented communication", body: "Enquiries scattered across DMs, group chats and inboxes with no shared record." },
  ],
  positioning: "LOTACHI is being built as the model recruitment and workflow layer that sits alongside how you already run training — not another database to maintain, but a way to reach more of the right people, faster.",
};

export const whyProviders = {
  eyebrow: "Why providers choose LOTACHI",
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
  cta: { label: "Become a Founding Provider", href: "/providers" },
};

export const founderHome = {
  eyebrow: "Why LOTACHI exists",
  heading: "Founded by Amaka Ananti.",
  body: "LOTACHI is being built from first-hand experience of the fragmented way model opportunities are currently discovered and managed — after taking part in them herself, and hearing the same story from tutors, academies, clinics and salons.",
  cta: { label: "Read more about LOTACHI", href: "/about" },
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
    "Providers will be required to meet LOTACHI's onboarding requirements for their service and location.",
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
  eyebrow: "London early access",
  heading: "Help build LOTACHI from the start.",
  body: "LOTACHI is currently building its founding Chi Chi and provider community in London, while testing real model-filling workflows. Join now and help shape the platform.",
  badge: "Founding Chi Chis & Provider Partners",
  ctaModel: { label: "Join as a Chi Chi", href: "/models" },
  ctaProvider: { label: "Become a Founding Provider", href: "/providers" },
};

// Illustrative only — not live opportunities. Every card using this data
// must be labelled "Illustrative example — not a live listing" in the UI.
// Shaped to the OpportunityListing type (src/types/opportunity.ts) so the
// cards demonstrate the transparency a real listing is designed to provide.
// One example per launch category (Hair, Beauty, Aesthetics, Nails, SPMU).
// Titles follow a consistent "[context] — [specific treatment]" pattern —
// naming the actual technique (e.g. "Russian lip filler", "BIAB") rather
// than a generic category description. `subcategory` carries that same
// specific treatment type; for Beauty/Aesthetics this is also what would
// let Skin become its own top-level category later if volume justifies it.
export const exampleOpportunities: OpportunityListing[] = [
  {
    id: "example-hair-urgent-colour",
    category: "Hair",
    subcategory: "Balayage",
    title: "Urgent training session — balayage colour correction",
    location: "London",
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
    cancellationPolicy: "This slot is last-minute — please only apply if you can definitely attend",
    notice: "Tomorrow",
  },
  {
    id: "example-beauty-chemical-peel",
    category: "Beauty",
    subcategory: "Chemical peel",
    title: "Free training session — chemical peel",
    location: "London",
    reason: "Training",
    performedBy: "Beauty therapy student",
    supervision: "Supervised throughout by a qualified tutor",
    priceType: "Free",
    modelPrice: "Free",
    comparablePrice: null,
    durationMinutes: 60,
    eligibility: ["Full consultation carried out before anything proceeds", "No active skin infections in the treatment area"],
    modelCharacteristicsSought: null,
    media: { photosOrVideoTaken: true, usage: ["Training records"], faceIdentifiable: false, requiresSeparateConsent: true },
    aftercareProvided: true,
    cancellationPolicy: "At least 24 hours' notice requested",
    notice: "This week",
  },
  {
    id: "example-aesthetics-lip-filler",
    category: "Aesthetics",
    subcategory: "Russian lip filler",
    title: "Discounted training session — Russian lip filler",
    location: "London",
    reason: "Training",
    performedBy: "Aesthetics practitioner in training",
    supervision: "Supervised throughout by a qualified aesthetics tutor",
    priceType: "Discounted",
    modelPrice: "£40",
    comparablePrice: "£180 standard clinic rate",
    durationMinutes: 45,
    eligibility: ["Full consultation carried out before anything proceeds", "Not currently pregnant or breastfeeding"],
    modelCharacteristicsSought: null,
    media: { photosOrVideoTaken: true, usage: ["Clinical notes", "Training records"], faceIdentifiable: true, requiresSeparateConsent: true },
    aftercareProvided: true,
    cancellationPolicy: "At least 24 hours' notice requested",
    notice: "Flexible dates",
  },
  {
    id: "example-nails-newly-qualified",
    category: "Nails",
    subcategory: "BIAB",
    title: "Newly qualified practitioner — BIAB application on hands",
    location: "London",
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
  {
    id: "example-spmu-portfolio-brows",
    category: "SPMU",
    subcategory: "Nanoblading",
    title: "Portfolio session — nanobladed brows",
    location: "London",
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
];

export const comingSoonFeed = {
  eyebrow: "Coming soon",
  heading: "A preview of what the opportunity feed could look like.",
  body: "These are example opportunities to illustrate the idea — not opportunities you can currently book. Open “See full details” on any card to see the kind of transparency a real listing is designed to give you.",
};
