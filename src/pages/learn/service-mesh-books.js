import React from "react";

import SEO from "../../components/seo";
import BooksPage from "../../sections/Learn/Books-grid";
import LearnServiceMeshCTA from "../../sections/Learn/Learn-Service-Mesh-CTA";
import Footer from "../../sections/General/Footer";

const BooksGridPage = ({ hide_path, location }) => {
  return (
    <>
      <BooksPage hide_path={hide_path} />
      <LearnServiceMeshCTA />
      <Footer location={location} />
    </>
  );
};
export default BooksGridPage;
export const Head = () => {
  return (
    <SEO
      title="Service Mesh Books"
      description="Learn how to service mesh with books written by Layer5 authors.
  Layer5 is the makers of Meshery and service mesh standards.
  We are the largest collection of service mesh projects and their maintainers in the world."
    />
  );
};
