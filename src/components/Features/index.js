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
    if (props.cursor !== undefined) {
      const container = containerRef.current;

      const moveRandomly = (element) => {
        const rect = container.getBoundingClientRect();

        const maxX = rect.width - element.clientWidth - 50;
        const maxY = rect.height - element.clientHeight - 50;
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * (maxY + 1));

        element.style.transition = "transform 3s ease";
        element.style.transform = `translate(${randomX}px, ${randomY}px)`;

        setTimeout(() => {
          element.style.transition = "";
        }, 3000);
      };

      const setInitialRandomPosition = (element) => {
        const rect = container.getBoundingClientRect();
        const maxX = rect.width - element.clientWidth - 50;
        const maxY = rect.height - element.clientHeight - 50;
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
    }
  }, [props.cursor]);
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
      style={style}
      onMouseEnter={mouseEnterEvent}
      onMouseLeave={mouseLeaveEvent}
    >
      <ContentWrapper>
        <h2>{props.title}</h2>
        <p className="text">{props.desc}</p>
        {props.redirectLink ? <Link to={props.redirectLink}>Learn more &rarr;</Link>
          : (<div className="small-card-container">
            {props.redirectLinkWithImage.map((item) => (
              <Link key={item.text} className="small-card" to={item.redirect}>
                <img src={item.image} width={40} />
                <span>{item.text}</span>
              </Link>
            ))}
          </div>)}
      </ContentWrapper>
      {props.animationOne ? (
        <ImageWrapper ref={containerRef}>
          <SvgRandomWrapper
            className="person1"
            style={{ display: props.cursor ? "none" : "" }}
          >
            {waveStart && (
              <img
                src={wave}
                alt=""
                style={{ position: "absolute" }}
                className="waveAnimation"
              />
            )}
            <img src={getPerson(props.cursor * 2)} alt="" />
          </SvgRandomWrapper>
          <SvgRandomWrapper
            className="person2"
            style={{ display: props.cursor ? "none" : "" }}
          >
            <img src={getPerson(props.cursor * 2 + 1)} alt="" />
          </SvgRandomWrapper>
          <Link to={props.redirectLink ? props.redirectLink : props.redirectLinkWithImage[0].redirect}>
            <img src={props.imgLink} alt="image" />
          </Link>
        </ImageWrapper>
      ) : (
        <ImageWrapperTwo ref={containerRef}>
          <SvgRandomWrapper
            className="person1"
            style={{ display: props.cursor ? "none" : "" }}
          >
            {waveStart && (
              <img
                src={wave}
                alt=""
                style={{ position: "absolute" }}
                className="waveAnimation"
              />
            )}
            <img src={getPerson(props.cursor * 2)} alt="" />
          </SvgRandomWrapper>
          <SvgRandomWrapper
            className="person2"
            style={{ display: props.cursor ? "none" : "" }}
          >
            <img src={getPerson(props.cursor * 2 + 1)} alt="" />
          </SvgRandomWrapper>
          <Link to={props.redirectLink ? props.redirectLink : props.redirectLinkWithImage[0].redirect}>
            <img src={props.imgLink} alt="image" />
          </Link>
        </ImageWrapperTwo>
      )}
    </Container>
  );
};

export default Features;
