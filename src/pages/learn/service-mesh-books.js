import React from "react";

import SEO from "../../components/seo";
import BooksPage from "../../sections/Learn/Books-grid";
import LearnServiceMeshCTA from "../../sections/Learn/Learn-Service-Mesh-CTA";

const BooksGridPage = ({ hide_path }) => {
  return (
    <>
      <BooksPage hide_path={hide_path} />
      <LearnServiceMeshCTA />

    </>
  );
};
export default BooksGridPage;
export const Head = () => {
  return  <SEO title="Kubernetes Books" description="Learn Kubernetes and hundreds of other DevOps tools." />;
};