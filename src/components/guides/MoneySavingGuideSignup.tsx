"use client";

import { useEffect, useRef, useState } from "react";

import {
  SENDER_FORM_FALLBACK_DELAY_MS,
  SENDER_FORMS_READY_EVENT,
} from "@/src/components/newsletter/sender-form-config";

const FORM_ID = "dyPYyV";
// Sender's hosted form supplies this mount identifier; render uses the public form ID.
const FORM_EMBED_ID = "muvilx2vdypyyvwg077";
const FORM_URL = `https://stats.sender.net/forms/${FORM_ID}/view`;

export function MoneySavingGuideSignup() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"loading" | "loaded" | "error">("loading");

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let requested = false;
    let formDocument: Document | null = null;
    let resizeObserver: ResizeObserver | null = null;

    const configure = () => {
      const iframe = mount.querySelector("iframe");
      if (!iframe) return false;
      iframe.title = "Norway Money-Saving Guide signup";
      iframe.style.width = "100%";
      iframe.style.border = "0";
      try {
        const doc = iframe.contentDocument;
        if (!doc?.querySelector('input[type="email"]')) return false;
        if (formDocument !== doc) {
          resizeObserver?.disconnect();
          formDocument = doc;
          const style = doc.createElement("style");
          style.textContent = `
            html, body { min-height: 0 !important; height: auto !important; background: #081116 !important; }
            body, .sender-subs-embeded-form, #sender-form-content {
              width: 100% !important; margin: 0 !important; padding: 0 !important;
              background: #081116 !important; color: #f4efe2 !important; font-family: Arial, sans-serif !important;
            }
            .sender-form-box, #sender-form-content { border: 0 !important; box-shadow: none !important; }
            .sender-form-inputs { min-width: 0 !important; }
            .sender-form-input { box-sizing: border-box !important; width: 100% !important; min-height: 48px !important;
              border: 1px solid #706b60 !important; border-radius: 4px !important;
              background: #101a1e !important; color: #f4efe2 !important; font-size: 16px !important; }
            .sender-form-input::placeholder { color: #b9b5ab !important; }
            .sender-form-button { min-height: 48px !important; border-radius: 4px !important;
              background: #d8c9a7 !important; color: #081116 !important; }
            .sender-form-input:focus-visible, .sender-form-button:focus-visible {
              outline: 2px solid #d8c9a7 !important; outline-offset: 3px !important;
            }
            .sender-form-title p, .sender-form-subtitle p, .sender-form-success p { color: #f4efe2 !important; }
          `;
          doc.head.append(style);
          const email = doc.querySelector<HTMLInputElement>('input[type="email"]');
          email?.setAttribute("aria-label", "Your email address");
          email?.setAttribute("autocomplete", "email");
          const syncHeight = () => {
            iframe.style.height = `${Math.ceil(Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight))}px`;
          };
          resizeObserver = new ResizeObserver(syncHeight);
          resizeObserver.observe(doc.body);
          syncHeight();
        }
        setState("loaded");
        return true;
      } catch {
        return false;
      }
    };

    const render = () => {
      if (configure() || requested || !window.senderFormsLoaded || !window.senderForms) return;
      try {
        requested = true;
        window.senderForms.render([FORM_ID], { onRender: configure });
      } catch {
        requested = false;
        setState("error");
      }
    };
    const observer = new MutationObserver(configure);
    observer.observe(mount, { childList: true, subtree: true });
    window.addEventListener(SENDER_FORMS_READY_EVENT, render);
    window.addEventListener("onSenderFormsLoaded", render);
    render();
    const timer = window.setTimeout(() => {
      if (!configure()) setState("error");
    }, SENDER_FORM_FALLBACK_DELAY_MS);

    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
      resizeObserver?.disconnect();
      window.removeEventListener(SENDER_FORMS_READY_EVENT, render);
      window.removeEventListener("onSenderFormsLoaded", render);
    };
  }, []);

  return (
    <section aria-labelledby="money-saving-signup-title" className="my-12 border-y border-[#d8c9a7]/20 bg-[#081116] px-5 py-8 sm:px-8 sm:py-10">
      <div className="!mt-0 text-xs font-medium uppercase tracking-[0.24em] text-[#d8c9a7]">
        Free Norway Money-Saving Guide
      </div>
      <h2 id="money-saving-signup-title" className="!mt-4">Take the 50 tips with you.</h2>
      <p>
        Get the free Norway Money-Saving Guide by email — practical local advice
        for saving on food, transport, ferries, accommodation and everyday travel in Norway.
      </p>
      <div ref={mountRef} data-sender-form-id={FORM_EMBED_ID} className="sender-form-field mt-6 min-w-0" style={{ textAlign: "left" }} />
      <div role="status" className="mt-3 text-sm text-[#f4efe2]/75">
        {state === "loading" ? "Loading the email form…" : null}
        {state === "error" ? <>The form is taking longer to load. <a href={FORM_URL} className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8c9a7]">Open the guide signup form</a>.</> : null}
      </div>
      <p className="!text-sm">
        Confirm your email address to receive the guide. Read our <a href="/privacy">Privacy Policy</a>.
      </p>
      <noscript><a href={FORM_URL}>Open the guide signup form</a></noscript>
    </section>
  );
}
