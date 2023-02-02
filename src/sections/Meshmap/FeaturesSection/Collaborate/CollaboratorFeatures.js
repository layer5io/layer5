import React from "react";
import { Container } from "../../../../reusecore/Layout";
import CollaboratorFeaturesWrapper from "./CollaboratorFeatures.style";
import CollaboratorFeaturesDiagram from "./CollaboratorFeatures_diagram";
import Feature from "../../features";
import { useState } from "react";
import { useEffect } from "react";

export default function CollaboratorFeatures({ features }) {
  const [activeExampleIndex, setActiveExampleIndex] = useState(0);
  const [viewportStatus, setViewportStatus] = useState(
    new Array(features.length).fill(false)
  );

  const [fix, setFix] = useState(false);


  useEffect(() => {
    const setFixed = () => {
      if (window.scrollY >= 5220 && !fix)
        setFix(true);
      else
        setFix(false);
    };
    window.addEventListener("scroll", setFixed);
  }, []);

  return (
    <CollaboratorFeaturesWrapper>
      <Container>
        <div className="root">
          <div id = "featureHeading" className={fix ? "fixed" : ""} >
            <h3 className={fix ? "fixed" : ""} >Collaborate</h3>
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
              <CollaboratorFeaturesDiagram activeExampleIndex={activeExampleIndex} />
            </div>
          </div>
        </div>
      </Container>
    </CollaboratorFeaturesWrapper>
  );
}
