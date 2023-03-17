import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Footer from "../../sections/General/Footer";
import CareersSection from "../../sections/Careers";
const Careers = () => {
  return (
    <Layout>
      <CareersSection  />
      <Footer />
    </Layout>
  );
};
export default Careers;
export const Head = () => {
  return <SEO title="Careers" description="Careers at Layer5. Come work with the  the award-winning, Layer5 open source community and projects." />;
};