import React from "react";
import Button from "../../reusecore/Button";
import styled from "styled-components";
import { BsArrowUpRight } from "@react-icons/all-files/bs/BsArrowUpRight";

const BestPracticesBanner = () => {
  return (
    <ObservabilityBannerWrapper>
      <div className="banner-content">
        <span className="banner-text">
          Discover best practices and reusable templates for Kubernetes and cloud-native infrastructure.
        </span>
        <Button $primary title="Cloud native catalog" $url="/cloud-native-management/catalog">
          <BsArrowUpRight size={16} className="icon-left" />

        </Button>
      </div>
    </ObservabilityBannerWrapper>
  );
};

const ObservabilityBannerWrapper = styled.div`
  width: 100%;
  background: #00b39f;
  margin-bottom: 4rem;
  padding: 1rem 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  
  .banner-content {
    max-width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    
    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
      gap: 1rem;
    }
  }
  
  .banner-text {
    color: white;
    font-size: 1.1rem;
    font-weight: 500;
    
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
  
`;

export default BestPracticesBanner;