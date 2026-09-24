# NANTI — Shopify Theme Architecture Proposal

Status: **awaiting approval**. No theme code has been written. It gets built only after you approve this proposal.

---

## 1. My understanding of NANTI

- **What NANTI sells:** raw, single-donor human hair: bundles, lace (closures, frontals) and, later, glueless wigs. It's a premium product with founding prices of £165–£475.
- **What makes NANTI different:** the supply chain. Most brands pick one factory and sell whatever it produces. NANTI chooses specialists stage by stage (donor sourcing → assessment → preparation → wefting → ventilation → wig construction → colour) and does its own QC at the end. The story is about curating each stage. It doesn't depend on any claim that other brands are bad.
- **Inventory model:** each donor lot is one-of-a-kind stock, a bit like a vintage or fine-jewellery piece. Finished length and finished weight are **measured values**, not marketing tiers. When lots differ, that's shown as provenance ("this lot is 121g"). It isn't hidden and it isn't made to look uniform.
- **Tone:** quiet confidence, restraint and precision. It should read like fashion editorial, not a wig boutique. The copy informs and never oversells. Claims must be ones you can defend (for example, fine lace needs care).
- **Long-term goal:** "It's a NANTI." The brand name comes to mean a standard.
- **Commerce:** Shopify handles all of it (catalogue, inventory, cart, checkout, payments, tax, shipping, discounts, accounts, orders). The theme presents the products and never handles money.

## 2. Proposed design system

### Colour
The two moodboards use slightly different hex values. I've merged them into one set and checked each text pairing against WCAG contrast rules.

| Token | Hex | Use | Contrast |
|---|---|---|---|
| `--c-ivory` | `#F8F5F1` | Main background | — |
| `--c-sand` | `#EBDCCB` | Secondary surfaces, cards, details | — |
| `--c-taupe` | `#B89B7F` | Hairlines, borders, **decoration only** | 2.4:1 on ivory ✗ text |
| `--c-mocha` | `#6B4F3F` | Secondary text, meta labels, links | 6.9:1 on ivory ✓ AA |
| `--c-espresso` | `#1A0F0B` | Primary text, dark sections, primary buttons | 17.3:1 ✓ AAA |
| `--c-champagne` | `#D4B483` | Accent: fine rules, icons, and text **on espresso only** | 9.5:1 on espresso ✓ / 1.8:1 on ivory ✗ |

Rules:
- **Gold is never used for text on light backgrounds.** It fails contrast there. On light backgrounds, gold is limited to 1px rules and small icons.
- There are no gradients. The only exception is a subtle darkening scrim behind text placed over photos, which keeps that text legible.
- **Colour schemes:** the theme editor gets three: *Ivory* (default), *Sand* and *Espresso*. Any section can switch to any of them.

### Typography
Fonts are selected in theme settings, so you can change them later without touching code.

- **Headlines:** *Playfair Display*, as on both moodboards. Display sizes use a light weight with generous tracking on uppercase eyebrows. **Alternative:** *Cormorant Garamond* is more fashion-editorial and lighter, but it's harder to read at small sizes. It's one dropdown to switch, so it doesn't need to be decided now.
- **Body and UI:** *Inter*, self-hosted as WOFF2 subsets with `font-display: swap`. **Fallback:** *Montserrat* from the Shopify font library.
- **Eyebrow labels:** body font in uppercase, 11–12px, with 0.2em letter-spacing (the "REAL HAIR · HIGHER STANDARDS" style).
- **Scale:** fluid, using `clamp()`:

| Level | Mobile → desktop |
|---|---|
| Display | 40 → 88px |
| H1 | 34 → 56px |
| H2 | 28 → 40px |
| H3 | 20 → 26px |
| Body | 16 → 17px, line-height 1.6 |
| Small | 13px |

### Layout and spacing
- **Spacing scale:** 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 144px.
- **Section padding:** set per section in the editor (none / S / M / L / XL).
- **Grid:** 12 columns on desktop and 4 on mobile. Max content width is 1440px, and text is capped at about 64 characters per line.
- **Gutters:** 16px on mobile and 40px on desktop. Editorial imagery may run full-bleed.

### Components
- **Buttons:** square corners (0–2px radius), uppercase text with 0.15em tracking, 48px minimum height. There are three styles: solid espresso, outline, and text link with an underline.
- **Inputs:** a single bottom border or a 1px taupe outline, with no rounded pills.
- **Icons:** a custom 1px line-icon set with five icons (diamond, leaf, shield-check, globe, heart), inlined as SVG snippets.

