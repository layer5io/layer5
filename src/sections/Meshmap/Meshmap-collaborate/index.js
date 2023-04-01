import React from "react";
import MeshmapCollaborateWrapper from "./meshmap-collaborate.style";
import MeshmapCollaborateBanner from "./meshmap-collaborate-banner";
import CollaborationFeatureTeam from "./collaboration-feature-team";
import CollaborationFeatureWork from "./collaboration-feature-work";
import DesignDefault from "../../Home/MeshmapDesignHighlight";
import SignupForm from "./../signup-form";
import Reviews from "../../Pricing/review-slider";

const MeshmapDesign = () => {
  return (
    <MeshmapCollaborateWrapper>
      <MeshmapCollaborateBanner />
      <CollaborationFeatureTeam />
      <CollaborationFeatureWork />
      <SignupForm />
      <Reviews />
    </MeshmapCollaborateWrapper>
  );
};

export default MeshmapDesign;
