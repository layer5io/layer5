import React from "react";
import MeshmapCollaborateWrapper from "./meshmap-collaborate.style";
import MeshmapCollaborateBanner from "./meshmap-collaborate-banner";
import CollaborationFeature1 from "./collaboration-feature-team";
import CollaborationFeature3 from "./collaboration-feature-work";
import DesignDefault from "../../Home/MeshmapDesignHighlight";
import SignupForm from "./../signup-form";
import Reviews from "../../Pricing/review-slider";

const MeshmapDesign = () => {
  return (
    <MeshmapCollaborateWrapper>
      <MeshmapCollaborateBanner  />
      <CollaborationFeature1 />
      <CollaborationFeature3 />
      <SignupForm />
      <Reviews />
    </MeshmapCollaborateWrapper>
  );
};

export default MeshmapDesign;
