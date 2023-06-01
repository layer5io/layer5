import React from "react";

import SEO from "../components/seo";
import L404 from "../sections/404";
import Footer from "../sections/General/Footer";

const NotFoundPage = ({ location }) => {
  return (
    <>
      <L404 />
      <Footer location={location} />

    </>
  );
};
export const Head = () => {
  return <SEO title="What a mesh!" />;
};
export default NotFoundPage;
