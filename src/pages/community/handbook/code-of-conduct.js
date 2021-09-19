import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../../../components/layout";

import SEO from "../../../components/seo";
import ConductPage from "../../../sections/Community/Handbook/conduct";
import Navigation from "../../../sections/General/Navigation";
import Footer from "../../../sections/General/Footer";

import { GlobalStyle } from "../../../sections/app.style";
import theme from "../../../theme/app/themeStyles";


const CommunityConduct = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Code Of Conduct" description="The purpose of the handbook is to provide an overview of the Layer5 community" />
      <Navigation />
      <ConductPage />
      <Footer/>
    </Layout>
  </ThemeProvider>
);
export default CommunityConduct;