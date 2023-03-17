import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Footer from "../sections/General/Footer";
import WebBasedForm from "../sections/Community/Web-based-from";
const NewcomersPage = () => {
  return (
    <Layout>
      <WebBasedForm />
      <Footer />
    </Layout>
  );
};
export default NewcomersPage;
export const Head = () => {
  return  <SEO title="Layer5 Community Member Form" description="New member form for Layer5 community members: contributors, users and visitors" image="/images/layer5-community-sign.png" />;
};