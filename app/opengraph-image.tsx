import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} - ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
        background: "#252525",
        color: "#fafafa",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: "-0.02em" }}>
        {site.name}
      </div>

      <div style={{ fontSize: 40, marginTop: 16, color: "#b5b5b5" }}>
        {site.role}
      </div>

      <div style={{ fontSize: 26, marginTop: 48, color: "#8f8f8f" }}>
        {site.stack.join(" · ")}
      </div>
    </div>,
    size,
  );
}
