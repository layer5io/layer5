import React from "react";
import { Container } from "../../../../reusecore/Layout";
import VisualizerFeaturesWrapper from "./VisualizerFeatures.style";
import VisualizerFeaturesDiagram from "./VisualizerFeatures_diagram";
import Feature from "../../features";
import {  useState } from "react";
import useGsapTimeline from "../useGsapTimeline";

export default function VisualizerFeatures({ features, theme }) {
  const [activeExampleIndex, setActiveExampleIndex] = useState(0);
  const [viewportStatus, setViewportStatus] = useState(
    new Array(features.length).fill(false)
  );

  useGsapTimeline({ trigger: ".test-container2",featureContainerName: ".visualizer-features",yPercent: -400 });

  return (
    <VisualizerFeaturesWrapper>
      <Container className="visualizer-container">
        <div className="root test-container2">
          <div id="featureHeading" className="fixed">
            <h1>Visualize</h1>
          </div>
          <div className="g-grid-container contentContainer" id="add-border">
            <div className="diagram scroll">
              <VisualizerFeaturesDiagram activeExampleIndex={activeExampleIndex} theme={theme} />
            </div>
            <ul className="features visualizer-features">
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
    </VisualizerFeaturesWrapper>
  );
}
