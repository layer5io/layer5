self.addEventListener("fetch", (event) => {
    event.respondWith(
      (async () => {
        const response = await fetch(event.request);
        const newHeaders = new Headers(response.headers);
  
        // Inject custom headers
        newHeaders.set("X-Frame-Options", "DENY");
        
        return new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers: newHeaders,
        });
      })()
    );
  });
  