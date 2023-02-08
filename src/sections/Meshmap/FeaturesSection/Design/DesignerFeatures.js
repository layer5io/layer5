import React from "react";
import { Container } from "../../../../reusecore/Layout";
import DesignerFeaturesWrapper from "./DesignerFeatures.style";
import DesignerFeaturesDiagram from "./DesignerFeatures_diagram";
import Feature from "../../features";
import { useRef, useState, useEffect } from "react";

export default function DesignerFeatures({ title, features }) {
  const [activeExampleIndex, setActiveExampleIndex] = useState(0);
  const [viewportStatus, setViewportStatus] = useState(
    new Array(features.length).fill(false)
  );

  const headingRef = useRef();
  const [fix, setFix] = useState(false);

  useEffect(() => {
    const setFixed = () => {
      if (headingRef.current.getBoundingClientRect().top <= 98 && !fix)
        setFix(true);
      else
        setFix(false);
    };
    window.addEventListener("scroll", setFixed);
  }, []);

  return (
    <DesignerFeaturesWrapper>
      <Container>
        <div className="root">
          <div id="featureHeading" ref={headingRef} className={fix ? "fixed" : ""} >
            <h2>Design</h2>
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
                      if (activeExampleIndex !== newExampleIndex && newExampleIndex !== -1) {
                        setActiveExampleIndex(newExampleIndex);
                      }
                    }}
                  />
                </li>
              ))}
            </ul>
            <div className="diagram scroll">
              <DesignerFeaturesDiagram activeExampleIndex={activeExampleIndex} />
            </div>
          </div>
        </div>
      </Container>
    </DesignerFeaturesWrapper>
  );
}
