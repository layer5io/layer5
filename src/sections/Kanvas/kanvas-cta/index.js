import React from "react";
import styled from "styled-components";

import { Container } from "../../../reusecore/Layout";
import Locator from "./locator.svg";
import Button from "../../../reusecore/Button";

const KanvasCTAWrapper = styled.div`
.CTAbody {
  background: 
    linear-gradient(180deg, rgba(71,126,150,1) 0%, rgba(0,179,159,1) 100%);
  border-radius: 2rem;
  display: flex;
  padding: 2rem;
  text-align: center;
  margin: 2rem auto;
  align-items: center;
  
  .rotate{
    animation: coin-rotate 4s ease-in-out infinite alternate;
    /* animation-fill-mode: both; */
    transition: all .3s;
    display: block;
    margin: 1rem auto;
    height: 15rem;  
  }
  @keyframes coin-rotate {
    from {
      transform: translateY(5%);
    }
    to {
      transform: translateY(-5%);      }
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
      font-size: 6rem;
    }
  }

  @media screen and (max-width:767px) {
    display: block;
  
    .rotate {
      margin: 0 auto 0.25rem;
      height: 12rem;
    }
    h2 {
      margin: 1rem 0rem;
      span{
        font-size: 3rem;
        
      }
    }
    .subtext{
      font-size: 1rem;
    }
    .button-text{
      display: none;;
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

const KanvasCTA = () => {
  return (
    <KanvasCTAWrapper>
      <Container>
        <div className="CTAbody">
          <div>
            <img className="rotate" src={Locator} />
          </div>
          <div className="text">
            <h2><span>Kanvas</span> is here!</h2>
            <h3 className="subtext">Discover a catalog of best practice cloud native patterns.</h3>
            <Button $primary $url="/kanvas" className="button" $external={false}>
              Try Kanvas Now!
            </Button>

          </div>
        </div>

      </Container>
    </KanvasCTAWrapper>
  );
};

export default KanvasCTA;

