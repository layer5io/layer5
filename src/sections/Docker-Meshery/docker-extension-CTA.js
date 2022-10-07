import React from "react";
import styled from "styled-components";
import Button from "../../reusecore/Button";
import Dockerimage from "../../assets/images/docker-extension/Docker_animated.svg";
import { Container } from "../../reusecore/Layout";

const DockerExtensionCTAWrapper = styled.div`
p {
  color:  black;  
}
.docker-callout {
    background: linear-gradient(90deg, hsla(186, 33%, 94%, 0.7) 33%, hsla(173, 54%, 61%, 1) 100%);
    border-radius: 4rem;
    display: flex;
    padding: 2rem;
    text-align: center;
    margin: auto;
    margin-top: 6rem;
    margin-bottom: 4rem;

    .text-gray {
      margin-top: 4rem;
    }
    img {
      height: 18rem;
      margin-right: 2rem;
    }
    h2{
      color: black;
      padding: 0;
    }
    @media screen and (max-width:767px) {
      display: block;
      img {
        margin: 0 auto 0.25rem;
        height: 10rem;
      }
      .text-gray {
        margin-top: 2rem;
      }
    }
  }
`;

const DockerExtensionCTA = () => {
  return (
    <DockerExtensionCTAWrapper>
      <Container>
        <div className="docker-callout">
          <img src={Dockerimage} alt="Docker and Meshery" />
          <div>
            <h2>Docker Extension for Meshery is now available!</h2>
            <p><i>Managing cloud native infrastructure has never been easier.</i></p>
            <p className="text-gray">Sign up to get access the extension.</p>
            <Button primary url="/docker-extension-meshery" external={false}>
            Get Access
            </Button>
          </div>
        </div>
      </Container>
    </DockerExtensionCTAWrapper>
  );
};

export default DockerExtensionCTA;
