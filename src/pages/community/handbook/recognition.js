import React from "react";

import SEO from "../../../components/seo";
import RecognitionPage from "../../../sections/Community/Handbook/recognition";
import Footer from "../../../sections/General/Footer";

const Recognition = ({ location }) => {
  return (
    <>
      <RecognitionPage  />
      <Footer location={location} />

    </>
  );
};
export default Recognition;
export const Head = () => {
  return <SEO title="Recognizing and Appreciating Open Source Community Members" description="Layer5 readily recognizes and publicly appreciates its community members." />;
};