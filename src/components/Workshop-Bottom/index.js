import React from "react";
import WorkshopImage from "../../assets/images/workshops/workshops.svg";
import WorkshopBottomWrapper from "./Workshop-Bottom.style";
import Button from "../../reusecore/Button";

const WorkshopBottom = () => {
    return (
        <WorkshopBottomWrapper>
            <img src={WorkshopImage} alt="WorkshopImage" className="bottom-image" />
            <Button primary className="request-btn" url="mailto:support@layer5.io" external="true">
                Request A Workshop
            </Button>
        </WorkshopBottomWrapper>
    );
};

export default WorkshopBottom;
