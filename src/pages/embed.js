import * as React from "react";

// Dynamically import the component to prevent SSR issues
const MesheryDesignEmbed = React.lazy(() =>
  import("@layer5/meshery-design-embed").then(module => ({ default: module.default }))
);

const Testing = () => {
  const [embedProps, setEmbedProps] = React.useState(null);

  React.useEffect(() => {
    // Only set the embed props on the client side
    if (typeof window !== "undefined") {
      setEmbedProps({
        style: { border: "1px solid #eee" },
        embedId: "embedded-design-6f2255ba-54bf-4cb8-9033-262b8464d5d2",
        embedScriptSrc: "embed-test/embedded-design-embed1.js"
      });
    }
  }, []);

  return (
    <main>
      {typeof window !== "undefined" && embedProps && (
        <React.Suspense fallback={<div>Loading...</div>}>
          <MesheryDesignEmbed {...embedProps} />
        </React.Suspense>
      )}
    </main>
  );
};

export default Testing;
