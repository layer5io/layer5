import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";

import Navigation from "../../../sections/General/Navigation";
import Footer from "../../../sections/General/Footer";
import Terms from "../../../sections/Company/Legal/terms-of-service";

import { GlobalStyle } from "../../../sections/app.style";
import { darktheme } from "../../../theme/app/themeStyles";
import lighttheme from "../../../theme/app/themeStyles";
const TermsOfService = () => {
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
        <SEO title="Terms of Service" description="Layer5's cloud native application and infrastructure management software enables organizations to expect more from their infrastructure.
  Layer5 is the makers of Meshery and service mesh standards.
" />
        <Navigation theme={theme} themeSetter={themeSetter} />
        <Terms />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default TermsOfService;
