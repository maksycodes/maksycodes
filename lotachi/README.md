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
| `/` | Homepage — positioning, how it works (models & providers), why LOTACHI exists, dual-sided benefits, trust & safety, example opportunity feed, early-access CTA |
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

**To set up Formspree (free tier is enough for early-access volumes):**

1. Create an account at https://formspree.io.
2. Create three forms — e.g. "LOTACHI model waitlist", "LOTACHI provider network", "LOTACHI contact".
3. Copy each form's ID (the part after `/f/` in the form's endpoint URL) into the matching env
   variable above.
4. Every model/provider submission includes a `user_type` field (`model` or `provider`) as well,
   so leads stay segmentable even if you later consolidate inboxes.

Without an ID set, the relevant form still renders and validates normally but shows a friendly
error on submit telling the visitor to email you directly instead — nothing breaks, it just can't
send yet.

## Analytics & UTM tracking

No analytics vendor is connected. `src/lib/analytics.ts` exports a `trackEvent()` stub (currently
just `console.debug`s in development) that's already called from every primary CTA click, nav
click, and form start/complete/error across the site. To wire up a real provider (GA4, PostHog,
Segment, etc.), replace the body of `trackEvent()` — every call site already passes a stable event
name and payload.

UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`) are captured
from the URL on first load (`src/components/UtmCapture.tsx` + `src/lib/analytics.ts`), persisted
in `sessionStorage`, and attached to every form submission automatically — so a link like
`/models?utm_source=tiktok` will tag that lead's Formspree submission with its source.

## Legal pages

`/privacy`, `/terms`, `/provider-terms`, `/cookies` and `/safety` are early-stage, plain-language
placeholders (content in `src/content/legal.ts`), each rendered with a visible banner stating
they're not final legal advice. **These must be reviewed by a qualified professional before public
launch** — see "Assets and information still needed" below.

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
- **Social links**: replace the placeholder `#` URLs in `src/content/global.ts` (`siteConfig.social`).

## Assets and information still needed before public launch

This site was built to be launch-ready for early access and provider outreach, but the following
still need real input before it should be treated as fully public/final:

1. **Formspree form IDs** (or an alternative backend) for the model, provider and contact forms —
   see "Environment variables" above. Nothing currently sends anywhere without these.
2. **Real social media URLs** for TikTok, Instagram, LinkedIn and Facebook (currently `#`
   placeholders in `src/content/global.ts`).
3. **Final logo, brand colours and typeface** — see "Adding the final brand identity" above.
4. **Legal review** of all 5 legal pages (Privacy, Terms, Provider Terms, Cookies, Safety
   Disclaimer) by a qualified professional — current content is a plain-language placeholder, not
   final legal advice.
5. **Confirmation of contact inboxes** — `hello@lotachi.com` and `providers@lotachi.com` are used
   throughout; set the env vars if you want different addresses, and make sure both inboxes are
   actually monitored before launch.
6. **An analytics provider**, if you want real conversion tracking beyond the built-in UTM capture
   — see "Analytics & UTM tracking" above.
7. **Decision on pilot pricing** — the site currently says pilot/early-access pricing is "being
   tested" rather than stating a number; update `src/content/faq.ts` and `src/content/providers.ts`
   once pricing is decided.
8. **Domain DNS access** in Namecheap to complete the steps in "Connecting lotachi.com" above.
9. **A founder/team line for the About page.** The current copy deliberately stays anonymous
   (no name, background or photo was provided to write truthfully) — a short, real founder bio
   would meaningfully strengthen credibility for cautious visitors deciding whether to trust the
   site. Update `src/content/about.ts` once you're ready to share this.

## Notes on scope

This is a validation-stage lead-capture site, not the marketplace product. It intentionally has no
database, no authentication, and no live opportunity listings — the "Coming soon" opportunity
cards on the homepage are explicitly labelled "Example opportunity" and are static, illustrative
content, not real listings. No medical or detailed treatment-history data is collected anywhere on
this site.
