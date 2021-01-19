import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme/app/themeStyles";
import { GlobalStyle } from "../../sections/app.style";
import SEO from "../../components/seo";
import Navigation from "../../sections/Navigation";
import Footer from "../../sections/Footer";
import Layout from "../../components/layout";
import MeshmatesGrid from "../../sections/Community/Meshmates-grid";

const MeshmatePage=() => {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <GlobalStyle />
                <SEO title="Meshmates" />
                <Navigation />
                <MeshmatesGrid />
                <Footer />
            </Layout>
        </ThemeProvider>
    );
};

export default MeshmatePage;
