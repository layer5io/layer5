import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../../../components/layout";

import SEO from "../../../components/seo";
import MentorshipPage from "../../../sections/Community/Handbook/mentorships";
import Navigation from "../../../sections/General/Navigation";
import Footer from "../../../sections/General/Footer";

import { GlobalStyle } from "../../../sections/app.style";
import theme from "../../../theme/app/themeStyles";


const Mentorship = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <SEO title="Mentorship Programs" description="As an open-source organization and a community, we participate in different mentorships programs." />
      <Navigation />
      <MentorshipPage />
      <Footer/>
    </Layout>
  </ThemeProvider>
);
export default Mentorship;