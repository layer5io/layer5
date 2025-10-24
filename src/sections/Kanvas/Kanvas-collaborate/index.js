import React from "react";
import KanvasCollaborateWrapper from "./kanvas-collaborate.style";
import KanvasCollaborateBanner from "./kanvas-collaborate-banner";
import CollaborationFeatureTeam from "./collaboration-feature-team";
import CollaborationFeatureWork from "./collaboration-feature-work";
import CollaborationFeatureShare from "./collaboration-feature-share";
import Reviews from "../../Pricing/review-slider";
import CollaborationFeatureReview from "./collaboration-feature-review";
import CollaborationFeatureTag from "./collaboration-feature-tags";

const KanvasCollaborate = () => {
  return (
    <KanvasCollaborateWrapper>
      <KanvasCollaborateBanner />
      <CollaborationFeatureTeam />
      <CollaborationFeatureShare />
      <CollaborationFeatureReview />
      <CollaborationFeatureTag/>
      {/* <CollaborationFeatureCreate/> */}
      <CollaborationFeatureWork />
      <Reviews />
    </KanvasCollaborateWrapper>
  );
};

export default KanvasCollaborate;
