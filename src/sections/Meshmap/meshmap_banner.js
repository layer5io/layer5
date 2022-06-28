import React from "react";
import Meshery_Logo from "../../assets/images/meshery/icon-only/meshery-logo-light.svg";
import styled from "styled-components";

const BannerSectionWrapper = styled.div`

    background: #000000;
    padding: 8rem 6rem 3rem 6rem;
    margin-bottom: 3rem;
    min-height: 25rem;

    h1 {
        background-color: ${props => props.theme.black};
        font-weight: 500;
        font-size: 60px;
        color: ${props => props.theme.white};
        
        line-height: 4.3rem;
        margin-bottom: 1rem; 
        span {
            font-size: 70px;
            width: fit-content;
            border-radius: .25rem;
            /* padding: .5rem; */
            /* background-color: ${props => props.theme.saffronLightColor};     */
            font-weight: 700;
            color: ${props => props.theme.secondaryColor};
        }
    }
    h2 {
        margin-bottom: 1rem;
        font-size: 1.95rem;
        font-weight: 400;
        color: ${props => props.theme.white};
        font-style: italic;
        span {
            font-style: normal;
        }
    }
    h2.readyPlayer {
        margin: 2rem 0rem 0rem 0rem;
        background-color: black;
        position: absolute;
        z-index: 1;
        padding: 1.5rem;
        color: white;
        font-style: normal;
        text-transform: uppercase ;
        font-size: 2.5rem;
        text-align: center;
    }
    h3 {
        color: ${props => props.theme.saffronColor};
        margin-bottom: .5rem;
        span {
            color: ${props => props.theme.saffronColor};
        }
    }
    p {
        color: ${props => props.theme.primaryLightColor};
    }
    h4 {
        text-transform: uppercase;
        padding-left: 1rem;
        font-style: italic;
        font-size: 1.25rem;
        color: ${props => props.theme.white};
        span {
            padding-left: 1rem;
        }
    }
    .draft-logo {
        
        position: absolute;
        max-width: 25rem;
        margin-top: -5rem;
        right: 4rem;
        p {
            text-align: center ;
        }
    }

    .learn-particle-img {
        width: 35rem;
        height: 25rem;
        overflow: hidden;
        margin-top: -8rem;
        position: absolute;
        right: 0;

        img {
            position: absolute;
            top: -8rem;
            right: -6rem;
        }
    }

    @media screen and (max-width: 1700px) {
        .learn-particle-img {
            width: 25rem;
            height: 18rem;

            img {
                top: -7rem;
                right: -5rem;
            }
        }
        .para {
            margin-top:-3rem;
        }
    }
    @media screen and (max-width: 1150px) {
        .learn-particle-img {
            width: 20rem;
            height: 16rem;

            img {
                top: -6rem;
                right: -4rem;
            }
        }
        .draft-logo { max-width: 20rem; margin-right: -3rem;}
    }
    @media screen and (max-width: 992px) {
        .learn-particle-img {
            width: 19rem;
            height: 15rem;

            img {
                top: -5rem;
                right: -5rem;
            }
        }
        padding: 5rem 3rem;
        .draft-logo { max-width: 18rem; margin-top:0rem; margin-right: -3rem;}
    }
    @media screen and (max-width: 870px) {
        .draft-logo { max-width: 1px; visibility: hidden ;}
    }
    @media screen and (max-width: 768px) {
        .learn-particle-img {
            width: 18rem;
            height: 14rem;

            img {
                top: -5rem;
                right: -5rem;
            }
        }
        padding: 5rem 3rem;
        .draft-logo { max-width: 1px; visibility: hidden ;}
    }

    @media screen and (max-width: 500px) {
        .learn-particle-img {
            display: none;
            }
        }

`;

const BannerSection = () => {
  return (
    <BannerSectionWrapper>
      <div className="learn-particle-img">
        <img src={Meshery_Logo} alt="Meshery Logo"/>
      </div>
      <div>
        {/* <PageHeader title="MeshMap" subtitle="take the blinders off" superscript="BETA" /> */}
        <h2>Step aside, YAML</h2>
        <h1><span>MeshMap</span> is here</h1>
        {/* <h3>the world's only visual designer for cloud native infrastructure.</h3> */}
        {/* <h3>
                    Application reigns King. Context is his Queen.
                </h3> */}
        <h3>
                    Friends don't let friends GitOps alone.
        </h3>
        {/* <h4>Discover and Visualize</h4>
                <h4><span>Collaborate and Design</span></h4>
                any and all your cloud native infra and apps */}
      </div>
      {/* <h2 className="readyPlayer">Ready, Players?</h2> */}
    </BannerSectionWrapper>

  );
};

export default BannerSection;
