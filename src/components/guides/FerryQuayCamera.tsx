"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const CAMERA_REFRESH_INTERVAL = 60_000;

const osloTimeFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Oslo",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hourCycle: "h23",
});

type CameraStatus = "loading" | "ready" | "error";

export type FerryQuayCameraConfig = {
  cameraId: string;
  cameraName: string;
  imageUrl: string;
  pageUrl: string;
  heading: string;
  description: string;
  altText: string;
};

type FerryQuayCameraProps = {
  camera: FerryQuayCameraConfig;
};

export function FerryQuayCamera({ camera }: FerryQuayCameraProps) {
  const [cameraStatus, setCameraStatus] = useState<CameraStatus>("loading");
  const [imageVersion, setImageVersion] = useState<number | null>(null);
  const [lastRefreshedAt, setLastRefreshedAt] = useState<Date | null>(null);

  const refreshCamera = useCallback(() => {
    setCameraStatus("loading");
    setImageVersion(Date.now());
  }, []);

  useEffect(() => {
    let intervalId: number | null = null;

    const stopRefreshTimer = () => {
      if (intervalId !== null) {
        window.clearInterval(intervalId);
        intervalId = null;
      }
    };

    const startRefreshTimer = () => {
      if (document.visibilityState === "visible" && intervalId === null) {
        intervalId = window.setInterval(
          refreshCamera,
          CAMERA_REFRESH_INTERVAL,
        );
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        stopRefreshTimer();
        return;
      }

      refreshCamera();
      startRefreshTimer();
    };

    startRefreshTimer();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      stopRefreshTimer();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [refreshCamera]);

  const cameraImageUrl =
    imageVersion === null
      ? camera.imageUrl
      : `${camera.imageUrl}?t=${imageVersion}`;

  return (
    <aside
      aria-labelledby="ferry-quay-camera-heading"
      className="mt-8 rounded-[1.15rem] border border-[#8fafa8]/16 bg-[#071216]/72 p-4 sm:p-6"
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="max-w-2xl">
          <p className="text-[0.58rem] font-medium uppercase tracking-[0.23em] text-[#c6a15b]/68">
            {camera.cameraName} · camera {camera.cameraId}
          </p>
          <h3
            id="ferry-quay-camera-heading"
            className="mt-2 font-serif text-2xl font-normal tracking-[-0.025em] text-[#f4efe2] sm:text-3xl"
          >
            {camera.heading}
          </h3>
          <p className="mt-3 text-sm font-light leading-[1.7] text-[#f4efe2]/64 sm:text-base">
            {camera.description}
          </p>
        </div>

        <button
          type="button"
          onClick={refreshCamera}
          className="inline-flex min-h-11 items-center rounded-full border border-[#c6a15b]/32 px-3.5 text-[0.58rem] font-medium uppercase tracking-[0.18em] text-[#f4efe2]/84 transition-colors hover:border-[#c6a15b]/56 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6a15b]/70 focus-visible:ring-offset-3 focus-visible:ring-offset-[#071216] motion-reduce:transition-none"
        >
          Refresh camera
        </button>
      </div>

      <figure className="mt-5">
        {cameraStatus === "error" ? (
          <div
            className="rounded-xl border border-white/10 bg-[#050b0e] px-4 py-5"
            role="status"
          >
            <p className="text-sm text-[#f4efe2]/82">
              The camera image is temporarily unavailable.
            </p>
            <p className="mt-2 text-xs font-light leading-[1.7] text-[#f4efe2]/54">
              Use Refresh camera to try again, or view the{" "}
              <a
                href={camera.pageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c6a15b]/86 underline decoration-[#c6a15b]/35 underline-offset-4"
              >
                official camera page
              </a>
              .
            </p>
          </div>
        ) : (
          <Image
            src={cameraImageUrl}
            width={800}
            height={600}
            alt={camera.altText}
            loading="lazy"
            decoding="async"
            unoptimized
            onLoad={() => {
              setCameraStatus("ready");
              setLastRefreshedAt(new Date());
            }}
            onError={() => setCameraStatus("error")}
            className="h-auto w-full max-w-full rounded-xl border border-white/10 bg-[#050b0e] object-contain"
          />
        )}

        <figcaption className="mt-3 flex flex-wrap justify-between gap-x-6 gap-y-2 text-xs font-light leading-[1.7] text-[#f4efe2]/48">
          <span>Updated still image provided by Statens vegvesen.</span>
          <span>
            {lastRefreshedAt
              ? `Last refreshed ${osloTimeFormatter.format(lastRefreshedAt)} (Europe/Oslo).`
              : "Waiting for the camera image."}
          </span>
        </figcaption>
      </figure>

      <p className="mt-3 text-xs font-light leading-[1.7] text-[#f4efe2]/48">
        <a
          href={camera.pageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#c6a15b]/86 underline decoration-[#c6a15b]/35 underline-offset-4"
        >
          Camera image: Statens vegvesen
        </a>
      </p>
    </aside>
  );
}
