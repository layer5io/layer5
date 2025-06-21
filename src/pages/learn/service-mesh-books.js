import React from "react";

import SEO from "../../components/seo";
import BooksPage from "../../sections/Learn/Books-grid";
import KanvasCTA from "../../sections/Kanvas/kanvas-cta";

const BooksGridPage = ({ hide_path }) => {
  return (
    <>
      <BooksPage hide_path={hide_path} />
      <KanvasCTA />


    </>
  );
};
export default BooksGridPage;
export const Head = () => {
  return  <SEO title="Kubernetes Books" description="Learn Kubernetes and hundreds of other DevOps tools." />;
};