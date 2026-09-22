// Provider sign-up page copy and form field options.

export const providersPage = {
  metaTitle: "Join as a Provider",
  metaDescription:
    "Need models? Join the LOTACHI provider network. LOTACHI is currently working with providers to understand and improve model recruitment.",
  eyebrow: "For providers",
  headline: "Need models? Join the LOTACHI provider network.",
  body: "LOTACHI is currently working with providers to understand and improve model recruitment. Tell us about your organisation and how you currently find models, and we'll be in touch as things develop.",
  pilotNote: {
    heading: "Founding Provider Pilot — free during the initial pilot period.",
    body: "Early provider partners can join the LOTACHI pilot at no platform cost while we test model matching, difficult-to-fill appointments and last-minute recruitment. Commercial pricing will be developed based on pilot results and provider feedback.",
    constraints:
      "This is a limited early-stage pilot with a small number of provider slots. Future paid pricing may apply once the pilot ends, and joining now does not guarantee permanent free access.",
    cta: { label: "Join the Founding Provider Pilot", href: "#provider-form" },
  },
  form: {
    providerTypeOptions: ["Academy", "College", "Clinic", "Salon", "Independent educator", "Practitioner", "Other"],
    categoryOptions: ["Hair", "Aesthetics", "Beauty", "Nails", "SPMU", "Skin", "Wellness", "Other"],
    volumeOptions: ["Per week", "Per month", "Occasionally"],
    purposeOptions: [
      "Training",
      "Assessment",
      "Demonstration",
      "Portfolio",
      "Content creation",
      "Newly qualified practitioner",
      "New treatment/service",
      "Other",
    ],
    fillDifficultyOptions: ["Often", "Sometimes", "Rarely", "Never"],
    lastMinuteOptions: ["Frequently", "Occasionally", "Rarely", "Never"],
    sourceOptions: [
      "Facebook",
      "WhatsApp",
      "Existing customer database",
      "Mailing list",
      "Friends/family",
      "Instagram",
      "Own website",
      "Other",
    ],
    pilotLabel: "I'd be interested in participating in an early LOTACHI pilot.",
    hasAppointmentsLabel: "I have model appointments LOTACHI could help me fill during the pilot.",
    submitLabel: "Join the provider network",
    successHeading: "Thank you — we've received your details.",
    successBody: "LOTACHI may contact you regarding early pilot opportunities as the platform develops.",
    errorMessage: "Something went wrong sending your details. Please try again, or email us directly at",
  },
};
