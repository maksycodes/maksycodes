# LOTACHI — early-access website

An early-access marketing and lead-capture site for LOTACHI, a marketplace connecting people who
want to become models for training, demonstrations and portfolio work with the training providers
who need them — starting with beauty, hair, aesthetics and wellness in the UK. The site explains
the concept, builds credibility for provider outreach, and captures two segmented waitlists
(models and providers).

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** for styling
- **Formspree** for form submission (no backend/database required)
- Deploys cleanly to **Vercel**

No analytics vendor is wired up yet (see "Analytics & UTM tracking" below), and no cookies beyond
what's strictly necessary are set, so no cookie banner is included yet either.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Homepage — positioning, how it works (models & providers), why LOTACHI exists, dual-sided benefits, trust & safety, model transparency, example opportunity feed, early-access CTA |
| `/models` | Model sign-up (waitlist) |
| `/providers` | Provider sign-up (network + optional pilot interest) |
| `/for-models` | What being a model means, in depth, plus model FAQs |
| `/for-providers` | Provider benefits in depth, pilot CTA |
| `/how-it-works` | The full step-by-step flow |
| `/faq` | Combined model + provider FAQ |
| `/about` | Why LOTACHI is being built, and the long-term vision |
| `/contact` | General contact form (with a reason selector), partnerships and feedback |
| `/privacy`, `/terms`, `/provider-terms`, `/cookies`, `/safety` | Legal placeholders — see "Legal pages" below |

All routes are in `src/app/<route>/page.tsx`. `/models` and `/providers` both accept UTM query
parameters for campaign attribution, e.g. `/models?utm_source=tiktok&utm_campaign=launch`.

## File structure

```
lotachi/
├── src/
│   ├── app/                    # One folder per route (see table above)
│   │   ├── layout.tsx          # Root layout, fonts, SEO/OG metadata, UTM capture mount
│   │   ├── page.tsx            # Homepage — assembles home/ sections
│   │   └── sitemap.ts          # Generates /sitemap.xml from the route list
│   ├── components/
│   │   ├── Nav.tsx, Footer.tsx, SocialLinks.tsx, EmailCaptureForm.tsx, UtmCapture.tsx
│   │   ├── LegalPageLayout.tsx     # Shared layout for the 5 legal pages
│   │   ├── home/                   # Homepage-only sections (Hero, WhySection, TrustSection, …)
│   │   ├── ui/                     # Reusable primitives: Button, Container, Section, Badge,
│   │   │                           # StepFlow, FAQAccordion, OpportunityCard
│   │   └── forms/
│   │       ├── ModelForm.tsx, ProviderForm.tsx, ContactForm.tsx
│   │       └── fields.tsx          # Shared Field/TextInput/Select/CheckboxGroup/RadioGroup/Checkbox
│   ├── content/                # ALL site copy lives here, one file per page — edit these first
│   │   ├── global.ts           # Site config, nav, footer, social links, emails, form IDs
│   │   ├── home.ts, models.ts, providers.ts, about.ts, forModels.ts, forProviders.ts,
│   │   │   howItWorksPage.ts, faq.ts, contact.ts, legal.ts
│   ├── types/
│   │   └── opportunity.ts      # Future listing/aftercare data schema (see "Model transparency" below)
│   └── lib/
│       ├── formspree.ts        # Formspree submit helper
│       └── analytics.ts        # Analytics stub + UTM capture/persistence (see below)
├── public/
│   ├── favicon.svg             # Placeholder wordmark favicon
│   └── robots.txt
├── .env.example                 # Copy to .env.local and fill in
├── tailwind.config.ts            # Colour + font tokens
└── package.json
```

## Editing copy

Every page's copy lives in its own file in `src/content/`. Edit those files first — you should
rarely need to touch component code just to change wording, add an FAQ, or tweak a form option
list (e.g. `modelsPage.form.categoryOptions` in `src/content/models.ts`).

## Running locally

```bash
cd lotachi
npm install
cp .env.example .env.local   # then fill in the values below
npm run dev
```

Visit http://localhost:3000.

### Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_FORMSPREE_MODEL_FORM_ID` | For the model form to send | Formspree form ID for the model waitlist |
| `NEXT_PUBLIC_FORMSPREE_PROVIDER_FORM_ID` | For the provider form to send | Formspree form ID for the provider network |
| `NEXT_PUBLIC_FORMSPREE_CONTACT_FORM_ID` | For the contact form + footer email capture to send | Formspree form ID for general contact |
| `NEXT_PUBLIC_CONTACT_EMAIL` | No (defaults to `hello@lotachi.com`) | General contact email shown on site |
| `NEXT_PUBLIC_PROVIDER_EMAIL` | No (defaults to `providers@lotachi.com`) | Provider contact email shown on site |
| `NEXT_PUBLIC_GA4_MEASUREMENT_ID` | No (analytics stays fully off without it) | GA4 property Measurement ID, e.g. `G-XXXXXXXXXX` |

**Formspree is already configured** with LOTACHI's live form IDs, set as the defaults in
`.env.example`:

