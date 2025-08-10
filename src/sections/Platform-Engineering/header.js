import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "../../reusecore/Layout";
import MesheryDashboard from "./images/meshery-dashboard-hero-image.svg";
import Button from "../../reusecore/Button";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { Link } from "gatsby";
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
import Projects from "../Home/Partners-home";
import { useStyledDarkMode } from "../../theme/app/useStyledDarkMode";

const PlatformEngineeringWrapper = styled.div`
  .header-buttons {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    .see-doc-link {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      a {
        color: ${props => props.theme.text};
        transition: padding 0.5s ease;
      }
      a:hover {
        padding-right: 5px;
      }
      svg {
        display: flex;
        margin: auto;
      }
    }
  }
  .platform-engineering.header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 40rem;
    background: ${(props) => props.$isDark ? "linear-gradient(0deg, #121212 33.89%, rgba(0, 179, 159, 0.74) 99.81%)" : "linear-gradient(0deg, rgba(255, 255, 255, 0.38) 33.89%, rgba(0, 179, 159, 0.74) 99.81%)"};
    .platform-header-row {
      justify-content: space-between;
      align-items: center;
    }
    .header-detail {
      display: flex;
      flex-direction: column;
      flex-basis: 45%;
      flex-grow: 1;
    }
    .header-title {
      color: ${(props) => props.theme.primaryColor};
      padding-right: 80px;
      margin-bottom: 20px;
    }
    .header-title-description {
      color: ${(props) => props.theme.tertiaryColor};
      font-weight: 400;
      font-size: 1.438rem;
      line-height: 2rem;
      padding-right: 80px;
      margin-bottom: 30px;
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    .platform {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      cursor: zoom-in;
    }
    @media screen and (max-width: 992px) {
      padding-bottom: 100px;
      .platform {
        margin-top: 50px;
      }
    }
    @media screen and (max-width: 768px) {
      padding: 50px 0;
      .header-title,
      .header-title-description {
        padding-right: 0;
        text-align: center;
      }
      .header-buttons{
         justify-content: center;
      }
      .header-title {
        margin-bottom: 10px;
      }
      .header-title-description {
        margin-bottom: 20px;
      }
    }
  }
`;


const Header = () => {
  const { isDark } = useStyledDarkMode();
  return (
    <PlatformEngineeringWrapper $isDark={isDark}>
      <div className="platform-engineering header">
        <Container>
          <Row className="row platform-header-row">
            <Col className="col header-detail" $md={6}>
              <h1 className="header-title">Platform Engineering</h1>

              <p className="header-title-description">
                Deliver reliable self-service toolchains and workflows for all dev teams, at scale, with observability, security, and automation.
              </p>
              <div className="header-buttons">
                <Button
                  $primary
                  title="Try Kanvas"
                  $external={true}
                  $url="https://kanvas.new"
                />
                <span className="see-doc-link">
                  <Link to={"/kanvas"}>See Documentation</Link>
                  <FaArrowRight />
                </span>
              </div>
            </Col>
            <Col className="col platform" $md={6}>
              <SimpleReactLightbox>
                <SRLWrapper>
                  <img src={MesheryDashboard} alt="Meshery Dashboard" />
                </SRLWrapper>
              </SimpleReactLightbox>
            </Col>
          </Row>
        </Container>
      </div>
      <Projects title="Trusted by leading engineering teams worldwide" />
    </PlatformEngineeringWrapper>
  );
};

export default Header;