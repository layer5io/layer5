import React, { useState } from "react";
import styled from "styled-components";
import PopOutCard from "../../../components/PopOutCardCarousel";
import { StaticImage } from "gatsby-plugin-image";

const img1 = "../../../assets/images/meshmap/MeshmapDesigner.png";

const CONTENT = [
  {
    title: "Design your deployments the way you want",
    description:
      "Drag-and-drop your cloud native infrastructure using a pallete of thousands of versioned Kubernetes components. Say goodbye to YAML configurations.",
  },
  {
    title: "Manage your applications visually and intuitively",
    description:
      "Play with powerful features including context-aware designs and namespace configurations to easily manage all services.",
  },
  {
    title: "Build the bridge",
    description:
      "Go from developer handoffs to ongoing conversations with a shared language between design and development.",
  },
  {
    title: "Stop finger-pointing",
    description:
      "Make infrastructure and application management less about finger-pointing and more about collaborating.",
  },
];

const DivWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  margin: auto;
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

export default function MeshmapDesignFeatureCarousel() {
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
          Designer and Visualizer live side-by-side, so all design work, from
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
              <StaticImage src={img1} alt="sample image" height={450} />
            </div>
          </PopOutCard>
        ))}
      </div>
    </DivWrapper>
  );
}
