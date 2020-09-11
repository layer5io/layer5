import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme/app/themeStyles";
import {GlobalStyle} from "../../sections/app.style";
import SEO from "../../components/seo";
import Navigation from "../../sections/Navigation";
import NewsPage from "../../sections/News-grid";
import Footer from "../../sections/Footer";
import Layout from "../../components/layout";
import Faq from "../../sections/Faq";


const MembersPage = () => (
    <ThemeProvider theme={theme}>
        <Layout>
            <GlobalStyle />
            <SEO title="Members | Layer5 - The Service Mesh Company" />
            <Navigation />
            <Faq />
            <Footer/>
        </Layout>
    </ThemeProvider>
);

export default MembersPage;
