import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import LandscapeGrid from "../../sections/Landscape-grid";
import Navigation from "../../sections/Navigation";
import Footer from "../../sections/Footer";

const LandscapeGridPage = () => (
    <Layout>
        <SEO title="Landscape" />
        <Navigation />
        <LandscapeGrid />
        <Footer />
    </Layout>
);
export default LandscapeGridPage;
