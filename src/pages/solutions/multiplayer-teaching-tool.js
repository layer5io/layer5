import React from "react";

import SEO from "../../components/seo";
import MultiplayerTeachingPage from "../../sections/muliplayer-teaching-tool";

const MultiplayerTeaching = () => {
  return (
    <>
      <MultiplayerTeachingPage />

    </>
  );
};
export default MultiplayerTeaching;
export const Head = () => {
  return <SEO title="Multi-Player Cloud Native Teaching and Collaboration Platform"
    description="Empowering content creators, instructors, and trainers with a real-time, interactive environment for cloud native education."
    image="/images/meshery-logo-dark-text.webp" />;
};
