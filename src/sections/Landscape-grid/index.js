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
                            <div className="timeline">
                                <div className="meshname-img">
                                    {serviceMeshes.map(mesh =>
                                        <div className={`content${mesh.timeline_order%2}`}>
                                            <div className={`data-cont arr${mesh.timeline_order%2}`}>
                                                <div key={mesh.timeline_order} className={`img-style${mesh.timeline_order%2}`}>
                                                    <img src={mesh.icon} alt={mesh.name} style={{ width: "inherit", height: "inherit" }} />
                                                </div>
                                                <p className="mesh-name"> {mesh.name}</p>
                                            </div>
                                            <p className="mesh-ann-date">{mesh.announce_date}</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                        </Row>
                    </div>
                </Container>
            </div>
        </LandscapePageWrapper>
    );
};

export default LandscapeGrid;
