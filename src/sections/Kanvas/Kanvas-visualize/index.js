import React from "react";
import KanvasVisualizeWrapper from "./kanvas-visualize.style";
import KanvasVisualizeBanner from "./kanvas-visualize-banner";
import KanvasVisualizerFeatures from "./kanvas-visualize-features";
import KanvasVisualizerViews from "./kanvas-visualize-views";
import BackgroundImage from "./images/oval-blur-shape.svg";
import Reviews from "../../Pricing/review-slider";

const KanvasVisualize = () => {
  return (
    <KanvasVisualizeWrapper>
      <div className="background-image">
        <img src={BackgroundImage} alt="" />
      </div>
      <KanvasVisualizeBanner />
      <KanvasVisualizerFeatures />
      <KanvasVisualizerViews />
      {/* <KanvasHeroSection /> */}
      {/* <DesignDefault /> */}
      <Reviews />
    </KanvasVisualizeWrapper>
  );
};

export default KanvasVisualize;
