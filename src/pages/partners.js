import React from "react";

import SEO from "../components/seo";
import Layout from "../components/layout";

import Navigation from "../sections/Navigation";
import Footer from "../sections/Footer";
import Partner from "../sections/Partners";

const Partners = () => (
    <Layout>
        <SEO title="Partners" />
        <Navigation />
        <Partner />
        <Footer />
    </Layout>
);
export default Partners;
