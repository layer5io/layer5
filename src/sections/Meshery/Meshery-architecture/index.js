import React from "react";
import styled from "styled-components";
import { Container } from "../../../reusecore/Layout";
import ArchitectureSVG from "../images/meshery-architecture.svg";

const ArchitectureWrapper = styled.div`
  padding: 4rem 0;
  text-align: center;

  .title {
    margin-bottom: 2rem;
  }

  .architecture-diagram {
    max-width: 100%;
    overflow-x: auto;
    display: flex;
    justify-content: center;

    object, img {
      width: 100%;
      height: auto;
      max-width: 900px;
    }
  }
`;

const MesheryArchitecture = () => {
  return (
    <ArchitectureWrapper>
      <Container>
        <h2 className="title">Meshery Architecture</h2>
        <div className="architecture-diagram">
          <object data={ArchitectureSVG} type="image/svg+xml" aria-label="Meshery Architecture Diagram" style={{ width: "100%", maxWidth: "900px" }}>
            <img src={ArchitectureSVG} alt="Meshery Architecture Diagram" style={{ width: "100%", maxWidth: "900px" }} />
          </object>
        </div>
      </Container>
    </ArchitectureWrapper>
  );
};

export default MesheryArchitecture;
