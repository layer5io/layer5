import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/Navigation";
import Footer from "../../sections/Footer";
import Community from "../../sections/Community";

const community = () => (
    <Layout>
        <SEO title="Community" />
        <Navigation />
        <Community />
        <Footer />
    </Layout>
);

export default community;
