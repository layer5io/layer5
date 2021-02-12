import React from "react";
import styled from "styled-components";
import {Col, Container, Row} from "../../../reusecore/Layout";
import Button from "../../../reusecore/Button";
import ServiceMeshImage from "./service-mesh.svg";

const LearnServiceMeshCTAWrapper = styled.div`
    background-color:${props => props.theme.secondaryLightColor};
    padding: 5rem 0;
    margin-top: 2rem;
    h2{
      margin-bottom: 2rem;
      font-weight: 700;
    }
    img{
      max-height: 16rem;
      @media (max-width: 767px){
        display: none;
      } 
    }
`;

const LearnServiceMeshCTA = () => {
  return(
    <LearnServiceMeshCTAWrapper>
      <Container>
        <Row Vcenter>
          <Col sm={12} md={6} lg={6}>
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
