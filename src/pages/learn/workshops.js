import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/Navigation";
import WorkshopsPage from "../../sections/Workshop-grid";
import Footer from "../../sections/Footer";

import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/app/themeStyles";
import WorkshopBottom from "../../components/Workshop-Bottom";



const WorkshopsGridPage = ({hide_path}) => {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <GlobalStyle />
                <SEO title="Service Mesh Workshops" />
                <Navigation />
                <WorkshopsPage hide_path={hide_path} />
                <WorkshopBottom />
                <Footer />
            </Layout>
        </ThemeProvider>
    );
};
export default WorkshopsGridPage;
