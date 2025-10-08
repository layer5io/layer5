import React, { useState } from "react";
import styled from "styled-components";
import PopOutCard from "../../PopOutCardCarousel";

import Levels from "./academy-catalog.gif";
import Challenges from "./challenges.webp";
import Badges from "./badges.webp";
import Track from "./track.webp";

const CONTENT = [
  {
    title: "CNCF Structured Learning Paths",
    img: Levels,
    description:
      "Comprehensive CNCF-aligned learning paths designed for different skill levels — from beginner to advanced. Master Kubernetes and cloud native technologies through hands-on experience.",
  },
  {
    title: "Labs and Real-world Challenges",
    img: Challenges,
    description:
      "Hands-on labs and challenges on live Kubernetes clusters. Practice real-world scenarios, earn points, and climb the leaderboard as you sharpen your cloud native skills.",
  },
  {
    title: "Earn Certifications and Badges",
    img: Badges,
    description:
      "Validate your skills with recognized certifications and badges. Build credibility, celebrate your achievements, and showcase your cloud native expertise.",
  },
  {
    title: "Track Your Learning Journey",
    img: Track,
    description:
      "Stay motivated with clear progress tracking as you move forward. Keep an eye on your completed labs, challenges, and milestones, and see how your cloud native skills steadily grow step by step.",
  }
];

const DivWrapper = styled.div`
  width: 100%;
  padding-block: 4%;
  display: flex;
  flex-direction: column;
  font-size: 1.125rem;
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
  }

  .highlight {
        background: linear-gradient(135deg, #00b39f, #00d3a9);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
  }

  img {
    border-radius: 10px;
  }

  @media only screen and (max-width: 999px) {
    padding-block: 3rem;
    margin-bottom: 10%;
    
    .left {
      margin-bottom: 1rem;
    }
    
    .text h3 {
      padding-top: 1.5rem;
      padding-bottom: 0;
    }
    
  }

  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

export default function AcademyFeatureCarousel() {
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
        <h1>Unlock Your Cloud Native Journey</h1>
      </div>
      <div className="right">
        {CONTENT.map((content, i) => (
          <PopOutCard
            key={i}
            index={cardIndices[i]}
            active={cardIndices[i] === 0}
            onClick={() => handleclick(i)}
            style={{ height: "content" }}
          >
            <div className="text">
              <h3>{content.title}</h3>
              <p>{content.description}</p>
            </div>
            <div className="img">
              <img
                src={content.img}
                alt={content.title}
              />
            </div>
          </PopOutCard>
        ))}
      </div>
    </DivWrapper>
  );
}