| Form | Formspree ID | Endpoint |
| --- | --- | --- |
| Model waitlist | `mwlpobvd` | `https://formspree.io/f/mwlpobvd` |
| Provider network | `mrpbqken` | `https://formspree.io/f/mrpbqken` |
| General contact (+ footer email capture) | `xbgloygr` | `https://formspree.io/f/xbgloygr` |

Every model/provider submission includes a `user_type` field (`model` or `provider`) as well, so
leads stay segmentable even if you later consolidate inboxes. Every submission also includes an
honeypot field (`_gotcha`, hidden from real visitors) that Formspree uses to silently discard
automated spam — see `src/components/forms/fields.tsx`.

**To point at a different Formspree account or form:** create an account at https://formspree.io,
create a form, and replace the relevant ID in `.env.example` (or override it in `.env.local` /
your Vercel project's environment variables) — the part after `/f/` in the form's endpoint URL.

Without an ID set, the relevant form still renders and validates normally but shows a friendly
error on submit telling the visitor to email you directly instead — nothing breaks, it just can't
send yet.

## Analytics & UTM tracking

**Google Analytics 4** is wired up, but stays completely inactive until you set
`NEXT_PUBLIC_GA4_MEASUREMENT_ID` (see `.env.example`) — with no ID set, no `gtag` script is
requested at all and nothing reaches Google. `src/lib/analytics.ts` exports `trackEvent()`, which
console-debugs in development and, once a real GA4 ID is set, also sends the event to `gtag`.

**Nine events are tracked** at the relevant call sites across the site: `model_signup_started`,
`model_signup_completed`, `provider_signup_started`, `provider_signup_completed`,
`contact_form_submitted`, `model_cta_clicked`, `provider_cta_clicked`, `provider_pilot_clicked`,
and `social_link_clicked` — plus a GA4 `page_view` fired on every client-side route change
(`src/components/GA4PageView.tsx`), since the App Router doesn't reload the page on `<Link>`
navigation and GA4's automatic page_view only fires once. To add a new event, follow the pattern
at any existing `trackEvent(...)` call site — the `AnalyticsEvent` type in `src/lib/analytics.ts`
gives autocomplete for the standard set but also accepts any string.

**Consent Mode v2**: when a real Measurement ID is set, GA4 defaults `analytics_storage` to
`"denied"` (see the inline script in `src/app/layout.tsx`). No analytics cookies are set and no
data reaches GA4 until something calls
`window.gtag('consent', 'update', { analytics_storage: 'granted' })` — **this site does not yet
have a cookie-consent banner to do that.** Build one before relying on real GA4 data, to stay
compliant with UK PECR/GDPR; see the Cookie Policy content in `src/content/legal.ts` and
`docs/legal-readiness-checklists.md`.

**UTM parameters** (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`) are
captured from the URL on first load and persisted in `sessionStorage`
(`src/components/UtmCapture.tsx` + `src/lib/analytics.ts`), then attached to every `trackEvent()`
call and every Formspree submission — so a link like `/models?utm_source=tiktok` tags that
visitor's eventual conversion with its source, regardless of which page they land on vs. convert
on. This works the same way for TikTok, Instagram, Facebook, LinkedIn or email campaign links —
attribution isn't platform-specific.

UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`) are captured
from the URL on first load (`src/components/UtmCapture.tsx` + `src/lib/analytics.ts`), persisted
in `sessionStorage`, and attached to every form submission automatically — so a link like
`/models?utm_source=tiktok` will tag that lead's Formspree submission with its source.

## Model transparency & future listing architecture

`src/types/opportunity.ts` defines `OpportunityListing` and `BookingAftercare` — the data shape a
real opportunity and a completed booking are designed to hold once the platform exists: why a
model is needed, who performs the service and how they're supervised, model price alongside a
comparable price, duration, eligibility, any model characteristics a provider is specifically
seeking, and — critically — **media/content consent modelled as its own object, entirely separate
from treatment consent** (whether photos/video are taken, exactly what for, whether the model's
face would be identifiable, and that separate consent is always required). `BookingAftercare`
represents provider-written aftercare attached to a completed booking, plus how to contact that
provider afterwards — nothing here is or should ever be auto-generated by LOTACHI on a provider's
behalf.

The four example opportunity cards in `src/content/home.ts` are shaped to this type, and
`OpportunityCard.tsx` renders a summary plus an expandable "See full details" panel showing all of
it — demonstrating, with illustrative (clearly labelled) content, the transparency a real listing
is designed to give someone before they book. The homepage's "Model transparency" section
(`src/components/home/ModelTransparencySection.tsx`, content in `transparency` within
`src/content/home.ts`) states the underlying principle in words: **"Know what you're agreeing to
before you book."**

**On inclusion and imagery**: the site currently uses no photography or illustration of people at
all, by design — text and a monochrome UI only. If imagery is added later, avoid anything that
reads as though LOTACHI is only for one hair type, skin tone, age or demographic, and don't let
imagery stand in for or imply suitability — that's for providers to assess directly, never inferred
from appearance.

## Legal pages

`/privacy`, `/terms`, `/provider-terms`, `/cookies` and `/safety` are early-stage, plain-language
placeholders (content in `src/content/legal.ts`), written specifically around LOTACHI's own
business model and current functionality — not based on or copied from any other organisation's
policies. Each page carries a visible banner stating it's not final legal advice, and individual
clauses that need specific legal sign-off carry their own inline "Solicitor review recommended"
note (e.g. the liability clause in Terms of Use, or retention periods in the Privacy Policy).

Two related internal documents (not published on the website) live in `docs/`:

- `docs/media-consent-standard.md` — the proposed standard for how every opportunity listing
  must disclose photography/video use, keeping treatment consent and media consent strictly
  separate.
- `docs/legal-readiness-checklists.md` — a launch-now checklist, a before-bookings/payments
  checklist, a before-collecting-health-data checklist, and the open business/legal decisions
  still needed (e.g. LOTACHI's legal entity details, minimum-age policy, post-pilot pricing).

**All of this must be reviewed by a UK-qualified solicitor before public launch** — see
`docs/legal-readiness-checklists.md` for the full breakdown.

## Deploying to Vercel

1. Push this repository to GitHub (already done if you're reading this from the repo).
2. Go to https://vercel.com/new and import the repository.
3. Set the **Root Directory** to `lotachi` (since the app lives in a subfolder of this repo).
4. Add the environment variables from the table above in the Vercel project settings
   (Settings → Environment Variables), for both Production and Preview.
5. Deploy. Vercel will build with `npm run build` and serve automatically.

## Connecting lotachi.com (Namecheap → Vercel)

1. In Vercel, open the project → **Settings → Domains** → add `lotachi.com` (and `www.lotachi.com`
   if you want both).
2. Vercel will show you the DNS records to add — typically:
   - An **A record** for the root domain (`@`) pointing to `76.76.21.21`, or
   - Vercel may instead ask you to set the domain's nameservers to Vercel's, depending on the
     option you pick. The A-record approach is simpler if you want to keep Namecheap DNS.
   - A **CNAME record** for `www` pointing to `cname.vercel-dns.com`.
3. In Namecheap: **Domain List → lotachi.com → Manage → Advanced DNS**, add the records Vercel
   showed you, matching the exact host/value/type.
4. Wait for DNS propagation (usually minutes, can take up to 24–48 hours). Vercel's Domains page
   will show a green check once it verifies.
5. Vercel issues an SSL certificate automatically once the domain is verified — no extra steps.

## Adding the final brand identity

Once the real LOTACHI logo, colours and typeface are ready:

- **Logo**: replace `public/favicon.svg` (browser tab icon), and add a logo file (e.g.
  `public/logo.svg`) referenced from `src/components/Nav.tsx` and `src/components/Footer.tsx` in
  place of the current text wordmark.
- **Colours**: edit the `colors` block in `tailwind.config.ts` (`ink`, `paper`, `accent`). Every
  component references these tokens, so updating the hex values there restyles the whole site.
  Current contrast ratios were checked against WCAG AA (4.5:1 for normal text) — re-check after
  any colour change.
- **Typeface**: edit `src/app/layout.tsx`, where `Inter` is currently loaded via
  `next/font/google`. Swap it for your chosen typeface, and update `fontFamily.sans` in
  `tailwind.config.ts` to match.
- **Open Graph image**: add an `opengraph-image.png` (1200×630) inside `src/app/` — Next.js picks
  it up automatically for link previews.
- **Social links**: TikTok, Instagram, YouTube, LinkedIn and Facebook are all set in
  `src/content/global.ts` (`siteConfig.social`). All are rendered by
  `src/components/SocialLinks.tsx`, which opens each link in a new tab with
  `rel="noopener noreferrer"`.

## Assets and information still needed before public launch

This site was built to be launch-ready for early access and provider outreach, but the following
still need real input before it should be treated as fully public/final:

1. **Final logo, brand colours and typeface** — see "Adding the final brand identity" above.
2. **Full legal, business and launch-readiness review** — see `docs/legal-readiness-checklists.md`
   for the complete breakdown (launch-now / before-bookings-and-payments / before-collecting-
   health-data checklists, plus every open business decision, such as LOTACHI's registered legal
   entity details and post-pilot commercial pricing).
3. **Confirmation of contact inboxes** — `hello@lotachi.com` and `providers@lotachi.com` are used
   throughout; set the env vars if you want different addresses, and make sure both inboxes are
   actually monitored before launch.
4. **A GA4 Measurement ID**, if you want real analytics — see "Analytics & UTM tracking" above.
   Also requires a cookie-consent banner (not yet built) before it will actually collect data — see
   the step-by-step GA4/cookie-consent setup underway.
5. **Domain DNS access** in Namecheap to complete the steps in "Connecting lotachi.com" above.

## Notes on scope

This is a validation-stage lead-capture site, not the marketplace product. It intentionally has no
database, no authentication, and no live opportunity listings or bookings — the "Coming soon"
opportunity cards on the homepage are explicitly labelled "Example opportunity" and are static,
illustrative content, not real listings, and copy describing aftercare or media consent describes
the intended future experience rather than a working feature today. No medical or detailed
treatment-history data is collected anywhere on this site.
