import React, { useState } from "react";
import { Container } from "../../../../reusecore/Layout";
import VisualizerFeaturesWrapper from "./VisualizerFeatures.style";
import VisualizerFeaturesDiagram from "./VisualizerFeatures_diagram";
import Feature from "../../features";
import { Link } from "gatsby";
import LinkArrow from "../../images/link-arrow.svg";
import LinkArrowDark from "../../images/link-arrow-dark.svg";
import useGsapTimeline from "../useGsapTimeline";


export default function VisualizerFeatures({ features }) {
  const [activeExampleIndex, setActiveExampleIndex] = useState(0);
  const [viewportStatus, setViewportStatus] = useState(
    new Array(features.length).fill(false)
  );

  useGsapTimeline({ trigger: ".visualizer-trigger-container", featureContainerName: ".visualizer-features", yPercent: -100 });

  const [cursorOverArrow, setcursorOverArrow] = useState(false);
  const handleEnter = () => {
    if (!cursorOverArrow)
      setcursorOverArrow(true);
  };
  const handleLeave = () => {
    if (cursorOverArrow)
      setcursorOverArrow(false);
  };
  return (
    <VisualizerFeaturesWrapper>
      <Container className="visualizer-trigger-container">
        <div className="root test-container2">
          <Link to="/cloud-native-management/meshmap/visualize">
            <div id="featureHeading" className="fixed" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
              <h1>Visualize</h1>
              <div className="learn-more">
                <h5 style={{ color: "#ececec" }}>Learn more</h5>
                <img src={cursorOverArrow ? LinkArrow : LinkArrowDark} alt="Learn more" style={{ maxWidth: "15%" }} className={cursorOverArrow ? "arrow-enter" : "arrow"} />
              </div>
            </div>
          </Link>
          <div className="g-grid-container contentContainer" id="add-border">
            <Link to="/cloud-native-management/meshmap/visualize">
              <div className="diagram scroll hideInMobile">
                <VisualizerFeaturesDiagram activeExampleIndex={activeExampleIndex} />
              </div>
            </Link>
            <ul className="visualizer-features">
              {features.map((feature, index) => (
                <li className="visualizer-feature-slide" key={index}>
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
