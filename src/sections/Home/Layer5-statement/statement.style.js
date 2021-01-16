import styled from "styled-components";

import imgHero from "./images/Lee-Calcote-Cloud-Native-Rejekts.jpg";
import Layer5Logo from "../../../assets/images/layer5/layer5-only/svg/layer5-white-no-trim.svg";

const BannerSectionWrapper = styled.section`

    p {
        font-size: 21px;
        font-weight: 300; 
        color: ${props => props.theme.primaryColor};
        margin: 0 0 70px 0;
        width: 70%;
    }
    h4 {
        margin-bottom: 8px;
        color: ${props => props.theme.primaryColor};
        text-transform: uppercase;
        font-weight: 600;
    }
    .hero {
        background: url(${imgHero});
        position: absolute;
        
        top: -10rem;
        right: 0px;
        width: 50%;
        height: 850px;
        overflow-x: hidden;
        margin: 2rem 2rem 0rem 2rem;
        padding: 0rem;
        object-fit: cover;
        object-position: 50% 50%;
    }
    .section {
        display: flex;
        
        width: 100%;
        height: 650px;
        left: 0px;

        /* green/dark */

        background: #00B39F;
    }
    h2.statement {
        color: ${props => props.theme.white};
        margin-top: 4.5rem;
    }
    h3.statement {
        color: ${props => props.theme.black};
        margin-top: 2.5rem;
        font-weight: 300;
    }
    h4.statement {
        display: flex;
        color: ${props => props.theme.secondaryLightColor};
    }
    h5.statement {
        display: flex;
        color: ${props => props.theme.white};
    }
    img.Layer5Logo {
        opacity: .5;
        display: inline;

        position: absolute;

    }
    .section-title{
        h1{
            font-weight: 400;
            font-size: 60px;
            line-height: 75px;
            margin: 0 0 38px 0; 
            span{
                font-weight: 700;
                color: ${props => props.theme.secondaryColor};
            }
        }
    }
    .banner-btn {
        margin: 0rem .5rem 0 .5rem;


    }
    .banner-btn.one {
        margin: 0rem .5rem 0 .5rem;
        // background: #EAD07D;
        a{
            color: black;
        }
        &:hover{
            // background: #EBC017; 
        }
    }
    .banner-btn.two{
        
        background: ${props => props.theme.secondaryColor};
        color: #fff;
        &:hover{
            background: ${props => props.theme.secondaryLightColor};
            //color: #326d62;
        }
    }
    @media only screen and (max-width: 912px) {
        p {
            width: 100%;
        }
        margin: 50px 0 0 0;
        background-size: 40%;
        padding: 120px 0 60px 0;
        .section-title{
            h1{
                font-size: 32px;
                line-height: 42px;
                margin: 0 0 25px 0;
            }
            h4{
                font-size: 16px;
            }
        }
        p { 
            margin: 0 0 30px 0;
        }
        .banner-btn {
            min-width: 140px;
        }
        .banner-btn+.banner-btn{
            margin-left: 15px;
        }
     }
     @media only screen and (max-width: 760px) {
        padding: 130px 0 60px 0;
        background-size: 30%
     }
     @media only screen and (max-width: 568px) {
        background: none;
        .banner-btn{
            min-width: 160px;
        }
     }
     @media only screen and (max-width: 480px) {
        padding: 120px 0 100px 0;
        .section-title{
            h1{
                font-size: 35px;
                line-height: 50px;
            }
        }
         .vintage-box{
             &:before{
                 content: none;
             }
         }
     }
     @media only screen and (max-width: 380px) {
        .section-title{
            h1{
                font-size: 30px;
                line-height: 46px;
                margin: 0 0 30px 0;
            }
            h4{
                font-size: 15px;
            }
        }
        .banner-btn{
            font-size: 14px;
            min-width: 127px;
            padding: 14px 12px; 
        }
     }
     @media only screen and (max-width: 330px) {
        .section-title{
            h1{
                font-size: 23px;
                line-height: 35px;
            }
        }
     }
     
`;

export default BannerSectionWrapper;