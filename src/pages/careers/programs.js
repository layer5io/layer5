import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Footer from "../../sections/General/Footer";
import FAQ from "../../sections/General/Faq";
import ProgramsGrid from "../../sections/Careers/Careers-Programs-grid";
const CareerPrograms = () => {
  return (
    <Layout>
      <ProgramsGrid  />
      <FAQ category={["internships"]} />
      <Footer />
    </Layout>
  );
};
export default CareerPrograms;
export const Head = () => {
  return <SEO title="Open Source Internship Programs" description="Engage, Learn, Share. Join the award-winning, Layer5 open source community and projects." />;
};