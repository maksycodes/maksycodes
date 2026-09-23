"use client";

import { siteConfig } from "@/content/global";
import { trackEvent } from "@/lib/analytics";

const icons: Record<string, JSX.Element> = {
  tiktok: (
    <path d="M14.5 3v9.5a2.5 2.5 0 11-2-2.45V8.9a4.5 4.5 0 102.9 4.2V7.3a5.4 5.4 0 003.1 1V6.2a3.4 3.4 0 01-4-3.2z" />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="14" height="14" rx="4" />
      <circle cx="10" cy="10" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="14" cy="6" r="0.9" />
    </>
  ),
  youtube: (
    <>
      <rect x="2.5" y="5" width="15" height="10" rx="3" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8.5 7.8v4.4l4-2.2z" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="14" height="14" rx="2" />
      <path d="M6.5 8.2v6M6.5 6.1v0M9.5 14.2v-3.4c0-1 .6-1.8 1.8-1.8s1.7.8 1.7 1.8v3.4" fill="none" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
    </>
  ),
  facebook: (
    <path d="M12.5 3h-2A3.5 3.5 0 007 6.5v2H5v3h2V17h3v-5.5h2.2l.3-3H10v-1.5c0-.6.3-1 1-1h1.5V3z" />
  ),
};

export function SocialLinks({ className = "" }: { className?: string }) {
  const links = [
    { key: "tiktok", label: "TikTok", href: siteConfig.social.tiktok },
    { key: "instagram", label: "Instagram", href: siteConfig.social.instagram },
    { key: "youtube", label: "YouTube", href: siteConfig.social.youtube },
    { key: "facebook", label: "Facebook", href: siteConfig.social.facebook },
    { key: "linkedin", label: "LinkedIn", href: siteConfig.social.linkedin },
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map((link) => {
        const isLive = link.href !== "#";
        return (
          <a
            key={link.key}
            href={link.href}
            aria-label={`LOTACHI on ${link.label}`}
            onClick={() => trackEvent("social_link_clicked", { platform: link.key, href: link.href })}
            {...(isLive ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-700 text-ink-200 transition-colors hover:border-paper hover:text-paper"
          >
            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              {icons[link.key]}
            </svg>
          </a>
        );
      })}
    </div>
  );
}