### Imagery ratios
| Where | Ratio |
|---|---|
| Hero | 4:5 on mobile, 16:9 or 21:9 on desktop |
| Product cards | 4:5 |
| Editorial splits | 3:4 |
| Journal cards | 3:2 |

Every image uses `image_url` + `image_tag` with `srcset`/`sizes`, lazy loading below the fold, and the hero image preloaded.

### Motion
- **Allowed:** a fade and 12px rise on scroll-reveal (400ms, ease-out, once per element), a slow image zoom on hover (desktop only), and a cart drawer slide.
- **Reduced motion:** all of the above is disabled under `prefers-reduced-motion`.
- **Not used:** parallax, carousels that autoplay, and cursor effects.

## 3. Shopify architecture

### Approach
The theme is a custom Online Store 2.0 theme, written from scratch and not forked from Dawn. It uses Liquid and JSON templates with no build step and plain JavaScript (Web Components), and ships no libraries. Checkout and customer accounts are Shopify-native: the theme uses **new customer accounts**, which Shopify hosts, so there are no login or account templates to maintain.

### File structure
```
nanti-theme/
├── layout/        theme.liquid, password.liquid
├── templates/
│   ├── index.json
│   ├── product.json                 (bundle / lace "dossier")
│   ├── product.wig-waitlist.json    (wig silhouettes, no Add to Bag)
│   ├── collection.json, list-collections.json
│   ├── blog.json (Journal), article.json
│   ├── page.json, page.process.json, page.single-donor.json,
│   │   page.raw-hair-guide.json, page.lace-guide.json, page.why-nanti.json,
│   │   page.faq.json, page.contact.json, page.hair-care.json
│   ├── cart.json, search.json, 404.json, password.json, gift_card.liquid
├── sections/
│   ├── header-group.json, footer-group.json
│   ├── announcement-bar, header, footer
│   ├── hero-editorial, rich-text, image-with-text, editorial-split
│   ├── process-journey, featured-donor-lots, featured-collection
│   ├── single-donor, transparency-weights, lace-craft
│   ├── wig-waitlist, founder-story, journal-grid, newsletter
│   ├── usp-icons, faq-accordion, contact-form
│   ├── main-product, product-recommendations, main-collection,
│   │   main-cart, cart-drawer, main-search, main-article, main-blog,
│   │   main-page, main-404, main-password
├── snippets/      product-card, donor-spec-list, price, image, icon-*,
│                  buy-buttons, variant-picker, facets, breadcrumbs,
│                  meta-tags, structured-data, pagination, …
├── assets/        base.css, component-*.css (loaded per section),
│                  global.js, cart.js, product-form.js, facets.js,
│                  predictive-search.js, fonts
├── config/        settings_schema.json, settings_data.json
└── locales/       en.default.json, en.default.schema.json
```

### How it works
- **Add to Bag:** a native Shopify product form posts the selected variant ID to `/cart/add`. JavaScript upgrades this to use the AJAX Cart API and refreshes the cart drawer through the Section Rendering API. If JavaScript is off, the form still submits normally. The Checkout button goes to `/checkout`, Shopify's own checkout.
- **Cart:**
  - The cart drawer has a free-shipping progress line: "£X away from free UK tracked shipping". The £250 threshold is a theme setting that only controls this message; the actual shipping rate is configured in Shopify Shipping.
  - Discount codes are applied at checkout.
- **Filtering:** uses the free **Shopify Search & Discovery** app. Filters cover length, finished-weight range, texture, lace type, availability and price, driven by the metafields in §6.
- **Sets (2- and 3-bundle):** built with the free **Shopify Bundles** app. A set is made from component variants, so selling one set reduces inventory on the real bundles it contains. See Decision 4.
- **Newsletter and wig waitlist:** Shopify customer forms, tagged `newsletter` and `waitlist-<silhouette>`. This works with Shopify Email out of the box, and with Klaviyo if you adopt it later.
- **SEO:**
  - Tags: `meta-tags` snippet (title, description, canonical, Open Graph/Twitter).
  - Structured data: Shopify's `structured_data` filter for Product and Article, plus hand-written JSON-LD for Organization and BreadcrumbList.
  - Headings: one H1 per template.
- **Policies:** Privacy, Terms, Refund and Shipping use Shopify's native policy pages (Settings → Policies). I'll supply placeholder text for you to paste in, with `[LEGAL REVIEW]` markers on anything that needs a lawyer.
- **Pre-launch:** a branded password page with "Inside NANTI" signup, so you can collect emails while the store is closed.

