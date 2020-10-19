import React from "react";

import WorkshopImage from "../../images/workshops/workshops.svg";
import WorkshopBottomWrapper from "./Workshop-Bottom.style";

const WorkshopBottom = () => {
    return (
        <WorkshopBottomWrapper>
            <img src={WorkshopImage} alt="WorkshopImage" className="bottom-image" />
            <button type="button" className="request-btn">
                <a href="mailto:support@layer5.io" target="_blank" rel="noreferrer" >
          Request A Workshop
                </a>
            </button>
        </WorkshopBottomWrapper>
    );
};

export default WorkshopBottom;
