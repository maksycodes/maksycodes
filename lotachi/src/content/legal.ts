// Legal page content — Privacy Policy, Terms of Use, Provider Terms, Cookie
// Policy, and Safety & Marketplace Disclaimer.
//
// This is written specifically around LOTACHI's own business model and its
// ACTUAL current functionality (public informational website; model
// early-access/waitlist form; provider network/pilot form; general contact
// form; Formspree for submissions; GA4 analytics only with consent; UTM
// attribution; no bookings or payments yet; no clinical advice or
// suitability decisions; no detailed medical histories held; no provider/
// opportunity verification guarantee; no availability/placement guarantee).
// It does not imply functionality that doesn't exist yet.
//
// It is NOT based on, modelled after, or copied from any other
// organisation's policies — those were used only as a reference to spot
// which operational topics this kind of business needs to cover, nothing
// more. Sections marked with a `flag` are specific points a UK-qualified
// solicitor should review and finalise before public launch.
//
// INTERNAL ONLY — legalReviewNotice and every section's `flag` field are
// notes for LOTACHI and its future solicitor, not for site visitors.
// LegalPageLayout.tsx deliberately does not render either of these publicly
// (see the comment there). Keep this data here as the internal review
// record; do not wire it back into public rendering without removing the
// content first.

export const legalReviewNotice =
  "This is an early-stage placeholder, written in plain English for LOTACHI's pre-launch site. It is not final legal advice — a UK-qualified solicitor should review this document, and in particular every section marked \"Solicitor review recommended\" below, before public launch.";

