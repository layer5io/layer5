import React from "react";

import SEO from "../components/seo";
import L404 from "../sections/404";
import Footer from "../sections/General/Footer";

const NotFoundPage = () => {
  return (
    <>
      <L404 />
      <Footer location={"/404"} />

    </>
  );
};
export const Head = () => {
  return <SEO title="What a mesh!" />;
};
export default NotFoundPage;
