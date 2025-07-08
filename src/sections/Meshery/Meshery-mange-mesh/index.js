import React from "react";
import { Col, Container, Row } from "../../../reusecore/Layout";
import styled from "styled-components";
import Button from "../../../reusecore/Button";
import { GiClockwork } from "@react-icons/all-files/gi/GiClockwork";
import { StaticImage } from "gatsby-plugin-image";
import KanvasVisualizerViews from "../../Home/Playground-home";
const  MultiMesh = "./multi-mesh.svg";

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
  
  .multi-mesh-img{
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
        <KanvasVisualizerViews />
        {/* <Row $Vcenter>
          <Col $sm={12} $lg={6}>
            <h2>Manage your Infrastructure</h2>
            <p>Manage all aspects of running your infrastructure no matter what platform you're running</p>
            <Button $primary className="banner-btn" title="How Meshery Works" $url="/cloud-native-management/meshery/operating-cloud-native-infra">
              <GiClockwork size={21} className="button-icon" />
            </Button>
          </Col>
          <Col $sm={12} $lg={6}>
            <StaticImage src={MultiMesh} alt="Kanvas" className="multi-mesh-img"/>
          </Col>
        </Row> */}
      </Container>
    </ManageMeshWrapper>
  );
};

export default MesheryManageMesh;
