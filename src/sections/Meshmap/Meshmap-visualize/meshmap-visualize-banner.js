import React from "react";
import styled from "styled-components";
import Button from "../../../reusecore/Button";


const VisualizeBannerWrapper = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    .banner {
        margin: 3%;
        position: relative;
        z-index: 10;
        display: flex;
        flex-direction: column;
        background-color: ${props => props.theme.grey121212EightToWhiteEight};
        border-radius: 2rem;
        max-width: 1920px;
        width: 90vw;
        max-height: 50rem;
        align-items: center;
        padding: 4% 5% 6%;
    }


    .banner-text {
        color: ${props => props.theme.primaryColor};
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        z-index: 1;
        padding: 3% 0%;
        opacity: 1;
    }

    h1 {
        /* font-size: 4rem; */
        /* color: ${props => props.theme.primaryColor}; */
        position: relative;
        display: inline-block;
        @media only screen and (min-width: 1400px) {
            font-size: 3.75rem;
        }
    }

    h4 {
        padding: 3% 0% 5%;
        color: #A0AAAA;

        span {
          color: ${props => props.theme.primaryColor};
        }

        @media only screen and (max-width: 500px) {
            font-size: 1.1rem;
        }

    }

    h5 {
        padding: 2rem 0;
    }

    p {
        padding-top: 2rem;
    }

    .banner-image {
      padding: 5%;
    }
    img {
        position: relative;
        z-index: 0;
        opacity: 0.4;
        filter: blur(1px);
        box-shadow: ${props => props.theme.boxShadowGreen00D3A9};

    }
`;

const MeshmapVisualizeBanner = ({ targetRef }) => {
  const handleClick = () => {
    const offset = 100;
    const targetPos = targetRef.current.getBoundingClientRect().top + window.pageYOffset;
    const finalpos = targetPos - offset;
    window.scrollTo({ top: finalpos, behavior: "smooth" });
  };
  return (
    <VisualizeBannerWrapper>
      {/* <div className="banner-image">
          <img src={BannerImage} alt="banner-background" />
        </div> */}
      <div className="banner">
        <div className="banner-text">
          <h1>Visualize your infrastructure </h1>
          <h4>See your designs <span>in action.</span> Operate with <span>best practices.</span></h4>
          <Button primary className="join-community-button" title="Explore MeshMap Visualizer" url="" onClick={handleClick} />
        </div>
        {/* <div className="banner-image">
          <img src={BannerImage} alt="" />
        </div> */}
      </div>
    </VisualizeBannerWrapper>
  );
};

export default MeshmapVisualizeBanner;