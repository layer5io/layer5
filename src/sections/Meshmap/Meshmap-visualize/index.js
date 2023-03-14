import React from "react";
import MeshmapVisualizeWrapper from "./meshmap-visualize.style";
import MeshmapVisualizeBanner from "./meshmap-visualize-banner";
import MeshmapVisualizerFeatures from "./meshmap-visualize-features";
import MeshmapHeroSection from "./meshmap-visualize-features";
import DesignDefault from "../../Home/MeshmapDesignHighlight";
import BackgroundImage from "./images/oval-blur-shape.svg";
import SignupForm from "../signup-form";
import Reviews from "../../Pricing/review-slider";

const MeshmapDesign = ({ theme }) => {
  return (
    <MeshmapVisualizeWrapper>
      <div className="background-image">
        <img src={BackgroundImage} alt="" />
      </div>
      <MeshmapVisualizeBanner theme={theme} />
      <MeshmapVisualizerFeatures theme={theme} />
      {/* <MeshmapHeroSection theme={theme} /> */}
      {/* <DesignDefault theme={theme} /> */}
      <SignupForm />
      <Reviews />
    </MeshmapVisualizeWrapper>
  );
};

export default MeshmapDesign;
