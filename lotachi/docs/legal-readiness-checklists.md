# LOTACHI Legal & Launch Readiness Checklists

**Status:** internal reference document — not published on the website. Not
final legal advice; treat every item below as something to confirm with a
UK-qualified solicitor, not as a completed compliance sign-off.

This document accompanies the rewritten legal pages in `src/content/legal.ts`
and the media consent standard in `docs/media-consent-standard.md`. It's
organised around what LOTACHI can do *now* (launch the informational/
waitlist site) versus what needs more work before two specific future
milestones: taking bookings/payments, and collecting health-adjacent data.

---

## 1. Launch-now checklist (current site: informational + waitlists)

This is what's needed to responsibly launch the site as it exists today —
public information, model waitlist, provider network/pilot, contact form.

- [ ] Formspree form IDs configured for all three forms (model, provider,
      contact) — see `.env.example`.
- [ ] `hello@lotachi.com` and `providers@lotachi.com` are real, monitored
      inboxes.
- [ ] Final social media URLs confirmed (LinkedIn still outstanding).
- [ ] The five legal pages (Privacy, Terms, Provider Terms, Cookies, Safety
      Disclaimer) reviewed by a solicitor — especially every section flagged
      "Solicitor review recommended."
- [ ] LOTACHI's registered legal entity details added to the Privacy Policy
      "Who we are" section (see open decisions below).
- [ ] Decision made on whether GA4 goes live at launch. If yes: a
      cookie-consent banner must exist and call
      `gtag('consent','update',{analytics_storage:'granted'})` before any
      analytics cookie is set — GA4 currently defaults to denied and won't
      collect data without this.
- [ ] Domain DNS connected (lotachi.com → Vercel) and SSL verified.
- [ ] Founder details on the About page confirmed accurate.
- [ ] Provider pilot pricing messaging reviewed and confirmed accurate
      ("free during the initial pilot period," limited slots, no permanent
      free-access guarantee).

## 2. Before taking bookings or payments

Nothing below is built yet. This is what needs deciding/building before
LOTACHI can process a real booking or take a payment.

- [ ] Payment processor selected, and a PCI-DSS-appropriate approach chosen
      (e.g. using a processor like Stripe that keeps card data off LOTACHI's
      own servers).
- [ ] Booking Terms drafted and solicitor-reviewed — distinct from the
      current pre-launch Terms of Use.
- [ ] Cancellation and refund policy defined — and clarified whether this is
      set per-provider (as currently stated) or has a LOTACHI-wide floor.
- [ ] Consumer rights reviewed with a solicitor: Consumer Rights Act 2015,
      and Consumer Contracts (Information, Cancellation and Additional
      Charges) Regulations 2013 (distance-selling / right to cancel), as they
      apply to a marketplace connecting consumers with independent service
      providers.
- [ ] LOTACHI's own liability/insurance position reviewed for a live
      transacting marketplace (e.g. professional indemnity, cyber
      insurance) — separate from providers' own insurance obligations.
- [ ] Clarify whether LOTACHI ever holds client money (e.g. holds a payment
      before releasing it to a provider) — this materially changes the legal
      and regulatory position (potentially including FCA considerations) —
      versus purely facilitating payment directly between model and provider.
- [ ] Provider commission/subscription pricing finalised and clearly
      communicated to providers ahead of it applying (explicitly not decided
      yet — see open decisions below).
- [ ] Provider verification/ID-checking process decided and implemented, if
      LOTACHI intends to claim any level of verification (currently it
      explicitly does not guarantee this).
- [ ] Dispute-resolution process defined for booking-related complaints
      between models and providers.
- [ ] Media/photography consent flow from `docs/media-consent-standard.md`
      actually implemented in the booking product, not just described in
      policy.
- [ ] Minimum-age / minors policy for models finalised (see open decisions).

## 3. Before collecting health-adjacent data

"Health-adjacent data" here means treatment/medical history, clinical
eligibility information, contraindication answers, or photographs/video of a
person in a way that could constitute special-category or biometric data
under UK GDPR.

