import { ImageResponse } from "next/og";

export function renderIcon(px: number) {
  const glyph = Math.round(px * 0.6);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0F766E",
        }}
      >
        <svg width={glyph} height={glyph} viewBox="0 0 64 64">
          <g
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M40 22C40 11 16 11 16 28C16 38 24 40 24 48C24 55 35 55 35 46" />
            <path d="M28 24C23 24 23 32 28 34" />
            <path d="M47 41V53M41 47H53" />
          </g>
        </svg>
      </div>
    ),
    { width: px, height: px }
  );
}
