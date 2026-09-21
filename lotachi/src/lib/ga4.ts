// Deliberately NOT marked "use client" — this needs to be importable
// directly from Server Components (src/app/layout.tsx) as a plain string.
// If a Server Component imports a value from a "use client" module, Next.js
// serializes it as an opaque client-reference object instead of the actual
// value (you'd see "[object Object]" instead of the ID) — so this constant
// lives in its own plain module, and src/lib/analytics.ts re-exports it for
// client-side use.
export const GA4_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || "";
