import React from "react";

import SEO from "../../../components/seo";
import ContributingPage from "../../../sections/Community/Handbook/contributing";
import Footer from "../../../sections/General/Footer";

const Contributing = ({ location }) => {
  return (
    <>
      <ContributingPage />
      <Footer location={location} />

    </>
  );
};
export default Contributing;
export const Head = () => {
  return <SEO title="Contribution" description="A detailed contribution guide." />;
};