import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "../../reusecore/Layout";
import CatalogCards from "../../assets/images/catalog/calalog-cards.svg";
import Button from "../../reusecore/Button";

const CatalogHeaderWrapper = styled.div`
  .cloud-native-catalog.header {
    min-height: 40rem;
    background: ${({ theme }) => theme.linearToGreen};
    display: flex;
    align-items: center;
    align-content: space-between;
    flex-direction: column;
    justify-content: center;
    .header__detail {
      display: flex;
      flex-direction: column;
    }
    .header__title {
      color: ${(props) => props.theme.secondaryColor};
      padding-right: 80px;
      margin-bottom: 20px;
    }
    .header__title_description {
      color: ${(props) => props.theme.tertiaryColor};
      font-weight: 400;
      font-size: 1.438rem;
      line-height: 2rem;
      padding-right: 80px;
      margin-bottom: 30px;
    }
    .catalog {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }

    @media screen and (max-width: 992px) {
      padding-bottom: 100px;
      .catalog {
        margin: 50px 0 0 0;
      }
    }

    @media screen and (max-width: 768px) {
      padding: 50px 0;
      .header__detail {
        display: flex;
        flex-direction: column;
      }
      .header__title {
        padding-right: 0;
        text-align: center;
        margin-bottom: 10px;
      }
      .header__title_description {
        padding-right: 0;
        text-align: center;
        margin-bottom: 20px;
      }
      .header__button_section {
        display: flex;
        justify-content: center;
      }
    }
  }
`;

const Header = () => {
  return (
    <CatalogHeaderWrapper>
      <div className="cloud-native-catalog header">
        <Container>
          <Row className="row">
            <Col className="col header__detail" md={6}>
              <h1 className="header__title">Cloud Native Catalog</h1>
              <p className="header__title_description">
                Discover top-quality cloud native services for your
                infrastructure with the Cloud Native Catalog. Discover best
                practices and upgrade your Kubernetes management practices.
              </p>
              <div className="header__button_section">
                <Button
                  primary
                  title="Browse Catalog"
                  external={true}
                  url="https://meshery.io/catalog"
                />
              </div>
            </Col>
            <Col className="col catalog" md={6}>
              <img src={CatalogCards} alt="catalog" />
            </Col>
          </Row>
        </Container>
      </div>
    </CatalogHeaderWrapper>
  );
};

export default Header;
