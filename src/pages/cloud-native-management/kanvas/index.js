import React from "react";

import SEO from "../../../components/seo";

import Kanvas from "../../../sections/Kanvas/index";
const KanvasPage = ({ location }) => {
  const params = new URLSearchParams(location.search);
  const parameter1 = params.get("teaser");
  return (
    <>
      <Kanvas teaser={parameter1 === "play"} />
    </>
  );
};
export default KanvasPage;
export const Head = () => {
  return <SEO title="Kanvas" description="Collaboratively design and manage your Kubernetes clusters, infrastructure components, and cloud native apps. Confidently configure your systems with Kanvas's visual topology and built-in design patterns." />;
};
