export const SENDER_FORM_ID = "en5yAD";
export const SENDER_FORMS_READY_EVENT =
  "trips-norway-sender-forms-ready";
export const SENDER_FORM_FALLBACK_DELAY_MS = 8_000;

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
