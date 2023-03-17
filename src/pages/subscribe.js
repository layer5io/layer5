import React from "react";
import SEO from "../components/seo";
import Footer from "../sections/General/Footer";
import Layout from "../components/layout";
import ContactSubscribeSection from "../components/ContactCard";
const SubscribeSection = () => {
  return (
    <Layout>
      <ContactSubscribeSection />
      <Footer />
    </Layout>
  );
};
export default SubscribeSection;
export const Head = () => {
  return <SEO title="Service Mesh Newsletter" description="The Service Mesh Newsletter" />;
};