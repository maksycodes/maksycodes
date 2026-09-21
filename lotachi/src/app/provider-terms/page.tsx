import type { Metadata } from "next";
import { providerTerms } from "@/content/legal";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: providerTerms.metaTitle,
  description: "Terms that will apply to training providers using LOTACHI.",
};

export default function ProviderTermsPage() {
  return <LegalPageLayout doc={providerTerms} />;
}
