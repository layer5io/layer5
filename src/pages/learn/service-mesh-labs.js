import React, {useEffect, useState} from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/General/Navigation";
import Footer from "../../sections/General/Footer";
import ServiceMeshLabs from "../../sections/Learn/Service-Mesh-Labs";

import { GlobalStyle } from "../../sections/app.style";
import lighttheme from "../../theme/app/themeStyles";
import { darktheme } from "../../theme/app/themeStyles";


const ServiceMeshLabsPage = (props) => {
  const [theme, setTheme] = useState("light");
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (props.location.state && props.location.state.selectedIndex){
      setSelectedIndex(props.location.state.selectedIndex);
    }
  },[]);

  return (
    <ThemeProvider theme={theme ==="dark"? darktheme : lighttheme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Interactive Service Mesh Labs" description="Learn to service mesh with the industry leaders.Try interactive service mesh lab scenarios." />
        <Navigation theme={theme} themeSetter={themeSetter}/>
        <ServiceMeshLabs selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default ServiceMeshLabsPage;
