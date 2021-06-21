import React, { useState } from "react";
import { Container, Row, Col } from "../../reusecore/Layout";

const BlogAccordion = (isAccOpen , accID , accIndex , accImageRoute , accImageLink , accName , accMoreInfo , accDesc) => {

  return (
    <div className={isAccOpen && accID === accIndex ? "parent-cont-active" : "parent-cont"}>
      <Row className={isAccOpen && accID === accIndex && accIndex % 2 == 1 ? "row-elem moreInfo-div-active cont-row-reverse" : isAccOpen && accID === accIndex && accIndex % 2 == 0 ? "row-elem moreInfo-div-active cont-row" : accID !== accIndex && accIndex % 2 == 1 ? "row-elem moreInfo-div cont-row-reverse" : "row-elem moreInfo-div cont-row"}>
        <Col xs={5} sm={3} lg={4} className="custom-col">
          <div className="img1">
            <a href={accImageRoute} target="_blank" rel="noopener noreferrer">
              <img  src={accImageLink} title="Click to know More about our partner" alt={accName} />
            </a>
          </div>
        </Col>
        <Col xs={12} sm={9} lg={8} className="mobview">
          <div className={isAccOpen && accID === accIndex ? "container container-active":"container cont-center"}>
            <h2>{accName}</h2>
            <div>
              {accMoreInfo}
              {accDesc}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BlogAccordion;