/**
 * GTM Manager - Singleton pattern implementation for Google Tag Manager
 * Prevents race conditions and duplicate script injection
 * Ensures only one GTM instance is initialized regardless of trigger events
 */

class GTMManager {
  constructor() {
    this.isInitialized = false;
    this.isInitializing = false;
    this.GTM_ID = "GTM-PS26QB9";
    this.initPromise = null;
  }

  /**
   * Initialize GTM asynchronously with singleton pattern
   * Returns a promise that resolves when GTM is fully loaded
   * Subsequent calls return the same promise
   */
  async initialize() {
    // If already initialized, return immediately
    if (this.isInitialized) {
      return Promise.resolve();
    }

    // If currently initializing, return the existing promise to prevent duplicate initializations
    if (this.isInitializing) {
      return this.initPromise;
    }

    // Mark as initializing and create the initialization promise
    this.isInitializing = true;
    this.initPromise = this._performInitialization();

    try {
      await this.initPromise;
      this.isInitialized = true;
    } catch (error) {
      console.error("[GTM Manager] Initialization failed:", error);
      this.isInitializing = false;
      this.initPromise = null;
      throw error;
    }

    return Promise.resolve();
  }

  /**
   * Performs the actual GTM initialization
   * Injects the GTM script into the document head
   * @private
   */
  _performInitialization() {
    return new Promise((resolve, reject) => {
      // Check if GTM script is already in the DOM
      if (this._isGTMScriptPresent()) {
        console.warn("[GTM Manager] GTM script already present in DOM");
        this.isInitialized = true;
        resolve();
        return;
      }

      try {
        // Create and configure the GTM script tag
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.defer = true;

        // Set up event handlers
        script.onload = () => {
          console.log("[GTM Manager] GTM script loaded successfully");
          this._initializeDataLayer();
          resolve();
        };

        script.onerror = () => {
          console.error("[GTM Manager] Failed to load GTM script");
          reject(new Error("GTM script failed to load"));
        };

        // Set the script source and append to head
        script.src = `https://www.googletagmanager.com/gtm.js?id=${this.GTM_ID}`;
        document.head.appendChild(script);

        // Set a timeout in case onload/onerror events don't fire
        setTimeout(() => {
          if (!this.isInitialized) {
            console.warn("[GTM Manager] GTM initialization timeout");
            this._initializeDataLayer();
            resolve();
          }
        }, 5000);
      } catch (error) {
        console.error("[GTM Manager] Error during initialization:", error);
        reject(error);
      }
    });
  }

  /**
   * Initialize the Google Tag Manager data layer
   * @private
   */
  _initializeDataLayer() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "gtm.js",
      "gtm.start": new Date().getTime(),
      "gtm.uniqueEventId": 0,
    });
  }

  /**
   * Check if GTM script is already present in the DOM
   * @private
   * @returns {boolean} True if GTM script exists, false otherwise
   */
  _isGTMScriptPresent() {
    const scripts = document.querySelectorAll("script");
    return Array.from(scripts).some((script) =>
      script.src.includes(`gtm.js?id=${this.GTM_ID}`),
    );
  }

  /**
   * Initialize GTM on a specific event with deduplication
   * Safe to call multiple times - only initializes once
   */
  initializeOnEvent(eventName) {
    if (!this.isInitialized && !this.isInitializing) {
      this.initialize().catch((error) => {
        console.error(`[GTM Manager] Failed to initialize on ${eventName}:`, error);
      });
    }
  }
}

// Export singleton instance
const gtmManager = new GTMManager();

module.exports = gtmManager;
