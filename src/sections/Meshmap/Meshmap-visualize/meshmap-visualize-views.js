import React from "react";
import styled from "styled-components";
import VisualizerViewsDark from "./images/visualizer-views-dark.svg";
import VisualizerViewsLight from "./images/visualizer-views-light.svg";
import VisualizerViewsLines from "./images/visualizer-views-lines.svg";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const ViewsSectionWrapper = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    .views-section {
    position: relative;
    display: flex;
    flex-direction: row;
    background-color: ${props => props.theme.DarkTheme ? "#121212" : "#fff"};
    margin: 3%;
    border-radius: 2rem;
    max-width: 1920px;
    width: 90vw;
    justify-content: space-evenly;
    align-items: center;
    padding: 4% 5% 3%;
    box-shadow: ${props => props.theme.DarkTheme ? "0rem 0.25rem 1.25rem #477e96" : "-0.25rem 0.25rem 1.25rem #477e96"};
    @media only screen and (max-width: 767px) {
      text-align: center;
      flex-direction: column-reverse;
    }
}
    .hero-text {
        display: flex;
        flex-direction: column;
        flex: 0 0 50%;
        max-width: 50%;
        padding-bottom: 3rem;
        @media only screen and (max-width: 767px) {
          max-width: 100%;
          justify-content: center;
          text-align: center;
        }
    }

    h1 {
        /* max-width: 90%; */
        padding-bottom: 5%;
        span {
          @media only screen and (min-width: 1200px) {
            font-size: 4.5rem;
        }
      }
    }

    h4 {
        max-width: 90%;
        @media only screen and (max-width: 767px) {
          max-width: 100%;
          }
    }

    .hero-image {
        position: relative;
        display: flex;
        justify-content: center;
        flex: 0 0 50%;
        max-width: 50%;

        img {
            align-items: center;
            justify-content: center;
            width: 70%;
        }

        .visible {
                opacity: 1;
                transition: all 1s ease-in;
        }

        .not-visible {
                opacity: 0;
                transition: all 0.5s ease;
        }

        .lines-visible {
            opacity: 1;
            transition: all 2s ease-in;
        }

        @media only screen and (max-width: 767px) {
          max-width: 100%;
        }

    }

    .overlay {
        width: 483px;
        height: 680x;
    }

`;

const MeshmapVisualizerViews = ({ theme }) => {
  const [imageRef, inView] = useInView({ threshold: 0.4 });
  const [imageInView, setimageInView] = useState(false);
  if (inView && !imageInView)
    setimageInView(true);
  else if (imageInView && !inView)
    setimageInView(false);

  return (
    <ViewsSectionWrapper>
      <div className="views-section">
        <div className="hero-image" ref={imageRef}>
          <img className={imageInView ? "visible" : "not-visible"} src={theme == "dark" ? VisualizerViewsDark : VisualizerViewsLight} alt="" style={{ position: "absolute", top: "0%" }}/>
          <img className={imageInView ? "lines-visible" : "not-visible"} src={VisualizerViewsLines} alt="" />
        </div>
        <div className="hero-text">
          <h1><span>Discover more with intuitive zoom levels</span></h1>
          <h4>Effectively narrow down the focus starting from a multi cluster infrastructure to individual service mechanisms. Get more clarity, yield better outputs.</h4>
        </div>
      </div>
    </ViewsSectionWrapper>

  );
};

export default MeshmapVisualizerViews;