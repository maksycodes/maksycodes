import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { privacyPolicy } from "@/content/legal";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = pageMetadata(
  "/privacy",
  privacyPolicy.metaTitle,
  "How LOTACHI collects, uses and stores information during early access.",
);

export default function PrivacyPage() {
  return <LegalPageLayout doc={privacyPolicy} />;
}
