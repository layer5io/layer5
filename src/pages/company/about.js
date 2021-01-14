import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/Navigation";
import Footer from "../../sections/Footer";
import About from "../../sections/About";

const about = () => (
    <Layout>
        <SEO title="About" />
        <Navigation />
        <About />
        <Footer />
    </Layout>
);

export default about;
