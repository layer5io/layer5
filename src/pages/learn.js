import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Navigation from "../sections/Navigation";
import BookPage from "../sections/Books-grid";
import WorkshopsPage from "../sections/Workshop-grid";
import WorkshopBottom from "../components/Workshop-Bottom";
import Footer from "../sections/Footer";

import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/blog/themeStyles";



const WorkshopsGridPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <GlobalStyle />
                <SEO title="Learn | Layer5 - The Service Mesh Company" />
                <Navigation />
                <BookPage />
                <WorkshopsPage />
                <WorkshopBottom />
                <Footer />
            </Layout>
        </ThemeProvider>
    );
};
export default WorkshopsGridPage;
