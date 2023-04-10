import React from "react";

import SEO from "../components/seo";

import WebBasedForm from "../sections/Community/Web-based-from";
const NewcomersPage = () => {
  return (
    <>
      <WebBasedForm />

    </>
  );
};
export default NewcomersPage;
export const Head = () => {
  return  <SEO title="Layer5 Community Member Form" description="New member form for Layer5 community members: contributors, users and visitors" image="/images/layer5-community-sign.png" />;
};