import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import LandscapeGrid from "../../sections/Landscape-grid";
import Navigation from "../../sections/Navigation";
import Footer from "../../sections/Footer";
import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/app/themeStyles";

const LandscapeGridPage=({ data }) => (
    <ThemeProvider theme={theme}>
        <Layout>
            <GlobalStyle />
            <SEO title="Landscape" />
            <Navigation />
            <LandscapeGrid />
            <Footer />
        </Layout>
    </ThemeProvider>
);
export default LandscapeGridPage;
