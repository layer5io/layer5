import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Navigation from "../sections/Navigation";
import L404 from "../sections/404";
import Footer from "../sections/Footer";

const NotFoundPage = () => (
    <Layout>
        <SEO title="What a mesh!" />
        <Navigation />
        <L404 />
        <Footer />
    </Layout>
);

export default NotFoundPage;
