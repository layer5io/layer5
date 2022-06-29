import React from "react";
import { Container } from "../../../reusecore/Layout";
import HowitworksWrapper from "./howitworks.style";
import HowMesheryWorksDiagram from "./diagram";
import Feature from "./feature";
import { useState } from "react";

export default function HowItWorks({ title, description, features }) {
  const [activeExampleIndex, setActiveExampleIndex] = useState(0);
  const [viewportStatus, setViewportStatus] = useState(
    new Array(features.length).fill(false)
  );

  return (
    <HowitworksWrapper>
      <Container>
        <div className="root">
          <div className="g-grid-container headerWrapper">
            <h2 className="g-type-display-2">{title}</h2>
            <p className="g-type-body-large">{description}</p>
          </div>
          <div className="g-grid-container contentContainer">
            <div className="diagram scroll">
              <HowMesheryWorksDiagram activeExampleIndex={activeExampleIndex} />
            </div>
            <ul className="features">
              {features.map((feature, index) => (
                <li key={index}>
                  <Feature
                    {...feature}
                    onInViewStatusChanged={(state) => {
                      const newStatusArray = [...viewportStatus];
                      newStatusArray[index] = state;
                      setViewportStatus(newStatusArray);
                      // Calculate the first element in focus, set that as
                      // our new activeExampleIndex. If it's been updated
                      // notify the subscriber.
                      const newExampleIndex = newStatusArray.lastIndexOf(true);
                      if ( activeExampleIndex !== newExampleIndex && newExampleIndex !== -1) {
                        setActiveExampleIndex(newExampleIndex);
                      }
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </HowitworksWrapper>
  );
}
