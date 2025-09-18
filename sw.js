/* eslint-env serviceworker */

self.addEventListener("install", () => {
    // Activate immediately
    self.skipWaiting();
  });
  
  self.addEventListener("activate", (event) => {
    // Control all clients immediately
    event.waitUntil(self.clients.claim());
  });
  
  self.addEventListener("fetch", (event) => {
    event.respondWith(
      (async () => {
        try {
          const response = await fetch(event.request);
  
          const newHeaders = new Headers(response.headers);
  
          // Add security headers
          newHeaders.set("X-Frame-Options", "DENY");
          newHeaders.set("X-Content-Type-Options", "nosniff");
          newHeaders.set("Referrer-Policy", "strict-origin-when-cross-origin");
          newHeaders.set(
            "Permissions-Policy",
            "camera=(), microphone=(), geolocation=()"
          );
  
          return new Response(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers: newHeaders,
          });
        } catch (err) {
          console.error("SW fetch failed:", err);
          return fetch(event.request); // fallback
        }
      })()
    );
  });
  