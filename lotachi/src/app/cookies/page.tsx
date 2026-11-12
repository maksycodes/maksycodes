import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { cookiePolicy } from "@/content/legal";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = pageMetadata(
  "/cookies",
  cookiePolicy.metaTitle,
  "How LOTACHI uses cookies and browser storage.",
);

export default function CookiePolicyPage() {
  return <LegalPageLayout doc={cookiePolicy} />;
}
