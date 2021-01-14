import React from "react";
import Loadable from "react-loadable";

import SEO from "../../components/seo";
import Layout from "../../components/layout";

import Navigation from "../../sections/Navigation";
import Footer from "../../sections/Footer";

const LoadableCalendar = Loadable({
    loader: () => import("../../sections/Calendar"),
    loading() {
        return <div>Loading...</div>;
    }
});

const CalendarPage = () => {
    return (
        <Layout>
            <SEO title="Service Mesh Events Calendar" />
            <Navigation />
            <LoadableCalendar />
            <Footer />
        </Layout>
    );
};

export default CalendarPage;
