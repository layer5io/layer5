import React from "react";
import styled from "styled-components";

import { Container } from "../../reusecore/Layout";
import Test from "./meshmap-icon-white.svg";
import Button from "../../reusecore/Button";

const MeshMapCTAWrapper = styled.div`
.CTAbody{
background: linear-gradient(180deg, rgba(0,179,159,1) 100%, rgba(71,126,150,1) 477E96%);
border-radius: 4rem;
    display: flex;
    padding: 2rem;
    text-align: center;
    margin: 6rem auto 2rem;

    .rotate{
      animation: coin-rotate 10s linear infinite;
      transition: all .3s;
      display: block;
      margin: 1rem auto;
      height: 18rem;
    }

    @keyframes coin-rotate {
      from {
        transform: rotateY(0);
      }
    
      to {
        transform: rotateY(180deg);
      }
    }

    .button-text{
      color: ${props => props.theme.white};
      margin: 3rem auto 1rem;
    }

    .subtext {
      color: ${props => props.theme.white};
      font-size: 1.4rem;
    }

    h2{
      padding: 0;
      color: ${props => props.theme.white};
      span{
        font-size: 6rem;
      }
    }

    @media screen and (max-width:767px) {
      display: block;
      .rotate {
        margin: 0 auto 0.25rem;
        height: 12rem;
      }
      h2{
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

const MeshMapCTA = () => {
  return (
    <MeshMapCTAWrapper>
      <Container>
        <div className="CTAbody">
          <img className="rotate" src={Test} />
          <div className="text">
            <h2><span>MeshMap</span> is here!</h2>
            <p className="subtext">Need YAML no more.</p>
            <p className="button-text">A world class visual editor integrated with the service mesh catalog. You don't want to miss out.</p>
            <Button primary url="/meshmap" className="button" external={false}>
            Try MeshMap Now!
            </Button>
          </div>
        </div>

      </Container>
    </MeshMapCTAWrapper>
  );
};

export default MeshMapCTA;

