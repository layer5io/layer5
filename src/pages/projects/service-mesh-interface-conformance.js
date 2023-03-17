import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import SMIPage from "../../sections/Projects/SMI";
import Footer from "../../sections/General/Footer";
const SMI = () => {
  return (
    <Layout>
      <SMIPage />
      <Footer />
    </Layout>
  );
};
export default SMI;
export const Head = () => {
  return  <SEO title="Service Mesh Interface (SMI)"
    description="Layer5 is the maker of Meshery and Service Mesh Performance (SMP) and maintainers of Service Mesh Interface (SMI).
            We are the largest collection of cloud native projects and their maintainers in the world.
            Contact Layer5 for help with operating a service mesh."
    image="/images/servicemeshinterface-icon-color.png" />;
};