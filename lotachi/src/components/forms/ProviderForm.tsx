"use client";

import { FormEvent, useRef, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/content/global";
import { providersPage } from "@/content/providers";
import { submitToFormspree, SubmitState } from "@/lib/formspree";
import { getUtmParams, trackEvent } from "@/lib/analytics";
import { Field, TextInput, Textarea, Select, CheckboxGroup, RadioGroup, Checkbox, FormNotice, Honeypot, FormSection } from "./fields";
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
  const [trainingDays, setTrainingDays] = useState("");
  const [traineesPerSession, setTraineesPerSession] = useState("");
  const [volume, setVolume] = useState("");
  const [requirementsNext30Days, setRequirementsNext30Days] = useState("");
  const [urgentHardToFillValue, setUrgentHardToFillValue] = useState("");
  const [successfulFillFeeInterest, setSuccessfulFillFeeInterest] = useState("");
  const [successfulFillFeeRange, setSuccessfulFillFeeRange] = useState("");
  const [nextTrainingDates, setNextTrainingDates] = useState("");
  const [purposes, setPurposes] = useState<string[]>([]);
  const [hardestToFill, setHardestToFill] = useState("");
  const [fillDifficulty, setFillDifficulty] = useState("");
  const [lastMinute, setLastMinute] = useState("");
  const [sources, setSources] = useState<string[]>([]);
  const [currentProcess, setCurrentProcess] = useState("");
  const [challenge, setChallenge] = useState("");
  const [pilot, setPilot] = useState(false);
  const [hasAppointments, setHasAppointments] = useState(false);
  const [gotcha, setGotcha] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, setState] = useState<SubmitState>("idle");
  const hasStarted = useRef(false);

  function markStarted() {
    if (hasStarted.current) return;
    hasStarted.current = true;
    trackEvent("provider_signup_started");
  }

  function handleCategoriesChange(next: string[]) {
    setCategories(next);
    trackEvent("category_selected", { context: "provider", categories: next });
  }

  function handleLastMinuteChange(next: string) {
    setLastMinute(next);
    trackEvent("short_notice_selected", { context: "provider", frequency: next });
  }

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
        training_days_per_month: trainingDays,
        trainees_per_session: traineesPerSession,
        model_volume: volume,
        model_requirements_next_30_days: requirementsNext30Days,
        urgent_hard_to_fill_value: urgentHardToFillValue,
        successful_fill_fee_interest: successfulFillFeeInterest,
        successful_fill_fee_range: successfulFillFeeRange,
        next_training_dates: nextTrainingDates,
        purposes,
        hardest_to_fill: hardestToFill,
        fill_difficulty: fillDifficulty,
        last_minute_need: lastMinute,
        current_sources: sources,
        current_process: currentProcess,
        biggest_challenge: challenge,
        pilot_interest: pilot,
        has_appointments_to_fill: hasAppointments,
        _gotcha: gotcha,
        ...getUtmParams(),
      });
      trackEvent("provider_signup_completed", { has_appointments_to_fill: hasAppointments });
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
      <Honeypot id="_gotcha-provider" value={gotcha} onChange={setGotcha} />

      <FormSection step={1} title="About you & your business" description="Just enough to add you to the network and get in touch.">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Name" htmlFor="provider-name" required error={errors.name}>
            <TextInput
              id="provider-name"
              name="name"
              autoComplete="name"
              value={name}
              onFocus={markStarted}
              onChange={(e) => setName(e.target.value)}
            />
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
      </FormSection>

      <FormSection
        step={2}
        title="What you're looking for"
        description="Helps us match you to suitable models — you can update this later."
      >
        <CheckboxGroup legend="Categories" name="categories" options={form.categoryOptions} values={categories} onChange={handleCategoriesChange} />

        <RadioGroup
          legend="How many training days do you run per month?"
          name="trainingDays"
          options={form.trainingDaysOptions}
          value={trainingDays}
          onChange={setTrainingDays}
        />

        <RadioGroup
          legend="Roughly how many trainees per session?"
          name="traineesPerSession"
          options={form.traineesPerSessionOptions}
          value={traineesPerSession}
          onChange={setTraineesPerSession}
        />

        <RadioGroup
          legend="Approximately how many models do you need per month?"
          name="volume"
          options={form.volumeOptions}
          value={volume}
          onChange={setVolume}
        />

        <RadioGroup
          legend="How many model requirements do you expect in the next 30 days?"
          name="requirementsNext30Days"
          options={form.requirementsNext30DaysOptions}
          value={requirementsNext30Days}
          onChange={setRequirementsNext30Days}
        />

        <RadioGroup
          legend="How valuable would help with urgent or hard-to-fill requirements be?"
          name="urgentHardToFillValue"
          options={form.urgentHardToFillValueOptions}
          value={urgentHardToFillValue}
          onChange={setUrgentHardToFillValue}
        />

        <RadioGroup
          legend="If LOTACHI recruited a suitable Chi Chi who attended, would you pay a successful-fill fee?"
          name="successfulFillFeeInterest"
          options={form.successfulFillFeeInterestOptions}
          value={successfulFillFeeInterest}
          onChange={setSuccessfulFillFeeInterest}
        />

        <RadioGroup
          legend="For a verified successful attendance, which fee range would feel reasonable? (optional)"
          name="successfulFillFeeRange"
          options={form.successfulFillFeeRangeOptions}
          value={successfulFillFeeRange}
          onChange={setSuccessfulFillFeeRange}
        />

        <Field label={form.nextTrainingDatesLabel} htmlFor="provider-next-training-dates" optional>
          <TextInput
            id="provider-next-training-dates"
            name="nextTrainingDates"
            placeholder="e.g. every Tuesday, or specific dates if you have them"
            value={nextTrainingDates}
            onChange={(e) => setNextTrainingDates(e.target.value)}
          />
        </Field>

        <CheckboxGroup
          legend="What do you usually need models for?"
          name="purposes"
          options={form.purposeOptions}
          values={purposes}
          onChange={setPurposes}
        />

        <Field label="What's the hardest type of model requirement for you to fill?" htmlFor="provider-hardest-to-fill" optional>
          <TextInput
            id="provider-hardest-to-fill"
            name="hardestToFill"
            placeholder="e.g. a specific hair type, last-minute cover, a rare skin condition"
            value={hardestToFill}
            onChange={(e) => setHardestToFill(e.target.value)}
          />
        </Field>

        <RadioGroup
          legend="Do you ever struggle to fill appointments?"
          name="fillDifficulty"
          options={form.fillDifficultyOptions}
          value={fillDifficulty}
          onChange={setFillDifficulty}
        />

        <RadioGroup
          legend="Are last-minute cancellations a recurring issue for you?"
          name="lastMinute"
          options={form.lastMinuteOptions}
          value={lastMinute}
          onChange={handleLastMinuteChange}
        />

        <CheckboxGroup
          legend="How do you currently find models?"
          name="sources"
          options={form.sourceOptions}
          values={sources}
          onChange={setSources}
        />

        <Field label="Briefly describe how model recruitment works for you today" htmlFor="provider-current-process" optional>
          <Textarea
            id="provider-current-process"
            name="currentProcess"
            rows={3}
            value={currentProcess}
            onChange={(e) => setCurrentProcess(e.target.value)}
          />
        </Field>

        <Field label="What is the biggest challenge you currently face when finding or managing models?" htmlFor="provider-challenge" optional>
          <TextInput id="provider-challenge" name="challenge" value={challenge} onChange={(e) => setChallenge(e.target.value)} />
        </Field>
      </FormSection>

      <FormSection step={3} title="Confirm & consent">
        <div className="flex flex-col gap-3 rounded-lg bg-paper-muted p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">Founding Provider Pilot</p>
          <Checkbox id="provider-pilot" checked={pilot} onChange={setPilot}>
            {form.pilotLabel}
          </Checkbox>
          <Checkbox id="provider-has-appointments" checked={hasAppointments} onChange={setHasAppointments}>
            {form.hasAppointmentsLabel}
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
      </FormSection>
    </form>
  );
}
