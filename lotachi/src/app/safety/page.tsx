import type { Metadata } from "next";
import { safetyDisclaimer } from "@/content/legal";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: safetyDisclaimer.metaTitle,
  description: "What LOTACHI does and does not take responsibility for as a marketplace.",
};

export default function SafetyPage() {
  return <LegalPageLayout doc={safetyDisclaimer} />;
}
