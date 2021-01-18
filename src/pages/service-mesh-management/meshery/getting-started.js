import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";

import Navigation from "../../../sections/Navigation";
import Footer from "../../../sections/Footer";
import MesheryTerminal from "../../../sections/Meshery/Meshery-terminal";
import MesheryPlatforms from "../../../sections/Meshery/Meshery-platforms";
import MehseryFeatures from "../../../sections/Meshery/Meshery-features";
import { GlobalStyle } from "../../../sections/app.style";
import theme from "../../../theme/app/themeStyles";

const MesheryMainPage = () => (
    <ThemeProvider theme={theme}>
        <Layout>
            <GlobalStyle />
            <SEO title="Meshery"/>
            <Navigation />
            <MesheryTerminal/>
            <MesheryPlatforms/>
            <MehseryFeatures/>
            <Footer />
        </Layout>
    </ThemeProvider>
);

export default MesheryMainPage;
