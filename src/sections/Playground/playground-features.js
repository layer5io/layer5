import React from "react";
import styled from "styled-components";
import { ReactComponent as PlaygroundFeature1 } from "./images/playground-feature-1.svg";
import { ReactComponent as PlaygroundFeature2 } from "./images/playground-feature-2.svg";
import { ReactComponent as PlaygroundFeature3 } from "./images/playground-feature-3.svg";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const PlaygroundFeaturesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: 5% 0%;

    h1 {
        margin-bottom: 8px;
    }

    .feature {
        position: relative;
        display: flex;
        flex-direction: row;
        width: 70%;
        justify-content: flex-end;
        align-items: center;
        margin: 1% 0%;
        @media only screen and (max-width: 767px) {
            text-align: center;
            flex-direction: column-reverse;
            margin: 5%;
        }

        .feature-text {
            display: flex;
            flex-direction: column;
            flex: 0 0 50%;
            max-width: 50%;
            text-align: left;
            padding: 0% 5%;
            @media only screen and (max-width: 767px) {
                max-width: 100%;
                text-align: center;
            }

            h2 {
                margin-bottom: 2%;
            }
        }

        .feature-image {
            flex: 0 0 50%;
            max-width: 50%;

            @media only screen and (max-width: 767px) {
                max-width: 80%;
            }
        }
    }

    .reverse {
        @media only screen and (min-width: 767px) {
            flex-direction: row-reverse;
        }
    }
`;

const PlaygroundFeatures = () => {
  return (
    <PlaygroundFeaturesWrapper>
      <h1>In the Playground, you can...</h1>
      <hr style={{ width: "20%", backgroundColor: "#00b39f", height: "4px", border: "0" }} />
      <div className="feature">
        <div className="feature-text">
          <h2>Collaborate more effectively</h2>
          <h5>Collaborate with other engineers, share your knowledge, and exchange ideas.</h5>
        </div>
        <div className="feature-image" style={{ scale: "0.8" }}>
          <PlaygroundFeature1 />
        </div>
      </div>
      <div className="feature reverse">
        <div className="feature-text">
          <h2>Discover new cloud native tools</h2>
          <h5>Explore new cloud native tools without the need for complex setup or configuration. Simply open your browser and go.</h5>
        </div>
        <div className="feature-image" style={{ scale: "0.8" }}>
          <PlaygroundFeature2 />
        </div>
      </div>
      <div className="feature">
        <div className="feature-text">
          <h2>Develop inside sandbox environments</h2>
          <h5>Design new cloud native scenarios and easily deploy in the Playground environment. Keep your designs and deploy in your own environment when you’re ready.</h5>
        </div>
        <div className="feature-image" style={{ scale: "0.8" }}>
          <PlaygroundFeature3 />
        </div>
      </div>
    </PlaygroundFeaturesWrapper>
  );
};

export default PlaygroundFeatures;