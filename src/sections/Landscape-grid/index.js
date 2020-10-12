import React from "react";
import { Container, Row, Col } from "../../reusecore/Layout";
import PageHeader from "../../reusecore/PageHeader";
import { LandscapePageWrapper } from "./LandscapeGrid.style";
import ServiceMeshComparison from "../../assets/images/landscape/comparison-of-service-mesh-strengths.svg";

const LandscapeGrid=() => {
    return (
        <LandscapePageWrapper>
            <PageHeader title="Landscape" path="Landscape" />
            <div className="landscape-page-wrapper">
                <Container>
                    <div className="landscape-grid-wrapper">
                        <Row>
                            <h2>Comparison of Service Mesh Strengths</h2>
                            <ServiceMeshComparison />
                        </Row>
                    </div>
                </Container>
            </div>
        </LandscapePageWrapper>
    );
};

export default LandscapeGrid;
