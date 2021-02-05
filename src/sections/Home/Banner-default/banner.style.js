import styled from "styled-components";

import HeroCubes from "./assets/images/mesh_cubes.svg";
import HeroCubesBlack from "./assets/images/mesh_cubes_black.svg";

const BannerSectionWrapper = styled.section`
    padding: 7rem 0;

    background: url(${HeroCubesBlack}) no-repeat;
    background-size: 50%;
    background-color: #F3FFFD;
    background-position: bottom -85px right;
    p {
        font-size: 21px;
        font-weight: 300; 
        color: ${props => props.theme.primaryColor};
        margin: 0 0 70px 0;
        width: 70%;
    }
    h4 {
        margin-bottom: 8px;
        color: ${props => props.theme.primaryLightColor};
        text-transform: uppercase;
        font-weight: 600;
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
        background: ${props => props.theme.highlightColor}; 

        &:hover {
             background: ${props => props.theme.highlightLightColor}; 
        }
        
    }
    .banner-btn.two{
        
        background: ${props => props.theme.secondaryColor};
        color: #fff;
        &:hover{
            background: ${props => props.theme.caribbeanGreenColor};
            //color: #326d62;
        }
    }
    @media only screen and (max-width: 1200px) {
        
     }
    @media only screen and (max-width: 912px) {
        p {
            width: 100%;
        }
        margin: 0 0 0 0;
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
        /* .banner-btn {
            min-width: 140px;
        }
        .banner-btn+.banner-btn{
            margin-left: 15px;
        } */
     }
     @media only screen and (max-width: 760px) {
        padding: 130px 0 60px 0;
     }
     @media only screen and (max-width: 480px) {
        padding: 120px 0 100px 0;
        background-image: none;
        .section-title{
            h1{
                font-size: 35px;
                line-height: 50px;
            }
        }
         /* .vintage-box{
             &:before{
                 content: none;
             }
         } */
		 }
		 @media screen and (max-width: 402px) {
			.banner-btn.one, .banner-btn.two 
			{
				margin: 0 0.5rem 1rem;
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
        /* .banner-btn{
            font-size: 14px;
            min-width: 127px;
            padding: 14px 12px; 
        } */
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