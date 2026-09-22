import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/global";

const routes = [
  "/",
  "/models",
  "/providers",
  "/about",
  "/for-models",
  "/for-providers",
  "/how-it-works",
  "/faq",
  "/contact",
  "/privacy",
  "/terms",
  "/provider-terms",
  "/cookies",
  "/safety",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${siteConfig.domain}`;
  return routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date() }));
}
