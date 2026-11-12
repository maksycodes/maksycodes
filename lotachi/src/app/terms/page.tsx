import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { termsOfUse } from "@/content/legal";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = pageMetadata(
  "/terms",
  termsOfUse.metaTitle,
  "Terms of use for the LOTACHI early-access website.",
);

export default function TermsPage() {
  return <LegalPageLayout doc={termsOfUse} />;
}
