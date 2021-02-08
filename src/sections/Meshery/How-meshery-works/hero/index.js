import React from "react";
import {Container, Col, Row} from "../../../../reusecore/Layout";
import styled from "styled-components";
import HeroImage from "../images/meshery-operator-dark.svg";

const HowMesheryWorksHeroWrapper = styled.div`
    margin-bottom: 4rem;
    .hero-text{
      h5{
        font-weight: 600;
      }
      p{
        margin-top: 1rem;
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
      img {
        padding: 2rem 2rem 4rem 0;
        margin-left: -2.5rem;
        @media only screen and (max-width: 992px){
            display:block;
            margin:auto;
            padding: 2rem;
         }
      }
    }
  
`;

const HowMesheryWorksHero = () => {
  return(
    <HowMesheryWorksHeroWrapper>
      <Container>
        <Row Vcenter>
          <Col className="hero-text" xs={12} lg={6}>
            <h5>Distributed systems are hard.</h5>
            <h1>Wrangle your mesh</h1>
            <h2>run Meshery Operator with MeshSync inside.</h2>
          </Col>
          <Col className="hero-img-wrapper" xs={12} lg={6}>
            <img src={HeroImage} alt="hero"/>
          </Col>
        </Row>
      </Container>
    </HowMesheryWorksHeroWrapper>
  );
};

export default HowMesheryWorksHero;
