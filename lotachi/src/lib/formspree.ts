export type SubmitState = "idle" | "submitting" | "success" | "error";

export class FormNotConfiguredError extends Error {}

// Submits a form payload to a Formspree endpoint. Formspree form IDs are not
// secret (they identify a public submission endpoint, the same way a mailto
// address does), so it's safe to read them from a NEXT_PUBLIC_ env var and
// call this directly from the browser — no server route or API key needed.
export async function submitToFormspree(formId: string, data: Record<string, unknown>) {
  if (!formId) {
    throw new FormNotConfiguredError("Formspree form ID is not configured.");
  }

  const response = await fetch(`https://formspree.io/f/${formId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Formspree submission failed with status ${response.status}`);
  }

  return response.json().catch(() => ({}));
}
