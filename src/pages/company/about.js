import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/General/Navigation";
import Footer from "../../sections/General/Footer";
import AboutSection from "../../sections/Company/About";

import { GlobalStyle } from "../../sections/app.style";
import { darktheme } from "../../theme/app/themeStyles";
import lighttheme from "../../theme/app/themeStyles";


const About = () => {
  const [theme, setTheme] = useState();
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  // prevents ssr flash for mismatched dark mode
  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>Prevent Flash</div>;
  }
  return (
    <ThemeProvider theme={theme === "dark" ? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <SEO title="About" description='At Layer5, we believe collaboration enables innovation, and infrastructure enables collaboration. We help organizations look at their infrastructure differently, asking it "what have you done for me lately?"' />
        <Navigation theme={theme} themeSetter={themeSetter} />
        <AboutSection theme={theme} />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default About;
