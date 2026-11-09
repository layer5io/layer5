import React from "react";
import styled from "styled-components";
import { useStyledDarkMode } from "../../theme/app/useStyledDarkMode";
import { Row, Col, Container } from "../../reusecore/Layout";
import AWSCardDark from "../../assets/images/AWS-Diagram/aws-light.svg";
import AWSCardLight from "../../assets/images/AWS-Diagram/aws.svg";
import Button from "../../reusecore/Button";

const CatalogHeaderWrapper = styled.div`
.cloud-native-catalog.header {
  background: ${({ theme }) => theme.linearToGreen};
  padding: 6rem 1rem;
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
    color: ${(props) => props.theme.primaryColor};
    padding-right: 80px;
    margin-bottom: 20px;
  }
  .header__title_description {
    color: ${(props) => props.theme.tertiaryColor};
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
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
    .col.catalog {
      display: flex;
      justify-content: center;
      align-items: center;
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
.col.catalog {
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    img {
      transform: scale(1.2); 
    }
  }
}

@media screen and (min-width: 1300px) {
  .col.catalog {
  img{
    transform: scale(1.2);
  }
  &:hover {
    img {
      transform: scale(1.3); 
    }
  }
}
}
`;

const Header = () => {
  const { isDark } = useStyledDarkMode();
  return (
    <CatalogHeaderWrapper>
      <div className="cloud-native-catalog header">
        <Container>
          <Row className="row">
            <Col className="col header__detail" md={6}>
              <h1 className="header__title">AWS Architecture Diagram Tool</h1>
              <p className="header__title_description">
              Create AWS diagrams easily with predefined templates and symbols designed for professionals.
              </p>
              <div className="header__button_section">
                <Button
                  $primary
                  title="Try Kanvas Now!"
                  $external={true}
                  $url="/kanvas"
                />
              </div>
            </Col>
            <Col className="col catalog" md={6}>
              <img src={isDark ? AWSCardLight : AWSCardDark} alt="catalog" />
            </Col>
          </Row>
        </Container>
      </div>
    </CatalogHeaderWrapper>
  );
};

export default Header;
