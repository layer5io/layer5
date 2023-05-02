import React from "react";
import MeshmapCollaborateWrapper from "./meshmap-collaborate.style";
import MeshmapCollaborateBanner from "./meshmap-collaborate-banner";
import CollaborationFeatureTeam from "./collaboration-feature-team";
import CollaborationFeatureWork from "./collaboration-feature-work";

import SignupForm from "./../signup-form";
import Reviews from "../../Pricing/review-slider";


const MeshmapCollaborate = () => {
  return (
    <MeshmapCollaborateWrapper>
      <MeshmapCollaborateBanner />
      <CollaborationFeatureTeam />
      {/* <CollaborationFeatureCreate/> */}
      <CollaborationFeatureWork />
      <SignupForm />
      <Reviews />
    </MeshmapCollaborateWrapper>
  );
};

export default MeshmapCollaborate;
