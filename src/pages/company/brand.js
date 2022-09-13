import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/General/Navigation";
import Brand from "../../sections/Company/Brand";
import Footer from "../../sections/General/Footer";
import { GlobalStyle } from "../../sections/app.style";
import { darktheme } from "../../theme/app/themeStyles";
import lighttheme from "../../theme/app/themeStyles";
import SimpleReactLightbox from "simple-react-lightbox";

const BrandPage = () => {
  const [theme, setTheme] = useState();
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darktheme : lighttheme}>
      <GlobalStyle />
      <Layout>
        <SEO title="Brand Kits" description="Layer5 brand kits with logos, color schemes, and approved usage of Meshery, Image Hub, and other Layer5 projects" />
        <Navigation theme={theme} themeSetter={themeSetter} />
        <SimpleReactLightbox>
          <Brand />
        </SimpleReactLightbox>
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default BrandPage;
