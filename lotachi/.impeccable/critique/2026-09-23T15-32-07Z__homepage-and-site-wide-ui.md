---
target: homepage and site-wide UI
total_score: 26
max_score: 36
na_heuristics: 7
p0_count: 1
p1_count: 2
target_identity: "file:/home/user/maksycodes/lotachi/homepage and site-wide UI"
timestamp: 2026-09-23T15-32-07Z
slug: homepage-and-site-wide-ui
---
Method: dual-agent (A: design-review sub-agent · B: detector/browser-evidence sub-agent)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | No active-page state in nav; no progress indicator in the long sign-up forms |
| 2 | Match System / Real World | 4 | Real salon/training vocabulary throughout (SPMU, aftercare, notice periods) |
| 3 | User Control and Freedom | 3 | Cookie banner has Manage/Reject; forms have no step-back or save-and-resume |
| 4 | Consistency and Standards | 4 | Button/badge/terracotta-restraint rules hold identically across all pages |
| 5 | Error Prevention | 2 | No inline format guidance; required-vs-optional easy to miss in dense pill groups |
| 6 | Recognition Rather Than Recall | 3 | Tap-to-select pills are recognition-based, but nothing summarizes selections made |
| 7 | Flexibility and Efficiency | n/a | Marketing/waitlist surface — no repeat-user shortcuts expected |
| 8 | Aesthetic and Minimalist Design | 2 | Restrained palette, but ~7,200px homepage and dense forms work against it |
| 9 | Error Recovery | 2 | No visible error-state design anywhere in the static content |
| 10 | Help and Documentation | 4 | Contextual "How it works"/FAQ links beside the form; strong dedicated how-it-works page |

**Total: 26/36 applicable (72%) — Good**, just above the "Good" threshold, held back mainly by System Status, Error Prevention/Recovery and information density.

## Design Specificity Verdict

**LLM assessment:** Genuinely authored where it counts, generic in the connective tissue. The opportunity-listing cards, the model-transparency section, and the "what LOTACHI does/doesn't do" panel show real domain knowledge — SPMU terminology, salon-rate price comparisons, photo/video-consent-separate-from-treatment-consent language. No generic SaaS template ships that. But the "Why LOTACHI exists" 2×3 grid and the raw label+pill-group form pattern are a fairly interchangeable B2B-marketplace-waitlist pattern.

**Deterministic scan:** The mechanical AI-slop detector (`impeccable detect`) returned zero findings across `src` and `public` — no gradient text, italic-serif display, side-tab borders, or other flagged anti-patterns. Consistent with a considered, restrained execution rather than a templated one.

## Overall Impression

The foundation is technically excellent — zero console errors, zero contrast failures (every heading/body/button pairing tested passes WCAG AA, several exceeding 13:1), zero accessibility alt-text gaps, visible focus indicators everywhere, and a disciplined, correctly-enforced brand palette (Terracotta never fills a button, confirmed in code and in every rendered page). The gap is entirely in density, flow, and one real functional bug: the cookie-consent banner geometrically overlaps primary conversion CTAs on more than half the page/viewport combinations tested — including the "Join as a Model"/"Join as a Provider" buttons on the pages whose entire job is that click.

## What's Working

1. **The opportunity-listing cards** — real vertical specificity (category tags, price-vs-market-rate framing, notice periods) behind a genuinely functional, keyboard-accessible expand/collapse that previews exactly what an anxious first-timer should expect before they commit to anything.
2. **The trust/transparency copy** — "What LOTACHI does — and what it doesn't do" and the model-transparency section name the exact anxieties of a marketplace involving people's bodies, honestly and without overpromising. Rare candor for a waitlist landing page.
3. **Disciplined terracotta restraint, verified not just visually but mechanically** — every contrast pairing tested (headings, body text, every button variant, the cookie banner) passes WCAG AA, several by a wide margin, and Terracotta is never used as a button or background fill anywhere in the rendered site.

## Priority Issues

**[P0] Cookie-consent banner overlaps primary conversion CTAs on 5 of 8 tested page/viewport combinations**
Why it matters: This isn't a visual quibble — mechanical `getBoundingClientRect()` measurement confirms the banner geometrically covers the "Join as a Provider" link on the mobile homepage, the "Join as a provider/model" CTA on both `/models` and `/providers` (desktop), and the "Join the Founding Provider Pilot" CTA on `/providers` mobile, before it's dismissed. On the exact pages whose only job is that one click, the click target is sometimes unreachable.
Fix: Move to a slim, non-overlaying bottom bar (well under its current height) or defer appearance until first scroll/interaction. Explicitly test that the dismissed/undismissed banner never intersects an interactive element's bounding box on any page.
Suggested command: `$impeccable layout`

