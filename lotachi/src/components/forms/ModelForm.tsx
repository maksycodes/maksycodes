"use client";

import { FormEvent, useRef, useState } from "react";
import { siteConfig } from "@/content/global";
import { modelsPage } from "@/content/models";
import { submitToFormspree, SubmitState } from "@/lib/formspree";
import { getUtmParams, trackEvent } from "@/lib/analytics";
import Link from "next/link";
import { Field, TextInput, CheckboxGroup, RadioGroup, Checkbox, FormNotice, Honeypot } from "./fields";
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
  const [lastMinute, setLastMinute] = useState("");
  const [budget, setBudget] = useState("");
  const [interests, setInterests] = useState("");
  const [consent, setConsent] = useState(false);
  const [privacyAck, setPrivacyAck] = useState(false);
  const [gotcha, setGotcha] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, setState] = useState<SubmitState>("idle");
  const hasStarted = useRef(false);

  function markStarted() {
    if (hasStarted.current) return;
    hasStarted.current = true;
    trackEvent("model_signup_started");
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const nextErrors: Record<string, string> = {};
    if (!firstName.trim()) nextErrors.firstName = "Please enter your first name.";
    if (!email.trim()) nextErrors.email = "Please enter your email address.";
    else if (!EMAIL_PATTERN.test(email)) nextErrors.email = "Please enter a valid email address.";
    if (!location.trim()) nextErrors.location = "Please enter your postcode or area.";
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
        last_minute_availability: lastMinute,
        budget,
        interests,
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
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <Honeypot id="_gotcha-model" value={gotcha} onChange={setGotcha} />
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
        <Field label="Mobile number" htmlFor="model-mobile" optional>
          <TextInput
            id="model-mobile"
            name="mobile"
            type="tel"
            autoComplete="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </Field>
        <Field label="Postcode or area" htmlFor="model-location" required error={errors.location}>
          <TextInput
            id="model-location"
            name="location"
            autoComplete="postal-code"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Field>
      </div>

      <RadioGroup
        legend="How far are you willing to travel?"
        name="travel"
        options={form.travelOptions}
        value={travel}
        onChange={setTravel}
      />

      <CheckboxGroup
        legend="Categories interested in"
        name="categories"
        options={form.categoryOptions}
        values={categories}
        onChange={setCategories}
      />

      <CheckboxGroup
        legend="Typical availability"
        name="availability"
        options={form.availabilityOptions}
        values={availability}
        onChange={setAvailability}
      />

      <RadioGroup
        legend="Last-minute availability"
        name="lastMinute"
        options={form.lastMinuteOptions}
        value={lastMinute}
        onChange={setLastMinute}
      />

      <RadioGroup
        legend="Typical budget"
        name="budget"
        options={form.budgetOptions}
        value={budget}
        onChange={setBudget}
      />

      <Field label="Anything you'd particularly like to be a model for?" htmlFor="model-interests" optional>
        <TextInput
          id="model-interests"
          name="interests"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
        />
      </Field>

      <div className="flex flex-col gap-3">
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

      <Button type="submit" variant="accent" disabled={state === "submitting"} className="sm:self-start">
        {state === "submitting" ? "Sending…" : form.submitLabel}
      </Button>
    </form>
  );
}
