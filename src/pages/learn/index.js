import React from "react";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Navigation from "../../sections/Navigation";
import BookPage from "../../sections/Books-grid";
import WorkshopsPage from "../../sections/Workshop-grid";
import Footer from "../../sections/Footer";

const WorkshopsGridPage = () => {
    const hide_path = true;
    return (
        <Layout>
            <SEO title="Learn" />
            <Navigation />
            <BookPage hide_path={hide_path} />
            <WorkshopsPage limit={3} hide_path={hide_path} />
            <Footer />
        </Layout>
    );
};
export default WorkshopsGridPage;
