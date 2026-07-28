"use client";

import { Check, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent as ReactMouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

import { COOKIE_CONSENT_CHANGE_EVENT } from "@/src/lib/compliance/cookie-consent";

const SENDER_FORM_ID = "en5yAD";
const SENDER_FORMS_READY_EVENT = "trips-norway-sender-forms-ready";
const SENDER_FORM_FALLBACK_DELAY_MS = 8_000;
const SESSION_SHOWN_KEY = "trips-norway-newsletter-dialog-shown-v1";
const DISMISSED_UNTIL_KEY =
  "trips-norway-newsletter-dialog-dismissed-until-v1";
const DISMISSAL_DURATION_MS = 14 * 24 * 60 * 60 * 1000;
const OPEN_DELAY_MS = 20_000;
const OPEN_SCROLL_PROGRESS = 0.4;
const BLOCKER_RETRY_MS = 1_000;

type SenderFormStatus =
  | "unavailable"
  | "initialized"
  | "rendering"
  | "enabled"
  | "disabled";

type SenderFormRenderConfig = {
  initialStatus?: "enabled" | "disabled";
  onRender?: (formId: string) => void;
};

type SenderFormsApi = {
  getStatus: (
    formIds: string | string[],
  ) => Record<string, SenderFormStatus>;
  render: (
    formIds?: "all" | string | string[],
    config?: SenderFormRenderConfig,
  ) => void;
};

declare global {
  interface Window {
    senderForms?: SenderFormsApi;
    senderFormsLoaded?: boolean;
  }
}

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "iframe",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

function isEligiblePath(pathname: string) {
  if (pathname === "/") {
    return true;
  }

  if (pathname === "/routes/helgeland-coast-itinerary") {
    return false;
  }

  return ["/destinations", "/routes", "/journal"].some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

function isVisible(element: HTMLElement) {
  const styles = window.getComputedStyle(element);

  return (
    styles.display !== "none" &&
    styles.visibility !== "hidden" &&
    element.getClientRects().length > 0
  );
}

function hasBlockingDialog(currentDialog: HTMLDialogElement) {
  const possibleBlockers = document.querySelectorAll<HTMLElement>(
    'dialog[open], [role="dialog"][aria-modal="true"], [aria-label="Cookie consent"]',
  );

  return Array.from(possibleBlockers).some(
    (element) => element !== currentDialog && isVisible(element),
  );
}

function hasBeenShownThisVisit() {
  try {
    return window.sessionStorage.getItem(SESSION_SHOWN_KEY) === "true";
  } catch {
    return false;
  }
}

function hasActiveDismissal() {
  try {
    const dismissedUntil = Number(
      window.localStorage.getItem(DISMISSED_UNTIL_KEY),
    );

    return Number.isFinite(dismissedUntil) && dismissedUntil > Date.now();
  } catch {
    return false;
  }
}

function recordShownThisVisit() {
  try {
    window.sessionStorage.setItem(SESSION_SHOWN_KEY, "true");
  } catch {
    // The in-memory open state still prevents the current instance reopening.
  }
}

function recordDismissal() {
  try {
    window.localStorage.setItem(
      DISMISSED_UNTIL_KEY,
      String(Date.now() + DISMISSAL_DURATION_MS),
    );
  } catch {
    // Closing the dialog must still work when browser storage is unavailable.
  }
}

function getFocusableElements(dialog: HTMLDialogElement) {
  return Array.from(
    dialog.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
  ).filter((element) => isVisible(element));
}

function subscribeToMountedState() {
  return () => undefined;
}

function useHasMounted() {
  return useSyncExternalStore(
    subscribeToMountedState,
    () => true,
    () => false,
  );
}

export function NewsletterSignupDialog() {
  const pathname = usePathname();
  const isEligible = isEligiblePath(pathname);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const formMountRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const bodyOverflowRef = useRef("");
  const hasShownInMemoryRef = useRef(false);
  const formRenderRequestedRef = useRef(false);
  const formHasRenderedRef = useRef(false);
  const hasMounted = useHasMounted();
  const isDebugMode =
    process.env.NODE_ENV === "development" &&
    hasMounted &&
    new URLSearchParams(window.location.search).get("newsletter-debug") === "1";
  const [isOpen, setIsOpen] = useState(false);
  const [formState, setFormState] = useState<
    "idle" | "loading" | "loaded" | "error"
  >("idle");

  const restorePage = useCallback(() => {
    document.body.style.overflow = bodyOverflowRef.current;

    const previousFocus = previousFocusRef.current;
    if (previousFocus?.isConnected) {
      window.requestAnimationFrame(() => previousFocus.focus());
    }
  }, []);

  const closeDialog = useCallback(
    (shouldSuppress: boolean) => {
      const dialog = dialogRef.current;

      if (shouldSuppress && !isDebugMode) {
        recordDismissal();
      }

      if (dialog?.open) {
        dialog.close();
      }

      setIsOpen(false);
      restorePage();
    },
    [isDebugMode, restorePage],
  );

  const tryToOpen = useCallback(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return "blocked" as const;
    }

    if (
      dialog.open ||
      (!isDebugMode &&
        (!isEligible ||
          hasShownInMemoryRef.current ||
          hasBeenShownThisVisit() ||
          hasActiveDismissal()))
    ) {
      return "stop" as const;
    }

    if (!isDebugMode && hasBlockingDialog(dialog)) {
      return "blocked" as const;
    }

    previousFocusRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    bodyOverflowRef.current = document.body.style.overflow;
    if (!isDebugMode) {
      hasShownInMemoryRef.current = true;
      recordShownThisVisit();
    }
    dialog.showModal();
    document.body.style.overflow = "hidden";
    setIsOpen(true);
    setFormState((currentState) =>
      currentState === "loaded" ? currentState : "loading",
    );
    window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    return "opened" as const;
  }, [isDebugMode, isEligible]);

  const markFormAsLoaded = useCallback(() => {
    formHasRenderedRef.current = true;
    setFormState("loaded");
  }, []);

  const renderSenderForm = useCallback(() => {
    const senderForms = window.senderForms;

    if (
      !isOpen ||
      !formMountRef.current ||
      !window.senderFormsLoaded ||
      !senderForms
    ) {
      return;
    }

    try {
      const status = senderForms.getStatus(SENDER_FORM_ID)[SENDER_FORM_ID];

      if (status === "enabled" || status === "disabled") {
        markFormAsLoaded();
        return;
      }

      if (status === "rendering" || formRenderRequestedRef.current) {
        return;
      }

      formRenderRequestedRef.current = true;
      senderForms.render([SENDER_FORM_ID], {
        onRender(formId) {
          if (formId === SENDER_FORM_ID) {
            markFormAsLoaded();
          }
        },
      });
    } catch {
      formRenderRequestedRef.current = false;
      setFormState("error");
    }
  }, [isOpen, markFormAsLoaded]);

  useEffect(() => {
    if (!isDebugMode && !isEligible && dialogRef.current?.open) {
      closeDialog(false);
    }
  }, [closeDialog, isDebugMode, isEligible]);

  useEffect(() => {
    if (
      isDebugMode ||
      !isEligible ||
      hasBeenShownThisVisit() ||
      hasActiveDismissal()
    ) {
      return;
    }

    let triggerReached = false;
    let hasFinished = false;

    const cleanup = () => {
      window.clearTimeout(delayTimer);
      window.clearInterval(blockerRetry);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener(COOKIE_CONSENT_CHANGE_EVENT, attemptOpen);
    };

    const attemptOpen = () => {
      if (!triggerReached || hasFinished) {
        return;
      }

      const result = tryToOpen();

      if (result === "opened" || result === "stop") {
        hasFinished = true;
        cleanup();
      }
    };

    const handleScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (
        scrollableHeight > 0 &&
        window.scrollY / scrollableHeight >= OPEN_SCROLL_PROGRESS
      ) {
        triggerReached = true;
        attemptOpen();
      }
    };

    const delayTimer = window.setTimeout(() => {
      triggerReached = true;
      attemptOpen();
    }, OPEN_DELAY_MS);
    const blockerRetry = window.setInterval(attemptOpen, BLOCKER_RETRY_MS);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener(COOKIE_CONSENT_CHANGE_EVENT, attemptOpen);
    handleScroll();

    return cleanup;
  }, [isDebugMode, isEligible, tryToOpen]);

  useEffect(() => {
    if (!isDebugMode) {
      return;
    }

    let isCancelled = false;

    window.queueMicrotask(() => {
      if (!isCancelled) {
        tryToOpen();
      }
    });

    return () => {
      isCancelled = true;
    };
  }, [isDebugMode, tryToOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    let isCancelled = false;
    const handleSenderFormsReady = () => {
      renderSenderForm();
    };
    const fallbackTimer = window.setTimeout(() => {
      if (!formHasRenderedRef.current) {
        formRenderRequestedRef.current = false;
        setFormState("error");
      }
    }, SENDER_FORM_FALLBACK_DELAY_MS);

    window.addEventListener(
      SENDER_FORMS_READY_EVENT,
      handleSenderFormsReady,
    );
    window.addEventListener("onSenderFormsLoaded", handleSenderFormsReady);

    window.queueMicrotask(() => {
      if (!isCancelled) {
        renderSenderForm();
      }
    });

    return () => {
      isCancelled = true;
      window.clearTimeout(fallbackTimer);
      window.removeEventListener(
        SENDER_FORMS_READY_EVENT,
        handleSenderFormsReady,
      );
      window.removeEventListener(
        "onSenderFormsLoaded",
        handleSenderFormsReady,
      );
    };
  }, [isOpen, renderSenderForm]);

  useEffect(() => {
    const dialog = dialogRef.current;

    return () => {
      if (dialog?.open) {
        dialog.close();
        document.body.style.overflow = bodyOverflowRef.current;
      }
    };
  }, []);

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLDialogElement>) => {
    if (event.key !== "Tab") {
      return;
    }

    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }

    const focusableElements = getFocusableElements(dialog);
    const firstElement = focusableElements[0];
    const lastElement = focusableElements.at(-1);

    if (!firstElement || !lastElement) {
      event.preventDefault();
      closeButtonRef.current?.focus();
      return;
    }

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  };

  const handleBackdropClick = (
    event: ReactMouseEvent<HTMLDialogElement>,
  ) => {
    if (event.target === event.currentTarget) {
      closeDialog(true);
    }
  };

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <style>{`
        .newsletter-signup-dialog {
          opacity: 0;
          transform: translateY(8px) scale(0.99);
          transition:
            opacity 180ms ease-out,
            transform 180ms ease-out;
        }

        .newsletter-signup-dialog[open] {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .newsletter-signup-dialog::backdrop {
          background: rgba(2, 7, 9, 0.82);
          backdrop-filter: blur(6px);
        }

        body:has([aria-label="Cookie consent"]) .newsletter-debug-trigger {
          bottom: auto;
          top: 6rem;
        }

        @media (prefers-reduced-motion: reduce) {
          .newsletter-signup-dialog {
            transition: none;
          }
        }
      `}</style>

      <dialog
        id="newsletter-signup-dialog"
        ref={dialogRef}
        aria-labelledby="newsletter-dialog-title"
        aria-describedby="newsletter-dialog-description"
        aria-modal="true"
        className="newsletter-signup-dialog fixed inset-0 m-auto max-h-[calc(100svh-1.5rem)] w-[calc(100%-1.5rem)] max-w-[56rem] overflow-y-auto rounded-[1.4rem] border border-[#d8c9a7]/16 bg-[#071418] p-0 text-[#f4efe2] shadow-[0_32px_110px_rgba(0,0,0,0.58)] sm:max-h-[calc(100svh-2.5rem)] sm:w-[calc(100%-2.5rem)]"
        onCancel={(event) => {
          event.preventDefault();
          closeDialog(true);
        }}
        onClose={() => {
          if (isOpen) {
            setIsOpen(false);
            restorePage();
          }
        }}
        onKeyDown={handleKeyDown}
        onMouseDown={handleBackdropClick}
      >
        <div className="relative grid min-w-0 overflow-hidden md:grid-cols-[minmax(15rem,0.82fr)_minmax(0,1.18fr)]">
          <div className="relative min-h-36 overflow-hidden border-b border-white/10 md:min-h-full md:border-b-0 md:border-r">
            <Image
              src="/images/destinations/helgeland/helgeland-sunset.jpg"
              alt="Seabirds flying above the Helgeland sea at an orange sunset"
              fill
              loading="lazy"
              sizes="(max-width: 767px) calc(100vw - 24px), 350px"
              className="object-cover object-[center_58%]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,20,24,0.04),rgba(7,20,24,0.48))] md:bg-[linear-gradient(90deg,rgba(7,20,24,0.03),rgba(7,20,24,0.34))]"
            />
            <p className="absolute bottom-4 left-5 right-5 text-[0.58rem] font-medium uppercase tracking-[0.28em] text-[#fff8e8]/78 md:bottom-6 md:left-6">
              Helgeland · Northern Norway
            </p>
          </div>

          <div className="relative min-w-0 px-5 pb-6 pt-7 sm:px-7 sm:pb-7 sm:pt-8 lg:px-9 lg:pb-8">
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => closeDialog(true)}
              aria-label="Close newsletter signup"
              className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-[#071418]/82 text-[#f4efe2]/76 backdrop-blur-md transition-colors hover:border-[#d8c9a7]/28 hover:text-[#fffaf0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6a15b]/70 sm:right-4 sm:top-4"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>

            <div className="pr-10">
              <p className="text-[0.58rem] font-medium uppercase tracking-[0.31em] text-[#c6a15b]/86">
                Free 7-day itinerary
              </p>
              <h2
                id="newsletter-dialog-title"
                className="mt-3 max-w-md font-serif text-[clamp(2rem,5vw,3.4rem)] font-normal leading-[0.94] tracking-[-0.045em] text-[#f4efe2]"
              >
                Plan the Helgeland Coast
              </h2>
            </div>

            <p
              id="newsletter-dialog-description"
              className="mt-4 max-w-xl text-sm font-light leading-[1.7] text-[#f4efe2]/68 sm:text-[0.96rem]"
            >
              Get a practical ferry-aware itinerary with scenic stops,
              overnight suggestions and useful planning notes for seven
              unhurried days in Northern Norway.
            </p>

            <ul className="mt-5 grid gap-2 text-sm text-[#f4efe2]/74 sm:grid-cols-2">
              {[
                "Seven-day coastal route",
                "Ferry-aware planning",
                "Scenic stops and overnight areas",
              ].map((point) => (
                <li
                  key={point}
                  className="flex min-w-0 items-start gap-2.5 last:sm:col-span-2"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#c6a15b]"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-sm font-light leading-relaxed text-[#f4efe2]/72">
              Enter your email address to receive the free itinerary.
            </p>

            <div className="mt-3 min-w-0 rounded-[1rem] border border-[#d8c9a7]/14 bg-white/[0.035] p-3 sm:p-4">
              <div
                ref={formMountRef}
                style={{ textAlign: "left" }}
                className="sender-form-field"
                data-sender-form-id={SENDER_FORM_ID}
              />

              {formState === "idle" || formState === "loading" ? (
                <p
                  aria-live="polite"
                  className="py-1 text-sm font-light text-[#f4efe2]/58"
                >
                  Loading the email form…
                </p>
              ) : null}

              {formState === "error" ? (
                <div
                  aria-live="polite"
                  className="flex flex-col gap-3 py-1 sm:flex-row sm:items-center sm:justify-between"
                >
                  <p className="text-sm font-light text-[#f4efe2]/64">
                    Having trouble with the form?
                  </p>
                  <a
                    href="https://stats.sender.net/forms/en5yAD/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center justify-center rounded-full border border-[#c6a15b]/28 bg-[#c6a15b]/10 px-4 py-2.5 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-[#f4efe2] transition-colors hover:border-[#c6a15b]/48 hover:bg-[#c6a15b]/14 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6a15b]/65"
                  >
                    Open the signup form
                  </a>
                </div>
              ) : null}
            </div>

            <p className="mt-4 text-[0.7rem] font-light leading-[1.65] text-[#f4efe2]/52">
              By signing up, you agree to receive the Helgeland Coast itinerary
              and occasional travel inspiration from Trips Norway. Unsubscribe
              at any time.{" "}
              <Link
                href="/privacy"
                className="text-[#d8c9a7]/82 underline decoration-[#d8c9a7]/30 underline-offset-4 transition-colors hover:text-[#f4efe2] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6a15b]/60"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </dialog>

      {isDebugMode ? (
        <button
          type="button"
          onClick={() => tryToOpen()}
          aria-controls="newsletter-signup-dialog"
          aria-expanded={isOpen}
          className="newsletter-debug-trigger fixed bottom-4 left-[4.5rem] z-[60] inline-flex min-h-10 items-center justify-center rounded-full border border-[#c6a15b]/36 bg-[#071418]/94 px-4 py-2 text-[0.62rem] font-medium uppercase tracking-[0.16em] text-[#f4efe2] shadow-[0_12px_36px_rgba(0,0,0,0.36)] backdrop-blur-md transition-colors hover:border-[#c6a15b]/58 hover:bg-[#0b1c21] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6a15b]/75 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071418]"
        >
          Open newsletter popup
        </button>
      ) : null}
    </>
  );
}
