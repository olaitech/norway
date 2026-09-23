"use client";

import { X } from "lucide-react";
import { useEffect, useRef } from "react";

const SESSION_KEY = "trips-norway-fundraiser-v1";

export function FundraiserDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    try {
      if (window.sessionStorage.getItem(SESSION_KEY)) return;
    } catch {
      // Skip the invitation if we cannot remember the visitor's choice.
      return;
    }

    let finished = false;
    let retryTimer: number | undefined;

    const cleanup = () => {
      window.clearTimeout(delayTimer);
      window.clearTimeout(retryTimer);
      window.removeEventListener("scroll", handleScroll);
    };

    const attemptOpen = () => {
      if (finished) return;
      window.clearTimeout(retryTimer);

      const blocked = document.hidden || Array.from(
        document.querySelectorAll<HTMLElement>(
          'dialog[open], [role="dialog"][aria-modal="true"], [aria-label="Cookie consent"]',
        ),
      ).some((element) => element.getClientRects().length > 0);

      if (blocked) {
        retryTimer = window.setTimeout(attemptOpen, 1_000);
        return;
      }

      finished = true;
      cleanup();
      try {
        if (window.sessionStorage.getItem(SESSION_KEY)) return;
        // Record display as well as dismissal, so reloads never repeat it.
        window.sessionStorage.setItem(SESSION_KEY, "shown");
      } catch {
        return;
      }
      previousFocusRef.current = document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
      dialog.showModal();
      dialog.querySelector<HTMLButtonElement>("button")?.focus({ preventScroll: true });
    };

    const handleScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight > 0 && window.scrollY / scrollableHeight >= 0.35) {
        attemptOpen();
      }
    };

    const delayTimer = window.setTimeout(attemptOpen, 10_000);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      cleanup();
      if (dialog.open) dialog.close();
    };
  }, []);

  const dismiss = () => dialogRef.current?.close();

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="fundraiser-title"
      aria-describedby="fundraiser-description"
      aria-modal="true"
      className="fixed inset-0 m-auto max-h-[calc(100svh-2rem)] w-[calc(100%-2rem)] max-w-md overflow-y-auto overscroll-contain rounded-[1.4rem] border border-[#d8c9a7]/16 bg-[#071418] p-6 text-[#f4efe2] shadow-[0_24px_80px_rgba(0,0,0,0.4)] backdrop:bg-black/40 sm:p-8"
      onCancel={(event) => {
        event.preventDefault();
        dismiss();
      }}
      onClose={() => {
        try {
          window.sessionStorage.setItem(SESSION_KEY, "dismissed");
        } catch {
          // The dialog still closes if storage becomes unavailable.
        }
        if (previousFocusRef.current?.isConnected) {
          previousFocusRef.current.focus({ preventScroll: true });
        }
      }}
      onKeyDown={(event) => {
        if (event.key !== "Tab") return;
        const controls = event.currentTarget.querySelectorAll<HTMLElement>("button, a[href]");
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }}
    >
      <button
        type="button"
        aria-label="Close fundraiser invitation"
        onClick={dismiss}
        className="absolute right-3 top-3 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-[#f4efe2]/76 transition-colors hover:border-[#d8c9a7]/28 hover:text-[#fffaf0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6a15b] motion-reduce:transition-none"
      >
        <X className="h-4 w-4" aria-hidden="true" />
      </button>
      <h2
        id="fundraiser-title"
        className="pr-10 font-serif text-3xl font-normal leading-tight tracking-[-0.04em]"
      >
        A cause we care about
      </h2>
      <div id="fundraiser-description" className="mt-5 space-y-4 text-sm font-light leading-[1.8] text-[#f4efe2]/76 sm:text-base">
        <p>
          Trips Norway is supporting a personal fundraiser for a father trying to rebuild a safe home for his daughter after illness and separation.
        </p>
        <p>If you have a moment, you can read the story and learn more.</p>
      </div>
      <a
        href="https://safehome-brown.vercel.app/?utm_source=tripsnorway&utm_medium=popup&utm_campaign=safehome"
        target="_blank"
        rel="noopener noreferrer"
        onClick={dismiss}
        className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#c6a15b]/28 bg-[#c6a15b]/10 px-5 py-3 text-sm font-medium text-[#f4efe2] transition-colors hover:border-[#c6a15b]/48 hover:bg-[#c6a15b]/14 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6a15b] motion-reduce:transition-none"
      >
        Read the story <span aria-hidden="true">→</span>
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </dialog>
  );
}
