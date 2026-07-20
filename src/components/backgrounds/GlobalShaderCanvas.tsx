"use client";

import { MeshGradient } from "@paper-design/shaders-react";

const FJORD_COLORS = ["#061817", "#0b2929", "#153e42", "#314d4d"];

export function GlobalShaderCanvas() {
  return (
    <MeshGradient
      className="global-shader-background__shader"
      colors={FJORD_COLORS}
      distortion={0.8}
      swirl={0.14}
      speed={0.12}
      maxPixelCount={2_073_600}
      width="100%"
      height="100%"
      style={{ backgroundColor: "#061817" }}
    />
  );
}
