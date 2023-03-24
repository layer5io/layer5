import React from "react";
import { Container } from "../../../../reusecore/Layout";
import CollaboratorFeaturesWrapper from "./CollaboratorFeatures.style";
import CollaboratorFeaturesDiagram from "./CollaboratorFeatures_diagram";
import Feature from "../../features";
import { useState } from "react";
import useGsapTimeline from "../useGsapTimeline";
import { Link } from "gatsby";
import LinkArrow from "../../images/link-arrow.svg";
import LinkArrowDark from "../../images/link-arrow-dark.svg";

export default function CollaboratorFeatures({ features }) {
  const [activeExampleIndex, setActiveExampleIndex] = useState(0);
  const [viewportStatus, setViewportStatus] = useState(
    new Array(features.length).fill(false)
  );
  useGsapTimeline({ trigger: ".collaborator-trigger-container", featureContainerName: ".collaborator-features", yPercent: -300 });
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
    <CollaboratorFeaturesWrapper>
      <Container className="collaborate-container collaborator-trigger-container">
        <div className="root">
          <Link to="/cloud-native-management/meshmap/collaborate">
            <div id="featureHeading" className="fixed" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
              <h1>Collaborate</h1>
              <div className="learn-more">
                <h5 style={cursorOverArrow ? { color: "#ececec", opacity: "1", transition: "all 0.5s ease-in-out" } : { color: "#ececec", opacity: "0", transition: "all 0.5s" }}>Learn more</h5>
                <img src={cursorOverArrow ? LinkArrowDark : LinkArrow} alt="Learn more" style={{ maxWidth: "15%" }} className={cursorOverArrow ? "arrow-enter" : "arrow"} />
              </div>
            </div>
          </Link>
          <div className="g-grid-container contentContainer" id="add-border">
            <div className="diagram scroll hideInMobile">
              <CollaboratorFeaturesDiagram activeExampleIndex={activeExampleIndex} />
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
