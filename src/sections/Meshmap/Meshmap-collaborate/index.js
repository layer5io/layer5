import React from "react";
import MeshmapDesignWrapper from "./meshmap-design.style";
import MeshmapDesignBanner from "./meshmap-design-banner";
import CollaborationFeature1 from "./collaboration-feature-1";
import CollaborationFeature3 from "./collaboration-feature-3";
import DesignDefault from "../../Home/MeshmapDesignHighlight";
import MeshmapDesignFeatures from "./Meshmap-design-features";
import MeshmapSignupForm from "./../meshmap-signup-form";
import Reviews from "../../Pricing/review-slider";

const MeshmapDesign = ({ theme }) => {
  return (
    <MeshmapDesignWrapper>
      <MeshmapDesignBanner />
      <CollaborationFeature1 />
      <DesignDefault />
      <CollaborationFeature3/>
      <MeshmapSignupForm />
      {/* <Reviews /> */}
    </MeshmapDesignWrapper>
  );
};

export default MeshmapDesign;