export const privacyPolicy = {
  slug: "privacy",
  metaTitle: "Privacy Policy",
  heading: "Privacy Policy",
  intro:
    "This policy explains what personal data LOTACHI collects through this website today, why, and what choices you have. LOTACHI is an early-stage two-sided marketplace connecting prospective models with independent training providers, academies, salons, clinics, educators and practitioners — LOTACHI does not itself provide any treatment or training service.",
  sections: [
    {
      heading: "Who we are",
      body: "LOTACHI operates the website at lotachi.com and is the controller of the personal data described in this policy. You can contact us at hello@lotachi.com.",
      flag: "Add LOTACHI's registered company name, company number and registered address here once incorporated, and confirm whether ICO registration (data protection fee) is required before launch.",
    },
    {
      heading: "The personal data we collect today",
      body: "We only collect what you give us directly through our forms. Depending on which one you submit, this may include:",
      list: [
        "Model early-access/waitlist form: first name, email, mobile number, postcode or area, travel distance, category interests, availability, last-minute availability, typical budget, and any optional message.",
        "Provider network/pilot form: name, job title, organisation, email, phone, website or social link, location(s), provider type, categories, model volume, purpose, fill-difficulty, last-minute need, how you currently source models, pilot interest, whether you currently have appointments LOTACHI could help fill, and any optional message.",
        "General contact form: name, email, the reason you selected, and your message.",
        "Footer email capture: your email address only.",
      ],
    },
    {
      heading: "Website, analytics and attribution data",
      body: "Our hosting provider necessarily logs basic technical information for any request to the site (such as IP address and timestamp) as standard infrastructure and security practice. Separately, if and when Google Analytics 4 is switched on, and only once you've given consent through a cookie-consent banner, it would collect information such as pages viewed, approximate location and device/browser type. We also capture utm_source, utm_medium, utm_campaign, utm_content and utm_term from links you arrive on the site through (for example a TikTok, Instagram, Facebook, LinkedIn or email campaign link), so we can understand which channel a waitlist or enquiry submission came from.",
    },
    {
      heading: "What we don't currently collect",
      body: "We do not ask for medical history, clinical or treatment history, clinical eligibility information, or photographs or video of you, on any of our current forms.",
      flag: "This policy must be reviewed and updated — including identifying an appropriate UK GDPR Article 9 condition and any additional safeguards — before LOTACHI begins collecting treatment history, clinical eligibility information, photographs, video, or other special-category data.",
    },
    {
      heading: "Why we use your data",
      body: "To build and operate the model and provider waitlists; to contact you about relevant opportunities, pilot participation or launch updates where you've agreed to that; to respond to your enquiry; and to understand, in aggregate, how people are finding and using the site so we can develop LOTACHI further.",
    },
    {
      heading: "Our lawful bases",
      body: "We rely on a small number of lawful bases, depending on the purpose:",
      list: [
        "Consent — for marketing-style contact (opportunity updates, launch news, pilot invitations) and for analytics cookies, where either is used. You can withdraw consent at any time.",
        "Legitimate interests — for operating and improving the waitlists and enquiry process, and for keeping the site secure. We only rely on this where it doesn't override your own rights and interests.",
        "Legal obligation — where we're required to use or disclose data by law, for example in response to a regulator.",
      ],
      flag: "Confirm the lawful basis for each specific processing activity with a data-protection specialist before launch — in particular, whether requiring the marketing-contact checkbox as a condition of joining the model waitlist should instead be framed as legitimate interests rather than consent, given consent must be freely given.",
    },
    {
      heading: "Marketing consent",
      body: "Where a form includes a checkbox about hearing from us, it is unticked by default — we don't opt you in automatically. You can withdraw this consent at any time using the unsubscribe link in our emails, or by emailing hello@lotachi.com.",
    },
    {
      heading: "Who we share it with",
      body: "We use a small number of service providers (processors) to run this site and handle submissions:",
      list: [
        "Formspree — receives and stores form submissions and forwards them to LOTACHI's email inboxes.",
        "Our hosting provider — serves the website and necessarily processes basic technical/server data.",
        "Google Analytics 4 — only once activated and only with your consent (see Cookie Policy).",
      ],
      flag: "Confirm current data-processing terms with Formspree, our hosting provider and Google directly, and have a solicitor confirm each has an appropriate data-processing agreement in place before launch.",
    },
    {
      heading: "Sharing with providers",
      body: "At this stage there is no live opportunity matching, so we do not share model waitlist details with providers. Once matching exists, we will only ever share what's relevant to an opportunity you've actually expressed interest in, and this policy will be updated with clear detail on what's shared and when, before that functionality launches.",
    },
    {
      heading: "International data transfers",
      body: "Some of our service providers (including Formspree, and Google if Analytics is enabled) may process data outside the UK and European Economic Area, for example in the United States. Where that happens, we expect appropriate safeguards to be in place, such as the UK International Data Transfer Addendum or equivalent standard contractual clauses.",
      flag: "Verify the specific transfer mechanism each processor relies on and have a solicitor confirm adequacy before launch.",
    },
    {
      heading: "How long we keep your data",
      body: "We keep waitlist and enquiry data only for as long as it's reasonably needed for the purpose it was collected — broadly, until you ask us to delete it, you unsubscribe, or the information becomes clearly out of date (for example, once the platform launches and pre-launch waitlist data is superseded).",
      flag: "Define and document fixed retention periods per data category (or clear deletion triggers) in an internal retention schedule, reviewed by a solicitor or data-protection specialist, before launch.",
    },
    {
      heading: "Your rights",
      body: "Under UK data protection law, you have the right to:",
      list: [
        "Ask for a copy of the personal data we hold about you",
        "Have inaccurate data corrected",
        "Ask us to erase your data, or restrict how we use it",
        "Object to us using your data where we rely on legitimate interests",
        "Withdraw consent at any time, where we rely on consent",
        "Receive your data in a portable, machine-readable format, where relevant",
      ],
    },
    {
      heading: "How to exercise your rights, or complain",
      body: "Email hello@lotachi.com from the address you used to contact us — we aim to respond within 30 days. If you're unhappy with our response, you have the right to complain to the UK's data protection regulator, the Information Commissioner's Office (ICO): 0303 123 1113, casework@ico.org.uk, or by post to Information Commissioner's Office, Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF.",
    },
    {
      heading: "Security",
      body: "We take reasonable steps to keep the data we hold secure, appropriate to an early-stage site handling waitlist and enquiry data rather than special-category data.",
    },
    {
      heading: "Changes to this policy",
      body: "We may update this policy as LOTACHI develops — in particular, before we introduce bookings, payments, analytics, or any collection of health, treatment-history or photographic data. This page will always show when it was last updated, and we'll aim to let you know directly if we make a significant change.",
    },
  ],
};

