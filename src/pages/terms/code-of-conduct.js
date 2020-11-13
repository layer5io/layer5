import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme/blog/themeStyles";
import { GlobalStyle } from "../../sections/app.style";

import SEO from "../../components/seo";
import Navigation from "../../sections/Navigation";
import Footer from "../../sections/Footer";
import Layout from "../../components/layout";
import Conduct from "../../sections/Terms";

const codeofconduct = () => (
    <ThemeProvider theme={theme}>
        <Layout>
            <GlobalStyle />
            <SEO title="Code of Conduct" />
            <Navigation />
            <Conduct />
            <Footer />
        </Layout>
    </ThemeProvider>
);

export default codeofconduct;