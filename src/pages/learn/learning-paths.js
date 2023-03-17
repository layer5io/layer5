import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import LearnPathsPage from "../../sections/Learn-Layer5";
import Footer from "../../sections/General/Footer";
const LearningPathsPage = () => {
  return (
    <Layout>
      <LearnPathsPage />
      <Footer />
    </Layout>
  );
};
export default LearningPathsPage;
export const Head = () => {
  return <SEO title="DevOps, GitOps, and Cloud Native Learning Paths"
    description="Learn to build an application using service meshes like Istio, Linkerd"
    image="/images/workshops.png" />;
};