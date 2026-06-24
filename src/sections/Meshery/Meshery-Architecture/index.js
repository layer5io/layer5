import React from "react";
import MesheryDesignEmbed from "@layer5/meshery-design-embed";
import MesheryArchitectureWrapper from "./meshery-architecture.style";

const MesheryArchitecture = () => {
  return (
    <MesheryArchitectureWrapper>
      {/* Section header */}
      <div className="arch-header">
        <p className="arch-eyebrow">Under the Hood</p>
        <h2>Meshery Architecture</h2>
        <p>
          An extensible platform built on a microservices foundation — see how
          every component connects, communicates, and collaborates.
        </p>
      </div>

      {/* Embed container */}
      <div className="arch-card">
        <MesheryDesignEmbed
          embedId="PLACEHOLDER-EMBED-ID"
          embedScriptSrc="PLACEHOLDER-SCRIPT-SRC.js"
        />
      </div>
    </MesheryArchitectureWrapper>
  );
};

export default MesheryArchitecture;
