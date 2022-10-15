import styled from "styled-components";

import HeroCubesBlack from "./assets/images/mesh_cubes_black.svg";

const Banner3SectionWrapper = styled.section`
    padding: 7rem 0;

    background: url(${HeroCubesBlack}) no-repeat;
    background-size: 50%;
    background-color: ${props => props.theme.secondaryLightColorTwo};
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    background-position: bottom -85px right;
    p {
        font-size: 21px;
        font-weight: 300; 
        color: ${props => props.theme.DarkTheme ? "#dee3de" : "#3c494f"};
        margin: 0 0 70px 0;
        width: 70%;
    }
    h4 {
        color: ${props => props.theme.DarkTheme ? "#737373" : "#b3b3b3"};
        text-transform: uppercase;
    }
    .section-title{
        h1 {
            font-weight: 400;
            font-size: 60px;
            line-height: 4.3rem;
            margin: 0 0 38px 0; 
            span {
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
        padding: 4rem 0;
        .section-title { 
            h1 {
                font-size: 2.25rem;
                line-height: 2.4rem;
                margin: 0 0 1rem 0;
            }
        }
        p {
            width: 80%;
        }
    }
    @media only screen and (max-width: 912px) {
        padding: 3rem 0;
        background-size: 45%;

        p {
            width: 100%;
        }
        
        .section-title {
            h1 {
                font-size: 2.25rem;
                line-height: 2.4rem;
                margin: 0 0 1rem 0;
            }
            h4 {
                font-size: 1rem;
            }
        }
        p { 
            font-size: 1.25rem;
            margin: 2rem 0rem;
            padding-right: 4rem;
        }
        .banner-btn {
            min-width: 140px;
        }
        .banner-btn+.banner-btn{
            margin-left: 15px;
        } 
     }
     @media only screen and (max-width: 760px) {
        padding: 2rem 0;
        background-size: 45%;
 
        .section-title { 
            h1 { margin: 0rem; }
        }
        .vintage-box{
             &:before{
                 content: none;
             }
         }
     }
     @media only screen and (max-width: 480px) {
        padding: 2rem 0;
        
        .section-title{
            h1 {
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
		 @media screen and (max-width: 402px) {
			.banner-btn.one, .banner-btn.two 
			{
				margin: 0 0.5rem 1rem;
			}
		 }
     @media only screen and (max-width: 380px) {
        .section-title{
            h1 {
                font-size: 30px;
                line-height: 46px;
                margin: 0 0 30px 0;
            }
            h4 {
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
            h1 {
                font-size: 23px;
                line-height: 35px;
            }
        }
     }
     
`;

export default Banner3SectionWrapper;