## 4. Homepage wireframe (mobile first; desktop notes in brackets)

```
┌──────────────────────────────┐
│ ANNOUNCEMENT: Complimentary UK tracked shipping over £250 │
├──────────────────────────────┤
│ ☰        [NANTI LOGO]     🔍 👜 │  sticky, transparent over hero
├──────────────────────────────┤
│ 1 HERO  full-bleed image/video   │  [16:9, text bottom-left]
│   RAW. REAL. REFINED.            │
│   Single-donor raw hair,         │
│   curated through every stage.   │
│   [SHOP BUNDLES] Discover NANTI →│
├──────────────────────────────┤
│ 2 WHY NANTI         (ivory)      │  [left: heading+copy / right: journey]
│   NOT FACTORY-DROPPED. CURATED.  │
│   copy …                         │
│   01 Donor sourcing ─────        │  vertical numbered stages, thin gold
│   02 Assessment                  │  rule, one image that swaps per stage
│   …  08 NANTI QC                 │  [horizontal scroll-snap on desktop]
├──────────────────────────────┤
│ 3 FEATURED DONOR LOTS            │
│  [img 4:5]      [img 4:5]        │  2-up mobile / 4-up desktop
│  Raw Straight — Lot 026          │
│  24" · 121g · Natural black-brown│
│  Single donor          £185      │
├──────────────────────────────┤
│ 4 ONE DONOR. ONE BUNDLE. (espresso) │ [image | text split]
├──────────────────────────────┤
│ 5 THE NUMBER ON THE LABEL        │
│   SHOULD MEAN SOMETHING.         │
│   example "label" card:          │
│   LENGTH 24" │ WEIGHT 121g │ LOT 026 │
├──────────────────────────────┤
│ 6 LACE SHOULD DISAPPEAR.         │  macro hairline image + 4 short
│   CRAFT SHOULD REMAIN.           │  points, care honesty line
├──────────────────────────────┤
│ 7 WIGS, REFINED.   (sand)        │
│   4 silhouettes (image + name)   │  2×2 grid
│   [ email ] [JOIN THE WAITLIST]  │  silhouette choice as tag
├──────────────────────────────┤
│ 8 FOUNDER / SOURCING STORY       │  portrait + long-form editorial
├──────────────────────────────┤
│ 9 JOURNAL  5 cards (scroll-snap) │  [3-up + "View all"]
├──────────────────────────────┤
│ 10 INSIDE NANTI.  (espresso)     │
│   [ email ] [SUBSCRIBE]          │
├──────────────────────────────┤
│ FOOTER  Shop / Discover / Support│  accordions on mobile
│ © NANTI · policies · payment icons│
└──────────────────────────────┘
```
Every block above is a separate section, so it can be reordered, hidden, re-coloured and edited in the theme editor.

## 5. Product page wireframe ("luxury dossier")

```
Mobile                              Desktop
┌─────────────────────┐            ┌──────────────┬──────────────┐
│ gallery (swipe,     │            │ vertical     │ LOT 026      │ sticky
│ 4:5, dots, zoom)    │            │ image stack  │ Raw Straight │ info
├─────────────────────┤            │ + video      │ £185         │ column
│ LOT 026 · Single donor           │              │ ─────────    │
│ NANTI Raw Straight  │            │              │ spec table   │
│ £185   ● 1 available│            │              │ variant pick │
│ ┌─────────────────┐ │            │              │ [ADD TO BAG] │
│ │LENGTH   24"     │ │            │              │ accordions   │
│ │WEIGHT   121g    │ │            └──────────────┴──────────────┘
│ │COLOUR   Natural black-brown │
│ │TEXTURE  Natural straight    │
│ │DONOR    Single donor ✓      │
│ └─────────────────┘ │
│ [variant picker]    │
│ [   ADD TO BAG    ] │  → sticky bar appears once scrolled past
├─────────────────────┤
│ About this donor lot│  natural variation notes (metafield)
│ ▸ Details           │  origin, prep, wefting, processing
│ ▸ What single donor means │ short, links to full guide
│ ▸ Care              │  (care-guide metaobject)
│ ▸ Shipping & returns│  (theme setting / page content)
├─────────────────────┤
│ Recommended pairing │  pairing metafield → fallback: Shopify recs
├─────────────────────┤
│ Breadcrumbs, Journal link │
└─────────────────────┘
```
- **Sold-out lots** stay visible, marked "This lot has found its home", and link to similar lots. Keeping them up tells the provenance story and keeps their SEO value.
- **Wig products** use `product.wig-waitlist`. It shows the same dossier but swaps the price and Add to Bag for a waitlist form.

