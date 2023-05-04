import React from "react";
import { CloudNativeCatalogWrapper } from "./cloud-native-catalog.style";
import { Row, Col, Container } from "../../reusecore/Layout";
import patterns from "../../assets/images/catalog/patterns.svg";
import policies from "../../assets/images/catalog/policies.svg";
import programs from "../../assets/images/catalog/programs.svg";
import webAssembly from "../../assets/images/catalog/webassembly.svg";
import Button from "../../reusecore/Button";

const Header = () => {
  return (
    <CloudNativeCatalogWrapper>
      <div className="cloud-native-catalog header">
        <Container>
          <Row className="row">
            <Col className="col header__detail" lg={6} md={12}>
              <h1 className="header__title">Cloud Native Catalog</h1>
              <p className="header__title_description">
                Discover top-quality cloud native services for your
                infrastructure with the Cloud Native Catalog. Browse now and
                upgrade your cloud native operations!
              </p>
              <di className="header__button_section">
                <Button primary title="Create Catalog" url=""></Button>
              </di>
            </Col>
            <Col className="col catalog" lg={6} md={12}>
              <div className="calalog__card calalog__card--child calalog__card--programs">
                <span className="calalog__card__title">Programs</span>
                <img src={programs} alt="Programs" className="catalog__card__icon" />
              </div>
              <div className="calalog__card calalog__card--child calalog__card--webAssembly">
                <img src={webAssembly} alt="WebAssembly" className="catalog__card__icon" />
                <span className="calalog__card__title">WebAssembly</span>
              </div>
              <div className="calalog__card calalog__card--main">
                <span className="calalog__card__title">Cloud Native Catalog</span>
              </div>
              <div className="calalog__card calalog__card--child calalog__card--patterns">
                <img src={patterns} alt="Patterns" className="catalog__card__icon" />
                <span className="calalog__card__title">Patterns</span>
              </div>
              <div className="calalog__card calalog__card--child calalog__card--policies">
                <span className="calalog__card__title">Policies</span>
                <img src={policies} alt="Policies" className="catalog__card__icon" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </CloudNativeCatalogWrapper>
  );
};

export default Header;
