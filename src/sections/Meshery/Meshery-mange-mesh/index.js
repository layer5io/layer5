import React from "react";
import {Col, Container, Row} from "../../../reusecore/Layout";
import styled from "styled-components";
import Button from "../../../reusecore/Button";
import MultiMesh from "./multi-mesh.svg";

const ManageMeshWrapper = styled.div`
  //margin: 4rem auto;
`;

const MesheryManageMesh = () => {
    return(
        <ManageMeshWrapper>
            <Container>
                <Row Vcenter Hcenter>
                    <Col sm={12} lg={6}>
                        <h2>Manage your Mesh</h2>
                        <p>Manage the performance of your service <br/>mesh and its workloads</p>
                        <Button primary title="Run Meshery" url="/service-mesh-management/meshery/how-to-get-started-with-any-service-mesh"/>
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
