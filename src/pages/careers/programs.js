import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/Navigation";
import Footer from "../../sections/Footer";
import ProgramsGrid from "../../sections/Programs-grid";

const programs = () => (
    <Layout>
        <SEO title="Programs" />
        <Navigation />
        <ProgramsGrid />
        <Footer />
    </Layout>
);

export default programs;
