import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/Navigation";
import MesheryPage from "../../sections/Meshery";
import Footer from "../../sections/Footer";

const Meshery = () => (
    <Layout>
        <SEO title="Meshery" />
        <Navigation />
        <MesheryPage />
        <Footer />
    </Layout>
);
export default Meshery;
