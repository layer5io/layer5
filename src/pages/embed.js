import * as React from "react";

const Testing = () => {
  const [MesheryDesignEmbed, setMesheryDesignEmbed] = React.useState(null);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      import("@layer5/meshery-design-embed").then((module) => {
        setMesheryDesignEmbed(() => module.default);
      });
    }
  }, []);

  return (
    <main>
      {MesheryDesignEmbed && (
        <MesheryDesignEmbed
          style={{ border: "1px solid #eee" }}
          embedId="embedded-design-6f2255ba-54bf-4cb8-9033-262b8464d5d2"
          embedScriptSrc="embed-test/embedded-design-embed1.js"
        />
      )}
    </main>
  );
};

export default Testing;
