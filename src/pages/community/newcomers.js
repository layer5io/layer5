import React from "react";
import SEO from "../../components/seo";
import Footer from "../../sections/General/Footer";
import Layout from "../../components/layout";
import NewcomersGuide from "../../sections/Community/Newcomers-guide";
const NewComers = () => {
  return (
    <Layout>
      <NewcomersGuide />
      <Footer />
    </Layout>
  );
};
export default NewComers;
export const Head = () => {
  return <SEO title="Newcomers" description="Contributions from Newcomers are actively encouraged in Layer5. Find a Meshmate and start contributing!" />;
};