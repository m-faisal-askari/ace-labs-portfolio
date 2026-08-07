import { ImageResponse } from "next/og";

/**
 * Apple touch icon (180×180). Apple touch icons can't be served as a static
 * SVG, so the Ace Labs mark (from `public/brand/logo.svg`) is rasterized here
 * via `ImageResponse` — emerald mark on the obsidian brand background.
 */
export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const mark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="300 638 480 344"><g fill="#34d399"><polygon points="759.89,911.6 721.03,961.76 571.81,961.76 475.53,790.85 538.88,790.85 608.14,912.17 608.55,911.6"/><polygon points="381.77,923.46 320.11,923.46 459.47,658.24 522.82,658.24"/></g></svg>`;
const markSrc = `data:image/svg+xml,${encodeURIComponent(mark)}`;

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#090909",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={markSrc} width={116} height={83} alt="" />
      </div>
    ),
    { ...size },
  );
}
