import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "../../reusecore/Layout";
import Wasm from "../../assets/images/webassembly/webssembly_icon.svg";
import Patterns from "../../assets/images/service-mesh-patterns/service-mesh-pattern.svg";
import Ebpf from "../../assets/images/meshmap/ebpf.svg";
import Opa from "../../assets/images/meshmap/opa.svg";
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
      .calalog__card {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #1e2117;
        border: 1px solid #00b39f;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        .calalog__card__title {
          text-align: center;
          color: #ffffff;
        }
        .catalog__card__icon {
          height: 3.5rem;
          width: 3.5rem;
        }
      }
      .calalog__card--main {
        padding: 40px 20px;
        z-index: 1;
        max-width: 260px;
        .calalog__card__title {
          font-weight: 500;
          font-size: 35px;
          line-height: 42px;
        }
      }
      .calalog__card--child {
        padding: 25px 30px;
        position: absolute;
        .calalog__card__title {
          font-weight: 400;
          font-size: 27px;
          line-height: 32px;
        }
      }
      .calalog__card--programs {
        top: 10px;
        left: 20px;
        z-index: 2;
        .calalog__card__title {
          margin-right: 5px;
        }
        .catalog__card__icon {
          margin-left: 5px;
        }
      }
      .calalog__card--policies {
        bottom: 20px;
        right: 20px;
        z-index: 2;
        .calalog__card__title {
          margin-right: 5px;
        }
        .catalog__card__icon {
          margin-left: 5px;
        }
      }
      .calalog__card--patterns {
        bottom: 20px;
        left: 20px;
        z-index: 0;
        padding: 25px 65px;
        .calalog__card__title {
          margin-left: 5px;
        }
        .catalog__card__icon {
          margin-right: 5px;
        }
      }
      .calalog__card--webAssembly {
        top: 0px;
        right: -20px;
        z-index: 0;
        .calalog__card__title {
          margin-left: 5px;
        }
        .catalog__card__icon {
          margin-right: 5px;
        }
      }
    }

    @media screen and (max-width: 1199px) {
      .catalog {
        .calalog__card--main {
          padding: 35px 20px;
          .calalog__card__title {
            font-size: 30px;
            line-height: 37px;
          }
        }
        .calalog__card--child {
          padding: 15px 30px;
          .calalog__card__title {
            font-size: 22px;
            line-height: 27px;
          }
        }
        .calalog__card--programs {
          left: -50px;
          top: 60px;
        }
        .calalog__card--policies {
          bottom: 50px;
        }
        .calalog__card--patterns {
          bottom: 50px;
          left: -10px;
        }
        .calalog__card--webAssembly {
          right: 0px;
          top: 35px;
        }
      }
    }

    @media screen and (max-width: 992px) {
      padding-bottom: 100px;
      .row {
        flex-direction: column;
        min-height: 40rem;
        justify-content: space-around;
      }
      .catalog {
        .calalog__card--programs {
          left: 100px;
          top: -60px;
        }
        .calalog__card--policies {
          bottom: -50px;
          right: 80px;
        }
        .calalog__card--patterns {
          bottom: -60px;
          left: 50px;
          padding-left: 50px;
          padding-right: 50px;
        }
        .calalog__card--webAssembly {
          right: 80px;
          top: -80px;
        }
      }
    }

    @media screen and (max-width: 767px) {
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
      .catalog {
        margin: 50px 0 0 0;
        .calalog__card--child {
          .calalog__card__title {
            font-size: 18px;
            line-height: 21px;
          }
        }
        .calalog__card--webAssembly {
          right: 20px;
        }
      }
    }

    @media screen and (max-width: 570px) {
      .catalog {
        .calalog__card--programs {
          left: 50px;
        }
        .calalog__card--policies {
          right: 50px;
        }
        .calalog__card--patterns {
          left: 10px;
        }
        .calalog__card--webAssembly {
          right: 50px;
        }
      }
    }
    @media screen and (max-width: 500px) {
      .catalog {
        margin: 180px 0 130px 0;
        .calalog__card--policies {
          bottom: -140px;
        }
        .calalog__card--webAssembly {
          top: -140px;
        }
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
            <Col className="col header__detail" lg={6} md={12}>
              <h1 className="header__title">Cloud Native Catalog</h1>
              <p className="header__title_description">
                Discover top-quality cloud native services for your
                infrastructure with the Cloud Native Catalog. Browse now and
                upgrade your cloud native operations!
              </p>
              <div className="header__button_section">
                <Button primary title="Create Catalog" url="https://github.com/meshery/meshery.io/blob/master/README.md#add-your-patterns-to-the-catalog" />
              </div>
            </Col>
            <Col className="col catalog" lg={6} md={12}>
              <div className="calalog__card calalog__card--child calalog__card--programs">
                <span className="calalog__card__title">Programs</span>
                <img
                  src={Ebpf}
                  alt="Programs"
                  className="catalog__card__icon"
                />
              </div>
              <div className="calalog__card calalog__card--child calalog__card--webAssembly">
                <img
                  src={Wasm}
                  alt="WebAssembly"
                  className="catalog__card__icon"
                />
                <span className="calalog__card__title">WebAssembly</span>
              </div>
              <div className="calalog__card calalog__card--main">
                <span className="calalog__card__title">
                  Cloud Native Catalog
                </span>
              </div>
              <div className="calalog__card calalog__card--child calalog__card--patterns">
                <img
                  src={Patterns}
                  alt="Patterns"
                  className="catalog__card__icon"
                />
                <span className="calalog__card__title">Patterns</span>
              </div>
              <div className="calalog__card calalog__card--child calalog__card--policies">
                <span className="calalog__card__title">Policies</span>
                <img src={Opa} alt="Policies" className="catalog__card__icon" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </CatalogHeaderWrapper>
  );
};

export default Header;
