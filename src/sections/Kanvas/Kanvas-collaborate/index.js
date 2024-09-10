import React from "react";
import KanvasCollaborateWrapper from "./kanvas-collaborate.style";
import KanvasCollaborateBanner from "./kanvas-collaborate-banner";
import CollaborationFeatureTeam from "./collaboration-feature-team";
import CollaborationFeatureWork from "./collaboration-feature-work";

import SignupForm from "./../signup-form";
import Reviews from "../../Pricing/review-slider";


const KanvasCollaborate = () => {
  return (
    <KanvasCollaborateWrapper>
      <KanvasCollaborateBanner />
      <CollaborationFeatureTeam />
      {/* <CollaborationFeatureCreate/> */}
      <CollaborationFeatureWork />
      <SignupForm />
      <Reviews />
    </KanvasCollaborateWrapper>
  );
};

export default KanvasCollaborate;
