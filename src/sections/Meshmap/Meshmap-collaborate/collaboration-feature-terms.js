import React, { useState } from "react";
import styled from "styled-components";

const CollaborationFeatureCreateWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  background: linear-gradient(
    89.99deg,
    rgba(0, 179, 159, 0.54) 0.01%,
    rgba(71, 126, 150, 0.26) 52.12%,
    rgba(18, 18, 18, 0.16) 102%
  );
  // opacity: 0.5;
  backdrop-filter: blur(19.5px);
  max-width: 90%;
  justify-content: space-between;
  align-items: center;
  padding: 4% 5% 8%;
  border-radius: 36px;
  margin-bottom: 8%;
  .hero-div {
    display: flex;
    flex-direction: column;
    flex: 0 0 50%;
    width: 40%;
    height: 100%;
    padding: 0 5% 0 5%;
  }
  .hero-triangle {
    position: relative;
    height: 200px;
    width: 200px;
    color: ${(props) => props.theme.text};
    
    margin-left: 45px;
    margin-top: 10px;
    font-family: "Qanelas Soft";
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
  }
`;

const HeaderWrapper = styled.div`
  h2 {
    font-family: "Qanelas Soft";
    font-style: normal;
    font-weight: 800;
    font-size: 42px;
    line-height: 50px;
    color: #00B39F;
  }
  .create,
  .repeat,
  .iterate {
    display: none;
  }
  .create {
    display: ${(props) => (props.hoveredWord === "Create" ? "block" : "none")};
  }
  .repeat {
    display: ${(props) => (props.hoveredWord === "Repeat" ? "block" : "none")};
  }
  .iterate {
    display: ${(props) => (props.hoveredWord === "Iterate" ? "block" : "none")};
  }
  
`;

const DescriptionWrapper = styled.div`
  display: ${(props) => (props.visible ? "block" : "none")};
  transition: all 1s ease-in-out;
  font-family: "Qanelas Soft";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  margin-top: 5px;
`;

const CreateWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
 
  transform: translateX(-50%) scale(${({ hoverWord }) => hoverWord ? "0.8" : "1.2"});
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
`;

const IterateWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  left: -45px;
  transform: scale(${({ hoverWord }) => hoverWord ? "0.8" : "1.2"});
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
  }
`;

const RepeatWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  right: -50px;
  transform: scale(${({ hoverWord }) => hoverWord ? "0.8" : "1.2"});
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
  }
`;

const CollaborationFeatureCreate = () => {
  const [hoveredWord, setHoveredWord] = useState("Create");
  const [hoverWord, sethoverWord] = useState({
    create: false,
    repeat: false,
    iterate: false,
  });
  const handleWordHover = (word) => {
    setHoveredWord(word);
    sethoverWord({
      create: word === "Create" ? false : true,
      repeat: word === "Repeat" ? false : true,
      iterate: word === "Iterate" ? false : true,
    });
  };

  return (
    <CollaborationFeatureCreateWrapper>
      <div className="hero-div">
        <HeaderWrapper hoveredWord={hoveredWord}>
          <h2>
            <span className="create">Create</span>
            <span className="repeat">Repeat</span>
            <span className="iterate">Iterate</span>
          </h2>
        </HeaderWrapper>
        <DescriptionWrapper visible={hoveredWord === "Create"}>
          Build an iterative design flow with live collaboration that keeps you
          in the loop whether you’re working in the office or remotely
        </DescriptionWrapper>
        <DescriptionWrapper visible={hoveredWord === "Iterate"}>
          Repeat the process of creating, iterating, and repeating to create a
          better design.Repeat the process of creating, iterating, and repeating
          to create a better design
        </DescriptionWrapper>
        <DescriptionWrapper visible={hoveredWord === "Repeat"}>
          Iterate on your design with your team and clients to create a better
          design.Iterate on your design with your team and clients to create a
          better design.
        </DescriptionWrapper>
      </div>
      <div className="hero-triangle">
        <CreateWrapper onMouseEnter={() => handleWordHover("Create")} hoverWord={hoverWord.create}>
          Create
        </CreateWrapper>
        <IterateWrapper onMouseEnter={() => handleWordHover("Iterate")} hoverWord={hoverWord.iterate}>
          Iterate
        </IterateWrapper>
        <RepeatWrapper onMouseEnter={() => handleWordHover("Repeat")} hoverWord={hoverWord.repeat}>
          Repeat
        </RepeatWrapper>
      </div>
    </CollaborationFeatureCreateWrapper>
  );
};

export default CollaborationFeatureCreate;