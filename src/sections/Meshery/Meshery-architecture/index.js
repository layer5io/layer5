import React from "react";
import styled from "styled-components";
import MesheryDesignEmbed from "@layer5/meshery-design-embed";
import { Container } from "../../../reusecore/Layout";

const ArchitectureWrapper = styled.div`
  margin: 4rem 0;
  text-align: center;

  h2 {
    margin-bottom: 2rem;
    font-weight: 700;
  }

  .embed-container {
    width: 100%;
    height: 600px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
`;

const MesheryArchitecture = () => {
  return (
    <ArchitectureWrapper>
      <Container>
        <h2>Meshery Architecture</h2>
        <p>Interactive infrastructure design using Meshery Kanvas.</p>
        <div className="embed-container">
          <MesheryDesignEmbed
            embedId="embedded-design-e27d10c1-f9bd-43ce-8aff-07f55dbca142"
            embedScriptSrc="/embed-test/embedded-design-meshery.js"
          />
        </div>
      </Container>
    </ArchitectureWrapper>
  );
};

export default MesheryArchitecture;
