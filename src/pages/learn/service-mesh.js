import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/Navigation";
import Footer from "../../sections/Footer";
import KatacodaServiceMesh from "../../sections/Katacoda-Service-Mesh";

import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/app/themeStyles";



const ServiceMeshKatacodaPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <GlobalStyle />
                <SEO title="Katacoda" />
                <Navigation />
                <KatacodaServiceMesh />
                <Footer />
            </Layout>
        </ThemeProvider>
    );
};
export default ServiceMeshKatacodaPage;
