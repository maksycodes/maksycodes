// Central content file.
//
// Almost all copy on the site is defined here, so wording can be edited in
// one place without touching component code. Emails and form endpoint IDs
// are read from environment variables — see .env.example.

export const siteConfig = {
  name: "LOTACHI",
  domain: "lotachi.com",
  tagline: "Better access to professional training appointments.",
  description:
    "Lotachi is a pre-launch marketplace connecting people with supervised practical-training appointments from professional training providers, starting with beauty, hair, aesthetics and wellness in the UK.",
  emails: {
    general: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@lotachi.com",
    providers: process.env.NEXT_PUBLIC_PROVIDER_EMAIL || "providers@lotachi.com",
  },
  formspree: {
    modelFormId: process.env.NEXT_PUBLIC_FORMSPREE_MODEL_FORM_ID || "",
    providerFormId: process.env.NEXT_PUBLIC_FORMSPREE_PROVIDER_FORM_ID || "",
  },
};

export const nav = {
  links: [
    { label: "For Providers", href: "#for-providers" },
    { label: "For Models", href: "#for-models" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  ctaModel: { label: "Join as a model", href: "#model-waitlist" },
  ctaProvider: { label: "Join as a training provider", href: "#provider-waitlist" },
};

export const hero = {
  headline: "Better access to professional training appointments.",
  body: [
    "Lotachi is building a marketplace that makes it easier to discover and book supervised training appointments across professional training providers.",
    "For providers, Lotachi is exploring better ways to reach suitable models, fill practical sessions and reduce the friction of managing model appointments.",
  ],
  ctaModel: { label: "Join as a model", href: "#model-waitlist" },
  ctaProvider: { label: "Join as a training provider", href: "#provider-waitlist" },
  note: "Launching first in the UK.",
};

export const whyLotachi = {
  eyebrow: "Why Lotachi",
  heading: "An access marketplace, not a beauty brand.",
  intro:
    "Lotachi is still being built. Here is the direction we're exploring — not a list of features that are live today.",
  models: {
    heading: "For models",
    items: [
      "Discover training appointments across multiple providers",
      "See more useful treatment information before booking",
      "Access both pay-as-you-go and future membership options",
      "Keep your appointments and treatment history in one place",
    ],
  },
  providers: {
    heading: "For training providers",
    items: [
      "Reach suitable models for practical sessions",
      "Reduce last-minute model gaps",
      "Improve booking and attendance workflows",
      "Potentially simplify follow-up and model communication",
    ],
  },
};

export const howItWorks = {
  eyebrow: "How it could work",
  heading: "A simple flow, built around your existing process.",
  steps: [
    {
      number: "01",
      title: "Publish availability",
      body: "Providers publish practical-training availability and model requirements.",
    },
    {
      number: "02",
      title: "Discover and request",
      body: "Lotachi helps suitable models discover and request or book relevant opportunities.",
    },
    {
      number: "03",
      title: "Provider stays in control",
      body: "Providers retain control of treatment suitability, consultation, consent and delivery.",
    },
  ],
  note: "Lotachi is a marketplace and workflow platform. Clinical decisions remain with the treating provider.",
};

export const providerSection = {
  id: "provider-waitlist",
  eyebrow: "For training providers",
  heading: "Join as a training provider.",
  body: [
    "We're building a database of UK training providers interested in listing practical-training opportunities on Lotachi, or taking part in an early pilot as the marketplace is validated.",
    "Tell us about your organisation below and we'll be in touch as things develop.",
  ],
  researchNote: {
    heading: "Prefer a conversation first?",
    body: "We're also speaking with academy owners, training managers, model coordinators and operations teams about how model recruitment, cancellations, suitability, pricing and practical-session logistics work today. You can opt in to a short research conversation as part of the form below.",
  },
  form: {
    heading: "Training provider waitlist",
    interviewQuestion:
      "Would you be open to a 15-minute research conversation about how model recruitment and practical-session logistics work today?",
    consentLabel: "I'm happy for Lotachi to contact me about this opportunity.",
    submitLabel: "Join the provider waitlist",
    successMessage:
      "Thank you — you're on the list. We'll be in touch as Lotachi develops.",
    errorMessage:
      "Something went wrong sending your details. Please try again, or email us directly at",
    trainingCategoryOptions: [
      "Beauty",
      "Hair",
      "Skin",
      "Aesthetics",
      "SPMU / PMU",
      "Massage / Wellness",
      "Other",
    ],
    contactTimeOptions: ["Morning", "Afternoon", "Evening", "No preference"],
  },
};

export const modelWaitlist = {
  id: "model-waitlist",
  eyebrow: "For models",
  heading: "Want early access?",
  body: "Join the Lotachi model waitlist to hear when training appointments become available in your area.",
  categories: ["Beauty", "Hair", "Skin", "Aesthetics", "SPMU / PMU", "Massage / Wellness"],
  form: {
    consentLabel:
      "I'd like to hear about Lotachi launch updates and model opportunities.",
    submitLabel: "Join the model waitlist",
    successMessage:
      "You're on the list. We'll let you know when training appointments open up near you.",
    errorMessage:
      "Something went wrong sending your details. Please try again, or email us directly at",
  },
};

export const about = {
  id: "about",
  eyebrow: "About",
  heading: "A marketplace, currently in validation.",
  body: [
    "Lotachi is being developed as an access marketplace for professional practical-training appointments.",
    "The first launch will focus on beauty, hair, aesthetics and wellness in the UK, with the platform designed to support additional professional-training verticals over time.",
    "The business is currently in validation and provider-research stage.",
  ],
};

export const faq = {
  id: "faq",
  eyebrow: "FAQ",
  heading: "Common questions",
  items: [
    {
      question: "What is a training appointment?",
      answer:
        "A training appointment is a practical training session run by a professional training provider, in which a supervised practitioner carries out a treatment as part of their training. These appointments are offered directly by training providers, not by Lotachi.",
    },
    {
      question: "Why are training appointments discounted?",
      answer:
        "Training providers often price practical-training appointments differently from standard bookings, because the appointment forms part of a supervised practitioner's training. Any pricing is set by the individual provider, not by Lotachi.",
    },
    {
      question: "Are treatments carried out by students?",
      answer:
        "Practical-training appointments are typically carried out by practitioners who are in training, under the supervision of the training provider. Exact supervision arrangements are set and managed by each provider.",
    },
    {
      question: "Is Lotachi already live?",
      answer:
        "No. Lotachi is currently in pre-launch validation. We're speaking with training providers and building waitlists of interested models and providers ahead of launch.",
    },
    {
      question: "Will Lotachi offer memberships?",
      answer:
        "We're exploring both pay-as-you-go access and a future membership option. Nothing is confirmed yet, and details will be shared closer to launch.",
    },
    {
      question: "How do providers join?",
      answer:
        "Training providers can join the training provider waitlist below. We're using this stage to understand how providers currently manage model recruitment and practical-session logistics, and to shape the platform accordingly.",
    },
    {
      question: "Who decides whether I am suitable for a treatment?",
      answer:
        "Lotachi may help with matching and booking workflows, but final treatment suitability is determined by the treating provider.",
    },
  ],
};

export const contact = {
  id: "contact",
  eyebrow: "Contact",
  heading: "Get in touch",
  body: "For general questions, reach us at the address below. Training providers can also use the dedicated provider inbox.",
};

export const footer = {
  links: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Join as a model", href: "/#model-waitlist" },
    { label: "Join as a training provider", href: "/#provider-waitlist" },
    { label: "Contact", href: "/#contact" },
  ],
  copyright: `© ${new Date().getFullYear()} Lotachi. All rights reserved.`,
  status: "Lotachi is currently in pre-launch validation.",
};
