import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import FAQ from "../../sections/General/Faq";
import Footer from "../../sections/General/Footer";
import DiscussCallout from "../../sections/Discuss-Callout";
const FAQPage = () => {
  return (
    <Layout>
      <FAQ category={["all"]} />
      <DiscussCallout />
      <Footer />
    </Layout>
  );
};
export default FAQPage;
export const Head = () => {
  return <SEO title="FAQs" description="Frequently Asked Questions" />;
};