import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

// Components
import { GlobalStyle } from "../../sections/app.style";
import SEO from "../../components/seo";
import Navigation from "../../sections/General/Navigation";
import Footer from "../../sections/General/Footer";
import Layout from "../../components/layout";
import ResourcesList from "../../sections/Resources/Resources-grid/ResourcesList";
import ResourcesNavigation from "../../sections/Resources/Resources-grid/filters";
import { Row, Col } from "../../reusecore/Layout";
import PageHeader from "../../reusecore/PageHeader";
import theme from "../../theme/app/themeStyles";


const MembersPage = () => {
  const [filter, setFilter] = useState([]);
  
  const handleChange = () => {
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
    var filters = [];
    for (var i = 0; i < checkboxes.length; i++) {
      filters.push(checkboxes[i].value)
    }
    setFilter(filters);
  }

  const clear = () => {
    var filters = [];
    setFilter(filters);
    document.querySelectorAll('input[type="checkbox"]')
    .forEach(el => el.checked = false);
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
        <PageHeader title="Cloud Native Resources" path="Resources"/>
        <Row>
        <Col xs={12} lg={4}>
        <ResourcesNavigation handleChange={handleChange} clear={clear} />
        </Col>
        <Col xs={12} lg={8}>
        <ResourcesList resource={filter} />
        </Col>
        </Row>
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default MembersPage;
