import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Navigation from "../sections/Navigation";
import Footer from "../sections/Footer";
import Gsod from "../sections/Gsod";

import { GlobalStyle } from "../sections/app.style";
import theme from "../theme/hosting/themeStyles";

const gsod = () => (   
    <ThemeProvider theme={theme}>
        <Layout>
            <GlobalStyle />
            <SEO title="404: What a mesh!" />
            <Navigation />
            <Gsod />
            <Footer />  
        </Layout>
    </ThemeProvider>
);

export default gsod;