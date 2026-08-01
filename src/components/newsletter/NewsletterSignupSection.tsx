"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  SENDER_FORM_FALLBACK_DELAY_MS,
  SENDER_FORM_ID,
  SENDER_FORMS_READY_EVENT,
} from "@/src/components/newsletter/sender-form-config";

const HIDDEN_PATHS = new Set([
  "/newsletter-confirmed",
  "/routes/helgeland-coast-itinerary",
]);
const INLINE_FORM_STYLE_ID = "trips-norway-inline-newsletter";
const FRIENDLY_ALREADY_SUBSCRIBED_MESSAGE =
  "You’re already on the list — thank you for being here.";

function isSenderFormInstance(formId: string) {
  return (
    formId === SENDER_FORM_ID ||
    formId.startsWith(`${SENDER_FORM_ID}_`)
  );
}

export function NewsletterSignupSection() {
  const pathname = usePathname();
  const isHidden = HIDDEN_PATHS.has(pathname);
  const formMountRef = useRef<HTMLDivElement>(null);
  const formRenderRequestedRef = useRef(false);
  const feedbackObserverRef = useRef<MutationObserver | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const configuredDocumentRef = useRef<Document | null>(null);
  const [formState, setFormState] = useState<
    "loading" | "loaded" | "error"
  >("loading");

  const configureSenderForm = useCallback(() => {
    const mount = formMountRef.current;
    const iframe = mount?.querySelector<HTMLIFrameElement>("iframe");

    if (!mount || !iframe) {
      return false;
    }

    try {
      const formDocument = iframe.contentDocument;
      const emailInput =
        formDocument?.querySelector<HTMLInputElement>(
          'input[type="email"]',
        );
      const submitButton =
        formDocument?.querySelector<HTMLButtonElement>(
          ".sender-form-button",
        );

      if (!formDocument || !emailInput || !submitButton) {
        return false;
      }

      const syncFrameHeight = () => {
        if (!iframe.isConnected) {
          return;
        }

        window.requestAnimationFrame(() => {
          const nextHeight = Math.ceil(
            Math.max(
              formDocument.body.scrollHeight,
              formDocument.documentElement.scrollHeight,
            ),
          );

          if (nextHeight > 0) {
            iframe.style.height = `${nextHeight}px`;
          }
        });
      };

      const normalizeFeedback = () => {
        const successTitle =
          formDocument.querySelector<HTMLElement>(
            ".sender-form-success .sender-form-title p",
          );
        const successText =
          formDocument.querySelector<HTMLElement>(
            ".sender-form-success .sender-form-subtitle p",
          );

        if (
          successTitle &&
          successTitle.textContent !== "Thank you — you’re on the list."
        ) {
          successTitle.textContent = "Thank you — you’re on the list.";
        }

        if (
          successText &&
          successText.textContent !==
            "Watch your inbox for the next field note from Norway."
        ) {
          successText.textContent =
            "Watch your inbox for the next field note from Norway.";
        }

        formDocument
          .querySelectorAll<HTMLElement>(
            '[class*="error"], [role="alert"]',
          )
          .forEach((message) => {
            const messageText = message.textContent?.toLowerCase() ?? "";
            const isAlreadySubscribed =
              messageText.includes("already") ||
              messageText.includes("exist") ||
              messageText.includes("subscribed");

            if (
              isAlreadySubscribed &&
              message.textContent !==
                FRIENDLY_ALREADY_SUBSCRIBED_MESSAGE
            ) {
              message.textContent =
                FRIENDLY_ALREADY_SUBSCRIBED_MESSAGE;
              message.classList.add(
                "trips-newsletter-friendly-message",
              );
            }
          });

        syncFrameHeight();
      };

      if (configuredDocumentRef.current !== formDocument) {
        feedbackObserverRef.current?.disconnect();
        resizeObserverRef.current?.disconnect();
        configuredDocumentRef.current = formDocument;

        emailInput.id = "trips-norway-newsletter-email";
        emailInput.placeholder = "Your email address";
        emailInput.autocomplete = "email";
        emailInput.setAttribute("aria-label", "Your email address");

        const field = emailInput.closest<HTMLElement>(
          ".sender-form-field",
        );
        if (
          field &&
          !formDocument.getElementById(
            "trips-norway-newsletter-email-label",
          )
        ) {
          const label = formDocument.createElement("label");
          label.id = "trips-norway-newsletter-email-label";
          label.htmlFor = emailInput.id;
          label.className = "trips-newsletter-visually-hidden";
          label.textContent = "Your email address";
          field.prepend(label);
        }

        submitButton.textContent = "Join the journey";
        submitButton.setAttribute(
          "text_during_submit",
          "Joining…",
        );

        if (!formDocument.getElementById(INLINE_FORM_STYLE_ID)) {
          const style = formDocument.createElement("style");
          style.id = INLINE_FORM_STYLE_ID;
          style.textContent = `
            html,
            body {
              height: auto !important;
              min-height: 0 !important;
              overflow: hidden !important;
              background: #0f2023 !important;
            }

            body,
            .sender-subs-embeded-form,
            #sender-form-content {
              width: 100% !important;
              margin: 0 !important;
              padding: 0 !important;
              background: #0f2023 !important;
              color: #f4efe2 !important;
              font-family: Arial, sans-serif !important;
            }

            #sender-form-content {
              box-shadow: none !important;
            }

            .sender-form-box {
              border: 0 !important;
              box-shadow: none !important;
            }

            .sender-form-inputs {
              min-width: 0 !important;
              margin: 0 !important;
            }

            .sender-form {
              display: grid !important;
              grid-template-columns: minmax(0, 1fr) auto;
              align-items: start;
              gap: 0.75rem;
            }

            .sender-form-field {
              min-width: 0;
              margin: 0 !important;
            }

            .sender-form-input {
              width: 100% !important;
              min-height: 3.25rem !important;
              border: 1px solid rgba(216, 201, 167, 0.24) !important;
              border-radius: 999px !important;
              background: rgba(244, 239, 226, 0.055) !important;
              padding: 0.85rem 1.2rem !important;
              color: #f4efe2 !important;
              font-size: 0.94rem !important;
              line-height: 1.4 !important;
              outline: none !important;
              transition:
                border-color 180ms ease,
                background-color 180ms ease,
                box-shadow 180ms ease;
            }

            .sender-form-input::placeholder {
              color: rgba(244, 239, 226, 0.54) !important;
              opacity: 1 !important;
            }

            .sender-form-input:hover {
              border-color: rgba(216, 201, 167, 0.38) !important;
            }

            .sender-form-input:focus {
              border-color: rgba(198, 161, 91, 0.82) !important;
              background: rgba(244, 239, 226, 0.08) !important;
              box-shadow:
                0 0 0 2px #071418,
                0 0 0 4px rgba(198, 161, 91, 0.72) !important;
            }

            .sender-form-button {
              width: auto !important;
              min-width: 11.25rem !important;
              min-height: 3.25rem !important;
              margin: 0 !important;
              border: 1px solid rgba(198, 161, 91, 0.5) !important;
              border-radius: 999px !important;
              background: rgba(198, 161, 91, 0.16) !important;
              padding: 0.8rem 1.4rem !important;
              color: #f4efe2 !important;
              font-size: 0.66rem !important;
              font-weight: 600 !important;
              line-height: 1.4 !important;
              letter-spacing: 0.16em !important;
              text-transform: uppercase !important;
              cursor: pointer !important;
              transition:
                border-color 180ms ease,
                background-color 180ms ease;
            }

            .sender-form-button:hover {
              border-color: rgba(216, 201, 167, 0.75) !important;
              background: rgba(198, 161, 91, 0.24) !important;
            }

            .sender-form-button:focus-visible {
              outline: none !important;
              box-shadow:
                0 0 0 2px #071418,
                0 0 0 4px rgba(198, 161, 91, 0.78) !important;
            }

            .sender-form + div {
              margin-top: 0.75rem !important;
              opacity: 0.54;
            }

            .sender-form + div a,
            .sender-form + div span {
              color: rgba(244, 239, 226, 0.68) !important;
            }

            .sender-form-success {
              border-left: 1px solid rgba(198, 161, 91, 0.55);
              padding: 0.25rem 0 0.25rem 1rem;
              color: #f4efe2 !important;
              text-align: left !important;
            }

            .sender-form-success p {
              margin: 0.25rem 0 !important;
              color: #f4efe2 !important;
              font-weight: 400 !important;
            }

            [class*="error"],
            .trips-newsletter-friendly-message {
              margin-top: 0.45rem !important;
              color: #efd8cb !important;
              font-size: 0.78rem !important;
              line-height: 1.5 !important;
            }

            .trips-newsletter-visually-hidden {
              position: absolute !important;
              width: 1px !important;
              height: 1px !important;
              overflow: hidden !important;
              clip: rect(0 0 0 0) !important;
              clip-path: inset(50%) !important;
              white-space: nowrap !important;
            }

            @media (max-width: 28.99rem) {
              .sender-form {
                grid-template-columns: minmax(0, 1fr);
              }

              .sender-form-button {
                width: 100% !important;
              }
            }

            @media (prefers-reduced-motion: reduce) {
              .sender-form-input,
              .sender-form-button {
                transition: none !important;
              }
            }
          `;
          formDocument.body.append(style);
        }

        const iframeWrapper = iframe.parentElement;
        if (iframeWrapper) {
          iframeWrapper.style.display = "block";
          iframeWrapper.style.width = "100%";
        }

        iframe.style.display = "block";
        iframe.style.width = "100%";
        iframe.style.maxWidth = "none";
        iframe.style.borderRadius = "0";
        iframe.style.setProperty("border", "0", "important");
        iframe.style.setProperty("box-shadow", "none", "important");

        feedbackObserverRef.current = new MutationObserver(
          normalizeFeedback,
        );
        feedbackObserverRef.current.observe(formDocument.body, {
          childList: true,
          subtree: true,
          characterData: true,
        });

        resizeObserverRef.current = new ResizeObserver(
          syncFrameHeight,
        );
        resizeObserverRef.current.observe(iframe);
      }

      normalizeFeedback();
      setFormState("loaded");
      return true;
    } catch {
      return false;
    }
  }, []);

  const renderSenderForm = useCallback(() => {
    const senderForms = window.senderForms;

    if (
      isHidden ||
      !formMountRef.current ||
      !window.senderFormsLoaded ||
      !senderForms
    ) {
      return;
    }

    if (configureSenderForm()) {
      return;
    }

    try {
      const status = senderForms.getStatus(SENDER_FORM_ID)[SENDER_FORM_ID];

      if (status === "rendering" || formRenderRequestedRef.current) {
        return;
      }

      formRenderRequestedRef.current = true;
      senderForms.render([SENDER_FORM_ID], {
        onRender(formId) {
          if (isSenderFormInstance(formId)) {
            window.requestAnimationFrame(() => {
              configureSenderForm();
            });
          }
        },
      });
    } catch {
      formRenderRequestedRef.current = false;
      setFormState("error");
    }
  }, [configureSenderForm, isHidden]);

  useEffect(() => {
    if (isHidden) {
      return;
    }

    if (!formMountRef.current?.querySelector("iframe")) {
      setFormState("loading");
    }

    const handleSenderFormsReady = () => {
      renderSenderForm();
    };
    const mountObserver = new MutationObserver(() => {
      configureSenderForm();
    });
    const fallbackTimer = window.setTimeout(() => {
      if (!configureSenderForm()) {
        formRenderRequestedRef.current = false;
        setFormState("error");
      }
    }, SENDER_FORM_FALLBACK_DELAY_MS);

    if (formMountRef.current) {
      mountObserver.observe(formMountRef.current, {
        childList: true,
        subtree: true,
      });
    }

    window.addEventListener(
      SENDER_FORMS_READY_EVENT,
      handleSenderFormsReady,
    );
    window.addEventListener(
      "onSenderFormsLoaded",
      handleSenderFormsReady,
    );
    window.queueMicrotask(renderSenderForm);

    return () => {
      window.clearTimeout(fallbackTimer);
      mountObserver.disconnect();
      feedbackObserverRef.current?.disconnect();
      resizeObserverRef.current?.disconnect();
      configuredDocumentRef.current = null;
      formRenderRequestedRef.current = false;
      window.removeEventListener(
        SENDER_FORMS_READY_EVENT,
        handleSenderFormsReady,
      );
      window.removeEventListener(
        "onSenderFormsLoaded",
        handleSenderFormsReady,
      );
    };
  }, [configureSenderForm, isHidden, renderSenderForm]);

  if (isHidden) {
    return null;
  }

  return (
    <section
      aria-labelledby="newsletter-section-title"
      className="relative overflow-hidden border-t border-white/[0.08] bg-[#071418] text-[#f4efe2]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(198,161,91,0.08),transparent_32%),radial-gradient(circle_at_88%_84%,rgba(143,175,168,0.07),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c6a15b]/30 to-transparent" />

      <div
        className={`relative mx-auto grid max-w-7xl gap-8 px-5 py-11 sm:px-8 sm:py-12 md:px-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-14 lg:py-14 ${
          pathname === "/" ? "lg:pl-56" : ""
        }`}
      >
        <div className="max-w-xl">
          <h2
            id="newsletter-section-title"
            className="font-serif text-[clamp(2.25rem,4vw,3.8rem)] font-normal leading-[0.98] tracking-[-0.045em] text-[#f4efe2]"
          >
            Norway, one quiet route at a time
          </h2>
          <p className="mt-4 max-w-lg text-sm font-light leading-[1.75] text-[#f4efe2]/68 sm:text-base">
            Get occasional field notes, practical travel updates and new
            routes from across Norway.
          </p>
        </div>

        <div className="min-w-0 rounded-[1.15rem] border border-[#d8c9a7]/14 bg-white/[0.035] p-4 sm:p-5">
          <div
            ref={formMountRef}
            style={{ textAlign: "left" }}
            className="sender-form-field min-w-0"
            data-sender-form-id={SENDER_FORM_ID}
          />

          {formState === "loading" ? (
            <p
              aria-live="polite"
              className="py-2 text-sm font-light text-[#f4efe2]/58"
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
                The form is taking a little longer to load.
              </p>
              <a
                href="https://stats.sender.net/forms/en5yAD/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 w-fit items-center justify-center rounded-full border border-[#c6a15b]/32 bg-[#c6a15b]/10 px-4 py-2.5 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[#f4efe2] transition-colors hover:border-[#c6a15b]/52 hover:bg-[#c6a15b]/16 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6a15b]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071418] motion-reduce:transition-none"
              >
                Open the signup form
              </a>
            </div>
          ) : null}

          <p className="mt-3 text-[0.7rem] font-light leading-[1.65] text-[#f4efe2]/52">
            No spam. Unsubscribe anytime. Read our{" "}
            <Link
              href="/privacy"
              className="rounded-sm text-[#d8c9a7]/82 underline decoration-[#d8c9a7]/30 underline-offset-4 transition-colors hover:text-[#f4efe2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6a15b]/65 motion-reduce:transition-none"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
