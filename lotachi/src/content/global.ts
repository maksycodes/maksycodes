// Global site configuration: name, contact details, form endpoints, social
// links and the nav/footer structure used on every page. Page-specific copy
// lives in the other files in this folder (home.ts, models.ts, etc).

export const siteConfig = {
  name: "LOTACHI",
  domain: "lotachi.com",
  tagline: "Find model opportunities. Find the right models.",
  // Concise brand descriptor for metadata, social sharing and footer/About
  // copy — not used as a competing second headline in the hero.
  descriptor: "The marketplace for model opportunities.",
  description:
    "The marketplace for model opportunities. Discover hair, beauty, aesthetics, nails and SPMU opportunities in London, and connect training providers with suitable, reliable models. Join the Chi Chi community for early access.",
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
    { label: "For Chi Chis", href: "/for-models" },
    { label: "For Providers", href: "/for-providers" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  ctaModel: { label: "Join as a Chi Chi", href: "/models" },
  ctaProvider: { label: "Become a Founding Provider", href: "/providers" },
  // The desktop pill nav has limited width and sits right next to the
  // Chi Chi CTA — this shorter form keeps both buttons on one line. The
  // mobile menu (full-width, stacked) uses the full ctaProvider label above.
  ctaProviderShort: { label: "Founding Provider", href: "/providers" },
};

export const footer = {
  columns: [
    {
      heading: "LOTACHI",
      links: [
        { label: "About", href: "/about" },
        { label: "How It Works", href: "/how-it-works" },
        { label: "FAQ", href: "/faq" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      heading: "Get involved",
      links: [
        { label: "Join as a Chi Chi", href: "/models" },
        { label: "Become a Founding Provider", href: "/providers" },
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
        { label: "Cookie settings", href: "#cookie-settings" },
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
  status: "LOTACHI is in early access in London. The marketplace is not yet live.",
};
