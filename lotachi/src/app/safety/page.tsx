import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { safetyDisclaimer } from "@/content/legal";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = pageMetadata(
  "/safety",
  safetyDisclaimer.metaTitle,
  "What LOTACHI does and does not take responsibility for as a marketplace.",
);

export default function SafetyPage() {
  return <LegalPageLayout doc={safetyDisclaimer} />;
}
