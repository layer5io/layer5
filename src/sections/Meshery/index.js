import React from "react";
import { Link } from "gatsby";

import { Container, Row, Col } from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";
import Counters from "../Counters";


import MesheryWrapper from "./meshery.style";

const MesheryPage = () => {
    return (
        <MesheryWrapper>
            <SectionTitle> 
                <h1>Meshery</h1>
            </SectionTitle>
            <Row>
                <Col lg={6}>
                <Counters />
                </Col>
            </Row>
            
        </MesheryWrapper>
    );
};

export default MesheryPage;
