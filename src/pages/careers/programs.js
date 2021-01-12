import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/Navigation";
import Footer from "../../sections/Footer";
import ProgramsGrid from "../../sections/Careers-Programs-grid";

import { GlobalStyle } from "../../sections/app.style";
import theme from "../../theme/app/themeStyles";

const programs = () => (
    <ThemeProvider theme={theme}>
        <Layout>
            <GlobalStyle />
            <SEO title="Open Source Internship Programs" />
            <Navigation />
            <ProgramsGrid />
            <Footer />
        </Layout>
    </ThemeProvider>
);

export default programs;
