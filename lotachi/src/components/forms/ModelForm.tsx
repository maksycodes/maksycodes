"use client";

import { FormEvent, useState } from "react";
import { siteConfig, modelWaitlist } from "@/content/site";
import { submitToFormspree, SubmitState } from "@/lib/formspree";
import { Field, TextInput, CheckboxGroup, Checkbox, FormNotice } from "./fields";
import { Button } from "../ui/Button";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ModelForm() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, setState] = useState<SubmitState>("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const nextErrors: Record<string, string> = {};
    if (!firstName.trim()) nextErrors.firstName = "Please enter your first name.";
    if (!email.trim()) nextErrors.email = "Please enter your email address.";
    else if (!EMAIL_PATTERN.test(email)) nextErrors.email = "Please enter a valid email address.";
    if (!location.trim()) nextErrors.location = "Please enter your postcode or city.";
    if (!consent) nextErrors.consent = "Please confirm you'd like to hear from us.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setState("submitting");
    try {
      await submitToFormspree(siteConfig.formspree.modelFormId, {
        user_type: "model",
        first_name: firstName,
        email,
        location,
        categories,
        consent,
      });
      setState("success");
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return <FormNotice tone="success">{modelWaitlist.form.successMessage}</FormNotice>;
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="First name" htmlFor="model-first-name" required error={errors.firstName}>
          <TextInput
            id="model-first-name"
            name="firstName"
            autoComplete="given-name"
            value={firstName}
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

      <Field label="Postcode or city" htmlFor="model-location" required error={errors.location}>
        <TextInput
          id="model-location"
          name="location"
          autoComplete="postal-code"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </Field>

      <CheckboxGroup
        legend="Categories of interest"
        name="categories"
        options={modelWaitlist.categories}
        values={categories}
        onChange={setCategories}
      />

      <Checkbox id="model-consent" checked={consent} onChange={setConsent} required>
        {modelWaitlist.form.consentLabel}
      </Checkbox>
      {errors.consent && (
        <p role="alert" className="-mt-3 text-sm text-red-700">
          {errors.consent}
        </p>
      )}

      {state === "error" && (
        <FormNotice tone="error">
          {modelWaitlist.form.errorMessage} {siteConfig.emails.general}.
        </FormNotice>
      )}

      <Button type="submit" variant="accent" disabled={state === "submitting"} className="sm:self-start">
        {state === "submitting" ? "Sending…" : modelWaitlist.form.submitLabel}
      </Button>
    </form>
  );
}
