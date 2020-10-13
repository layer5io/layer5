import React from "react";
import { Container, Row } from "../../reusecore/Layout";
import PageHeader from "../../reusecore/PageHeader";
import { LandscapePageWrapper } from "./LandscapeGrid.style";
import ServiceMeshComparison from "../../assets/images/landscape/comparison-of-service-mesh-strengths.svg";
import { serviceMeshes } from '../../collections/landscape/timeline'

const LandscapeGrid=() => {
    return (
        <LandscapePageWrapper>
            <PageHeader title="Landscape" path="Landscape" />
            <div className="landscape-page-wrapper">
                <Container>
                    <div className="landscape-grid-wrapper">
                        <Row>
                            <h2>Comparison of Service Mesh Strengths</h2>
                            <img src={ServiceMeshComparison} width="100%" alt="Service Mesh Comparison" />
                            {serviceMeshes.map(mesh => <div key={mesh.timeline_order}>
                                {/* <img src={require(`../../${mesh.icon}`)} alt={mesh.name} /> */}
                                {mesh.name}
                            </div>)}
                        </Row>
                    </div>
                </Container>
            </div>
        </LandscapePageWrapper>
    );
};

export default LandscapeGrid;
