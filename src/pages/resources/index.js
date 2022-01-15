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
import { Row, Col, Container } from "../../reusecore/Layout";
import PageHeader from "../../reusecore/PageHeader";
import theme from "../../theme/app/themeStyles";


const MembersPage = () => {
  const [filter, setFilter] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  
  const handleChange = () => {
    var checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
    var filters = [];
    for (var i = 0; i < checkboxes.length; i++) {
      filters.push(checkboxes[i].value);
    }
    setFilter(filters);
    setCurrentPage(1);
  };

  const clear = () => {
    setFilter([]);
    setCurrentPage(1);
    document.querySelectorAll("input[type=\"checkbox\"]")
      .forEach(el => el.checked = false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Service Mesh Resources" description="Articles on how to service mesh from the world's largest service mesh community. Service mesh how-tos and cloud native ecosystem news." canonical="https://layer5.io/resources" />
        <Navigation />
        <PageHeader title="Cloud Native Resources" path="Resources"/>
        <Container>
        <Row>
          <Col xs={12} lg={3}>
            <ResourcesNavigation handleChange={handleChange} clear={clear} resources={filter} />
          </Col>
          <Col xs={12} lg={9}>
            <ResourcesList resource={filter} currentPage={currentPage} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
          </Col>
        </Row>
        </Container>
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default MembersPage;