export const termsOfUse = {
  slug: "terms",
  metaTitle: "Terms of Use",
  heading: "Website Terms of Use",
  intro:
    "These terms apply to your use of lotachi.com. Three distinct parties appear throughout this document: LOTACHI (the platform operator), Models (people using the site to discover or express interest in model opportunities), and Providers (independent training academies, colleges, clinics, salons, educators and practitioners who are not employees, agents or representatives of LOTACHI).",
  sections: [
    {
      heading: "What LOTACHI currently does",
      body: "Today, LOTACHI operates a public informational website with a model early-access/waitlist form, a provider network/pilot form, and a general contact form, using Formspree to receive submissions. LOTACHI currently facilitates discovery, enquiries and early-access matching — it does not itself perform any treatment, training session or service.",
    },
    {
      heading: "What LOTACHI does not currently do",
      list: [
        "Does not currently process bookings or payments",
        "Does not currently provide clinical advice",
        "Does not currently determine clinical suitability",
        "Does not currently hold detailed medical histories",
        "Does not currently guarantee that providers or opportunities are verified",
        "Does not currently guarantee availability or placement with any provider",
      ],
    },
    {
      heading: "Using this site",
      body: "You may browse this site and submit the model waitlist, provider network or contact forms to express interest in LOTACHI. Submitting a form does not create a contract, booking, membership or partnership.",
    },
    {
      heading: "Eligibility",
      body: "LOTACHI is for adults aged 18 and over. You may be asked to verify your age before accessing future booking functionality, and participating providers may require valid photographic ID at your appointment. Today, joining the model waitlist requires you to self-declare that you're 18 or over — LOTACHI does not collect or store any identity document for this.",
      flag: "This reflects a phased approach: self-declaration only today; platform-level age verification (ideally via a privacy-preserving third-party provider returning only an \"18+/not 18+\" result) before booking functionality launches; and both platform- and provider-level checks for higher-risk categories. A solicitor should confirm this phasing, and any parental/guardian consent or safeguarding process if under-18s are ever permitted, before booking functionality launches.",
    },
    {
      heading: "How your enquiry is handled",
      body: "Form submissions are processed through Formspree and reviewed by LOTACHI. See our Privacy Policy for full detail on what we collect and how it's used.",
    },
    {
      heading: "No advice given",
      body: "Nothing on this site constitutes medical, clinical, financial or legal advice. Treatment or service suitability, consultation, consent, supervision and delivery remain the responsibility of the individual provider — see our Safety & Marketplace Disclaimer.",
    },
    {
      heading: "Intellectual property",
      body: "The LOTACHI name and the text, design and other content on this site belong to LOTACHI or its licensors, except where stated otherwise. You may not copy, republish or reuse this content without our permission.",
    },
    {
      heading: "Liability",
      body: "Nothing in these terms excludes or limits LOTACHI's liability where it would be unlawful to do so — including liability for death or personal injury caused by negligence, for fraud, or for breach of your statutory rights. Subject to that, and because LOTACHI does not itself provide any treatment or training service, LOTACHI is not responsible for the acts, omissions, advice, treatments or services of any independent provider or model — any arrangement between a model and a provider is between them directly.",
      flag: "This liability clause needs drafting and finalising by a UK-qualified solicitor before public launch, with specific consideration of the Consumer Rights Act 2015, the Consumer Contracts Regulations, and any applicable online-marketplace regulation. It must not attempt to exclude statutory consumer rights.",
    },
    {
      heading: "Accuracy",
      body: "This site describes LOTACHI's direction and current functionality during an early-access stage. Features, categories and terminology may change before public launch.",
    },
    {
      heading: "Complaints",
      body: "If something goes wrong with a specific opportunity or provider, see our Safety & Marketplace Disclaimer for how responsibility is currently divided, and contact us if you need to raise something with LOTACHI directly.",
    },
    {
      heading: "Governing law",
      body: "These terms are intended to be governed by the law of England and Wales.",
      flag: "Confirm governing law and jurisdiction with a solicitor, particularly once LOTACHI has users or providers based outside England and Wales.",
    },
    {
      heading: "Changes to these terms",
      body: "We may update these terms as LOTACHI develops. This page will always show when it was last updated.",
    },
  ],
};

