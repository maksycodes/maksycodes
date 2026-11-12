import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteConfig } from "@/content/global";

// One shared branded preview image for every page that doesn't define its
// own opengraph-image — Next.js cascades a root-level file like this to
// every nested route. Built with ImageResponse (not a static asset) so it
// never depends on an external font fetch — see the next/font Google Fonts
// flake this codebase already works around in layout.tsx; this file
// deliberately uses only ImageResponse's built-in font.
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const symbol = await readFile(join(process.cwd(), "public/brand/lotachi-symbol-colour.png"));
  const symbolSrc = `data:image/png;base64,${symbol.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#EFE7DA",
          padding: 80,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={symbolSrc} width={140} height={140} style={{ marginBottom: 36 }} alt="" />
        <div style={{ fontSize: 68, fontWeight: 700, color: "#2C1D15", letterSpacing: -1 }}>{siteConfig.name}</div>
        <div style={{ fontSize: 32, color: "#4F4138", marginTop: 22, textAlign: "center", maxWidth: 920 }}>
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
