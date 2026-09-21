import type { Metadata } from "next";
import { termsOfUse } from "@/content/legal";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: termsOfUse.metaTitle,
  description: "Terms of use for the LOTACHI early-access website.",
};

export default function TermsPage() {
  return <LegalPageLayout doc={termsOfUse} />;
}
