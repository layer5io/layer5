import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import HandbookPage from "../../../sections/Community/Handbook/index";
import Footer from "../../../sections/General/Footer";
const Handbook = () => {
  return (
    <Layout>
      <HandbookPage />
      <Footer />
    </Layout>
  );
};
export default Handbook;
export const Head = () => {
  return <SEO title="Community Handbook" description="The purpose of the handbook is to provide an overview of the Layer5 community" />;
};