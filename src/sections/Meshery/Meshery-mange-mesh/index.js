import React from "react";
import { Col, Container, Row } from "../../../reusecore/Layout";
import styled from "styled-components";
import Button from "../../../reusecore/Button";
import MultiMesh from "./multi-mesh.svg";
import { GiClockwork } from "react-icons/gi";

const ManageMeshWrapper = styled.div`
  margin: 4rem auto;
  h2{
    font-weight: 700;
  }
  p{
    margin-bottom: 2rem;
  }
  .banner-btn {
                    margin: 0rem 0.75rem 0 0;
                    color: white;
                    .button-icon{
                        margin-right: 0.625rem;
                    }    
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
  return (
    <ManageMeshWrapper>
      <Container>
        <Row Vcenter>
          <Col sm={12} lg={6}>
            <h2>Manage your Mesh</h2>
            <p>Manage all aspects of running your service mesh no matter what service mesh you're running</p>
            <Button primary className="banner-btn" title="How Meshery Works" url="/service-mesh-management/meshery/operating-service-meshes">
              <GiClockwork size={21} className="button-icon" />
            </Button>
          </Col>
          <Col sm={12} lg={6}>
            <img src={MultiMesh} alt="meshery-multi-mesh" />
          </Col>
        </Row>
      </Container>
    </ManageMeshWrapper>
  );
};

export default MesheryManageMesh;
