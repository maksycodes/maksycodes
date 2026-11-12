import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { providerTerms } from "@/content/legal";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = pageMetadata(
  "/provider-terms",
  providerTerms.metaTitle,
  "Terms that will apply to training providers using LOTACHI.",
);

export default function ProviderTermsPage() {
  return <LegalPageLayout doc={providerTerms} />;
}
