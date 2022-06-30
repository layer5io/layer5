import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../../components/layout";
import SEO from "../../../components/seo";

import Navigation from "../../../sections/General/Navigation";
import Footer from "../../../sections/General/Footer";
import Conduct from "../../../sections/Company/Legal/code-of-conduct";

import { GlobalStyle } from "../../../sections/app.style";
import { darktheme } from "../../../theme/app/themeStyles";
import lighttheme from "../../../theme/app/themeStyles";

const CodeOfConduct = () => {
  const [theme, setTheme] = useState("light");

  const themeSetter = (thememode) => {
    setTheme(thememode);
  };
  return (
    <ThemeProvider theme={theme ==="dark"? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Code of Conduct" description="Contact Layer5 for help with operating a service mesh.
  Layer5 is the makers of Meshery and service mesh standards.
  We are the largest collection of service mesh projects and their maintainers in the world." />
        <Navigation theme={theme} themeSetter={themeSetter}/>
        <Conduct />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default CodeOfConduct;
