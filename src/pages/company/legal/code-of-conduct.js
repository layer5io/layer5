import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Footer from "../../../sections/General/Footer";
import Conduct from "../../../sections/Company/Legal/code-of-conduct";
const CodeOfConduct = () => {
  return (
    <Layout>
      <Conduct />
      <Footer />
    </Layout>
  );
};
export default CodeOfConduct;
export const Head = () => {
  return <SEO title="Code of Conduct" description="Contact Layer5 for help with operating a service mesh.
  Layer5 is the makers of Meshery and service mesh standards.
  We are the largest collection of service mesh projects and their maintainers in the world." />;
};