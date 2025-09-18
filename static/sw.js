/* eslint-env serviceworker */

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      try {
        console.log("SW fetch:", event.request.url);

        const response = await fetch(event.request);

        const responseClone = response.clone();

        const newHeaders = new Headers(responseClone.headers);

        newHeaders.set("X-Frame-Options", "DENY");
        newHeaders.set("X-Content-Type-Options", "nosniff");
        newHeaders.set("Referrer-Policy", "strict-origin-when-cross-origin");
        newHeaders.set(
          "Permissions-Policy",
          "camera=(), microphone=(), geolocation=()"
        );

        return new Response(await responseClone.blob(), {
          status: responseClone.status,
          statusText: responseClone.statusText,
          headers: newHeaders,
        });
      } catch (err) {
        console.error("SW fetch failed:", err);
        return fetch(event.request);
      }
    })()
  );
});
