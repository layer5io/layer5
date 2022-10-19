import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Col, Container, Row } from "../../../reusecore/Layout";
import Button from "../../../reusecore/Button";

const ServiceMeshImage = "./service-mesh.svg";

const LearnServiceMeshCTAWrapper = styled.div`
    background-color:${props => props.theme.DarkTheme ? "rgb(20, 20, 20)" : "rgb(250, 250, 250)"};
    Button:hover {
      box-shadow: 0 2px 10px ${props => props.theme.DarkTheme ? "rgb(255 255 255 / 40%)" : "rgb(0 0 0 / 40%)"};
    }
    padding: 5rem 0;
    margin-top: 2rem;
    
    .section-wrapper{
      @media (max-width: 767px){
          flex-direction: column-reverse;
          margin-top: -4rem;
      }
      .content{
          @media (max-width: 767px){
            text-align: center;
          }
          h2{
            margin-bottom: 2rem;
            font-weight: 700;
        }
      }
      .image{
        @media (max-width: 767px){
          margin-bottom: 2rem;
          display: flex;
          justify-content: center;
        }
      img{
        max-height: 16rem; 
      }
    }
`;

const LearnServiceMeshCTA = () => {
  return (
    <LearnServiceMeshCTAWrapper>
      <Container>
        <Row className="section-wrapper" Vcenter>
          <Col className="content" sm={12} md={6} lg={6}>
            <h2>Learn to service mesh with interactive labs</h2>
            <Button secondary title="Let's Learn" url="/learn/service-mesh-labs" />
          </Col>
          <Col className="image" sm={12} md={6} lg={6}>
            <StaticImage src={ServiceMeshImage} alt="Learn how to Service Mesh" objectFit="contain" />
          </Col>
        </Row>
      </Container>
    </LearnServiceMeshCTAWrapper>
  );
};

export default LearnServiceMeshCTA;
