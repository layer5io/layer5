import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/Navigation";
import WorkshopsPage from "../../sections/Workshop-grid";
import Footer from "../../sections/Footer";

import WorkshopBottom from "../../components/Workshop-Bottom";

const WorkshopsGridPage = ({ hide_path }) => {
    return (
        <Layout>
            <SEO title="Service Mesh Workshops" />
            <Navigation />
            <WorkshopsPage hide_path={hide_path} />
            <WorkshopBottom />
            <Footer />
        </Layout>
    );
};
export default WorkshopsGridPage;
