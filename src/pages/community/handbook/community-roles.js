import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../../../components/layout";

import SEO from "../../../components/seo";
import LeadershipPage from "../../../sections/Community/Handbook/community-roles";
import Navigation from "../../../sections/General/Navigation";
import Footer from "../../../sections/General/Footer";

import { GlobalStyle } from "../../../sections/app.style";
import { darktheme } from "../../../theme/app/themeStyles";
import lighttheme from "../../../theme/app/themeStyles";


const ContributorJourney = () => {
  const [theme, setTheme] = useState("light");
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };
  return(
    <ThemeProvider theme={theme ==="dark"? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Contributor Journey" description="Description of the different roles in the Layer5 community" />
        <Navigation theme={theme} themeSetter={themeSetter}/>
        <LeadershipPage />
        <Footer/>
      </Layout>
    </ThemeProvider>
  );
};
export default ContributorJourney;