## 6. Metafield and metaobject architecture

### Product metafields
All product metafields use the namespace `nanti.*`. They're created in Settings → Custom data, and I'll provide exact definitions, including a script-free checklist to follow.

| Key | Type | Filterable | Notes |
|---|---|---|---|
| `finished_length` | Dimension (in) | ✓ | Actual measured length after wefting |
| `finished_weight` | Weight (g) | ✓ (range) | Actual measured weight |
| `lot_reference` | Single-line text | — | e.g. `NAN-026`, shown publicly as "Lot 026" |
| `natural_colour` | Single-line text | ✓ | e.g. "Natural black-brown" |
| `texture` | Single-line text, choices | ✓ | Straight / Body wave / Loose wave / Wavy / Curly … |
| `origin` | Single-line text | ✓ | Source region (only what you can substantiate) |
| `single_donor` | True/false | ✓ | Shows the badge |
| `preparation_notes` | Multi-line text | — | |
| `wefting_notes` | Multi-line text | — | |
| `lace_type` | Single-line text, choices | ✓ | HD / Swiss / Transparent … (lace products only) |
| `lace_size` | Single-line text | ✓ | 5×5, 13×4 … |
| `processing_notes` | Multi-line text | — | Colour or other processing, or "Unprocessed" |
| `variation_notes` | Rich text | — | "About this donor lot" |
| `care_guide` | Metaobject ref → `care_guide` | — | Reusable; write it once, link it to many products |
| `lot_media` | List of files | — | Process/provenance imagery beyond the main gallery |
| `pairings` | List of product refs | — | Recommended pairing |
| `lot_status` | Single-line text, choices | — | Only for states inventory can't express ("Reserved", "Coming soon") |

**Availability** comes from Shopify inventory. No metafield duplicates it, so the two can never disagree.

### Variant metafields
- `nanti.bundle_weight` (weight): each physical bundle's own weight, when a lot is sold bundle by bundle.

### Metaobjects
Each of these can be edited in Content → Metaobjects.

- `process_stage`: name, number, description, image. Feeds the process journey on the homepage and the Our Process page.
- `care_guide`: title, rich text.
- `wig_silhouette`: name, description, image, status. Feeds the wig waitlist section.
- `faq_item`: question, answer, category. Feeds the FAQ page and product accordions.
- `specialist_stage` (optional, later): a non-identifying profile for each supply-chain stage.

### Collections
- Bundles, Lace (closures and frontals), Wigs, Sets, Care.
- Shop All uses the built-in `/collections/all`.

## 7. Decisions I need from you

1. **Official logo files (blocking).** Please upload the NANTI logo and monogram as SVG files, ideally with light and dark versions. I will not use or redraw the lettering from the moodboards. Until the files arrive, the theme will use an empty logo slot in the theme editor.
2. **Tagline under the logo.** Your brief uses "Raw. Real. Refined." as the hero line. Moodboard 1 shows "Real Hair · Higher Standards" under the wordmark, and moodboard 2 shows "Hair Redefined". Is a tagline part of your official logo file? If not, I'll use no tagline lockup and use "Raw. Real. Refined." only as a headline.
3. **Palette.** Do you approve the merged palette in §2, including the rule that gold is never used as text on ivory?
4. **How a donor lot is stocked.** This decides the product setup. My recommendation:
   - **One product per donor lot.** Each physical bundle in the lot is a variant with stock of 1 and its own measured weight.
   - **2- and 3-bundle sets** are built with Shopify Bundles from those variants, so inventory stays accurate.
   - **Open questions:** can one lot contain different lengths? Do you weigh each bundle, or the lot as a whole?
5. **Where the theme code lives.** Shopify's "Connect from GitHub" requires the theme files to sit at the **root** of a branch. My recommendation is a dedicated repo, `maksycodes/nanti-theme`. The alternative is keeping it in `nanti/` in this repo and uploading it as a ZIP or with the Shopify CLI. Should I create the new repo?
6. **Markets.** Is it UK and GBP only at launch, or will you ship internationally from day one? This affects currency and country selectors and the shipping copy.

Everything else I'll handle with the defaults described above, all of which can be changed in the theme editor:
- Fonts (§2).
- Shopify Email for the newsletter.
- Search & Discovery for filters.
- New customer accounts.
- No wishlist at launch. A wishlist needs a third-party app, which adds JavaScript weight, and it can be added later.
