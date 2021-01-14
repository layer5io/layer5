import React from "react";
import SEO from "../../components/seo";
import Navigation from "../../sections/Navigation";
import Footer from "../../sections/Footer";
import Layout from "../../components/layout";
import NewcomersPage from "../../sections/Newcomers/NewcomersPage";

const newComers = () => {
    return (
        <Layout>
            <SEO title="Newcomers" />
            <Navigation />
            <NewcomersPage />
            <Footer />
        </Layout>
    );
};

export default newComers;
