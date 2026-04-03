import React from "react";
import FeatureUseCardWrapper from "./featureUseCard.style";
import { Col } from "../../reusecore/Layout";

const FeatureUseCard = (props) => {
  return (
    <Col $sm={props.sm} $md={props.md} $lg={props.lg} className={"display-container"}>
      <FeatureUseCardWrapper >
        <div className={"image-container"}>
          <img src={props.data.image} alt={""}/>
        </div>
        <div className={"feature-info-container"}>
          <p className={"feature-title"}>{props.data.heading}</p>
          <span className={"feature-description"}>
            {props.data.subtitle}
          </span>
        </div>
      </FeatureUseCardWrapper>
    </Col >

  );
};

export default FeatureUseCard;