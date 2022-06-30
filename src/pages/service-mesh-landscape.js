import React, {useState} from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import LandscapeGrid from "../sections/Landscape";
import Navigation from "../sections/General/Navigation";
import Footer from "../sections/General/Footer";
import { GlobalStyle } from "../sections/app.style";
import { darktheme } from "../theme/app/themeStyles";
import lighttheme from "../theme/app/themeStyles";
const LandscapeGridPage=() => {
  const [theme, setTheme] = useState("light");
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };
  return(
    <ThemeProvider theme={theme ==="light"? lighttheme : darktheme}>
      <Layout>
        <GlobalStyle />
        <SEO
          title="Service Mesh Landscape"
          description="Compare service meshes like Istio, Linkerd, App Mesh, Maesh, Kuma, Network Service Mesh,
            Consul, Kuma, Citrix and VMware Tanzu Service Mesh. What is the best service mesh? What's the difference between Istio and Envoy?"
          image="/images/landscape.png" />
        <Navigation theme={theme} themeSetter={themeSetter}/>
        <LandscapeGrid />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default LandscapeGridPage;
