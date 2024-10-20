import "./fonts.css";
import posthog from "posthog-js";

document.addEventListener("DOMContentLoaded", () => {
  /** init gtm after 3500 seconds - this could be adjusted */
  setTimeout(initGTM, 3500);
});
document.addEventListener("scroll", initGTMOnEvent);
document.addEventListener("mousemove", initGTMOnEvent);
document.addEventListener("touchstart", initGTMOnEvent);
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

export const onClientEntry = () => {
  if (process.env.NODE_ENV === "production") {
    posthog.init("phc_Yynjz2lAiQDJFqTWeGT0FJrt50hl53WBx8do3eKImgX",
      {
        api_host: "https://us.i.posthog.com",
        person_profiles: "always",
        autocapture: {
          url_ignorelist: ["community/newcomers", "/calendar", "/newcomers"]
        }
      }
    );
  }
};

export { wrapRootElement } from "./root-wrapper";
export { wrapPageElement } from "./page-wrapper";
