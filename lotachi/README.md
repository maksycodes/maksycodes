# Lotachi — pre-launch landing page

A pre-launch marketing and validation site for Lotachi, an early-stage marketplace connecting
consumers with supervised practical-training appointments from professional training providers.
It gives training providers a credible page to land on when contacted, explains the concept in
under 30 seconds, and captures two segmented waitlists (models and training providers).

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** for styling
- **Formspree** for form submission (no backend/database required)
- Deploys cleanly to **Vercel**

No analytics, trackers or cookies are used, so no cookie banner is included. If you add analytics
later, add a cookie banner at the same time.

## File structure

```
lotachi/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout, fonts, SEO/OG metadata
│   │   ├── page.tsx          # Homepage — assembles all sections
│   │   ├── globals.css       # Tailwind entrypoint + base styles
│   │   ├── sitemap.ts        # Generates /sitemap.xml
│   │   ├── privacy/page.tsx  # Privacy page
│   │   └── terms/page.tsx    # Terms page
│   ├── components/
│   │   ├── Nav.tsx, Hero.tsx, WhyLotachi.tsx, HowItWorks.tsx,
│   │   │   ProviderSection.tsx, ModelWaitlistSection.tsx, About.tsx,
│   │   │   FAQ.tsx, Contact.tsx, Footer.tsx   # One section each
│   │   ├── ui/                # Button, Container, Section primitives
│   │   └── forms/
│   │       ├── ModelForm.tsx     # Model waitlist form
│   │       ├── ProviderForm.tsx  # Training provider waitlist form
│   │       └── fields.tsx        # Shared field/input components
│   ├── content/
│   │   └── site.ts            # ALL site copy lives here — edit this first
│   └── lib/
│       └── formspree.ts       # Formspree submit helper
├── public/
│   ├── favicon.svg            # Placeholder wordmark favicon
│   └── robots.txt
├── .env.example                # Copy to .env.local and fill in
├── tailwind.config.ts           # Colour + font tokens
└── package.json
```

## Editing copy

Nearly all text on the site — headlines, body copy, FAQ answers, form labels, footer links — lives
in `src/content/site.ts`. Edit that file first; you should rarely need to touch component files
just to change wording.

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
| `NEXT_PUBLIC_FORMSPREE_MODEL_FORM_ID` | For the model form to actually send | Formspree form ID for the model waitlist |
| `NEXT_PUBLIC_FORMSPREE_PROVIDER_FORM_ID` | For the provider form to actually send | Formspree form ID for the training provider waitlist |
| `NEXT_PUBLIC_CONTACT_EMAIL` | No (defaults to `hello@lotachi.com`) | General contact email shown on site |
| `NEXT_PUBLIC_PROVIDER_EMAIL` | No (defaults to `providers@lotachi.com`) | Provider contact email shown on site |

**To set up Formspree (free tier is enough for pre-launch volumes):**

1. Create an account at https://formspree.io.
2. Create two forms — e.g. "Lotachi model waitlist" and "Lotachi training provider waitlist".
3. Copy each form's ID (the part after `/f/` in the form's endpoint URL) into the matching env
   variable above.
4. Every submission includes a `user_type` field (`model` or `provider`) as well, so even if you
   later consolidate to one form/inbox, leads stay segmentable.

Without these IDs set, the forms render and validate normally but show a friendly error on submit
telling the visitor to email you directly instead — the site never breaks, it just can't send yet.

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

Once the real Lotachi logo, colours and typeface are ready:

- **Logo**: replace `public/favicon.svg` (used for the browser tab icon), and add a logo file
  (e.g. `public/logo.svg`) that you reference from `src/components/Nav.tsx` and
  `src/components/Footer.tsx` in place of the current text wordmark.
- **Colours**: edit the `colors` block in `tailwind.config.ts` (`ink`, `paper`, `accent`). Every
  component references these tokens, so updating the hex values there restyles the whole site.
- **Typeface**: edit `src/app/layout.tsx`, where `Inter` is currently loaded via
  `next/font/google`. Swap it for your chosen typeface (Google Font, or a self-hosted font via
  `next/font/local`), and update the `fontFamily.sans` stack in `tailwind.config.ts` to match.
- **Open Graph image**: add an `opengraph-image.png` (1200×630) inside `src/app/` — Next.js will
  pick it up automatically for link previews.

## Notes on scope

This is a validation-stage credibility page, not the marketplace product. It intentionally has no
database, no authentication, and no dashboard — just static content and two lead-capture forms.
Medical/treatment-history data is deliberately not collected anywhere on this site.
