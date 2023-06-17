import React, { useState, useEffect } from "react";
import styled from "styled-components";

const BannerWrapper = styled.div`
display: flex;
max-width: 100%;
overflow: hidden;

.left-img {
    position: relative;
    flex: 0 0 20%;
    text-align: center;
    padding: 4%;
    border: 2px solid #969696;
    border-right-width: 20px;
    transform-origin: top right;
    transform: skewX(-25deg);
}

.desc {
    flex: 0 0 60%;
    /* width: 60vw; */
    text-align: center;
    border: 2px solid #969696;
    padding: 4%;
    transform: skewX(-25deg);
}

.desc > * {
  transform: skewX(25deg); /* Counteract the parent's skew */
}

.right-img {
    flex: 0 0 20%;
    text-align: center;
    padding: 4%;
    border: 2px solid #969696;
    transform-origin: bottom left;
    transform: skewX(-25deg);
}
`;

const CaseStudyBanner = () => {

  return (
    <BannerWrapper>
      <div className="left-img">1</div>
      <div className="desc">
        <h2>Discover how HPE uses Meshery to manage SPIRE</h2>
      </div>
      <div className="right-img">3</div>
    </BannerWrapper>
  );
};

export default CaseStudyBanner;
