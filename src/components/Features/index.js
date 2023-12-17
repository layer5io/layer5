import React, { useRef, useEffect, useState } from "react";
import { Link } from "gatsby";
import {
  Container,
  ContentWrapper,
  ImageWrapper,
  ImageWrapperTwo,
  SvgRandomWrapper,
} from "./style.js";
import cursor from "./images/cursor.svg";
import person1 from "./images/cursor-1.svg";
import person2 from "./images/cursor-2.svg";
import person3 from "./images/cursor-3.svg";
import person4 from "./images/cursor-4.svg";
import wave from "./images/wave.svg";

const Features = (props) => {
  const containerRef = useRef(null);
  const [waveStart, setWaveStart] = useState(false);
  function getPerson(index) {
    const persons = [person1, person2, person3, person4];
    return persons[index];
  }
  useEffect(() => {
    const container = containerRef.current;

    const moveRandomly = (element) => {
      const rect = container.getBoundingClientRect();
      const maxX = rect.width;
      const maxY = rect.height;
      console.log(maxX, maxY, "here");
      const randomX = Math.floor(Math.random() * maxX);
      const halfMaxY = maxY / 2;
      const randomY = Math.floor(Math.random() * (maxY + 1)) - halfMaxY;

      element.style.transition = "transform 3s ease";
      element.style.transform = `translate(${randomX}px, ${randomY}px)`;

      setTimeout(() => {
        element.style.transition = "";
      }, 3000);
    };

    const setInitialRandomPosition = (element) => {
      const rect = container.getBoundingClientRect();
      const maxX = rect.width - element.clientWidth;
      const maxY = rect.height - element.clientHeight;
      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);

      element.style.transform = `translate(${randomX}px, ${randomY}px)`;
    };

    const person1Element = container.querySelector(".person1");
    const person2Element = container.querySelector(".person2");

    setInitialRandomPosition(person1Element);
    setInitialRandomPosition(person2Element);

    const movePersonsRandomly = () => {
      moveRandomly(person1Element);
      setTimeout(() => {
        moveRandomly(person2Element);
      }, 3000);
    };

    movePersonsRandomly();

    const intervalId = setInterval(movePersonsRandomly, 6000);

    return () => clearInterval(intervalId);
  }, []);
  function mouseEnterEvent() {
    setWaveStart(true);
    setTimeout(() => {
      setWaveStart(false);
    }, 1000);
  }
  function mouseLeaveEvent() {
    setWaveStart(false);
  }
  const style = {
    cursor: props.show_custom_cursor ? `url(${cursor}), auto` : "",
  };

  return (
    <Container
      ref={containerRef}
      style={style}
      onMouseEnter={mouseEnterEvent}
      onMouseLeave={mouseLeaveEvent}
    >
      <SvgRandomWrapper className="person1">
        {waveStart && (
          <img
            src={wave}
            alt=""
            style={{ position: "absolute" }}
            className="waveAnimation"
          />
        )}
        <img src={getPerson(props.index * 2)} alt="" />
      </SvgRandomWrapper>
      <SvgRandomWrapper className="person2">
        <img src={getPerson(props.index * 2 + 1)} alt="" />
      </SvgRandomWrapper>
      <ContentWrapper>
        <h2>{props.title}</h2>
        <p className="text">{props.desc}</p>
        <Link to={props.redirectLink}>Learn more &rarr;</Link>
      </ContentWrapper>
      {props.animationOne ? (
        <ImageWrapper>
          <Link to={props.redirectLink}>
            <img src={props.imgLink} alt="image" />
          </Link>
        </ImageWrapper>
      ) : (
        <ImageWrapperTwo>
          <Link to={props.redirectLink}>
            <img src={props.imgLink} alt="image" />
          </Link>
        </ImageWrapperTwo>
      )}
    </Container>
  );
};

export default Features;
