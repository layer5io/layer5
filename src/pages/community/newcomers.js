import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme/app/themeStyles";
import { GlobalStyle } from "../../sections/app.style";
import SEO from "../../components/seo";
import Navigation from "../../sections/Navigation";
import Footer from "../../sections/Footer";
import Layout from "../../components/layout";
import NewcomersPage from "../../sections/Community/Newcomers/NewcomersPage";

const newComers = () => {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <GlobalStyle />
                <SEO title="Newcomers" />
                <Navigation />
                <NewcomersPage />
                <Footer />
            </Layout>
        </ThemeProvider>
    );
};

export default newComers;
