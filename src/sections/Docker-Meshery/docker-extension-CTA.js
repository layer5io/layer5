import React from "react";
import styled from "styled-components";
import Button from "../../reusecore/Button";
import { Container } from "../../reusecore/Layout";
import Dockerimage from "../../assets/images/docker-extension/Docker_animated.svg";


const DockerExtensionCTAWrapper = styled.div`
p {
  color:  black;  
}
.card-right{
  padding-top: 3rem;
  padding-left: 1rem;
}

.docker-callout {
    background: linear-gradient(90deg, hsla(186, 33%, 94%, 0.01) 35%, hsla(173, 54%, 61%, 1) 100%);
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
      padding-left: 1rem;
    }
    h2{
      color: ${props => props.theme.whiteToBlack};
      padding: 0;
    }
    Button {
      margin: 1rem 0;
    }
    @media screen and (max-width:1000px) {
      .card-right{
        padding-top: 1rem;
        padding-left: 0;
      }
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
          <img src={Dockerimage} alt="Docker and Meshery" loading="lazy" />
          <div className="card-right">
            <div>
            <h2>Docker Extension for Meshery<br></br> is now available!</h2>
            </div>
            <p>Managing cloud native infrastructure has never been easier.</p>
            <Button primary url="/docker-extension-meshery" external={false}>
              Use the Meshery Docker Extension
            </Button>
          </div>
        </div>
      </Container>
    </DockerExtensionCTAWrapper>
  );
};

export default DockerExtensionCTA;