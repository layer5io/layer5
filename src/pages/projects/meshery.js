import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/Navigation";
import MesheryPage from "../../sections/Meshery";
import Footer from "../../sections/Footer";

import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/app/themeStyles";

const Meshery = () => (
    <ThemeProvider theme={theme}>
        <Layout>
            <GlobalStyle />
            <SEO title="Meshery" />
            <Navigation />
            <MesheryPage />
            <Footer/>
        </Layout>
    </ThemeProvider>
);
export default Meshery;
