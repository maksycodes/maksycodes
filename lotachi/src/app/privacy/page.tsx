import type { Metadata } from "next";
import { privacyPolicy } from "@/content/legal";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: privacyPolicy.metaTitle,
  description: "How LOTACHI collects, uses and stores information during early access.",
};

export default function PrivacyPage() {
  return <LegalPageLayout doc={privacyPolicy} />;
}
