import React from "react";
import MeshmapCollaborateWrapper from "./meshmap-collaborate.style";
import MeshmapCollaborateBanner from "./meshmap-collaborate-banner";
import CollaborationFeature1 from "./collaboration-feature-team";
import CollaborationFeature3 from "./collaboration-feature-work";
import DesignDefault from "../../Home/MeshmapDesignHighlight";
import MeshmapSignupForm from "./../meshmap-signup-form";
import Reviews from "../../Pricing/review-slider";

const MeshmapDesign = ({ theme }) => {
  return (
    <MeshmapCollaborateWrapper>
      <MeshmapCollaborateBanner theme={theme} />
      <CollaborationFeature1 />
      <CollaborationFeature3 />
      <MeshmapSignupForm />
      <Reviews />
    </MeshmapCollaborateWrapper>
  );
};

export default MeshmapDesign;
