import React, { useState } from "react";
import styled from "styled-components";
import PopOutCard from "../../../components/PopOutCardCarousel";
import AutoVideo from "../../../components/AutoVideo";

import dragDrop from "./images/drag-drop-components.mp4";
import dragDropPoster from "./images/drag-drop-components-poster.webp";
import mergeDesign from "./images/merge-design.mp4";
import mergeDesignPoster from "./images/merge-design-poster.webp";
import connectComponents from "./images/connect-components.mp4";
import connectComponentsPoster from "./images/connect-components-poster.webp";
import shareDesign from "./images/share-design.mp4";
import shareDesignPoster from "./images/share-design-poster.webp";

export const KANVAS_VIDEOS = {
  dragDrop: { src: dragDrop, poster: dragDropPoster, width: 1796, height: 932 },
  mergeDesign: { src: mergeDesign, poster: mergeDesignPoster, width: 1544, height: 878 },
  connectComponents: { src: connectComponents, poster: connectComponentsPoster, width: 1788, height: 926 },
  shareDesign: { src: shareDesign, poster: shareDesignPoster, width: 1470, height: 788 },
};

const CONTENT = [
  {
    title: "Confidently make changes to your infrastructure",
    video: KANVAS_VIDEOS.dragDrop,
    description:
      "Kanvas automatically catalogs and provides insight into all of your services, datastores and the connections between them, allowing teams to deeply understand application architecture.",
  },
  {
    title: "Visualize and automate infrastructure understanding",
    video: KANVAS_VIDEOS.mergeDesign,
    description:
      "Kanvaselps automate infrastructure understanding from the architecture to a single PR so your team can ship, refactor and onboard to legacy or existing applications faster.",
  },
  {
    title: "Make working across services as easy as working across files",
    video: KANVAS_VIDEOS.connectComponents,
    description:
      "Get automatic visibility into how your services interact in your application so you can confidently change, update or migrate to microservices.",
  },
  {
    title: "Stop finger-pointing",
    video: KANVAS_VIDEOS.shareDesign,
    description:
      "Share your designs publically or in private to collaborate with others in real-time.",
  },
];

const DivWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 8% 0%;
  padding-block: 4%;
  display: flex;
  flex-direction: column;
  font-size: 1.125rem;
  // justify-content: space-between;
  align-items: center;
  position: relative;
  .left {
    text-align: center;
    margin-bottom: 4rem;
    padding-inline: 6rem;
  }
  .right {
    position: relative;
    width: 100%;
    height: 450px;
    display: flex;
    justify-content: center;
    // flex: 1;
    // right: 20px;
    // top: -50px;

    // animation-name: floating;
    // animation-duration: 3s;
    // animation-iteration-count: infinite;
    // animation-timing-function: ease-in-out;

    // @keyframes floating {
    //   0% {
    //     transform: translate(0, 0px);
    //   }
    //   50% {
    //     transform: translate(0, 15px);
    //   }
    //   100% {
    //     transform: translate(0, -0px);
    //   }
    // }
  }

  // @media only screen and (max-width: 1500px) {
  //   padding-block: 11rem;
  //   .left {
  //     max-width: 20rem;
  //     h1 {
  //       font-size: 34px;
  //     }
  //   }
  //   .right {
  //     h3 {
  //       font-size: 24px;
  //     }
  //   }
  //}

  // @media only screen and (max-width: 1200px) {
  //   // padding-block: 6% 14%;
  //   .left {
  //     margin-left: 5%;
  //   }
  // }

  @media only screen and (max-width: 999px) {
    padding-block: 3rem;
    .left {
      margin-bottom: 1rem;
    }
    // .right {
    //   top: 0px;
    //   height: 380px;
    // }
  }

  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

export default function KanvasDesignFeatureCarousel() {
  const [cardIndices, setCardIndices] = useState([
    ...Array(CONTENT.length).keys(),
  ]);
  const handleclick = () => {
    const length = CONTENT.length;
    const newIndices = cardIndices.map((index) => {
      if (index === 0) return length - 1;
      else return index - 1;
    });
    setCardIndices(newIndices);
  };

  return (
    <DivWrapper>
      <div className="left">
        <h1>Multi-user real-time collaboration</h1>
        <p>
          Designer and Operator live side-by-side, so all design work, from
          ideation to operation, can be found in one place.
        </p>
      </div>
      <div className="right">
        {CONTENT.map((content, i) => (
          <PopOutCard
            key={i}
            index={cardIndices[i]}
            active={cardIndices[i] === 0}
            onClick={() => handleclick(i)}
          >
            <div>
              <h3>{content.title}</h3>
              <p>{content.description}</p>
            </div>
            <div className="img">
              <AutoVideo
                {...content.video}
                active={cardIndices[i] === 0}
                style={{ border: "1px solid #444444", marginTop: "8px", borderRadius: "20px" }}
              />
            </div>
          </PopOutCard>
        ))}
      </div>
    </DivWrapper>
  );
}
