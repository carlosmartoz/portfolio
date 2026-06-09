import { ImageResponse } from "next/og";

export const alt = "Carlos Martínez - Frontend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#252525",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          Carlos Martínez
        </div>

        <div
          style={{
            fontSize: 40,
            marginTop: 16,
            color: "#b5b5b5",
          }}
        >
          Frontend Engineer
        </div>

        <div
          style={{
            fontSize: 26,
            marginTop: 48,
            color: "#8f8f8f",
          }}
        >
          React · Next.js · TypeScript
        </div>
      </div>
    ),
    { ...size },
  );
}
