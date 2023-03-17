import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import L404 from "../sections/404";
import Footer from "../sections/General/Footer";
const NotFoundPage = () => {
  return (
    <Layout>
      <L404 />
      <Footer />
    </Layout>
  );
};
export const Head = () => {
  return <SEO title="What a mesh!" />;
};
export default NotFoundPage;
