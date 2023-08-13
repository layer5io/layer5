import React from "react";
import styled from "styled-components";
import Button from "../../reusecore/Button";
import { Container } from "../../reusecore/Layout";
import MesheryTitle from "./images/meshery-title.svg";
import playgroundbgCTA from "./images/playground-bg-CTA.png";
import smalldots from "./images/small-dots.png"
import MesheryIcon from "../../assets/images/meshery/icon-only/meshery-logo.webp"

const DockerExtensionCTAWrapper = styled.div`
p {
  color: white;   
}
.card-right{
  padding-top: 3rem;
  padding-left: 1rem;
  padding-bottom: 3rem;
  text-align: left;
}
.playground{
  color:${(props) => props.theme.secondaryColor};
  font-size: 5rem;
  padding-top: 1.5rem;
}
.card-left{
  padding-top: 3rem;
  padding-left: 1rem;
  padding-bottom: 3rem;
  justify-content: center;
  align-items: center;
}
.playground-callout {
  background: #1E2117 url(${playgroundbgCTA}) no-repeat center;
  background-size: cover;
    border-radius: 4rem;
    display: flex;
    padding: 2rem;
    text-align: center;
    margin: 6rem auto 4rem;
    overflow: hidden;
    .dots-icon {
      position: relative;
      &::before {
        content: "";    
        position: absolute;
        top: -2rem;
        left: -2rem;
        width: 5rem; 
        height: 7rem;
        background-image: url(${smalldots});
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
    .line {
      position: relative;
      width: 0.2rem;
      height: 13rem; 
      margin: 2rem 2rem 0 2rem; 
      
    }
    .line::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${(props) => props.theme.caribbeanGreenColor}; 
      border-radius: 5%; 
    }
  
    .meshery-title {
      height: 5rem;
      margin-right: 4rem;
      padding: 2rem 0 0 4rem;
      
    }
    .meshery-icon {
      position: relative;
      &::before {
        content: "";  
        opacity: 40%;  
        position: absolute;
        bottom: -4rem;
        width: 8rem; 
        height: 8rem;
        background-image: url(${MesheryIcon});
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
    h2{
      color: ${props => props.theme.whiteToBlack};
      padding: 0;
    }
    Button {
      margin: 1rem 0;
    }
    @media screen and (max-width:1200px) {
      .meshery-icon {
        &::before {
        right: -3rem;
      }
      }
      .meshery-title{
        padding-right: 2rem;
      }
    }
    @media screen and (max-width:1000px) {
      .card-right{
        padding: 1rem 0 0 0;
        text-align: center;
      }
      display: block;
      .line {
        display: none;
      }
      .card-left{
        padding: 1rem 0 1rem 0;
      }
      .playground{
        font-size: 3rem;
      }
      .meshery-title {
        height: 4rem;
        margin-right: 2rem;
        padding: 2rem 1rem 0 4rem;
        
      }
    }
  }
`;

const DockerExtensionCTA = () => {
  return (
    <DockerExtensionCTAWrapper>
      <Container> 
        <div className="playground-callout">
        <div className="dots-icon"/>
        <div className="card-left">
          <img className="meshery-title" src={MesheryTitle} alt="Meshery Title" loading="lazy" />
          <div className="playground">Playground</div>
        </div>
        <div class="line"></div>
          <div className="card-right">
            <div>
              <h4>Mesh Your Way to Success<br></br>Discover, validate, and visualize<br></br> Application with ease. Don't wait </h4>
            </div>
            <p></p>
            <Button primary url="https://play.meshery.io/" external={true}>
              Try Playground now!
            </Button>
         

          </div>
          <div className="meshery-icon"/>
        </div>
      </Container>
    </DockerExtensionCTAWrapper>
  );
};

export default DockerExtensionCTA;