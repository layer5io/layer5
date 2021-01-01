import React from "react";
import BrandPageWrapper from "./brandPage.style";

import Layer5Brand from "./Brand-components/layer5";
import MesheryBrand from "./Brand-components/meshery";
import ImageHubBrand from "./Brand-components/imagehub";
import SMPBrand from "./Brand-components/smp";
import CommunityBrand from "./Brand-components/community";

const Brand = () => {
    return (
        <BrandPageWrapper>
            <Layer5Brand />
            <MesheryBrand />
            <ImageHubBrand />
            <SMPBrand />
            <CommunityBrand />
        </BrandPageWrapper>
    );
};

export default Brand;
