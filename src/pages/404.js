import React from "react";

import SEO from "../components/seo";
import L404 from "../sections/404";

const NotFoundPage = () => {
  return (
    <>
      <L404 />

    </>
  );
};
export const Head = () => {
  return <SEO title="What a mesh!" />;
};
export default NotFoundPage;
