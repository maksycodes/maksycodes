"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/content/global";
import { contactPage } from "@/content/contact";
import { submitToFormspree, SubmitState } from "@/lib/formspree";
import { getUtmParams, trackEvent } from "@/lib/analytics";
import { Field, TextInput, Textarea, Select, FormNotice } from "./fields";
import { Button } from "../ui/Button";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const { form } = contactPage;

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState(contactPage.reasonOptions[0]);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, setState] = useState<SubmitState>("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const nextErrors: Record<string, string> = {};
    if (!name.trim()) nextErrors.name = "Please enter your name.";
    if (!email.trim()) nextErrors.email = "Please enter your email address.";
    else if (!EMAIL_PATTERN.test(email)) nextErrors.email = "Please enter a valid email address.";
    if (!message.trim()) nextErrors.message = "Please enter a message.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setState("submitting");
    try {
      await submitToFormspree(siteConfig.formspree.contactFormId, {
        name,
        email,
        reason,
        message,
        ...getUtmParams(),
      });
      trackEvent("contact_form_submitted", { reason });
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
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="contact-name" required error={errors.name}>
          <TextInput id="contact-name" name="name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
        </Field>
        <Field label="Email" htmlFor="contact-email" required error={errors.email}>
          <TextInput
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Field>
      </div>

      <Field label="Reason for contact" htmlFor="contact-reason">
        <Select id="contact-reason" name="reason" value={reason} onChange={(e) => setReason(e.target.value)}>
          {contactPage.reasonOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </Field>

      <Field label="Message" htmlFor="contact-message" required error={errors.message}>
        <Textarea id="contact-message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
      </Field>

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
