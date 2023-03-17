import React from "react";
import SEO from "../components/seo";
import Footer from "../sections/General/Footer";
import Layout from "../components/layout";
import Unsubscribed from "../sections/unsubscribed/unsubscribed";
const UnsubscribedSection = () => {
  return (
    <Layout>
      <SEO title="Cloud Native Newsletter" description="The Layer5 Newsletter" />
      <Unsubscribed />
      <Footer />
    </Layout>
  );
};
export default UnsubscribedSection;
