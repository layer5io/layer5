import React, { useState, useEffect } from "react";

const MesheryDesignEmbedWrapper = (props) => {
  const [MesheryDesignEmbed, setMesheryDesignEmbed] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined") {
      import("@layer5/meshery-design-embed")
        .then((module) => {
          setMesheryDesignEmbed(() => module.default);
        })
        .catch((error) => {
          console.error("Failed to load MesheryDesignEmbed:", error);
        });
    }
  }, []);

  if (!isClient || !MesheryDesignEmbed) {
    return <div>Loading Meshery Design...</div>;
  }

  return <MesheryDesignEmbed {...props} />;
};

export default MesheryDesignEmbedWrapper;