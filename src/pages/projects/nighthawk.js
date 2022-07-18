import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Navigation from "../../sections/General/Navigation";
import Nighthawk from "../../sections/Projects/Nighthawk";
import Footer from "../../sections/General/Footer";
import Subscribe from "../../sections/subscribe/subscribe";

import { GlobalStyle } from "../../sections/app.style";
import lighttheme from "../../theme/app/themeStyles";
import { darktheme } from "../../theme/app/themeStyles";

const NighthawkPage = () => {
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
    return <div style={{ visibility: "hidden" }}>Prevent Flash</div>;
  }
  return (
    <ThemeProvider theme={theme === "dark" ? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Nighthawk"
          description="Layer5 is the maker of Meshery,  Service Mesh Performance (SMP), Nighthawk and maintainers of Service Mesh Interface (SMI).
            We are the largest collection of service mesh projects and their maintainers in the world.
            Contact Layer5 for help with operating a service mesh."
        />
        <Navigation theme={theme} themeSetter={themeSetter} />
        <Nighthawk theme={theme} />
        <Subscribe />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default NighthawkPage;
