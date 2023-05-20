import React from "react";
import styled from "styled-components";
import { ReactComponent as CollaborationImg } from "./../FeaturesSection/Collaborate/images/collab4-colorMode.svg";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const CollaborationFeatureWrapper = styled.div`

    display: flex;
    flex-direction: row;
    /* background-color: ${props => props.theme.grey121212ToWhite};;
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
      background-color: ${props => props.theme.grey121212ToWhite};;
      max-width: 90%;
      height: fit-content;
      justify-content: space-between;
      align-items: center;
      padding: 2% 5% 8%;
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
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

    svg {
      opacity: 0;
      transition: opacity ease-out 0.5s;
      .collab4-colorMode_svg__colorMode1
       {
        fill: ${props => props.theme.whiteToBlack}
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
       }
      .collab4-colorMode_svg__colorMode2{
        fill: ${props => props.theme.greyB4B4B4ToGrey505050}
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
       }
       .collab4-colorMode_svg__colorMode3{
        fill: ${props => props.theme.blackToWhite}
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
       }
       @media only screen and (max-width: 767px) {
        width: 100%;
      }
    }

    .visible {
      opacity: 1;
      transition: opacity ease-in 0.5s;
    }

`;

const CollaborationFeatureTeam = () => {
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
        <div className="hero-image" ref={locatorRef}>
          <CollaborationImg className={imageInView ? "visible" : ""}  alt=""/>
        </div>
        <div className="hero-text">
          <h2><span>Collaborate with your Team</span></h2>
          <p>Build an iterative design flow with live collaboration that keeps you in the loop whether you’re working in the office or remotely.</p>
        </div>
      </div>
    </CollaborationFeatureWrapper>
  );
};

export default CollaborationFeatureTeam;