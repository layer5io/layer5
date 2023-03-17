import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Footer from "../../sections/General/Footer";
import InternshipPage from "../../sections/Careers/Careers-Internship-grid";
const Internships = () => {
  return (
    <Layout>
      <InternshipPage />
      <Footer />
    </Layout>
  );
};
export default Internships;
export const Head = () => {
  return  <SEO title="Internship, Part-time, and Full-time Opportunities with Layer5" description="Engage, Learn, Share. Join the award-winning, Layer5 open source community and projects." />;
};
