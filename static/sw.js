/* eslint-env serviceworker */

self.addEventListener("install", () => {
  console.log("SW: Installed");
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("SW: Activated");
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      try {
        console.log("SW fetch:", event.request.url);

        const response = await fetch(event.request);

        // Clone for metadata (status, headers)
        const responseClone = response.clone();

        const newHeaders = new Headers(responseClone.headers);

        // Inject security headers
        newHeaders.set("X-Frame-Options", "SAMEORIGIN");
        newHeaders.set("X-Content-Type-Options", "nosniff");
        newHeaders.set("Referrer-Policy", "strict-origin-when-cross-origin");
        newHeaders.set(
          "Permissions-Policy",
          "camera=(), microphone=(), geolocation=()"
        );

        // Return new Response using original body stream
        return new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers: newHeaders,
        });
      } catch (err) {
        console.error("SW fetch failed:", err);
        return fetch(event.request); // fallback to network
      }
    })()
  );
});
