"use client";

import { useEffect } from "react";
import { captureUtmParams } from "@/lib/analytics";

// Mounted once in the root layout. Captures utm_* query params (e.g. from a
// TikTok campaign link like /models?utm_source=tiktok) into sessionStorage
// so they can be attached to form submissions. Renders nothing.
export function UtmCapture() {
  useEffect(() => {
    captureUtmParams();
  }, []);

  return null;
}
