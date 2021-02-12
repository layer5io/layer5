import React from "react";
import styled from "styled-components";
import {Col, Container, Row} from "../../../reusecore/Layout";
import Button from "../../../reusecore/Button";
import ServiceMeshImage from "./service-mesh.svg";

const LearnServiceMeshCTAWrapper = styled.div`
    background-color:${props => props.theme.secondaryLightColor};
    padding: 5rem 0;
    margin-top: 2rem;
    
    .section-wrapper{
      @media (max-width: 767px){
          flex-direction: column-reverse;
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
      img{
        max-height: 16rem; 
      }
    }
`;

const LearnServiceMeshCTA = () => {
  return(
    <LearnServiceMeshCTAWrapper>
      <Container>
        <Row className="section-wrapper" Vcenter>
          <Col className="content" sm={12} md={6} lg={6}>
            <h2>Learn to service mesh with interactive labs</h2>
            <Button secondary title="Let's Learn" url="/learn/service-mesh-labs"/>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <img src={ServiceMeshImage} alt="Learn Service Mesh"/>
          </Col>
        </Row>
      </Container>
    </LearnServiceMeshCTAWrapper>
  );
};

export default LearnServiceMeshCTA;
