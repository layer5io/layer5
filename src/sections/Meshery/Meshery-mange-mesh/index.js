import React from "react";
import {Col, Container, Row} from "../../../reusecore/Layout";
import styled from "styled-components";
import Button from "../../../reusecore/Button";
import MultiMesh from "./multi-mesh.svg";

const ManageMeshWrapper = styled.div`
  margin: 4rem auto;
  h2{
    font-weight: 700;
  }
  p{
    margin-bottom: 2rem;
  }
  img{
    height: 25rem;
    @media (max-width: 62rem) {
      margin-top: 2rem;
    }
  }
  @media (max-width: 62rem) {
     text-align: center;
  }
`;

const MesheryManageMesh = () => {
  return(
    <ManageMeshWrapper>
      <Container>
        <Row Vcenter>
          <Col sm={12} lg={6}>
            <h2>Manage your Mesh</h2>
            <p>Manage the performance of your service <br/>mesh and its workloads</p>
            <Button primary title="See how Meshery works" url="/service-mesh-management/meshery/operating-service-meshes"/>
          </Col>
          <Col sm={12} lg={6}>
            <img src={MultiMesh} alt="meshery-multi-mesh"/>
          </Col>
        </Row>
      </Container>
    </ManageMeshWrapper>
  );
};

export default MesheryManageMesh;
