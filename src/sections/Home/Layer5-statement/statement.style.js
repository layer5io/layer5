import styled from "styled-components";

import imgHero from "./images/Lee-Calcote-Cloud-Native-Rejekts.jpg";
import Layer5Logo from "../../../assets/images/layer5/layer5-only/svg/layer5-white-no-trim.svg";

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
        margin: auto;
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
        font-weight: 300;
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
        display: flex; 
        color: ${props => props.theme.secondaryLightColor};
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
        background: #00B39F;
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
     }
     @media only screen and (max-width: 568px) {
         .section-title {
            padding: 2rem 1rem;
         }
         .hero {
             display: none;
         }
     }  
`;

export default BannerSectionWrapper;
