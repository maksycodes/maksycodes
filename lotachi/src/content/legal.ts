// Placeholder legal content. Marked clearly as pre-launch placeholders —
// see the review banner rendered on each legal page. None of this should be
// treated as final legal advice; a qualified professional should review all
// of it before public launch.
//
// Structure (section breakdown, UK GDPR rights list, ICO contact details)
// is modelled on standard UK privacy-policy and terms conventions. Content
// is written specifically for LOTACHI's actual business — a marketplace
// that does not itself deliver training, treatments or courses — and
// should not be assumed to match any other provider's terms.

export const legalReviewNotice =
  "This is an early-stage placeholder, written in plain language for LOTACHI's pre-launch site. It is not final legal advice and should be reviewed by a qualified professional before public launch.";

export const privacyPolicy = {
  slug: "privacy",
  metaTitle: "Privacy Policy",
  heading: "Privacy Policy",
  intro:
    "We're committed to protecting and respecting any personal information you share with LOTACHI. This policy describes what we collect, why, how long we keep it, and the choices you have. LOTACHI is a marketplace and workflow platform — we do not deliver treatments, training or courses ourselves.",
  sections: [
    {
      heading: "What information we collect",
      body: "We collect what you give us directly through our forms — we don't currently use analytics trackers to collect anything else about how you browse the site (see our Cookie Policy). Depending on which form you submit, this may include:",
      list: [
        "Model waitlist: first name, email, mobile number, postcode or area, travel distance, category interests, availability, last-minute availability, typical budget, and any optional message.",
        "Provider network: name, job title, organisation, email, phone, website or social link, location(s), provider type, categories, model volume, purpose, how you currently source models, pilot interest, and any optional message.",
        "Contact form: name, email, the reason you selected, and your message.",
        "Footer email capture: your email address only.",
      ],
    },
    {
      heading: "What we don't collect",
      body: "We do not ask for medical history, treatment history or photographs on any of these forms. Our hosting provider (Vercel) necessarily logs basic technical information for any request to the site, such as IP address and timestamp, as standard infrastructure and security practice — this is separate from marketing analytics, which we don't currently use.",
    },
    {
      heading: "Why we use it",
      body: "We rely on a small number of legal bases, depending on the purpose:",
      list: [
        "Consent — sending you updates about relevant opportunities, launch progress, or contacting you about early-access or pilot participation. You can withdraw this at any time.",
        "Legitimate interests — operating and improving the waitlists, responding to your enquiry, and understanding how to build LOTACHI. We only do this where it doesn't override your own rights and interests.",
        "Legal obligation — where we're required to use or disclose information by law, for example in response to a regulator.",
      ],
    },
    {
      heading: "How we share it",
      body: "Form submissions are processed by our form provider, Formspree, and delivered to LOTACHI's email inboxes. We do not sell your information. At this pre-launch stage, there's no live opportunity matching, so we don't share model waitlist details with providers — once matching exists, we'll only ever share what's relevant to an opportunity you've actually expressed interest in.",
    },
    {
      heading: "How long we keep it",
      body: "We currently keep waitlist and enquiry information only for as long as it's useful for the purpose it was collected, and delete it on request (see \"Your rights\" below). We intend to set out fixed retention periods here once they've been confirmed as part of legal review and as LOTACHI's data practices are finalised ahead of public launch.",
    },
    {
      heading: "Your rights",
      body: "Under UK data protection law, you have the right to:",
      list: [
        "Ask for a copy of the information we hold about you",
        "Have inaccurate information corrected",
        "Ask us to erase your information, or restrict how we use it",
        "Object to us using your information where we rely on legitimate interests",
        "Withdraw consent at any time, where we rely on consent",
        "Receive your information in a portable, machine-readable format, where relevant",
      ],
    },
    {
      heading: "How to exercise your rights",
      body: "Email us at hello@lotachi.com from the address you used to contact us. We aim to respond within 30 days. If you're unhappy with our response, you have the right to complain to the UK's data protection regulator, the Information Commissioner's Office (ICO): 0303 123 1113, casework@ico.org.uk, or by post to Information Commissioner's Office, Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF.",
    },
    {
      heading: "Security",
      body: "We take reasonable steps to keep the information we hold secure, appropriate to an early-stage site handling waitlist data rather than sensitive personal data.",
    },
    {
      heading: "Changes to this policy",
      body: "We may update this policy as LOTACHI develops. If we make a significant change, we'll aim to let you know directly where we can, and this page will always show when it was last updated.",
    },
  ],
};