export const providerTerms = {
  slug: "provider-terms",
  metaTitle: "Provider Pilot / Provider Terms",
  heading: "Provider Pilot / Provider Terms",
  intro:
    "These terms apply to independent training providers, academies, colleges, clinics, salons, educators and practitioners taking part in the LOTACHI Founding Provider Pilot, and will extend to providers listing live opportunities once that functionality exists. Providers are independent businesses or individuals, not employees, agents or representatives of LOTACHI.",
  sections: [
    {
      heading: "Accuracy of your information and listings",
      body: "You're responsible for the accuracy of everything you tell LOTACHI about your organisation, and — once listings exist — for each opportunity you publish, including who will perform the service and why a model is required for it.",
    },
    {
      heading: "Qualifications, competence and registration",
      body: "You confirm that you, and anyone performing a service on your behalf, hold the qualifications, licences, registrations and professional body memberships required for the service being offered, and will provide evidence if LOTACHI reasonably asks for it.",
    },
    {
      heading: "Supervision of trainees",
      body: "You're responsible for appropriate supervision of anyone in training who performs a service, consistent with your own professional or training body's requirements.",
    },
    {
      heading: "Insurance",
      body: "You're responsible for holding adequate professional indemnity and public liability insurance for the services you offer.",
    },
    {
      heading: "Consultation, suitability and contraindications",
      body: "You're responsible for carrying out appropriate consultation, suitability assessment and contraindication checks before and during any session. This is never delegated to, or performed by, LOTACHI.",
    },
    {
      heading: "Treatment/service consent",
      body: "You're responsible for obtaining valid, informed consent to any treatment or service directly from the model. This consent is separate from — and must never be bundled with — any consent to photography or video (see below).",
    },
    {
      heading: "Photography, video and media consent",
      body: "For any opportunity involving photos or video, you must clearly disclose whether it's required or optional, what it will be used for (for example clinical/client records, teaching or assessment, your portfolio, your website, organic social media, or paid advertising), and whether the model would be identifiable. This consent must always be requested separately from treatment consent — a model is never treated as having agreed to photography or video simply because they agreed to a session, and declining photography or video is never treated as declining the treatment itself.",
      flag: "This clause reflects LOTACHI's proposed media-consent standard — see the internal Media & Photography Consent Standard document for the full disclosure checklist. A solicitor should confirm the enforceability of this clause and how it interacts with UK GDPR (particularly the right to erasure/withdrawal where content has already been published) before launch.",
    },
    {
      heading: "Safeguarding",
      body: "You're responsible for appropriate safeguarding awareness and practice for your own client base, and must not proceed with a session where safeguarding concerns are indicated.",
      flag: "LOTACHI's own safeguarding policy (including its approach to models under 18, if permitted) needs to be defined and reviewed before any booking functionality launches.",
    },
    {
      heading: "Pricing and additional charges",
      body: "You must clearly and accurately disclose the model price for an opportunity, any comparable standard price you choose to show, and any additional charges, before a booking is confirmed (once booking functionality exists).",
    },
    {
      heading: "Cancellations",
      body: "You must clearly state your own cancellation policy for each opportunity. LOTACHI does not set or enforce cancellation fees on your behalf.",
    },
    {
      heading: "Aftercare",
      body: "Once bookings exist, you're responsible for attaching your own written aftercare to a completed booking and giving the model a clear way to contact you afterwards if they have a concern. LOTACHI does not write or generate aftercare content on your behalf.",
    },
    {
      heading: "Complaints and adverse events",
      body: "You must have your own process for handling complaints and adverse events from models, and must cooperate reasonably and promptly with LOTACHI if it needs to look into a complaint or safety concern connected to your listing or the platform.",
    },
    {
      heading: "Data protection",
      body: "You're responsible for your own compliance with data protection law for any personal data you collect or receive directly from a model — for example once live matching and direct contact exists. LOTACHI's own handling of data is set out in our Privacy Policy.",
    },
    {
      heading: "No misleading claims",
      body: "You must not make misleading, false or unsubstantiated claims about outcomes, qualifications, pricing, availability or anything else in connection with your listing.",
    },
    {
      heading: "Suspension or removal",
      body: "LOTACHI may suspend or remove a provider's participation in the pilot (or, in future, their listings) where we reasonably believe these terms have been breached, information has been misrepresented, a safety risk has been identified, or where required by law. We'll aim to explain why, where we're able to.",
    },
    {
      heading: "Founding Provider Pilot pricing",
      body: "The Founding Provider Pilot is free of platform cost during the initial pilot period. LOTACHI has not yet finalised any commission, subscription or other commercial pricing structure for the live marketplace — this will be communicated clearly and separately before it applies to any provider. This is a limited early-stage pilot with a small number of provider slots, and joining it does not guarantee permanent free access.",
    },
    {
      heading: "Full terms ahead of launch",
      body: "These provider terms are a placeholder outline covering the topics we expect to need. Full, legally reviewed provider terms — including a finalised commercial structure — will be published before providers can list live, bookable opportunities.",
    },
  ],
};

