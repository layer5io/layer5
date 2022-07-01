import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Navigation from "../../sections/General/Navigation";
import LearnPathsPage from "../../sections/Learn-Layer5";
import Footer from "../../sections/General/Footer";
import { GlobalStyle } from "../../sections/app.style";
import lighttheme from "../../theme/app/themeStyles";
import { darktheme } from "../../theme/app/themeStyles";


const LearningPathsPage = () => {
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
        <SEO title="Learn Service Mesh"
          description="Learn to build an application using service meshes like Istio, Linkerd"
          image="/images/workshops.png" />
        <Navigation theme={theme} themeSetter={themeSetter}/>
        <LearnPathsPage />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default LearningPathsPage;
