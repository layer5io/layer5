import React from "react";

import SEO from "../../components/seo";
import Layout from "../../components/layout";

import Navigation from "../../sections/Navigation";
import Footer from "../../sections/Footer";
import Conduct from "../../sections/Terms";

const codeofconduct = () => (
    <Layout>
        <SEO title="Code of Conduct" />
        <Navigation />
        <Conduct />
        <Footer />
    </Layout>
);

export default codeofconduct;
