import React from "react";
import FeatureUseCardWrapper from "./featureUseCard.style";
import { Col } from "../../reusecore/Layout";

const FeatureUseCard = (props) => {
  return (
    <Col sm={props.sm} md={props.md} lg={props.lg} className={"display-container"}>
      <FeatureUseCardWrapper >
        <div className={"image-container"}>
          {/*<img/>*/}
        </div>
        <div>
          <p className={"image-heading"}>{props.data.heading}</p>
          <span>
            {props.data.subtitle}
          </span>
        </div>
      </FeatureUseCardWrapper>
    </Col >

  );
};

export default FeatureUseCard;