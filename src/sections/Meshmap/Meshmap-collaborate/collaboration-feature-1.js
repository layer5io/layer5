import React from "react";
import styled from "styled-components";
import CollaborationImg from "./../FeaturesSection/Collaborate/images/collab4-dark.svg";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const CollaborationFeatureWrapper = styled.div`

    display: flex;
    flex-direction: row;
    /* background-color: ${props => props.theme.DarkTheme ? "#121212" : "fff"};;
    max-width: 90%; */
    justify-content: center;
    /* align-items: center; */
     padding: 5% 5% 8%;
    /* @media only screen and (max-width: 767px) {
      text-align: center;
      flex-direction: column-reverse;
    } */

    .hero-div {
      position: relative;
      transition: 0.5s;
      display: flex;
      flex-direction: row-reverse;
      background-color: ${props => props.theme.DarkTheme ? "#121212" : "fff"};;
      max-width: 90%;
      justify-content: space-between;
      align-items: center;
      padding: 2% 5% 8%;
      @media only screen and (max-width: 767px) {
        text-align: center;
        flex-direction: column-reverse;
      }
    }

    .hero-text {
        display: flex;
        flex-direction: column;
        flex: 0 0 40%;
        max-width: 40%;
        @media only screen and (max-width: 767px) {
          max-width: 100%;
        }
    }

    h2 {
      span {
        color: #00b39f;
      }
    }

    .hero-image {
      flex: 0 0 50%;
      max-width: 50%;
    }

    img {
      opacity: 0;
      transition: opacity ease-out 0.5s;
    }

    .visible {
      opacity: 1;
      transition: opacity ease-in 0.5s;
    }

`;

const CollaborationFeature1 = () => {
  const [locatorRef, inView] = useInView({ threshold: 0.5 });
  // const [sectionRef, sectionView] = useInView({ threshold: 1.0 });
  const [imageInView, setimageInView] = useState(false);
  // const [sectionInView, setSectionInView] = useState(false);
  if (inView && !imageInView)
    setimageInView(true);
  else if (imageInView && !inView)
    setimageInView(false);
  // if (sectionView && !sectionInView)
  //   setSectionInView(true);
  // if (sectionInView && !sectionView)
  //   setSectionInView(false);

  return (
    <CollaborationFeatureWrapper>
      <div className="hero-div">
        <div className="hero-image">
          <img className={imageInView ? "visible" : ""} src={CollaborationImg} alt="" ref={locatorRef} />
        </div>
        <div className="hero-text">
          <h2><span>Collaborate with your Team</span></h2>
          <p>Build an iterative design flow with live collaboration that keeps you in the loop whether you’re working in the office or remotely.</p>
        </div>
      </div>
    </CollaborationFeatureWrapper>
  );
};

export default CollaborationFeature1;