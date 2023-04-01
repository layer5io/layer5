import React, { useState } from "react";
// Components
import SEO from "../../components/seo";
import Footer from "../../sections/General/Footer";
import Layout from "../../components/layout";
import ResourcesList from "../../sections/Resources/Resources-grid/ResourcesList";
import ResourcesNavigation from "../../sections/Resources/Resources-grid/filters";
import ServiceMeshFocused from "../../sections/Home/Service-mesh-focussed";
import { Row, Col, Container } from "../../reusecore/Layout";
import PageHeader from "../../reusecore/PageHeader";
import RssFeedIcon from "../../assets/images/socialIcons/rss-sign.svg";
const MembersPage = () => {
  const [filter, setFilter] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
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
    <Layout>
      <PageHeader title="Cloud Native Resources" path="Resources" subtitle="Learn how to provision, secure, connect, and manage your applications on Kubernetes and any service mesh" img={RssFeedIcon} feedlink="/resources/feed.xml" />
      <Container>
        <Row>
          <Col xs={12} lg={3}>
            <ResourcesNavigation handleChange={handleChange} clear={clear} resources={filter} />
          </Col>
          <Col xs={12} lg={9}>
            <ResourcesList  resource={filter} currentPage={currentPage} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
          </Col>
        </Row>
        <ServiceMeshFocused bookName={"service-mesh-patterns"} />
      </Container>
      <Footer />
    </Layout>
  );
};
export default MembersPage;
export const Head = () => {
  return <SEO title="Cloud Native Resources" description="Learn how to provision, secure, connect, and manage your applications with GitOps and DevOps techniques running on Kubernetes and any service mesh. Service mesh how-tos and cloud native ecosystem tips and tricks." canonical="https://layer5.io/resources" />;
};