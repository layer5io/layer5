import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/Navigation";
import FAQ from "../../sections/Faq";
import Footer from "../../sections/Footer";

const FAQPage = () => (
    <Layout>
        <SEO title="FAQs" />
        <Navigation />
        <FAQ />
        <Footer />
    </Layout>
);

export default FAQPage;
