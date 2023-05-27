import React from "react";
import { Container, Row, Col, Grid, } from "../../reusecore/Layout";
import Button from "../../reusecore/Button";
import Cone from "../../assets/images/gitops/conelight.svg";
import MeshMap from "../../assets/images/meshmap/meshmap-light-stacked.svg";
import GitOpsWrapper from "./meshery.style.js";



const GitOpsPage = () => {
    return (
        <GitOpsWrapper>
            <Container>
                <div>
                    <Row>
                        <Col lg={6} md={6}>
                            <img src={Cone} />
                            <img src={MeshMap} className="meshmap-logo" />
                        </Col>
                        <Col lg={6} md={6}>
                            MeshMap creates a visual map of your codebase that stays up to date with every PR. Visualize your whole codebase, see generated insights, and share a single, accurate source of truth to help quickly onboard new contributors.

                            MeshMap uses GitHub to generate dependencies between files and update your map to reflect changes in your codebase.

                            We do not store your code, your code is only stored by GitHub. We analyze your code while it's on GitHub's servers using a GitHub Action.

                            See our docs for more information on why we request these permissions.
                        </Col>
                    </Row>
                </div>
            </Container>
        </GitOpsWrapper>
    );
};

export default GitOpsPage;
