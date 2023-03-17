import React from "react";
import SEO from "../components/seo";
import Partner from "../sections/Partners";
import Footer from "../sections/General/Footer";
import Layout from "../components/layout";
const Partners = () => {
  return (
    <Layout>
      <Partner  />
      <Footer />
    </Layout>
  );
};
export default Partners;
export const Head = () => {
  return <SEO title="Partners" description="Partner Program" />;
};