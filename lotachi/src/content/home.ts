// Homepage copy.

import type { OpportunityListing } from "@/types/opportunity";

export const hero = {
  eyebrow: "Early access",
  headline: "Find model opportunities. Find the right models.",
  body: "LOTACHI connects people with model opportunities and helps training providers find suitable people for practical sessions — starting with beauty, hair, aesthetics and wellness in the UK.",
  ctaModel: { label: "Join as a Model", href: "/models" },
  ctaProvider: { label: "Join as a Provider", href: "/providers" },
  ctaHowItWorks: { label: "How it works", href: "#how-it-works" },
};

export const modelSteps = {
  id: "how-it-works",
  eyebrow: "For models",
  heading: "How it works for models",
  steps: [
    {
      number: "01",
      title: "Tell us what you're interested in",
      body: "Share your categories, location and availability so we understand what you're looking for.",
    },
    {
      number: "02",
      title: "Discover or get matched with opportunities",
      body: "See opportunities as they become available, including free, discounted and last-minute options.",
    },
    {
      number: "03",
      title: "Book and attend with the provider",
      body: "Arrange the details directly with the provider, who manages eligibility and delivery.",
    },
  ],
  opportunityTypes: [
    "Free services",
    "Discounted services",
    "Last-minute opportunities",
    "Training sessions",
    "Demonstrations",
    "Portfolio opportunities",
  ],
  caveats: [
    "Availability varies by location, category and provider.",
    "Provider eligibility requirements still apply.",
    "LOTACHI does not make clinical suitability decisions — that remains with the provider.",
  ],
};

export const providerSteps = {
  eyebrow: "For providers",
  heading: "How it works for providers",
  steps: [
    {
      number: "01",
      title: "Tell LOTACHI what type of model you need",
      body: "Describe your categories, requirements and timing — regular sessions or one-off needs.",
    },
    {
      number: "02",
      title: "Reach potentially suitable people",
      body: "LOTACHI helps surface your requirement to people who match, beyond your existing database.",
    },
    {
      number: "03",
      title: "Manage interest, bookings and replacements more efficiently",
      body: "Handle interest and last-minute gaps with less back-and-forth than scattered group chats.",
    },
  ],
  audiences: [
    "Training academies",
    "Colleges",
    "Salons",
    "Clinics",
    "Educators",
    "Newly qualified professionals",
    "Practitioners building portfolios",
    "Organisations running practical training",
  ],
};

export const problem = {
  eyebrow: "Why LOTACHI exists",
  heading: "Model opportunities are scattered.",
  body: "Model opportunities are often scattered across social media, WhatsApp groups, mailing lists and individual provider databases. LOTACHI is building one place where opportunities can be easier to discover and providers can reach suitable people more efficiently.",
  points: [
    { label: "Discovery", body: "One place to find opportunities, instead of many separate channels." },
    { label: "Matching", body: "Surfacing opportunities to people who are more likely to be a fit." },
    { label: "Location & availability", body: "Filtering by where you are and when you're free." },
    { label: "Eligibility", body: "Clearer requirements shown up front, where a provider sets them." },
    { label: "Last-minute needs", body: "A better way to fill gaps that come up at short notice." },
    { label: "Reduced admin", body: "Less time spent repeating the same recruitment process manually." },
  ],
};

export const whyModels = {
  eyebrow: "Why models may like LOTACHI",
  heading: "One place to discover opportunities.",
  items: [
    "Discover opportunities in one place",
    "Find discounted and free opportunities",
    "Filter by location, price and availability",
    "Hear about last-minute opportunities",
    "See clear provider information",
    "Only receive opportunities relevant to your interests, where possible",
  ],
  cta: { label: "Join as a Model", href: "/models" },
};

export const whyProviders = {
  eyebrow: "Why providers may like LOTACHI",
  heading: "A wider, more organised pool of models.",
  items: [
    "Access to a wider pool of potential models",
    "Structured model information",
    "Better matching against your requirements",
    "Support with last-minute or difficult-to-fill appointments",
    "Less repetitive admin",
    "Ability to build a pool of returning models",
    "Eventually, more systematic management of model opportunities",
  ],
  cta: { label: "Join as a Provider", href: "/providers" },
};

export const trust = {
  eyebrow: "Trust & safety",
  heading: "What LOTACHI does — and what it doesn't.",
  statement:
    "LOTACHI helps people discover and connect with opportunities. Treatment suitability, consent, supervision and clinical decisions remain the responsibility of the relevant provider or qualified professional.",
  does: [
    "Helps people discover model opportunities in one place",
    "Helps providers reach a wider pool of potentially suitable people",
    "Shows clear provider information where available",
    "Shows eligibility requirements where a provider sets them",
    "Aims to be transparent about pricing set by providers",
  ],
  doesNot: [
    "Does not perform treatments or services itself",
    "Does not make clinical suitability decisions",
    "Does not infer your suitability from photos or appearance",
    "Does not treat media/content consent as the same thing as treatment consent",
    "Does not write or generate aftercare instructions on a provider's behalf",
    "Does not guarantee any specific appointment, outcome or price",
    "Does not currently claim to verify every provider — see below",
  ],
  principles: [
    "Clear provider information, where available",
    "Transparent pricing, as set by the provider, alongside a comparable price where one is given",
    "A clear explanation of who will perform or supervise the service",
    "Eligibility requirements shown where relevant",
    "Photo/video use and treatment consent always requested separately, never combined",
    "Provider-written aftercare and a clear way to contact the provider afterwards, once bookings exist",
    "LOTACHI's role as a marketplace is kept separate from the provider's treatment responsibility",
    "Provider verification may be introduced or expanded as the platform develops",
    "Higher-risk categories may require additional checks",
  ],
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
  body: "We're building LOTACHI with real models and providers. Join the early-access community and help shape the platform.",
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
