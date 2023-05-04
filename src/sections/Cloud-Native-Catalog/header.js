import React from "react";
import { CloudNativeCatalogWrapper } from "./cloud-native-catalog.style";
import { Row, Col, Container } from "../../reusecore/Layout";
import catalog from "../../assets/images/catalog/catalog.svg";
import Button from "../../reusecore/Button";

const Header = () => {
  return (
    <CloudNativeCatalogWrapper>
      <div className="cloud-native-catalog header">
        <Container>
          <Row className="row">
            <Col className="col header__detail" md={6} sm={12}>
              <h1 className="header__title">Cloud Native Catalog</h1>
              <p className="header__title_description">
                Discover top-quality cloud native services for your
                infrastructure with the Cloud Native Catalog. Browse now and
                upgrade your cloud native operations!
              </p>
              <di>
                <Button primary title="Create Catalog" url=""></Button>
              </di>
            </Col>
            <Col className="col catalog-image-col" md={6} sm={12}>
              <img src={catalog} alt="Catalog" className="catalogIcon" />
            </Col>
          </Row>
        </Container>
      </div>
    </CloudNativeCatalogWrapper>
  );
};

export default Header;
