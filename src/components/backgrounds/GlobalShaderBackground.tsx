"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";

const SHADER_MEDIA_QUERY =
  "(min-width: 641px) and (prefers-reduced-motion: no-preference)";

const GlobalShaderCanvas = dynamic(
  () =>
    import("./GlobalShaderCanvas").then((module) => module.GlobalShaderCanvas),
  { ssr: false },
);

function subscribeToShaderPreference(onStoreChange: () => void) {
  const mediaQuery = window.matchMedia(SHADER_MEDIA_QUERY);

  mediaQuery.addEventListener("change", onStoreChange);

  return () => mediaQuery.removeEventListener("change", onStoreChange);
}

function getShaderPreference() {
  return window.matchMedia(SHADER_MEDIA_QUERY).matches;
}

function getServerShaderPreference() {
  return false;
}

export function GlobalShaderBackground() {
  const pathname = usePathname();
  const canRenderShader = useSyncExternalStore(
    subscribeToShaderPreference,
    getShaderPreference,
    getServerShaderPreference,
  );
  const intensity = pathname === "/map" ? "reduced" : "standard";

  return (
    <div
      className="global-shader-background"
      data-intensity={intensity}
      aria-hidden="true"
    >
      <div className="global-shader-background__fallback" />
      {canRenderShader ? <GlobalShaderCanvas /> : null}
    </div>
  );
}
