import "./fonts.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

document.addEventListener("DOMContentLoaded", () => {
  /** init gtm after 100ms to avoid blocking main thread during paint */
  setTimeout(initGTM, 100);
});
/** Use passive: true to prevent event handler from blocking scrolling performance */
document.addEventListener("scroll", initGTMOnEvent, { passive: true });
document.addEventListener("mousemove", initGTMOnEvent, { passive: true });
document.addEventListener("touchstart", initGTMOnEvent, { passive: true });
function initGTMOnEvent(event) {
  initGTM();
  event.currentTarget.removeEventListener(event.type, initGTMOnEvent); // remove the event listener that got triggered
}
function initGTM() {
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
    window.dataLayer.push({ event: "gtm.js", "gtm.start": new Date().getTime(), "gtm.uniqueEventId": 0 });
  };
  script.src = "https://www.googletagmanager.com/gtm.js?id=GTM-PS26QB9";
  document.head.appendChild(script);
}

export { wrapRootElement } from "./root-wrapper";
export { wrapPageElement } from "./page-wrapper";
