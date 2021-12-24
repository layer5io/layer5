import React, { useState } from "react";

// Libraries
import { ThemeProvider } from "styled-components";

// Components
import { GlobalStyle } from "../../sections/app.style";
import SEO from "../../components/seo";
import Navigation from "../../sections/General/Navigation";
import Footer from "../../sections/General/Footer";
import Layout from "../../components/layout";
import ResourcesList from "../../sections/Resources-grid/ResourcesList";
import ResourcesNavigation from "../../sections/Resources-grid/filters";

// Assets + Icons
import theme from "../../theme/app/themeStyles";


const MembersPage = () => {
  const [filter, setFilter] = useState([]);
  const handleChange = () => {
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
    var filters = [];
    for (var i = 0; i < checkboxes.length; i++) {
      // filters.splice(i);
      filters.push(checkboxes[i].value)
    }
    setFilter(filters);
  }

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <SEO 
        title="Service Mesh Resources" 
        description="Articles on how to service mesh from the world's largest service mesh community. Service mesh how-tos and cloud native ecosystem news." 
        />
        <Navigation />
        <ResourcesNavigation handleChange={handleChange} />
        <ResourcesList resource={filter} />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default MembersPage;
