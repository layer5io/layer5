import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme/blog/themeStyles";
import { GlobalStyle } from "../../sections/app.style";

import SEO from "../../components/seo";
import Navigation from "../../sections/Navigation";
import Footer from "../../sections/Footer";
import Layout from "../../components/layout";
import MembersGrid from "../../sections/Members-grid";


const MembersPage = () => (
    <ThemeProvider theme={theme}>
        <Layout>
            <GlobalStyle />
            <SEO title="Members | Layer5 - The Service Mesh Company" />
            <Navigation />
            <MembersGrid />
            <Footer/>
        </Layout>
    </ThemeProvider>
);

export default MembersPage;
