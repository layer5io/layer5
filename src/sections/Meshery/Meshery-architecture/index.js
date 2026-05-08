import React from "react";
import styled from "styled-components";
import { Container } from "../../../reusecore/Layout";
import { ReactComponent as ArchitectureSVG } from "../images/meshery-architecture.svg";

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

    svg {
      width: 100%;
      height: auto;
      max-width: 900px;

      .st5,
      .st9,
      .st13,
      .st15,
      .st20,
      .st28,
      .st29 {
        stroke-dasharray: 8;
        animation: dash 2s linear infinite;
        opacity: 0.8;
      }

      @keyframes dash {
        to {
          stroke-dashoffset: -16;
        }
      }

      &:hover {
        .st5,
        .st9,
        .st13,
        .st15,
        .st20,
        .st28,
        .st29 {
          animation: dash 0.5s linear infinite;
          opacity: 1;
          stroke-width: 1.5;
        }
      }
    }
  }
`;

const MesheryArchitecture = () => {
  return (
    <ArchitectureWrapper>
      <Container>
        <h2 className="title">Meshery Architecture</h2>
        <div className="architecture-diagram">
          <ArchitectureSVG aria-label="Meshery Architecture Diagram" />
        </div>
      </Container>
    </ArchitectureWrapper>
  );
};

export default MesheryArchitecture;
