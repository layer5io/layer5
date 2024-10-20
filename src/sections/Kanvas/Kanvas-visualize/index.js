import React from "react";
import KanvasVisualizeWrapper from "./kanvas-visualize.style";
import KanvasVisualizeBanner from "./kanvas-visualize-banner";
import KanvasVisualizerFeatures from "./kanvas-visualize-features";
import KanvasVisualizerViews from "./kanvas-visualize-views";
import BackgroundImage from "./images/oval-blur-shape.svg";
import SignupForm from "../signup-form";
import Reviews from "../../Pricing/review-slider";
import { useRef } from "react";

const KanvasVisualize = () => {
  const targetRef = useRef(null);
  return (
    <KanvasVisualizeWrapper>
      <div className="background-image">
        <img src={BackgroundImage} alt="" />
      </div>
      <KanvasVisualizeBanner targetRef={targetRef} />
      <KanvasVisualizerFeatures />
      <KanvasVisualizerViews />
      {/* <KanvasHeroSection /> */}
      {/* <DesignDefault /> */}
      <SignupForm targetRef={targetRef} />
      <Reviews />
    </KanvasVisualizeWrapper>
  );
};

export default KanvasVisualize;
