import React from "react";
import { Container } from "../../reusecore/Layout";
import MeshmapFeaturesWrapper from "./meshmap_features.style";
import FeaturesDiagram from "./diagram/features_diagram";
import Feature from "./features";
import { useState } from "react";

export default function MeshmapFeatures({ title, description, features }) {
  const [activeExampleIndex, setActiveExampleIndex] = useState(0);
  const [viewportStatus, setViewportStatus] = useState(
    new Array(features.length).fill(false)
  );

  return (
    <MeshmapFeaturesWrapper>
      <Container>
        <div className="root">
          <div className="g-grid-container headerWrapper">
            <h2 className="g-type-display-2">{title}</h2>
            {/* <p className="g-type-body-large">{description}</p> */}
          </div>
          <div className="g-grid-container contentContainer">

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
            <div className="diagram scroll">
              <FeaturesDiagram activeExampleIndex={activeExampleIndex} />
            </div>
          </div>
        </div>
      </Container>
    </MeshmapFeaturesWrapper>
  );
}
