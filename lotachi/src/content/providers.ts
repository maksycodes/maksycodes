// Provider sign-up page copy and form field options.

export const providersPage = {
  metaTitle: "Become a Founding Provider — Find Models for Training",
  metaDescription:
    "Find models for training academy, salon or clinic sessions in London. Become a LOTACHI Founding Provider and help us fix model recruitment.",
  eyebrow: "Founding provider pilot",
  headline: "Become a Founding Provider.",
  body: "Chi Chis are LOTACHI community members looking for model opportunities. LOTACHI is currently working with London providers to understand and improve how you find suitable models. Tell us about your organisation and how you currently recruit, and we'll be in touch as things develop.",
  pilotNote: {
    heading: "Founding Provider Pilot — free during the initial pilot period.",
    body: "Early provider partners can join the LOTACHI pilot at no platform cost while we test model matching, difficult-to-fill appointments and last-minute recruitment. Commercial pricing will be developed based on pilot results and provider feedback.",
    constraints:
      "This is a limited early-stage pilot with a small number of provider slots. Future paid pricing may apply once the pilot ends, and joining now does not guarantee permanent free access.",
    cta: { label: "Join the Founding Provider Pilot", href: "#provider-form" },
  },
  form: {
    providerTypeOptions: ["Academy", "College", "Clinic", "Salon", "Independent educator", "Practitioner", "Other"],
    categoryOptions: ["Hair", "Beauty", "Aesthetics", "Nails", "SPMU", "Other"],
    trainingDaysOptions: ["1 day/month", "2–4 days/month", "5–10 days/month", "More than 10 days/month", "Varies a lot"],
    traineesPerSessionOptions: ["1–5", "6–15", "16–30", "30+"],
    volumeOptions: ["1–2 per month", "3–5 per month", "6–10 per month", "10+ per month", "Varies a lot"],
    next30DaysOptions: ["Yes", "No", "Not sure yet"],
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
    nextTrainingDatesLabel: "Any training dates in the next 3–6 months you can share?",
    pilotLabel: "I'd be interested in participating in an early LOTACHI pilot.",
    hasAppointmentsLabel: "I have real model opportunities LOTACHI could help fill during the pilot.",
    submitLabel: "Become a Founding Provider",
    successHeading: "Thank you — we've received your details.",
    successBody: "LOTACHI may contact you regarding early pilot opportunities as the platform develops.",
    errorMessage: "Something went wrong sending your details. Please try again, or email us directly at",
  },
};
