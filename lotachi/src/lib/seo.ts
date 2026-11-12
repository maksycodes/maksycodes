import type { Metadata } from "next";
import { siteConfig } from "@/content/global";

// Builds per-page title/description/canonical/openGraph/twitter metadata.
// Without this, every page inherited the homepage's openGraph title and
// description from the root layout, so a link to e.g. /providers would
// still preview as the homepage on TikTok, WhatsApp and LinkedIn — those
// platforms read og:title/og:description, not the plain <title> tag.
// `path` is relative; Next resolves it against the root layout's
// metadataBase.
//
// The image is referenced explicitly rather than left to Next's
// opengraph-image.tsx file-convention auto-discovery: once a page sets its
// own `openGraph` object (needed here for the per-page title/description),
// Next no longer backfills `openGraph.images` from the root
// src/app/opengraph-image.tsx for that route — confirmed by checking the
// rendered <head> of a non-root page, which had no og:image tag at all
// until this was added explicitly.
const OG_IMAGE_PATH = "/opengraph-image";

export function pageMetadata(path: string, title: string, description: string): Metadata {
  // The plain `title` field picks up the root layout's "%s — LOTACHI"
  // template automatically; openGraph/twitter titles don't, so brand it
  // the same way here (skipping it for the homepage title, which already
  // includes the brand name).
  const socialTitle = title.includes(siteConfig.name) ? title : `${title} — ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: socialTitle, description, url: path, images: [OG_IMAGE_PATH] },
    twitter: { title: socialTitle, description, images: [OG_IMAGE_PATH] },
  };
}
