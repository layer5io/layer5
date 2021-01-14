import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/Navigation";
import Footer from "../../sections/Footer";
import Brand from "../../sections/Brand";

const BrandPage = () => (
    <Layout>
        <SEO title="Layer5 Brand Kit" />
        <Navigation />
        <Brand />
        <Footer />
    </Layout>
);

export default BrandPage;
