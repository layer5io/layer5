import React from "react";
import { Container } from "../../../../reusecore/Layout";
import CollaboratorFeaturesWrapper from "./CollaboratorFeatures.style";
import CollaboratorFeaturesDiagram from "./CollaboratorFeatures_diagram";
import Feature from "../../features";
import { useState } from "react";
import useGsapTimeline from "../useGsapTimeline";

export default function CollaboratorFeatures({ features, theme }) {
  const [activeExampleIndex, setActiveExampleIndex] = useState(0);
  const [viewportStatus, setViewportStatus] = useState(
    new Array(features.length).fill(false)
  );
  useGsapTimeline({ trigger: ".collaborator-trigger-container",featureContainerName: ".collaborator-features", yPercent: -300 });

  return (
    <CollaboratorFeaturesWrapper>
      <Container className="collaborate-container collaborator-trigger-container">
        <div className="root">
          <div id="featureHeading" className="fixed">
            <h1>Collaborate</h1>
          </div>
          <div className="g-grid-container contentContainer" id="add-border">
            <div className="diagram scroll hideInMobile">
              <CollaboratorFeaturesDiagram activeExampleIndex={activeExampleIndex} theme={theme} />
            </div>
            <ul className="features collaborator-features">
              {features.map((feature, index) => (
                <li className="collaborator-feature-slide" key={index}>
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
    </CollaboratorFeaturesWrapper>
  );
}
