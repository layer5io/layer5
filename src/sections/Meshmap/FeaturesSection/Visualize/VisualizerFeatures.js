import React from "react";
import { Container } from "../../../../reusecore/Layout";
import VisualizerFeaturesWrapper from "./VisualizerFeatures.style";
import VisualizerFeaturesDiagram from "./VisualizerFeatures_diagram";
import Feature from "../../features";
import { useRef, useState, useEffect } from "react";


export default function VisualizerFeatures({ features }) {
  const [activeExampleIndex, setActiveExampleIndex] = useState(0);
  const [viewportStatus, setViewportStatus] = useState(
    new Array(features.length).fill(false)
  );

  const [fix, setFix] = useState(false);
  // const visRef = useRef();


  // useEffect(() => {
  //   const getPos = () => {
  //     const pos = visRef.current.getBoundingClientRect().top;
  //     console.log(pos);
  //     // if(pos < 80)
  //     // setFix(true);
  //     // else
  //     // setFix(false);
  //   };
  //   window.addEventListener("scroll", getPos);
  // }, []);



  useEffect(() => {
    const setFixed = () => {
      if (window.scrollY >= 3320 && !fix)
        setFix(true);
      else
        setFix(false);
    };
    window.addEventListener("scroll", setFixed);
  }, []);


  return (
    <VisualizerFeaturesWrapper>
      <Container>
        <div className="root">
          <div id = "featureHeading" className={fix ? "fixed" : ""} >
            <h3 className={fix ? "fixed" : ""} >Visualize</h3>
          </div>
          <div className="g-grid-container contentContainer">
          <div className="diagram scroll">
              <VisualizerFeaturesDiagram activeExampleIndex={activeExampleIndex} />
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
    </VisualizerFeaturesWrapper>
  );
}
