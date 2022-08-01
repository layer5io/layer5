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
import RssFeedIcon from "../../assets/images/socialIcons/rss-sign.svg";
import { darktheme } from "../../theme/app/themeStyles";
import lighttheme from "../../theme/app/themeStyles";


const MembersPage = () => {
  const [filter, setFilter] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const [theme, setTheme] = useState();

  const themeSetter = (thememode) => {
    setTheme(thememode);
  };
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
        <SEO title="Cloud Native Resources" description="Learn how to provision, secure, connect, and manage your applications with GitOps and DevOps techniques running on Kubernetes and any service mesh. Service mesh how-tos and cloud native ecosystem tips and tricks." canonical="https://layer5.io/resources" />
        <Navigation theme={theme} themeSetter={themeSetter} />
        <PageHeader title="Cloud Native Resources" path="Resources" subtitle="Learn how to provision, secure, connect, and manage your applications on Kubernetes and any service mesh" img={RssFeedIcon} feedlink="/resources/feed.xml" />
        <Container>
          <Row>
            <Col xs={12} lg={3}>
              <ResourcesNavigation handleChange={handleChange} clear={clear} resources={filter} />
            </Col>
            <Col xs={12} lg={9}>
              <ResourcesList theme={theme} resource={filter} currentPage={currentPage} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
            </Col>
          </Row>
        </Container>
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default MembersPage;
