import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0D10",
          color: "#E6E1D6",
          padding: 64,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              background: "#161B22",
              border: "1px solid #E6E1D6",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingLeft: 16,
              gap: 6,
            }}
          >
            <div style={{ width: 32, height: 6, background: "#E6E1D6" }} />
            <div style={{ width: 24, height: 6, background: "#E85A17" }} />
            <div style={{ width: 32, height: 6, background: "#E6E1D6" }} />
          </div>
          <div style={{ fontSize: 42, letterSpacing: 10 }}>ESTEIO</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 72, lineHeight: 0.9, letterSpacing: 2 }}>
          <span>STRUCTURE</span>
          <span>THAT HOLDS.</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#8B9288" }}>
          <span>Scaffolding · Structures · Modular</span>
          <span>Lisboa · PT</span>
        </div>
      </div>
    ),
    size
  );
}