- [ ] Identify the specific UK GDPR Article 9 condition that applies (most
      likely explicit consent) and document it before any such data is
      collected.
- [ ] Carry out a Data Protection Impact Assessment (DPIA) covering the
      specific data to be collected, how it will be used, and by whom.
- [ ] Update the Privacy Policy to explicitly cover this data — the current
      version is deliberately silent because none of it is collected today,
      and states clearly that it must be updated first.
- [ ] Define and implement data retention and security measures specific to
      this category of data (likely stricter than the general retention
      approach currently described).
- [ ] Define access controls — who at LOTACHI (if anyone) can see this data,
      versus it flowing directly between model and provider.
- [ ] Solicitor/DPO sign-off obtained on the above before launch.
- [ ] Media/photography consent flow (`docs/media-consent-standard.md`)
      implemented, since photographs can themselves be special-category or
      biometric data depending on use.

---

## Open business/legal decisions still needed

Items the business (not the product build) needs to decide — several legal
sections above are deliberately non-committal pending these:

1. **LOTACHI's legal entity — decided, not yet executed.** LOTACHI will be
   incorporated as its own company (working name: LOTACHI LTD), separate
   from Osari (currently the founder's sole-trader trading name), before
   real bookings, payments or provider contracts begin — the two have
   different brands, customer groups, risk profiles and liability exposure.
   Still to do: a Companies House name-availability check and trademark
   clearance, then the actual incorporation. Only once that's complete
   should a real registered company name/number/address be added to the
   Privacy Policy "Who we are" section — do not add placeholder company
   details before incorporation is real.
2. **Minimum age policy for models — decided (phased).** Phase 1 (now, the
   waitlist/early-access site): self-declaration only — the model confirms
   "I am 18 or over" at sign-up; LOTACHI does not collect or store any ID
   document. Phase 2 (once bookings exist): add platform-level age
   verification before a first booking, ideally via a privacy-preserving
   third-party provider that returns only an "18+ / not 18+" result rather
   than the underlying document — the ICO recognises this kind of
   tokenised/third-party age-assurance approach. Phase 3 (higher-risk
   categories, e.g. injectables): both LOTACHI-level and provider-level
   checks, since the provider retains their own separate professional/
   clinical obligation regardless of what LOTACHI does. In-person: the
   provider is still required to check government-issued photo ID before
   any treatment and should record only a "18+ verified" flag, not a copy
   of the document. Website wording should say: "LOTACHI is for adults
   aged 18 and over. You may be asked to verify your age before accessing
   booking functionality, and participating providers may require valid
   photographic ID at your appointment." — not "age-verified platform,"
   since today that would only be self-declaration.
3. **Post-pilot commercial pricing** for providers (commission, subscription,
   or another model) — intentionally not invented in the legal pages, since
   it hasn't been decided.
4. **What "provider verification" will actually mean**, if/when LOTACHI
   introduces it (e.g. ID checks, qualification checks, insurance checks) —
   currently the site explicitly does not claim any verification.
5. **Exact data retention periods** per data category, to replace the
   current "as long as reasonably necessary" language with fixed periods or
   clear deletion triggers.
6. **Whether and when to enable GA4**, and the corresponding cookie-consent
   banner — currently GA4 is wired but inert (Consent Mode default denied)
   until both exist.
7. **LOTACHI's own insurance position** (professional indemnity, cyber, etc.)
   as the platform takes on more responsibility over time.
8. **Dispute-resolution and escalation process** for complaints that reach
   LOTACHI about a provider or a model.
9. **Governing law/jurisdiction confirmation**, particularly once providers
   or models outside England and Wales are involved.
10. **How models are legally characterised** — receiving a free/discounted
    service in exchange for being a training model sits differently under
    consumer law than a normal paid consumer transaction, and this framing
    should be confirmed with a solicitor once bookings are introduced.
11. **Safeguarding policy** specific to LOTACHI's own role (as distinct from
    each provider's own safeguarding obligations).
12. **Media/erasure interaction** — the specific open question in
    `docs/media-consent-standard.md` about withdrawing consent for content
    that's already been published.
