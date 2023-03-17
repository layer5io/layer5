import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import ImageHubPage from "../../sections/Projects/Image-Hub";
import Footer from "../../sections/General/Footer";
const ImageHub = () => {
  return (
    <Layout>
      <ImageHubPage />
      <Footer />
    </Layout>
  );
};
export default ImageHub;
export const Head = () => {
  return <SEO title="Image Hub"
    description="Image Hub is a sample application written to run on Consul for exploring WebAssembly modules used as Envoy filters."
    image="/images/layer5-image-hub.png" />;
};