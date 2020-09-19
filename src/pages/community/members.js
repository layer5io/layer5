import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme/blog/themeStyles";
import { GlobalStyle } from "../../sections/app.style";

import SEO from "../../components/seo";
import Navigation from "../../sections/Navigation";
import Footer from "../../sections/Footer";
import Layout from "../../components/layout";
import AllMembers from "../../sections/Members-grid/AllMembers";
import ActiveMembers from "../../sections/Members-grid/ActiveMembers";
import InactiveMembers from "../../sections/Members-grid/InactiveMembers";


const MembersPage = () => (
    <ThemeProvider theme={theme}>
        <Layout>
            <GlobalStyle />
            <SEO title="Members | Layer5 - The Service Mesh Company" />
            <Navigation />
            <ActiveMembers/>
            <Footer/>
        </Layout>
    </ThemeProvider>
);

export default MembersPage;
