import "./fonts.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const disableCorePrefetching = () =>
  process.env.NODE_ENV === "development";

const GTM_DELAY_MS = 3500;
const GTM_INIT_EVENTS = ["scroll", "mousemove", "touchstart"];

function addInitListeners() {
  GTM_INIT_EVENTS.forEach((eventName) => {
    document.addEventListener(eventName, initGTMOnEvent);
  });
}

function removeInitListeners() {
  GTM_INIT_EVENTS.forEach((eventName) => {
    document.removeEventListener(eventName, initGTMOnEvent);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Initialize GTM after a short delay unless user interaction triggers it first.
  setTimeout(initGTM, GTM_DELAY_MS);
});

addInitListeners();

function initGTMOnEvent() {
  initGTM();
}

function initGTM() {
  if (window.gtmDidInit) {
    return false;
  }

  window.gtmDidInit = true; // flag to ensure script does not get added to DOM more than once.
  removeInitListeners();

  const script = document.createElement("script");
  script.type = "text/javascript";
  script.async = true;
  // ensure PageViews is always tracked (on script load)
  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "gtm.js",
      "gtm.start": new Date().getTime(),
      "gtm.uniqueEventId": 0,
    });
  };
  script.src = "https://www.googletagmanager.com/gtm.js?id=GTM-PS26QB9";
  document.head.appendChild(script);
}

export { wrapRootElement } from "./root-wrapper";
export { wrapPageElement } from "./page-wrapper";
