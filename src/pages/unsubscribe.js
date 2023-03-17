import React from "react";
import SEO from "../components/seo";
import Footer from "../sections/General/Footer";
import Layout from "../components/layout";
import ContactUnSubscribeSection from "../components/ContactCard-unsubscribe";
const UnSubscribeSection = () => {
  return (
    <Layout>
      <ContactUnSubscribeSection />
      <Footer />
    </Layout>
  );
};
export default UnSubscribeSection;
export const Head = () => {
  return <SEO title="Layer5 Newsletter" description="Layer5 Newsletter" />;
};