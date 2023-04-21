import React from "react";

import SEO from "../../../components/seo";
import RecognitionPage from "../../../sections/Community/Handbook/recognition";

const Recognition = () => {
  return (
    <>
      <RecognitionPage  />

    </>
  );
};
export default Recognition;
export const Head = () => {
  return <SEO title="Recognizing and Appreciating Open Source Community Members" description="Layer5 readily recognizes and publicly appreciates its community members." />;
};