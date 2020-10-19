import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/Navigation";
import Footer from "../../sections/Footer";
import Community from "../../sections/Community";

import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/blog/themeStyles";

const community = () => (   
    <ThemeProvider theme={theme}>
        <Layout>
            <GlobalStyle />
            <SEO title="Community" />
            <Navigation />
            <Community />
            <Footer />  
        </Layout>
    </ThemeProvider>
);

export default community;