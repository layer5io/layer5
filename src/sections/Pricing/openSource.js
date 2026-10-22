import React from "react";
import Button from "../../reusecore/Button";
import styled from "styled-components";
import { BsArrowUpRight } from "@react-icons/all-files/bs/BsArrowUpRight";
const OpenSourceBanner = () => {
  return (
    <OpenSourceBannerWrapper>
      <div className="banner-content">
        <div>
          <h2>Layer5-Sponsored Open Source Program</h2>
          <p>
            We 💚 open source and are proud to sponsor your free use of our tools.
          </p>
        </div>
        <Button $primary title="Open Source Pricing" $url="/pricing/open-source-program"><BsArrowUpRight size={21} className="icon-left" /></Button>
      </div>
    </OpenSourceBannerWrapper>
  );
};

const OpenSourceBannerWrapper = styled.div`
  width: 100%;
  background: #00b39f; 
  margin-bottom: 2rem;
  padding: 2rem 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  .banner-content {
    max-width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
  
    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        gap: 1.5rem;
    }
  }
  div {
    color: white;
    h2 {
      color: white;
    }
    p {
      font-size: 1.1rem;
      opacity: 0.9;
    }
  }
`;
export default OpenSourceBanner;
