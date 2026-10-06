import "./fonts.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const disableCorePrefetching = () =>
  process.env.NODE_ENV === "development";

const STORAGE_KEY = "cookie_consent";

document.addEventListener("DOMContentLoaded", () => {
  /** init gtm after 3500 seconds - this could be adjusted */
  setTimeout(initGTM, 3500);
});
document.addEventListener("scroll", initGTMOnEvent);
document.addEventListener("mousemove", initGTMOnEvent);
document.addEventListener("touchstart", initGTMOnEvent);
function initGTMOnEvent(event) {
  initGTM();

  if (window.gtmDidInit) {
    event.currentTarget.removeEventListener(event.type, initGTMOnEvent);
  }
}

function hasGTMConsent() {
  return localStorage.getItem(STORAGE_KEY) === "accepted";
}
function initGTM() {
  if (!hasGTMConsent()) {
    return false;
  }

  if (window.gtmDidInit) {
    return false;
  }
  window.gtmDidInit = true; // flag to ensure script does not get added to DOM more than once.
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

window.addEventListener("cookie-consent-changed", (event) => {
  if (event.detail === "accepted") {
    initGTM();
  }
});

export { wrapRootElement } from "./root-wrapper";
export { wrapPageElement } from "./page-wrapper";
