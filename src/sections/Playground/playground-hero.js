import React from "react";
import styled from "styled-components";
import { ReactComponent as PlaygroundHeroImage } from "./images/playground-hero.svg";
import Button from "../../reusecore/Button";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const PlaygroundHeroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.linearDarkToLinearLight};
    margin: 2% 0% 5%;

    .hero {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-bottom: 4%;
        max-width: 80%;

        .hero-text {
            text-align: left;

            @media only screen and (max-width: 767px) {
                text-align: center;
            }

            h1 {
                margin-bottom: 3%;
                @media only screen and (max-width: 767px) {
                    margin: 8% 0%;
                }
            }

            h4 {
                margin-bottom: 6%;
                @media only screen and (max-width: 767px) {
                    margin: 8% 0%;
                }
            }
        }

        .hero-image {
            flex: 0 0 50%;
            max-width: 50%;

            @media only screen and (max-width: 767px) {
                display: none;
            }
        }
    }
`;

const PlaygroundHero = () => {
  return (
    <PlaygroundHeroWrapper>
      <div className="hero">
        <div className="hero-text">
          <h1>Manage your Cloud Native mess</h1>
          <h4>Employ a set of learning paths that incorporate an application networking centric curriculum featuring training on 200+ integrations.</h4>
          <a href="https://play.meshery.io/">
            <Button primary className="join-community-button" title="Try Meshery Playground" />
          </a>
        </div>
        <div className="hero-image">
          <PlaygroundHeroImage />
        </div>
      </div>
    </PlaygroundHeroWrapper>
  );
};

export default PlaygroundHero;