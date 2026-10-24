import React, { useState, useEffect } from "react";
// Components
import SEO from "../../components/seo";


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
  useEffect(() => {
    const filters = new URLSearchParams(window.location.search).getAll(
      "filter",
    );
    if (filters.length > 0) setFilter(filters);
  }, []);
  const updateUrl = (filters) => {
    const params = new URLSearchParams(window.location.search);
    params.delete("filter");
    filters.forEach((value) => params.append("filter", value));
    const query = params.toString();
    window.history.replaceState(
      window.history.state,
      "",
      `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`,
    );
  };
  const handleChange = () => {
    var checkboxes = document.querySelectorAll(
      "input[type=checkbox][value]:checked",
    );
    var filters = [];
    for (var i = 0; i < checkboxes.length; i++) {
      filters.push(checkboxes[i].value);
    }
    setFilter(filters);
    setCurrentPage(1);
    updateUrl(filters);
  };
  const clear = () => {
    setFilter([]);
    setCurrentPage(1);
    updateUrl([]);
  };
  return (
    <>
      <PageHeader title="Cloud Native Resources" path="Resources" subtitle="Learn how to provision, secure, connect, and manage your applications on Kubernetes" img={RssFeedIcon} />
      {/* RSS feed disabled */}
      {/* feedlink="/resources/feed.xml" */}
      <Container>
        <Row style={{
          flexWrap: "wrap"
        }}
        >
          <Col $xs={12} $lg={3}>
            <ResourcesNavigation handleChange={handleChange} clear={clear} resources={filter} />
          </Col>
          <Col $xs={12} $lg={9}>
            <ResourcesList resource={filter} currentPage={currentPage} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
          </Col>
        </Row>
        <ServiceMeshFocused bookName={"service-mesh-patterns"} />
      </Container>

    </>
  );
};
export default MembersPage;
export const Head = () => {
  return <SEO title="Cloud Native Resources" description="Learn how to provision, secure, connect, and manage your applications with GitOps and DevOps techniques running in Kubernetes or Cloud. Site Reliability Engineering and Platform Engineering tips and tricks." canonical="https://layer5.io/resources" />;
};