import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Rory Fitzgerald — Freelance Motion Graphics Designer & Video Producer, Dublin";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
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
          background: "linear-gradient(135deg, #0B0916 0%, #2B2449 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#E8315A",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          Dublin, Ireland
        </div>
        <div
          style={{
            display: "flex",
            color: "#FFFFFF",
            fontSize: 72,
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: -2,
            marginBottom: 28,
          }}
        >
          Rory Fitzgerald
        </div>
        <div
          style={{
            display: "flex",
            color: "rgba(255,255,255,0.75)",
            fontSize: 34,
            fontWeight: 500,
          }}
        >
          Motion Graphics Designer · Animator · Video Producer
        </div>
      </div>
    ),
    { ...size }
  );
}
