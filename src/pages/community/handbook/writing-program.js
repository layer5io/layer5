import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../../../components/layout";

import SEO from "../../../components/seo";
import Writers from "../../../sections/Community/Handbook/writing-program";
import Navigation from "../../../sections/General/Navigation";
import Footer from "../../../sections/General/Footer";

import { GlobalStyle } from "../../../sections/app.style";
import theme from "../../../theme/app/themeStyles";


const Faq = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Writing Program" description="The Layer5 Writing Program is a way to demonstrate your expertise, give back to the community, and help us produce great content." />
      <Navigation />
      <Writers />
      <Footer/>
    </Layout>
  </ThemeProvider>
);
export default Faq;