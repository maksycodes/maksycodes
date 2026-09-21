"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/content/global";
import { providersPage } from "@/content/providers";
import { submitToFormspree, SubmitState } from "@/lib/formspree";
import { getUtmParams, trackEvent } from "@/lib/analytics";
import { Field, TextInput, Select, CheckboxGroup, RadioGroup, Checkbox, FormNotice } from "./fields";
import { Button } from "../ui/Button";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const { form } = providersPage;

export function ProviderForm() {
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [locations, setLocations] = useState("");
  const [providerType, setProviderType] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [volume, setVolume] = useState("");
  const [purposes, setPurposes] = useState<string[]>([]);
  const [fillDifficulty, setFillDifficulty] = useState("");
  const [lastMinute, setLastMinute] = useState("");
  const [sources, setSources] = useState<string[]>([]);
  const [challenge, setChallenge] = useState("");
  const [pilot, setPilot] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, setState] = useState<SubmitState>("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const nextErrors: Record<string, string> = {};
    if (!name.trim()) nextErrors.name = "Please enter your name.";
    if (!jobTitle.trim()) nextErrors.jobTitle = "Please enter your job title.";
    if (!organisation.trim()) nextErrors.organisation = "Please enter your organisation.";
    if (!email.trim()) nextErrors.email = "Please enter your email address.";
    else if (!EMAIL_PATTERN.test(email)) nextErrors.email = "Please enter a valid email address.";
    if (!locations.trim()) nextErrors.locations = "Please enter your location(s).";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setState("submitting");
    trackEvent("form_start", { form: "provider_network" });
    try {
      await submitToFormspree(siteConfig.formspree.providerFormId, {
        user_type: "provider",
        name,
        job_title: jobTitle,
        organisation,
        email,
        phone,
        website,
        locations,
        provider_type: providerType,
        categories,
        model_volume: volume,
        purposes,
        fill_difficulty: fillDifficulty,
        last_minute_need: lastMinute,
        current_sources: sources,
        biggest_challenge: challenge,
        pilot_interest: pilot,
        ...getUtmParams(),
      });
      trackEvent("form_complete", { form: "provider_network" });
      setState("success");
    } catch {
      trackEvent("form_error", { form: "provider_network" });
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
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="provider-name" required error={errors.name}>
          <TextInput id="provider-name" name="name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
        </Field>
        <Field label="Job title" htmlFor="provider-job-title" required error={errors.jobTitle}>
          <TextInput
            id="provider-job-title"
            name="jobTitle"
            autoComplete="organization-title"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </Field>
      </div>

      <Field label="Organisation / provider name" htmlFor="provider-org" required error={errors.organisation}>
        <TextInput
          id="provider-org"
          name="organisation"
          autoComplete="organization"
          value={organisation}
          onChange={(e) => setOrganisation(e.target.value)}
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
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
        <Field label="Phone" htmlFor="provider-phone" optional>
          <TextInput
            id="provider-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Website or social link" htmlFor="provider-website" optional>
          <TextInput
            id="provider-website"
            name="website"
            placeholder="https://"
            autoComplete="url"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </Field>
        <Field label="Location(s)" htmlFor="provider-locations" required error={errors.locations}>
          <TextInput
            id="provider-locations"
            name="locations"
            autoComplete="address-level2"
            value={locations}
            onChange={(e) => setLocations(e.target.value)}
          />
        </Field>
      </div>

      <Field label="Provider type" htmlFor="provider-type" optional>
        <Select id="provider-type" name="providerType" value={providerType} onChange={(e) => setProviderType(e.target.value)}>
          <option value="">Select…</option>
          {form.providerTypeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </Field>

      <CheckboxGroup legend="Categories" name="categories" options={form.categoryOptions} values={categories} onChange={setCategories} />

      <RadioGroup
        legend="Approximately how many models do you need"
        name="volume"
        options={form.volumeOptions}
        value={volume}
        onChange={setVolume}
      />

      <CheckboxGroup
        legend="What do you usually need models for?"
        name="purposes"
        options={form.purposeOptions}
        values={purposes}
        onChange={setPurposes}
      />

      <RadioGroup
        legend="Do you ever struggle to fill appointments?"
        name="fillDifficulty"
        options={form.fillDifficultyOptions}
        value={fillDifficulty}
        onChange={setFillDifficulty}
      />

      <RadioGroup
        legend="Do you need last-minute models?"
        name="lastMinute"
        options={form.lastMinuteOptions}
        value={lastMinute}
        onChange={setLastMinute}
      />

      <CheckboxGroup
        legend="How do you currently find models?"
        name="sources"
        options={form.sourceOptions}
        values={sources}
        onChange={setSources}
      />

      <Field label="What is the biggest challenge you currently face when finding or managing models?" htmlFor="provider-challenge" optional>
        <TextInput id="provider-challenge" name="challenge" value={challenge} onChange={(e) => setChallenge(e.target.value)} />
      </Field>

      <div className="rounded-lg bg-paper-muted p-4">
        <Checkbox id="provider-pilot" checked={pilot} onChange={setPilot}>
          {form.pilotLabel}
        </Checkbox>
      </div>

      {state === "error" && (
        <FormNotice tone="error">
          {form.errorMessage} {siteConfig.emails.providers}.
        </FormNotice>
      )}

      <Button type="submit" variant="accent" disabled={state === "submitting"} className="sm:self-start">
        {state === "submitting" ? "Sending…" : form.submitLabel}
      </Button>
      <p className="text-xs text-ink-400">
        By submitting, you agree to LOTACHI contacting you about this enquiry. See our{" "}
        <Link href="/privacy" className="underline underline-offset-2">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}
