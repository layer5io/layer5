import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../../../components/layout";

import SEO from "../../../components/seo";
import MentorshipPage from "../../../sections/Community/Handbook/mentorships";
import Navigation from "../../../sections/General/Navigation";
import Footer from "../../../sections/General/Footer";

import { GlobalStyle } from "../../../sections/app.style";
import { darktheme } from "../../../theme/app/themeStyles";
import lighttheme from "../../../theme/app/themeStyles";


const Mentorship = () => {
  const [theme, setTheme] = useState();

  const themeSetter = (thememode) => {
    setTheme(thememode);
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Mentorship Programs" description="As an open-source organization and a community, we participate in different mentorships programs." />
        <Navigation theme={theme} themeSetter={themeSetter} />
        <MentorshipPage />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default Mentorship;