import React from "react";

import SEO from "../../../components/seo";
import Writers from "../../../sections/Community/Handbook/writing-program";
import Footer from "../../../sections/General/Footer";

const Faq = ({ location }) => {
  return (
    <>
      <Writers />
      <Footer location={location} />

    </>
  );
};
export default Faq;
export const Head = () => {
  return  <SEO title="Writing Program" description="Work with authors and technologists from around the world to share your knowledge of cloud native infrastructure, infrastructure as code, modern application management, Kubernetes, service meshes and related technologies." />;
};