import React from "react";
import { Container } from "../../../../reusecore/Layout";
import CollaboratorFeaturesWrapper from "./CollaboratorFeatures.style";
import CollaboratorFeaturesDiagram from "./CollaboratorFeatures_diagram";
import Feature from "../../features";
import { useRef, useState, useEffect } from "react";

export default function CollaboratorFeatures({ title, features }) {
  const [activeExampleIndex, setActiveExampleIndex] = useState(0);
  const [viewportStatus, setViewportStatus] = useState(
    new Array(features.length).fill(false)
  );

  // const headingRef = useRef();
  // const [fix, setFix] = useState(false);

  // useEffect(() => {
  //   const setFixed = () => {
  //     if (headingRef.current.getBoundingClientRect().top <= 98 && !fix)
  //       setFix(true);
  //     else
  //       setFix(false);
  //   };
  //   window.addEventListener("scroll", setFixed);
  // }, []);

  return (
    <CollaboratorFeaturesWrapper>
      <Container className="collaborate-container">
        <div className="root">
          <div className="g-grid-container headerWrapper">
            <h2 className="g-type-display-2">{title}</h2>
          </div>
          <div id="featureHeading" className="fixed">
            <h1>Collaborate</h1>
          </div>
          <div className="g-grid-container contentContainer" id="add-border">
            <div className="diagram scroll">
              <CollaboratorFeaturesDiagram activeExampleIndex={activeExampleIndex} />
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
    </CollaboratorFeaturesWrapper>
  );
}
