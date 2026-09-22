"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { pageview } from "@/lib/analytics";

// Sends a GA4 page_view on every client-side route change. Needed because
// gtag's automatic page_view only fires once, when the script first loads —
// the App Router doesn't reload the page on internal <Link> navigation, so
// without this every page after the first one a visitor lands on would go
// uncounted. Renders nothing.
//
// Wrapped in <Suspense> in layout.tsx because useSearchParams() requires it
// during static rendering.
export function GA4PageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams.toString();
    pageview(query ? `${pathname}?${query}` : pathname);
  }, [pathname, searchParams]);

  return null;
}
