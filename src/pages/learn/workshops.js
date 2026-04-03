import React from "react";

import SEO from "../../components/seo";
import WorkshopsPage from "../../sections/Learn/Workshop-grid";

const WorkshopsGridPage = () => {
  return (
    <>
      <WorkshopsPage />

    </>
  );
};
export default WorkshopsGridPage;
export const Head = () => {
  return <SEO title="Workshops" description="Hands-on tutorials and deep dives into Meshery UI, Server, CLI, documentation, and end-to-end testing." />;

};