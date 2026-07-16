import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/constants/site";

export const runtime = "edge";

export const alt = SITE_CONFIG.title;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #7c3aed33 0%, transparent 50%), radial-gradient(circle at 75% 75%, #2563eb33 0%, transparent 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 700,
              backgroundImage:
                "linear-gradient(90deg, #c4b5fd 0%, #f0abfc 50%, #93c5fd 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {SITE_CONFIG.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              color: "#a1a1aa",
            }}
          >
            Full Stack Developer
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}