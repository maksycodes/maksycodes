"use client";

import { FormEvent, useState } from "react";
import { siteConfig, providerSection } from "@/content/site";
import { submitToFormspree, SubmitState } from "@/lib/formspree";
import { Field, TextInput, Textarea, Select, CheckboxGroup, Checkbox, FormNotice } from "./fields";
import { Button } from "../ui/Button";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const trainingDaysOptions = ["1–5", "6–10", "11–20", "20+"];

export function ProviderForm() {
  const [name, setName] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [city, setCity] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [trainingDays, setTrainingDays] = useState("");
  const [contactTime, setContactTime] = useState("");
  const [interview, setInterview] = useState(false);
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, setState] = useState<SubmitState>("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const nextErrors: Record<string, string> = {};
    if (!name.trim()) nextErrors.name = "Please enter your name.";
    if (!organisation.trim()) nextErrors.organisation = "Please enter your organisation.";
    if (!jobTitle.trim()) nextErrors.jobTitle = "Please enter your job title.";
    if (!email.trim()) nextErrors.email = "Please enter your email address.";
    else if (!EMAIL_PATTERN.test(email)) nextErrors.email = "Please enter a valid email address.";
    if (!city.trim()) nextErrors.city = "Please enter your city.";
    if (!consent) nextErrors.consent = "Please confirm we can contact you about this.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setState("submitting");
    try {
      await submitToFormspree(siteConfig.formspree.providerFormId, {
        user_type: "provider",
        name,
        organisation,
        job_title: jobTitle,
        email,
        phone,
        website,
        city,
        training_categories: categories,
        approx_training_days_per_month: trainingDays,
        best_time_to_contact: contactTime,
        open_to_research_interview: interview,
        message,
        consent,
      });
      setState("success");
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return <FormNotice tone="success">{providerSection.form.successMessage}</FormNotice>;
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="provider-name" required error={errors.name}>
          <TextInput id="provider-name" name="name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
        </Field>
        <Field label="Organisation" htmlFor="provider-org" required error={errors.organisation}>
          <TextInput
            id="provider-org"
            name="organisation"
            autoComplete="organization"
            value={organisation}
            onChange={(e) => setOrganisation(e.target.value)}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Job title" htmlFor="provider-job-title" required error={errors.jobTitle}>
          <TextInput
            id="provider-job-title"
            name="jobTitle"
            autoComplete="organization-title"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </Field>
        <Field label="Email" htmlFor="provider-email" required error={errors.email}>
          <TextInput
            id="provider-email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone number" htmlFor="provider-phone" optional>
          <TextInput
            id="provider-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Field>
        <Field label="Website" htmlFor="provider-website" optional>
          <TextInput
            id="provider-website"
            name="website"
            type="url"
            placeholder="https://"
            autoComplete="url"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </Field>
      </div>

      <Field label="City" htmlFor="provider-city" required error={errors.city}>
        <TextInput id="provider-city" name="city" autoComplete="address-level2" value={city} onChange={(e) => setCity(e.target.value)} />
      </Field>

      <CheckboxGroup
        legend="Main training categories"
        name="trainingCategories"
        options={providerSection.form.trainingCategoryOptions}
        values={categories}
        onChange={setCategories}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Approximate practical training days per month" htmlFor="provider-days" optional>
          <Select id="provider-days" name="trainingDays" value={trainingDays} onChange={(e) => setTrainingDays(e.target.value)}>
            <option value="">Select…</option>
            {trainingDaysOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </Field>
        <Field label="Best time to contact" htmlFor="provider-contact-time" optional>
          <Select id="provider-contact-time" name="contactTime" value={contactTime} onChange={(e) => setContactTime(e.target.value)}>
            <option value="">Select…</option>
            {providerSection.form.contactTimeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <Field label="Message" htmlFor="provider-message" optional>
        <Textarea
          id="provider-message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </Field>

      <div className="rounded-lg bg-paper-muted p-4">
        <Checkbox id="provider-interview" checked={interview} onChange={setInterview}>
          {providerSection.form.interviewQuestion}
        </Checkbox>
      </div>

      <Checkbox id="provider-consent" checked={consent} onChange={setConsent} required>
        {providerSection.form.consentLabel}
      </Checkbox>
      {errors.consent && (
        <p role="alert" className="-mt-3 text-sm text-red-700">
          {errors.consent}
        </p>
      )}

      {state === "error" && (
        <FormNotice tone="error">
          {providerSection.form.errorMessage} {siteConfig.emails.providers}.
        </FormNotice>
      )}

      <Button type="submit" variant="accent" disabled={state === "submitting"} className="sm:self-start">
        {state === "submitting" ? "Sending…" : providerSection.form.submitLabel}
      </Button>
    </form>
  );
}
