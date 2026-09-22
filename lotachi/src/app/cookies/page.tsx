import type { Metadata } from "next";
import { cookiePolicy } from "@/content/legal";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: cookiePolicy.metaTitle,
  description: "How LOTACHI uses cookies and browser storage.",
};

export default function CookiePolicyPage() {
  return <LegalPageLayout doc={cookiePolicy} />;
}