export const termsOfUse = {
  slug: "terms",
  metaTitle: "Terms of Use",
  heading: "Terms of Use",
  intro:
    "These terms apply to your use of lotachi.com. LOTACHI is a marketplace and workflow platform — we help people discover and connect with model opportunities, and help providers reach suitable people. We do not ourselves deliver treatments, training sessions or courses.",
  sections: [
    {
      heading: "Definitions",
      list: [
        "\"Model\" means someone using LOTACHI to find model opportunities.",
        "\"Provider\" means a training academy, college, clinic, salon, educator or practitioner offering opportunities.",
        "\"Opportunity\" means a practical-training, assessment, demonstration, portfolio or content session a provider is seeking a model for.",
      ],
    },
    {
      heading: "About this site today",
      body: "lotachi.com is currently a pre-launch informational site. No bookings, payments or live provider listings are available through this site yet.",
    },
    {
      heading: "Using this site",
      body: "You may browse this site and submit the model waitlist, provider network or contact forms to express interest in LOTACHI. Submitting a form does not create a contract, booking, membership or partnership.",
    },
    {
      heading: "Eligibility",
      body: "We may set a minimum age or other eligibility requirement for models once bookings exist. This will be confirmed and published here before that functionality launches.",
    },
    {
      heading: "Models: photos, video and consent",
      body: "Where a provider wants to take photos or video during a session, this is always requested as consent separate from — and never bundled into — agreeing to a treatment or training session, or simply making a booking. A listing will state what any photos or video are for and whether your face would be identifiable. LOTACHI does not require you to grant a blanket or irrevocable licence to use your image as a condition of taking part; any such consent is between you and the individual provider, on the terms they set out for that specific opportunity, and you should read and understand what you're agreeing to before proceeding.",
    },
    {
      heading: "Provider responsibility",
      body: "The provider you attend is responsible for consultation, treatment consent, suitability and delivery of the service. See Provider Terms for more detail.",
    },
    {
      heading: "Cancellations",
      body: "Cancellation policies for a specific opportunity are set by the provider offering it, once bookings exist. LOTACHI does not currently charge fees for late cancellation or non-attendance.",
    },
    {
      heading: "No clinical or safety advice",
      body: "Nothing on this site constitutes medical, clinical or safety advice. Treatment suitability, consultation, consent and delivery remain the responsibility of the individual provider.",
    },
    {
      heading: "Intellectual property",
      body: "The LOTACHI name and the text, design and other content on this site belong to LOTACHI or its licensors, except where stated otherwise. You may not copy, republish or reuse this content without our permission.",
    },
    {
      heading: "Liability",
      body: "LOTACHI is not liable for the acts or omissions of any provider or model, including personal injury, damage or loss arising from a treatment, training session or appointment arranged via LOTACHI.",
    },
    {
      heading: "Accuracy",
      body: "This site describes LOTACHI's direction and intentions during an early-access stage. Features, categories and terminology may change before public launch.",
    },
    {
      heading: "Governing law",
      body: "These terms are intended to be governed by the law of England and Wales. This will be confirmed as part of legal review before public launch.",
    },
    {
      heading: "Changes to these terms",
      body: "We may update these terms as LOTACHI develops. This page will always show when it was last updated.",
    },
  ],
};

export const providerTerms = {
  slug: "provider-terms",
  metaTitle: "Provider Terms",
  heading: "Provider Terms",
  intro:
    "These terms will apply to training providers, academies, colleges, clinics, salons, educators and practitioners who use LOTACHI to list opportunities or find models, once the platform is live.",
  sections: [
    {
      heading: "Provider responsibility",
      body: "Providers remain responsible for treatment suitability, consultation, consent, supervision and delivery of any service. LOTACHI's role is limited to helping providers discover and connect with potentially suitable people.",
    },
    {
      heading: "Accurate listings",
      body: "Providers will be expected to describe opportunities accurately, including who performs the service, any eligibility requirements, pricing, and duration.",
    },
    {
      heading: "Media consent must be separate",
      body: "Where a listing involves photos or video, providers must ask for that consent separately from treatment consent — never bundled into a booking, and never presented as a blanket or irrevocable licence the model has no ability to question. Providers must state clearly what any photos or video are for (for example training records, portfolio, website, social media or advertising) and whether the model's face would be identifiable.",
    },
    {
      heading: "Aftercare and after-appointment contact",
      body: "Once bookings exist, providers will be responsible for attaching their own written aftercare to a completed booking and providing a clear way for the model to contact them afterwards if they have a concern. LOTACHI does not write or generate aftercare content on a provider's behalf.",
    },
    {
      heading: "Pilot participation",
      body: "Providers taking part in an early pilot do so on the basis discussed directly with LOTACHI. Pilot terms, including any pricing, are being tested and are not yet final.",
    },
    {
      heading: "Full terms ahead of launch",
      body: "These provider terms are a placeholder outline. Full, legally reviewed provider terms will be published before providers can list live opportunities.",
    },
  ],
};

export const cookiePolicy = {
  slug: "cookies",
  metaTitle: "Cookie Policy",
  heading: "Cookie Policy",
  sections: [
    {
      heading: "Current use",
      body: "This site does not currently use analytics trackers or non-essential cookies. Where the site stores anything in your browser, it's limited to what's strictly necessary for the site to function (for example, remembering that you've dismissed a notice).",
    },
    {
      heading: "If this changes",
      body: "If we introduce analytics or marketing cookies in future, we will update this policy and add a cookie consent banner before any non-essential cookie is set.",
    },
  ],
};

export const safetyDisclaimer = {
  slug: "safety",
  metaTitle: "Marketplace Disclaimer",
  heading: "Safety & Marketplace Disclaimer",
  sections: [
    {
      heading: "LOTACHI's role",
      body: "LOTACHI helps people discover and connect with opportunities. Treatment suitability, consent, supervision and clinical decisions remain the responsibility of the relevant provider or qualified professional.",
    },
    {
      heading: "What this means in practice",
      body: "LOTACHI does not perform treatments or services, does not make clinical suitability decisions, and does not guarantee the outcome, safety or quality of any appointment. Always raise questions or concerns directly with the provider.",
    },
    {
      heading: "Verification",
      body: "Provider verification may be introduced or expanded as the platform develops. Higher-risk categories may require additional checks. We'll aim to be clear about what checks, if any, have been carried out for a given provider or opportunity.",
    },
    {
      heading: "If something feels wrong",
      body: "You are never obliged to go ahead with an appointment. If something feels unclear or wrong, you can raise it with the provider directly, or contact LOTACHI.",
    },
  ],
};

export const legalPages = [privacyPolicy, termsOfUse, providerTerms, cookiePolicy, safetyDisclaimer];
