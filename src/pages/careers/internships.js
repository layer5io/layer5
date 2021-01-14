import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/Navigation";
import Footer from "../../sections/Footer";
import InternshipPage from "../../sections/Internship-gird";

const Internships = () => (
    <Layout>
        <SEO title="Internships" />
        <Navigation />
        <InternshipPage />
        <Footer />
    </Layout>
);

export default Internships;
