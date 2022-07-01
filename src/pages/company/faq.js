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
  const [theme, setTheme] = useState("light");
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  // prevents ssr flash for mismatched dark mode
  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>Hello there</div>;
  }
  return (
    <ThemeProvider theme={theme ==="dark"? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <SEO title="FAQs" description="Frequently Asked Questions" />
        <Navigation theme={theme} themeSetter={themeSetter}/>
        <FAQ category = {["all"]} />
        <DiscussCallout />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default FAQPage;
