import { NextResponse } from "next/server";

// Returns only the total submission count for the Chi Chi (model) early-access
// form — never the submissions themselves — so the homepage can show a live
// count without any Formspree API key reaching the browser. Requires
// FORMSPREE_MODEL_FORM_API_KEY (a Formspree Read-only API key, server-only)
// and reuses the already-public NEXT_PUBLIC_FORMSPREE_MODEL_FORM_ID as the
// form's hashid. See .env.example for setup.

export const revalidate = 300; // cache for 5 minutes to limit calls to Formspree

const SUBMISSIONS_PAGE_SIZE = 1000;

async function countSubmissions(hashid: string, apiKey: string): Promise<number> {
  const auth = `Basic ${Buffer.from(`:${apiKey}`).toString("base64")}`;
  let total = 0;
  let offset = 0;

  while (true) {
    const response = await fetch(
      `https://formspree.io/api/0/forms/${hashid}/submissions?limit=${SUBMISSIONS_PAGE_SIZE}&offset=${offset}`,
      { headers: { Authorization: auth }, next: { revalidate: 300 } },
    );

    if (!response.ok) {
      throw new Error(`Formspree submissions request failed with status ${response.status}`);
    }

    const data = await response.json();
    const submissions = Array.isArray(data.submissions) ? data.submissions : [];
    total += submissions.length;

    if (submissions.length < SUBMISSIONS_PAGE_SIZE) break;
    offset += SUBMISSIONS_PAGE_SIZE;
  }

  return total;
}

export async function GET() {
  const hashid = process.env.NEXT_PUBLIC_FORMSPREE_MODEL_FORM_ID;
  const apiKey = process.env.FORMSPREE_MODEL_FORM_API_KEY;

  if (!hashid || !apiKey) {
    return NextResponse.json({ error: "Not configured" }, { status: 503 });
  }

  try {
    const count = await countSubmissions(hashid, apiKey);
    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ error: "Unavailable" }, { status: 502 });
  }
}
