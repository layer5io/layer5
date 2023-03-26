import React from "react";
import MeshmapVisualizeWrapper from "./meshmap-visualize.style";
import MeshmapVisualizeBanner from "./meshmap-visualize-banner";
import MeshmapVisualizerFeatures from "./meshmap-visualize-features";
import MeshmapVisualizerViews from "./meshmap-visualize-views";
import MeshmapHeroSection from "./meshmap-visualize-features";
import DesignDefault from "../../Home/MeshmapDesignHighlight";
import BackgroundImage from "./images/oval-blur-shape.svg";
import SignupForm from "../signup-form";
import Reviews from "../../Pricing/review-slider";
import { useRef } from "react";

const MeshmapDesign = ({ theme }) => {
  const targetRef = useRef(null);
  return (
    <MeshmapVisualizeWrapper>
      <div className="background-image">
        <img src={BackgroundImage} alt="" />
      </div>
      <MeshmapVisualizeBanner theme={theme} targetRef={targetRef} />
      <MeshmapVisualizerFeatures theme={theme} />
      <MeshmapVisualizerViews theme={theme} />
      {/* <MeshmapHeroSection theme={theme} /> */}
      {/* <DesignDefault theme={theme} /> */}
      <SignupForm targetRef={targetRef} />
      <Reviews />
    </MeshmapVisualizeWrapper>
  );
};

export default MeshmapDesign;
