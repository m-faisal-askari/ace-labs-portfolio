import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

/** Social sharing image (Open Graph + Twitter). Obsidian theme, no binary asset. */
export const runtime = "edge";
export const alt = `${siteConfig.name}: Healthcare Software Agency`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#090909",
          color: "#fafafa",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: "#151515",
              border: "1px solid #232323",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "26px",
              fontWeight: 600,
              color: "#34d399",
            }}
          >
            AL
          </div>
          <div style={{ fontSize: "26px", color: "#a1a1aa" }}>
            {siteConfig.url.replace(/^https?:\/\//, "")}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ fontSize: "30px", color: "#34d399" }}>
            Healthcare Software Agency · Full-Stack
          </div>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            {siteConfig.name}
          </div>
          <div style={{ fontSize: "30px", color: "#a1a1aa", maxWidth: "820px" }}>
            Secure, scalable healthcare software for clinics, hospitals,
            laboratories, pharmacies, and telemedicine.
          </div>
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
          {["Next.js", "TypeScript", "Node.js", "PostgreSQL"].map((t) => (
            <div
              key={t}
              style={{
                fontSize: "22px",
                color: "#a1a1aa",
                border: "1px solid #232323",
                background: "#111111",
                borderRadius: "9999px",
                padding: "8px 20px",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
