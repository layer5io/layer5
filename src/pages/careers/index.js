import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/Navigation";
import Footer from "../../sections/Footer";
import Careers from "../../sections/Careers";

const careers = () => (
    <Layout>
        <SEO title="Careers" />
        <Navigation />
        <Careers />
        <Footer />
    </Layout>
);

export default careers;
