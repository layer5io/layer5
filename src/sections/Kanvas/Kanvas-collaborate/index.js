import React from "react";
import KanvasCollaborateWrapper from "./kanvas-collaborate.style";
import KanvasCollaborateBanner from "./kanvas-collaborate-banner";
import CollaborationFeatureTeam from "./collaboration-feature-team";
import CollaborationFeatureWork from "./collaboration-feature-work";

import Reviews from "../../Pricing/review-slider";


const KanvasCollaborate = () => {
  return (
    <KanvasCollaborateWrapper>
      <KanvasCollaborateBanner />
      <CollaborationFeatureTeam />
      {/* <CollaborationFeatureCreate/> */}
      <CollaborationFeatureWork />
      <Reviews />
    </KanvasCollaborateWrapper>
  );
};

export default KanvasCollaborate;
