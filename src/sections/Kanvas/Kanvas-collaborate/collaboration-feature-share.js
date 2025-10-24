import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
// ...existing imports...
import sharegraphic from "../Kanvas-collaborate/images/model-where.gif";
import Button from "../../../reusecore/Button";

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
      padding: 1% 3% 1%;
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
        color: ${props => props.theme.text};
      }
    }

    .hero-image {
      flex: 0 0 50%;
      max-width: 50%;
    }

    .hero-image img {
      opacity: 0;
      transition: opacity ease-out 0.5s;
      display: block;
      width: 100%;
      height: auto;
    }

    svg {
      opacity: 0;
      transition: opacity ease-out 0.5s;
      .collab4-colorMode_svg__colorMode1
       {
        fill: ${props => props.theme.whiteToBlack};
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
       }
      .collab4-colorMode_svg__colorMode2{
        fill: ${props => props.theme.greyB4B4B4ToGrey505050};
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
       }
       .collab4-colorMode_svg__colorMode3{
        fill: ${props => props.theme.blackToWhite};
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
       }
       @media only screen and (max-width: 767px) {
        width: 100%;
      }
    }

    .hero-image.visible img {
      opacity: 1;
      transition: opacity ease-in 0.5s;
    }

`;
const CollaborationFeatureShare = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    if (inView && !hasBeenInView) {
      setHasBeenInView(true);
    }
  }, [inView, hasBeenInView]);

  return (
    <CollaborationFeatureWrapper ref={ref}>
      <div className="hero-div">
        <div className={`hero-image ${hasBeenInView ? "visible" : ""}`}>
          <img src={sharegraphic} alt="Share and Collaborate Seamlessly" />
        </div>
        <div className="hero-text">
          <h2>
            <span>Share</span> Your Designs Seamlessly
          </h2>
          <p>
          Effortlessly share your projects and collaborate with team members in real-time, enhancing productivity and teamwork.
          </p>
            <Button $primary className="button" title="Learn More" $url="https://docs.layer5.io/kanvas/designer/sharing/" $external={true}/>   
        </div>
      </div>
    </CollaborationFeatureWrapper>
  );
}

export default CollaborationFeatureShare;

