import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import ContributingPage from "../../../sections/Community/Handbook/contributing";
import Footer from "../../../sections/General/Footer";
const Contributing = () => {
  return (
    <Layout>
      <ContributingPage />
      <Footer />
    </Layout>
  );
};
export default Contributing;
export const Head = () => {
  return <SEO title="Contribution" description="A detailed contribution guide." />;
};