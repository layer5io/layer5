import React from "react";
import { Container, Col, Row } from "../../../../reusecore/Layout";
import styled from "styled-components";
import { ReactComponent as HeroImage } from "../images/meshery-operator-colorMode.svg";
import HeroImageLight from "../images/meshery-operator-white.svg";

const HowMesheryWorksHeroWrapper = styled.div`
    
    margin-bottom: 4rem;
    .hero-text{
      margin: auto;
      h5{
        font-weight: 600;
      }
      h2 {
        font-weight: 400;
      }
      @media only screen and (max-width: 992px){
         margin-top: 2rem;
         margin-bottom: 2rem;
      }
    }
    .hero-img-wrapper{
      background-color: ${props => props.theme.secondaryLightColorTwo};
      border-bottom-left-radius: 4.375rem;
      border-bottom-right-radius: 4.375rem;
      vertical-align: top;
      justify-content: top;
      align-self: top;
      margin-top: 0px;
      padding-top: 0px;
      svg {
        .meshery-operator-colorMode_svg__colorMode1, 
        .meshery-operator-colorMode_svg__colorMode2
        {
          fill: ${props => props.theme.greyB4B4B4ToGrey505050};
          enable-background: new;
        }
        .meshery-operator-colorMode_svg__colorMode2 {
          fill: ${props => props.theme.grey8C8C8CToGreen1E2117};
        }

        padding: 2rem 2rem;
        margin: auto;
        @media only screen and (max-width: 992px){
            margin:auto;
            padding: 1rem 0rem 0rem 0rem;
         }
      img {
        padding: 2rem 2rem;
        margin: auto;
        @media only screen and (max-width: 992px){
            margin:auto;
            padding: 1rem 0rem 0rem 0rem;
         }
      }
    }
  
`;

const HowMesheryWorksHero = () => {

  return (
    <HowMesheryWorksHeroWrapper>
      <Container>
        <Row>
          <Col Vcenter className="hero-text" xs={8} lg={6}>
            <h5>Distributed systems are hard.</h5>
            <h1>Wrangle your infrastructure</h1>
            <h2>with Meshery Operator and MeshSync.</h2>
          </Col>
          <Col className="hero-img-wrapper" xs={4} lg={6}>
            <HeroImage alt="hero" />
          </Col>
        </Row>
      </Container>
    </HowMesheryWorksHeroWrapper>
  );
};

export default HowMesheryWorksHero;
