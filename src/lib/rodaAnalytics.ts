// Camada fina de eventos — pronta para plugar em GA4 depois.
export type RodaEvent =
  | "video_play"
  | "feedback_open"
  | "feedback_complete"
  | "topic_suggestion_open"
  | "availability_form_open"
  | "next_event_interest"
  | "guest_profile_view"
  | "guest_contact_click"
  | "whatsapp_click"
  | "article_view"
  | "event_share";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  event: RodaEvent,
  params: Record<string, unknown> = {}
) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
  window.gtag?.("event", event, params);
}
