import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/Navigation";
import Footer from "../../sections/Footer";
import InternshipPage from "../../sections/Internship-gird";

import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/blog/themeStyles";

const Internships = () => (
    <ThemeProvider theme={theme}>
        <Layout>
            <GlobalStyle />
            <SEO title="Internships" />
            <Navigation />
            <InternshipPage />
            <Footer />
        </Layout>
    </ThemeProvider>
);

export default Internships;
