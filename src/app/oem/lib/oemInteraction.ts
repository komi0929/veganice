import type { OemCourseId, OemFormatId } from "../data/oemSpecs";

export type OemSelectableCourse = OemCourseId | "undecided";
export type OemSelectableFormat = OemFormatId | "both" | "undecided";

export interface OemIntentDetail {
  target: "contact" | "simulator";
  tab?: "oem" | "sample";
  courseId?: OemSelectableCourse;
  formatId?: OemSelectableFormat;
}

const EVENT_NAME = "oem:intent";

/**
 * コースカード・試算シミュレーター・中盤バナーから、選択条件を保ったまま
 * スムーズにシミュレーターまたは事前相談フォームへ誘導するヘルパー
 */
export function dispatchOemIntent(detail: OemIntentDetail): void {
  if (typeof window === "undefined") return;

  window.dispatchEvent(new CustomEvent<OemIntentDetail>(EVENT_NAME, { detail }));

  const elementId = detail.target === "simulator" ? "simulator" : "contact-form";
  const el = document.getElementById(elementId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function subscribeOemIntent(handler: (detail: OemIntentDetail) => void): () => void {
  if (typeof window === "undefined") return () => undefined;

  const listener = (event: Event) => {
    const customEvent = event as CustomEvent<OemIntentDetail>;
    if (customEvent.detail) {
      handler(customEvent.detail);
    }
  };

  window.addEventListener(EVENT_NAME, listener);
  return () => window.removeEventListener(EVENT_NAME, listener);
}
