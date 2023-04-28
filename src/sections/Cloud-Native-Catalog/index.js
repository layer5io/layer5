import React from "react";
import { CloudNativeCatalogWrapper } from "./cloud-native-catalog.style";
import { Row, Col } from "../../reusecore/Layout";
import catalog from "../../assets/images/catalog/catalog.svg";

const CloudNativeCatalogPage = () => {
  return (
    <CloudNativeCatalogWrapper>
      <div className="page-header-section">
        <Row>
          <Col md={6} sm={12}>
            <h1>Cloud Native Catalog</h1>
          </Col>
          <Col md={6} sm={12}>
            <img src={catalog} alt="Catalog" className="catalogIcon"/>
          </Col>
        </Row>
      </div>
    </CloudNativeCatalogWrapper>
  );
};

export default CloudNativeCatalogPage;