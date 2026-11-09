import React from "react";

import SEO from "../../../components/seo";
import HandbookPage from "../../../sections/Community/Handbook/index";

const Handbook = () => {
  return (
    <>
      <HandbookPage />

    </>
  );
};
export default Handbook;
export const Head = () => {
  return <SEO title="Community Handbook" description="The purpose of the handbook is to provide an overview of the Layer5 community" />;
};