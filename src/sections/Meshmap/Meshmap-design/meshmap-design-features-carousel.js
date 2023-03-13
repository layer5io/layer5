import React, { useState } from "react";
import styled from "styled-components";
import PopOutCard from "../../../components/PopOutCardCarousel";

const PROJECT_TITLES = [
  "MeshMap",
  "NightHawk",
  "Meshery",
  "Service Mesh Performance"
];
const desc = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, accusantium?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste tenetur ipsam vero natus ad dolorum!",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, et ratione itaque voluptatem eos fugiat! Ex soluta sequi delectus assumenda!"
];

const DivWrapper = styled.div`
  // max-width: 80%;
  width: 100%;
  // padding-block: 8%;
  margin: auto;
  padding-block: 8%;
  display: flex;
  font-size: 1.125rem;
  justify-content: space-between;
  position: relative;
  .left {
    max-width: 30rem;
    margin-left: 12rem;
    flex: 1;
    h1 {
      margin-bottom: 1rem;
    }
  }
  .right {
    position: relative;
    display: flex;
    justify-content: center;
    flex: 1;
    // right: 20px;
    top: -50px;
  }
`;

export default function MeshmapDesignFeatureCarousel() {
  const [activeCard, setActiveCard] = useState(-1);
  const handleclick = (i) => {
    if (i === activeCard) setActiveCard(-1);
    else setActiveCard(i);
  };
  return (
    <DivWrapper isActive={activeCard !== -1}>
      <div className="left">
        <h1>Multi user real time collaboration</h1>
        <p>
          Designer and Visualizer live side-by-side, so all design work, from
          ideation to operation, can be found in one place.
        </p>
      </div>
      <div className="right">
        {PROJECT_TITLES.map((name, i) => (
          <PopOutCard
            key={i}
            index={i}
            active={i === activeCard}
            onClick={() => handleclick(i)}
          >
            <h3>{name}</h3>
            <p>{desc[i]}</p>
          </PopOutCard>
        ))}
      </div>
    </DivWrapper>
  );
}
