import React from "react";
import { CloudNativeCatalogWrapper } from "./cloud-native-catalog.style";
import { Row, Col, Container } from "../../reusecore/Layout";
import catalog from "../../assets/images/catalog/catalog.svg";
import Catalog from "./catalog";
import Patterns from "./patterns";

const CloudNativeCatalogPage = () => {
  return (
    <CloudNativeCatalogWrapper>
      <div className="page-header-section">
        <Container>
          <Row className="row">
            <Col className="col" md={6} sm={12}>
              <h1>Cloud Native Catalog</h1>
            </Col>
            <Col className="col catalog-image-col" md={6} sm={12}>
              <img src={catalog} alt="Catalog" className="catalogIcon" />
            </Col>
          </Row>
        </Container>
      </div>
      <Catalog />
      <Patterns />
    </CloudNativeCatalogWrapper>
  );
};

export default CloudNativeCatalogPage;
