import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/General/Navigation";
import FAQ from "../../sections/General/Faq";
import Footer from "../../sections/General/Footer";
import DiscussCallout from "../../sections/Discuss-Callout";

import { GlobalStyle } from "../../sections/app.style";
import { darktheme } from "../../theme/app/themeStyles";
import lighttheme from "../../theme/app/themeStyles";


const FAQPage = () => {
  const [theme, setTheme] = useState();
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <Navigation theme={theme} themeSetter={themeSetter} />
        <FAQ category={["all"]} />
        <DiscussCallout />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default FAQPage;

export const Head = () => {
  return <SEO title="FAQs" description="Frequently Asked Questions" />;
};