import React from "react";
import styled from "styled-components";
import { Container } from "../../../../reusecore/Layout";
import SMPHero from "../../../../assets/images/smp-page/smp-hero.webp";
import SMPLogo from "../../../../assets/images/smp-page/smp-white.svg";
import Button from "../../../../reusecore/Button";

const PerformanceCTAWrapper = styled.div`
.CTAbody {
  background-image: url(${SMPHero});
  background-size: cover;
  border-radius: 1.5rem;
  display: flex;
  padding: 2.5rem 2rem;
  text-align: center;
  margin: 3rem auto;
  align-items: center;
  
  .logo {
    width: 80%;
    min-width: 160px;
  }

  .button {
    margin: 1rem auto;
  }
  .text{
    display: block;
    margin: auto;
  }
  .subtext {
    color: ${props => props.theme.white};
    font-size: 1.5rem;  
    font-weight: 300;
    margin: 1rem 0rem;
  }
  h2 {
    padding: 0;
    color: ${props => props.theme.white};
    span {
      font-size: 3rem;
    }
  }
  @media screen and (max-width:767px) {
    display: block;
    .logo {
      width: 30%;
    }
    h2 {
      margin: 1rem 0rem;
      span{
        font-size: 2rem;
        
      }
    }
    .subtext{
      font-size: 1rem;
    }
    .button-text{
      display: none;
    }
  }
  @media screen and (max-width:340px) {
    h2{
      span{
        font-size: 2rem;
      }
    }
  }
}  
`;

const PerformanceCTA = ({ category }) => {
  const isObservability = category && category.toLowerCase().includes("observability");
  return isObservability ? (
    <PerformanceCTAWrapper>
      <Container>
        <div className="CTAbody">
          <div>
            <img className="logo" src={SMPLogo} />
          </div>
          <div className="text">
            <h2><span>Cloud Native Performance</span></h2>
            <h3 className="subtext">Standardizing Service Mesh Value Measurement</h3>
            <Button primary url="/projects/cloud-native-performance" className="button" external={false}>
                            Learn More
            </Button>
          </div>
        </div>
      </Container>
    </PerformanceCTAWrapper>
  ) : null;
};

export default PerformanceCTA;

