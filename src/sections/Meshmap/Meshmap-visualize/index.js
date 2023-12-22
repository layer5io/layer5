import React from "react";
import MeshmapVisualizeWrapper from "./meshmap-visualize.style";
import MeshmapVisualizeBanner from "./meshmap-visualize-banner";
import MeshmapVisualizerFeatures from "./meshmap-visualize-features";
import MeshmapVisualizerViews from "./meshmap-visualize-views";
import BackgroundImage from "./images/oval-blur-shape.svg";
import SignupForm from "../signup-form";
import { useRef } from "react";
import ReviewsSlider from "../../../components/ReviewsSlider";

const MeshmapVisualize = () => {
  const targetRef = useRef(null);
  return (
    <MeshmapVisualizeWrapper>
      <div className="background-image">
        <img src={BackgroundImage} alt="" />
      </div>
      <MeshmapVisualizeBanner targetRef={targetRef} />
      <MeshmapVisualizerFeatures />
      <MeshmapVisualizerViews />
      {/* <MeshmapHeroSection /> */}
      {/* <DesignDefault /> */}
      <SignupForm targetRef={targetRef} />
      <ReviewsSlider />
    </MeshmapVisualizeWrapper>
  );
};

export default MeshmapVisualize;
