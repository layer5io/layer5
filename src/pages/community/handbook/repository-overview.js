import React from "react";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import RepoPage from "../../../sections/Community/Handbook/repository";
import Footer from "../../../sections/General/Footer";
const CommunityRepository = () => {
  return (
    <Layout>
      <RepoPage />
      <Footer />
    </Layout>
  );
};
export default CommunityRepository;
export const Head = () => {
  return <SEO title="Repository Overview" description="A brief introduction to all of the Github repositories of Layer5 organization." />;
};