import "./fonts.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import GTM Manager for proper singleton pattern
let gtmManager;

// Dynamically import GTM Manager when available (client-side only)
const getGTMManager = () => {
  if (typeof window !== "undefined" && !gtmManager) {
    try {
      // Inline simple GTM manager to avoid module resolution issues
      gtmManager = createGTMManager();
    } catch (error) {
      console.error("Failed to initialize GTM Manager:", error);
    }
  }
  return gtmManager;
};

/**
 * Create a simple GTM Manager singleton inline
 */
function createGTMManager() {
  return {
    isInitialized: false,
    isInitializing: false,
    initialize: function () {
      if (this.isInitialized || this.isInitializing) {
        return;
      }
      this.isInitializing = true;
      this._performInitialization();
    },
    _performInitialization: function () {
      if (this._isGTMScriptPresent()) {
        console.warn("[GTM Manager] GTM script already present in DOM");
        this.isInitialized = true;
        return;
      }

      try {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.defer = true;

        script.onload = () => {
          console.log("[GTM Manager] GTM script loaded successfully");
          this._initializeDataLayer();
          this.isInitialized = true;
        };

        script.onerror = () => {
          console.error("[GTM Manager] Failed to load GTM script");
          this.isInitialized = true; // Mark as initialized to prevent retries
        };

        script.src = "https://www.googletagmanager.com/gtm.js?id=GTM-PS26QB9";
        document.head.appendChild(script);

        // Set a timeout to mark as initialized even if events don't fire
        setTimeout(() => {
          if (!this.isInitialized) {
            this._initializeDataLayer();
            this.isInitialized = true;
          }
        }, 5000);
      } catch (error) {
        console.error("[GTM Manager] Error during initialization:", error);
        this.isInitialized = true;
      }
    },
    _initializeDataLayer: function () {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "gtm.js",
        "gtm.start": new Date().getTime(),
        "gtm.uniqueEventId": 0,
      });
    },
    _isGTMScriptPresent: function () {
      const scripts = document.querySelectorAll("script");
      return Array.from(scripts).some((script) =>
        script.src.includes("gtm.js?id=GTM-PS26QB9"),
      );
    },
  };
}

export const disableCorePrefetching = () =>
  process.env.NODE_ENV === "development";

document.addEventListener("DOMContentLoaded", () => {
  /** Initialize GTM after 3500ms using singleton pattern */
  setTimeout(() => {
    const manager = getGTMManager();
    if (manager) {
      manager.initialize();
    }
  }, 3500);
});

// Set up event listeners for user interaction triggers
document.addEventListener("scroll", () => {
  const manager = getGTMManager();
  if (manager) {
    manager.initialize();
  }
});

document.addEventListener("mousemove", () => {
  const manager = getGTMManager();
  if (manager) {
    manager.initialize();
  }
});

document.addEventListener("touchstart", () => {
  const manager = getGTMManager();
  if (manager) {
    manager.initialize();
  }
});

export { wrapRootElement } from "./root-wrapper";
export { wrapPageElement } from "./page-wrapper";
