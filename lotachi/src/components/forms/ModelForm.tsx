"use client";

import { FormEvent, useRef, useState } from "react";
import { siteConfig } from "@/content/global";
import { modelsPage } from "@/content/models";
import { submitToFormspree, SubmitState } from "@/lib/formspree";
import { getUtmParams, trackEvent } from "@/lib/analytics";
import Link from "next/link";
import { Field, TextInput, CheckboxGroup, RadioGroup, Checkbox, FormNotice, Honeypot, FormSection } from "./fields";
import { Button } from "../ui/Button";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const { form } = modelsPage;

export function ModelForm() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");
  const [travel, setTravel] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [availability, setAvailability] = useState<string[]>([]);
  const [minimumNotice, setMinimumNotice] = useState("");
  const [priceInterest, setPriceInterest] = useState("");
  const [heardAboutUs, setHeardAboutUs] = useState("");
  const [heardAboutUsOther, setHeardAboutUsOther] = useState("");
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [consent, setConsent] = useState(false);
  const [privacyAck, setPrivacyAck] = useState(false);
  const [gotcha, setGotcha] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, setState] = useState<SubmitState>("idle");
  const hasStarted = useRef(false);
  const hasCapturedPostcode = useRef(false);

  function markStarted() {
    if (hasStarted.current) return;
    hasStarted.current = true;
    trackEvent("model_signup_started");
  }

  function handleCategoriesChange(next: string[]) {
    setCategories(next);
    trackEvent("category_selected", { context: "model", categories: next });
  }

  function handleMinimumNoticeChange(next: string) {
    setMinimumNotice(next);
    trackEvent("short_notice_selected", { context: "model", minimum_notice: next });
  }

  function handleLocationBlur() {
    // Only records that a postcode/area was entered — never the value
    // itself, which isn't needed for analytics and shouldn't be collected
    // purely to track form progress.
    if (hasCapturedPostcode.current || !location.trim()) return;
    hasCapturedPostcode.current = true;
    trackEvent("postcode_captured", { context: "model" });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const nextErrors: Record<string, string> = {};
    if (!firstName.trim()) nextErrors.firstName = "Please enter your first name.";
    if (!email.trim()) nextErrors.email = "Please enter your email address.";
    else if (!EMAIL_PATTERN.test(email)) nextErrors.email = "Please enter a valid email address.";
    if (!location.trim()) nextErrors.location = "Please enter your postcode.";
    if (!travel) nextErrors.travel = form.travelRequiredError;
    if (categories.length === 0) nextErrors.categories = form.categoriesRequiredError;
    if (availability.length === 0) nextErrors.availability = form.availabilityRequiredError;
    if (!minimumNotice) nextErrors.minimumNotice = form.minimumNoticeRequiredError;
    if (!priceInterest) nextErrors.priceInterest = form.priceInterestRequiredError;
    if (!ageConfirmed) nextErrors.ageConfirmed = "Please confirm you're 18 or over to join.";
    if (!consent) nextErrors.consent = "Please confirm you'd like to hear from us.";
    if (!privacyAck) nextErrors.privacyAck = "Please confirm you've read the Privacy Policy.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setState("submitting");
    try {
      await submitToFormspree(siteConfig.formspree.modelFormId, {
        user_type: "model",
        first_name: firstName,
        email,
        mobile,
        location,
        travel_distance: travel,
        categories,
        availability,
        minimum_notice: minimumNotice,
        price_interest: priceInterest,
        heard_about_us: heardAboutUs,
        heard_about_us_other: heardAboutUsOther,
        age_confirmed: ageConfirmed,
        consent,
        privacy_acknowledged: privacyAck,
        _gotcha: gotcha,
        ...getUtmParams(),
      });
      trackEvent("model_signup_completed");
      setState("success");
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <FormNotice tone="success">
        <strong className="block">{form.successHeading}</strong>
        {form.successBody}
      </FormNotice>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <Honeypot id="_gotcha-model" value={gotcha} onChange={setGotcha} />

      <FormSection step={1} title="About you" description="Just enough to add you to the waitlist and get in touch.">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="First name" htmlFor="model-first-name" required error={errors.firstName}>
            <TextInput
              id="model-first-name"
              name="firstName"
              autoComplete="given-name"
              value={firstName}
              onFocus={markStarted}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Field>
          <Field label="Email" htmlFor="model-email" required error={errors.email}>
            <TextInput
              id="model-email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Mobile (helps with short-notice opportunities)" htmlFor="model-mobile" optional>
            <TextInput
              id="model-mobile"
              name="mobile"
              type="tel"
              autoComplete="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </Field>
          <Field label="Postcode" htmlFor="model-location" required error={errors.location}>
            <TextInput
              id="model-location"
              name="location"
              autoComplete="postal-code"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onBlur={handleLocationBlur}
            />
          </Field>
        </div>
      </FormSection>

      <FormSection
        step={2}
        title="What you're looking for"
        description="Helps us match you to opportunities that actually suit you — you can update this later."
      >
        <RadioGroup
          legend="How far are you willing to travel?"
          name="travel"
          options={form.travelOptions}
          value={travel}
          onChange={setTravel}
          required
          error={errors.travel}
        />

        <CheckboxGroup
          legend="Categories interested in"
          name="categories"
          options={form.categoryOptions}
          values={categories}
          onChange={handleCategoriesChange}
          required
          error={errors.categories}
        />

        <CheckboxGroup
          legend="Availability"
          name="availability"
          options={form.availabilityOptions}
          values={availability}
          onChange={setAvailability}
          required
          error={errors.availability}
        />

        <RadioGroup
          legend="What's the shortest notice you could make an opportunity?"
          name="minimumNotice"
          options={form.minimumNoticeOptions}
          value={minimumNotice}
          onChange={handleMinimumNoticeChange}
          required
          error={errors.minimumNotice}
        />

        <RadioGroup
          legend="How open are you to priced opportunities?"
          name="priceInterest"
          options={form.priceInterestOptions}
          value={priceInterest}
          onChange={setPriceInterest}
          required
          error={errors.priceInterest}
        />

        <RadioGroup
          legend="How did you hear about LOTACHI? (optional)"
          name="heardAboutUs"
          options={form.heardAboutUsOptions}
          value={heardAboutUs}
          onChange={setHeardAboutUs}
          otherValue={heardAboutUsOther}
          onOtherChange={setHeardAboutUsOther}
        />
      </FormSection>

      <FormSection
        step={3}
        title="Confirm & consent"
        description="Treatment suitability, consent, supervision and clinical decisions always stay with the provider, not LOTACHI — and any photo/video consent is always asked separately from treatment consent."
      >
        <div className="flex flex-col gap-3">
          <Checkbox id="model-age" checked={ageConfirmed} onChange={setAgeConfirmed} required>
            {form.ageConfirmLabel}
          </Checkbox>
          {errors.ageConfirmed && (
            <p role="alert" className="-mt-2 text-sm text-red-700">
              {errors.ageConfirmed}
            </p>
          )}

          <Checkbox id="model-consent" checked={consent} onChange={setConsent} required>
            {form.consentLabel}
          </Checkbox>
          {errors.consent && (
            <p role="alert" className="-mt-2 text-sm text-red-700">
              {errors.consent}
            </p>
          )}

          <Checkbox id="model-privacy" checked={privacyAck} onChange={setPrivacyAck} required>
            I&apos;ve read and accept the{" "}
            <Link href="/privacy" className="text-accent underline underline-offset-2">
              Privacy Policy
            </Link>
            .
          </Checkbox>
          {errors.privacyAck && (
            <p role="alert" className="-mt-2 text-sm text-red-700">
              {errors.privacyAck}
            </p>
          )}
        </div>

        {state === "error" && (
          <FormNotice tone="error">
            {form.errorMessage} {siteConfig.emails.general}.
          </FormNotice>
        )}

        <Button type="submit" variant="accent" disabled={state === "submitting"} className="mt-3 sm:self-start">
          {state === "submitting" ? "Sending…" : form.submitLabel}
        </Button>
      </FormSection>
    </form>
  );
}
