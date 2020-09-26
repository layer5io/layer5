import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/Navigation";
import Footer from "../../sections/Footer";
import Gsoc from "../../sections/Gsoc";

import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/hosting/themeStyles";

const gsoc = () => (   
    <ThemeProvider theme={theme}>
        <Layout>
            <GlobalStyle />
            <SEO title="404: What a mesh!" />
            <Navigation />
            <Gsoc />
            <Footer />  
        </Layout>
    </ThemeProvider>
);

export default gsoc;
