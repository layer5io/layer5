import React from "react";

import WorkshopImage from "../../assets/images/workshops/workshops.svg";
import WorkshopBottomWrapper from "./Workshop-Bottom.style";
import Button from "../../reusecore/Button";

const WorkshopBottom = () => {
    return (
        <WorkshopBottomWrapper>
            <img src={WorkshopImage} alt="WorkshopImage" className="bottom-image" />
            <a href="mailto:support@layer5.io" target="_blank" rel="noreferrer" >
                <Button primary className="request-btn">
            Request A Workshop
                </Button>
            </a>
        </WorkshopBottomWrapper>
    );
};

export default WorkshopBottom;
