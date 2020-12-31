import React from "react";
import BrandPageWrapper from "./brandPage.style";

import Layer5 from "./Brand-components/layer5";
import MesheryBrand from "./Brand-components/meshery";
import ImageHubBrand from "./Brand-components/imagehub";
import SMPBrand from "./Brand-components/smp";

const Brand = () => {
    return (
        <BrandPageWrapper>
            <Layer5 />
            <MesheryBrand />
            <ImageHubBrand />
            <SMPBrand />
        </BrandPageWrapper>
    );
};

export default Brand;
