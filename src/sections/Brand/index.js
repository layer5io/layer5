import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "../../reusecore/Layout";
import BrandPageWrapper from "./brandPage.style";

import Layer5 from "../Brand-components/layer5";
import MesheryBrand from "../Brand-components/meshery";
import ImageHubBrand from "../Brand-components/imagehub";
import SMPBrand from "../Brand-components/smp";

const Brand = () => {
    return (
        <BrandPageWrapper>
            <Container>
                <Layer5 />

                <MesheryBrand />

                <ImageHubBrand />

                <SMPBrand />
            </Container>
        </BrandPageWrapper>
    );
};

export default Brand;
