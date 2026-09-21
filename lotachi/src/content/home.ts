// Homepage copy.

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
    "Does not guarantee any specific appointment, outcome or price",
    "Does not currently claim to verify every provider — see below",
  ],
  principles: [
    "Clear provider information, where available",
    "Transparent pricing, as set by the provider",
    "A clear explanation of who will perform or supervise the service",
    "Eligibility requirements shown where relevant",
    "LOTACHI's role as a marketplace is kept separate from the provider's treatment responsibility",
    "Provider verification may be introduced or expanded as the platform develops",
    "Higher-risk categories may require additional checks",
  ],
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
// must be labelled "Example opportunity" in the UI.
export const exampleOpportunities = [
  {
    category: "Hair",
    title: "Colour correction — model needed",
    location: "Manchester",
    price: "Free",
    notice: "This week",
  },
  {
    category: "Aesthetics",
    title: "Consultation & assessment practice",
    location: "London",
    price: "Discounted",
    notice: "Flexible dates",
  },
  {
    category: "SPMU",
    title: "Portfolio session — brows",
    location: "Birmingham",
    price: "Free",
    notice: "Last-minute",
  },
  {
    category: "Nails",
    title: "Newly qualified practitioner practice",
    location: "Leeds",
    price: "Under £25",
    notice: "Next 2 weeks",
  },
];

export const comingSoonFeed = {
  eyebrow: "Coming soon",
  heading: "A preview of what the opportunity feed could look like.",
  body: "These are example opportunities to illustrate the idea — not opportunities you can currently book.",
};
