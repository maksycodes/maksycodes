// Global site configuration: name, contact details, form endpoints, social
// links and the nav/footer structure used on every page. Page-specific copy
// lives in the other files in this folder (home.ts, models.ts, etc).

export const siteConfig = {
  name: "LOTACHI",
  domain: "lotachi.com",
  tagline: "Find model opportunities. Find the right models.",
  description:
    "LOTACHI is an early-stage marketplace connecting people who want to become models for training, demonstrations and portfolio work with the providers who need them — starting with beauty, hair, aesthetics and wellness in the UK.",
  emails: {
    general: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@lotachi.com",
    providers: process.env.NEXT_PUBLIC_PROVIDER_EMAIL || "providers@lotachi.com",
  },
  formspree: {
    modelFormId: process.env.NEXT_PUBLIC_FORMSPREE_MODEL_FORM_ID || "",
    providerFormId: process.env.NEXT_PUBLIC_FORMSPREE_PROVIDER_FORM_ID || "",
    contactFormId: process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_FORM_ID || "",
  },
  social: {
    tiktok: "https://www.tiktok.com/@joinlotachi",
    instagram: "https://www.instagram.com/joinlotachi",
    youtube: "https://www.youtube.com/@joinlotachi",
    linkedin: "https://www.linkedin.com/company/lotachi/",
    facebook: "https://www.facebook.com/share/1c8qJrQC48/?mibextid=wwXIfr",
  },
};

export const nav = {
  links: [
    { label: "For Models", href: "/for-models" },
    { label: "For Providers", href: "/for-providers" },
    { label: "How it works", href: "/how-it-works" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  ctaModel: { label: "Join as a Model", href: "/models" },
  ctaProvider: { label: "Join as a Provider", href: "/providers" },
};

export const footer = {
  columns: [
    {
      heading: "LOTACHI",
      links: [
        { label: "About", href: "/about" },
        { label: "How it works", href: "/how-it-works" },
        { label: "FAQ", href: "/faq" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      heading: "Get involved",
      links: [
        { label: "Join as a Model", href: "/models" },
        { label: "Join as a Provider", href: "/providers" },
        { label: "Partnerships", href: "/contact#partnerships" },
        { label: "Help shape LOTACHI", href: "/contact#feedback" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Use", href: "/terms" },
        { label: "Provider Terms", href: "/provider-terms" },
        { label: "Cookie Policy", href: "/cookies" },
        { label: "Marketplace Disclaimer", href: "/safety" },
      ],
    },
  ],
  emailCapture: {
    heading: "Stay in the loop",
    body: "Get occasional updates as LOTACHI develops. No spam.",
    placeholder: "Your email address",
    submitLabel: "Subscribe",
    successMessage: "Thanks — you're subscribed.",
  },
  copyright: `© ${new Date().getFullYear()} LOTACHI. All rights reserved.`,
  status: "LOTACHI is in early access. The marketplace is not yet live.",
};
