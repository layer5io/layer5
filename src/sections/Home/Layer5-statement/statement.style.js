import styled from "styled-components";

import imgHero from "./images/Lee-Calcote-Cloud-Native-Rejekts.jpg";


const BannerSectionWrapper = styled.section`
    .row {
        margin: 0px;
    }
    .left-col {
        padding-left: 0px;
        padding-right: 0px;
    }
    .left {
        display: flex;
        height: 100%;
    }
    .left-child {
        position: relative;
        align-self: flex-end;
        margin-bottom: 3rem;
    }
    .right-col {
        padding-left: 0px;
        padding-right: 0px;
    }
    h2.statement {
        color: ${props => props.theme.white};
        margin-bottom: 1rem;
    }
    h3.statement {
        color: ${props => props.theme.secondaryLightColor};
        margin-left: 3.5rem;
        text-indent: -3.5rem;
        margin-bottom: 2rem;
        &:before {
            content: "";
            display: inline-block;
            width: 3rem;
            margin-right: 0.5rem;
            vertical-align: middle;
            border-bottom: 1px solid;
        }
    }
    h4.statement {
        font-weight: bold;
        display: flex; 
        color: rgba(255, 255, 255, 0.7);
    }
    .hero {
        background: url(${imgHero});
        right: 0px;
        height: 850px;
        overflow-x: hidden;
        padding: 0rem;
        object-fit: cover;
        object-position: 50% 50%;
    }
    .section-title {
        padding: 3rem 8rem;
        background: #00b39f;
    }
    .svg-background {
        position: absolute;
        top: 0px;
        right: 0px;
        overflow: hidden;
        height: 20rem;
        width: 15rem;
        img {
            transform: scale(2);
            transform-origin: 0rem 0rem;
        }
    }


    @media only screen and (max-width: 1600px) {
        .section-title {
            h3 {
                font-size: 20px;
            }
        }
    }
    @media only screen and (max-width: 1440px) {
        .section-title {
            padding: 2rem 3rem;
        }
    }
    @media only screen and (max-width: 1200px) {
        .section-title {
            padding: 2rem 2rem;
            h2 {
                font-size: 2rem;
            }
        }
    }
    @media only screen and (max-width: 912px) {
        .section-title {
            h4{
                font-size: 1rem;
            }
            h3 {
                font-size: 1rem;
            }
        }
        .hero {
            height: 700px;
        }
     }
     @media only screen and (max-width: 767px) {
         .hero {
            display: none;
         }
     }  
     @media only screen and (max-width: 576px) {
         .section-title {
            padding: 2rem 1rem;
         }
     }  
`;

export default BannerSectionWrapper;
