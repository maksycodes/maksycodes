"use client";

import { FormEvent, useState } from "react";
import { siteConfig, footer } from "@/content/global";
import { submitToFormspree } from "@/lib/formspree";
import { getUtmParams, trackEvent } from "@/lib/analytics";
import { Honeypot } from "./forms/fields";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function EmailCaptureForm() {
  const [email, setEmail] = useState("");
  const [gotcha, setGotcha] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!EMAIL_PATTERN.test(email)) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      await submitToFormspree(siteConfig.formspree.contactFormId, {
        source: "footer_email_capture",
        email,
        _gotcha: gotcha,
        ...getUtmParams(),
      });
      trackEvent("form_complete", { form: "footer_email_capture" });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return <p className="text-sm text-ink-200">{footer.emailCapture.successMessage}</p>;
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-2 sm:flex-row">
      <Honeypot id="_gotcha-footer" value={gotcha} onChange={setGotcha} />
      <label htmlFor="footer-email" className="sr-only">
        Email address
      </label>
      <input
        id="footer-email"
        type="email"
        required
        placeholder={footer.emailCapture.placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-full border border-ink-600 bg-transparent px-4 py-2.5 text-sm text-paper placeholder:text-ink-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:w-64"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-full bg-paper px-5 py-2.5 text-sm font-medium text-ink-900 transition-colors hover:bg-ink-100 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : footer.emailCapture.submitLabel}
      </button>
      {status === "error" && (
        <p role="alert" className="text-sm text-red-300 sm:self-center">
          Please enter a valid email address.
        </p>
      )}
    </form>
  );
}
