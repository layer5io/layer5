import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Nighthawk from "../../sections/Projects/Nighthawk";
import Footer from "../../sections/General/Footer";
import Subscribe from "../../sections/subscribe/subscribe";
const NighthawkPage = () => {
  return (
    <Layout>
      <Nighthawk  />
      <Subscribe />
      <Footer />
    </Layout>
  );
};
export default NighthawkPage;
export const Head = () => {
  return <SEO title="Nighthawk"
    description="Layer5 is the maker of Meshery,  Service Mesh Performance (SMP), Nighthawk and maintainers of Service Mesh Interface (SMI).
            We are the largest collection of cloud native projects and their maintainers in the world.
            Contact Layer5 for help with operating a service mesh."
  />;
};