export const cookiePolicy = {
  slug: "cookies",
  metaTitle: "Cookie Policy",
  heading: "Cookie Policy",
  intro:
    "This site shows a cookie banner on your first visit, asking which of the categories below you're happy for us to use. You can change your answer at any time using the \"Cookie settings\" link in the footer.",
  sections: [
    {
      heading: "Strictly necessary",
      body: "Used to run the site and to remember the choice you make in the cookie banner itself (stored in your browser's local storage, not a cookie). These don't require consent under UK PECR rules, and can't be turned off.",
    },
    {
      heading: "Analytics",
      body: "If you accept this category, LOTACHI uses Google Analytics 4 to understand how the site is used (pages viewed, approximate location, device/browser type). This is off by default. The site uses Google's Consent Mode, so no analytics cookie is set and no data reaches Google until you actively accept this category — either via \"Accept all\" or by switching it on in \"Manage preferences.\"",
    },
    {
      heading: "Marketing",
      body: "Shown as its own category for transparency, but no marketing or advertising cookie or pixel is used on this site today — accepting this category currently has no effect. If that changes, this policy and the banner will be updated first, and your consent requested again before any marketing cookie is set.",
    },
    {
      heading: "Changing your choice",
      body: "Use the \"Cookie settings\" link in the footer of any page to reopen your preferences and change your choice at any time.",
    },
    {
      heading: "Managing cookies in your browser",
      body: "Most browsers also let you view, block or delete cookies through their own settings, independently of the banner above. Blocking strictly-necessary storage may affect basic site functions.",
    },
    {
      heading: "Changes to this policy",
      body: "We'll update this policy before adding any new non-essential cookie or tracking technology, and request consent through the banner before it's set.",
    },
  ],
};

export const safetyDisclaimer = {
  slug: "safety",
  metaTitle: "Safety & Marketplace Disclaimer",
  heading: "Safety & Marketplace Disclaimer",
  sections: [
    {
      heading: "LOTACHI's role",
      body: "LOTACHI is an early-stage marketplace connecting people interested in becoming models with independent training providers. LOTACHI does not itself provide any treatment, training session or service.",
    },
    {
      heading: "Provider responsibility",
      body: "The provider offering an opportunity is responsible for consultation, professional or clinical assessment, informed consent, delivery, supervision and aftercare for anything they offer — not LOTACHI.",
    },
    {
      heading: "LOTACHI does not make suitability decisions",
      body: "Being shown, matched or connected to an opportunity does not mean you have been assessed as medically or professionally suitable for it. That determination is always made by the provider directly, never by LOTACHI.",
    },
    {
      heading: "Questions about a specific treatment or service",
      body: "Raise these directly with the provider offering the opportunity — they're best placed to answer, and responsible for the answer.",
    },
    {
      heading: "Emergencies and urgent concerns",
      body: "LOTACHI is not a medical or emergency service and does not monitor this site for urgent issues. If you have an urgent or emergency concern, contact the relevant emergency or healthcare services directly (999 or 111 in the UK) — not LOTACHI.",
    },
    {
      heading: "The limits of this disclaimer",
      body: "This disclaimer explains how responsibility is currently divided between LOTACHI and providers. It does not remove any responsibility LOTACHI may have under applicable law, including consumer protection law.",
      flag: "A solicitor should confirm the legal effect and precise wording of this disclaimer before public launch.",
    },
    {
      heading: "Verification",
      body: "LOTACHI does not currently guarantee that providers or opportunities are verified. Provider verification may be introduced or expanded as the platform develops, and we'll aim to be clear about what checks, if any, have actually been carried out for a given provider or opportunity.",
    },
    {
      heading: "Availability and placement",
      body: "LOTACHI does not currently guarantee availability of any opportunity, or that you will be placed or matched with a provider.",
    },
    {
      heading: "If something feels wrong",
      body: "You're never obliged to go ahead with an appointment. If something feels unclear or wrong, raise it with the provider directly, or contact LOTACHI.",
    },
  ],
};

export const legalPages = [privacyPolicy, termsOfUse, providerTerms, cookiePolicy, safetyDisclaimer];