**[P1] Sign-up forms are a dense wall of 25–35+ micro-decisions with undersized touch targets throughout**
Why it matters: `/models` has ~25 individually-tappable options across 5 groups; `/providers` has 35+ across 8 groups, with no chunking, progress indicator, or save-and-resume — a textbook cognitive-overload pattern for a nervous, first-time, possibly-mobile audience. Compounding it, mechanical measurement found the pill-style option labels are 38px tall, primary buttons 40–42px, and the mobile hamburger 40×40px — all under the 44×44px minimum touch target, on every page tested.
Fix: Split each form into 2–3 short steps with a visible step indicator (About you → What you're looking for → Confirm & consent), and bump interactive element heights to ≥44px sitewide (buttons, pill labels, the hamburger, footer social icons).
Suggested command: `$impeccable adapt`

**[P1] No reassurance content sits near the forms themselves**
Why it matters: The site's strongest trust-building copy (consent boundaries, "LOTACHI doesn't make clinical suitability decisions," aftercare principles) lives mid-homepage. A visitor who converts straight from the hero CTA never scrolls past it and never sees it — the moment of highest anxiety (handing over personal details, budget, travel radius) has the least reassurance nearby.
Fix: Add a compact 2–3 bullet trust strip, linking to the full Trust & Safety section, directly above or beside the submit button on both `/models` and `/providers`.
Suggested command: `$impeccable onboard`

**[P2] "Why LOTACHI exists" reads as generic filler between two much stronger sections**
Why it matters: The Discovery/Matching/Location/Eligibility/Last-minute/Admin grid has no vertical-specific texture and is indistinguishable from any B2B SaaS "how it works" block — sitting directly after the genuinely specific opportunity-card section, it's the one place the site's authored-for-this-product feel drops.
Fix: Ground each item in a hair/skin/nails-specific example, or fold this content into the already-strong "Why models/providers may like LOTACHI" cards instead of running it as a separate generic detour.
Suggested command: `$impeccable bolder`

**[P2] Unbalanced desktop layout on `/models`**
Why it matters: The left info column ends roughly halfway down the viewport while the right-hand form runs a full additional screen-height, leaving a large empty void beneath the left column — reads as unfinished.
Fix: Sticky-position the left column so it tracks the form while scrolling, or fill the space with the trust-strip content from the P1 fix above.
Suggested command: `$impeccable layout`

## Persona Red Flags

**Jordan (nervous first-timer):** Converts from the hero CTA straight to `/models` and faces 5 groups of unexplained pill choices — including a "Typical budget" group — with no copy nearby explaining why LOTACHI needs this much detail before showing a single real opportunity. The one reassurance line on the page is the 18+/ID note; the "clinical decisions remain the provider's responsibility" copy that would calm exactly this hesitation is several sections back on the homepage, which Jordan never scrolled through.

**Casey (distracted mobile user):** On mobile load, the cookie banner covers the "Join as a Provider" button and "How it works" link entirely — if Casey's intent was the provider path, the button isn't there to tap. On `/providers` mobile, the same banner covers the "Join the Founding Provider Pilot" CTA. If Casey does reach a form, it's ~25–35+ small pill buttons (many under the 44px touch-target minimum) in one long scroll with no progress cue — a near-certain abandonment point if interrupted partway through.

## Minor Observations

1. No active-page indicator in the primary nav (no `aria-current`) — a small orientation cost across all 5 pages.
2. Footer "Legal" column lists "Cookie Policy" directly above "Cookie settings" with no distinguishing visual treatment — unclear at a glance that one opens a document and the other reopens the consent manager.
3. Footer social icon links measure 36×36px — under the 44px target, though closer than the other undersized elements.
4. Category taxonomy pills should be double-checked to stay perfectly identical between `/models` and `/providers` since they likely drive the same matching logic on both sides.

## Questions to Consider

1. What if the sign-up forms were split into 2–3 short steps with a visible progress indicator, deferring budget/last-minute-availability to a clearly-optional later step?
2. What if the "What LOTACHI does/doesn't do" trust panel were duplicated as a compact strip directly beside the submit button on both forms, given the reassurance gap is worst at exactly that moment?
3. What if the generic "Why LOTACHI exists" grid were replaced with something rooted in real provider-conversation specifics the site already claims exist?
