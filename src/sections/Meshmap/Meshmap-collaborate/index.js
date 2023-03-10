import React from "react";
import MeshmapDesignWrapper from "./meshmap-design.style";
import MeshmapCollaborateBanner from "./meshmap-collaborate-banner";
import CollaborationFeature1 from "./collaboration-feature-1";
import CollaborationFeature3 from "./collaboration-feature-3";
import DesignDefault from "../../Home/MeshmapDesignHighlight";
import MeshmapSignupForm from "./../meshmap-signup-form";
import Reviews from "../../Pricing/review-slider";

const MeshmapDesign = ({ theme }) => {
  return (
    <MeshmapDesignWrapper>
      <MeshmapCollaborateBanner />
      <CollaborationFeature1 />
      <DesignDefault />
      <CollaborationFeature3/>
      <MeshmapSignupForm />
      <Reviews />
    </MeshmapDesignWrapper>
  );
};

export default MeshmapDesign;
