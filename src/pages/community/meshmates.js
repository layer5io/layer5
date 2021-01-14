import React from "react";
import SEO from "../../components/seo";
import Layout from "../../components/layout";

import Navigation from "../../sections/Navigation";
import Footer from "../../sections/Footer";
import MeshmatesGrid from "../../sections/Meshmates-grid";

const MeshmatePage = () => {
    return (
        <Layout>
            <SEO title="Meshmates" />
            <Navigation />
            <MeshmatesGrid />
            <Footer />
        </Layout>
    );
};

export default MeshmatePage;
