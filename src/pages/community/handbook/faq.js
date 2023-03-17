import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Faqs from "../../../sections/Community/Handbook/faq";
import Footer from "../../../sections/General/Footer";
const Faq = () => {
  return (
    <Layout>
      <Faqs />
      <Footer />
    </Layout>
  );
};
export default Faq;
export const Head = () => {
  return <SEO title="FAQ" description="Frequently Asked Questions" />;
};