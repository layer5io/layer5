import React from "react";
import { Container } from "../../../../reusecore/Layout";
import DesignerFeaturesWrapper from "./DesignerFeatures.style";
import DesignerFeaturesDiagram from "./DesignerFeatures_diagram";
import Feature from "../../features";
// import { useInView } from "react-intersection-observer";
import { useRef, useState, useEffect } from "react";
// import useScrollBlock from "../useScrollBlock";

export default function DesignerFeatures({ title, features }) {
  const [activeExampleIndex, setActiveExampleIndex] = useState(0);
  const [viewportStatus, setViewportStatus] = useState(
    new Array(features.length).fill(false)
  );

  return (
    <DesignerFeaturesWrapper>
      <Container className="designer-container">
        <div className="root">
          <div id="featureHeading" className="fixed" >
            <h1>Design</h1>
          </div>
          <div className="g-grid-container contentContainer" id="add-border" >
            <div className="diagram scroll">
              <DesignerFeaturesDiagram activeExampleIndex={activeExampleIndex} />
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
                      if (activeExampleIndex !== newExampleIndex && newExampleIndex !== -1) {
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
    </DesignerFeaturesWrapper>
  );
}
