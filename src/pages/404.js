import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Navigation from "../sections/Navigation";
import L404 from "../sections/404";
import Footer from "../sections/Footer";

import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/hosting/themeStyles";

const NotFoundPage = () => (   
    <ThemeProvider theme={theme}>
        <Layout>
            <GlobalStyle />
            <SEO title="404: What a mesh!" />
            <Navigation />
            <L404 />
            <Footer />  
        </Layout>
    </ThemeProvider>
);

export default NotFoundPage;
