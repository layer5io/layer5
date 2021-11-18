import styled from "styled-components";

const Banner3SectionWrapper = styled.section`
    padding: 7rem 0;
    .background-svg {
        overflow: visible;
        position: absolute;
        right: 0px;
        top: -10%;
        width: 25%;
        min-height: 150%;
    }
    p {
        font-size: 21px;
        font-weight: 300;
        color: ${props => props.theme.primaryColor};
        margin: 0 0 70px 0;
        text-align: center;
    }
    .section-title-wrapper {
        min-width: 80%;
        margin: auto;
    }
    .section-title{
        text-align: center;
        h1 {
            font-size: 60px;
            line-height: 4.3rem;
            span {
                font-weight: 700;
                color: ${props => props.theme.secondaryColor};
            }
        }
        h2 {
            margin: 0 0 20px 0;
            span {
                color: ${props => props.theme.secondaryColor};
            }
        }
    }
    .vintage-box-container {
        display: flex;
    }
    .vintage-box {
        margin: auto;
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
                font-size: 3rem;
                line-height: 3.5rem;
                margin: 0 0 1rem 0;
            }
            h2 {
                font-size: 2rem;
            }
        }
        p {
            font-size: 1.5rem;
        }
    }
    @media only screen and (max-width: 992px) {
        padding: 3rem 0;
        .section-title { 
            h1 {
                font-size: 2.7rem;
                line-height: 2.7rem;
            }
            h2 {
                font-size: 2rem;
            }
        }
        p {
            font-size: 1.5rem;
        }
    }
    @media only screen and (max-width: 912px) {
        padding: 3rem 0;
        p {
            width: 100%;
        }
        
        .section-title {
            h1 {
                font-size: 2.5rem;
                line-height: 2.7rem;
                margin: 0 0 1rem 0;
            }
            h2 {
                font-size: 2rem;
            }
        }
        p { 
            font-size: 1.25rem;
            margin: 2rem 0rem;
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
        .section-title-wrapper {
            min-width: 100%;
        }
        .section-title { 
            h1 { 
                margin: 0rem;
                font-size: 2rem;
            }
            h2 {
                font-size: 1.5rem;
            }
        }
        p {
            font-size: 1.2rem;
        }
        .vintage-box{
             &:before{
                content: none;
            }
        }
    }
    @media only screen and (max-width: 480px) {
        padding: 2rem 0;
        .vintage-box{
            &:before{
                content: none;
            }
        }
	}
    @media only screen and (max-width: 430px) {
        padding: 2rem 0;
        .section-title { 
            h1 { 
                margin: 0rem;
                font-size: 1.8rem;
            }
            h2 {
                font-size: 1.3rem;
            }
        }
        p {
            margin: 1rem 0;
            font-size: 1.1rem;
        }
        .vintage-box{
            &:before{
                content: none;
            }
        }
	}
    @media screen and (max-width: 402px) {
        .banner-btn.one, .banner-btn.two {
            margin: 0 0.5rem 1rem;
        }
    }
     @media only screen and (max-width: 380px) {
        .section-title{
            h1 {
                font-size: 1.6rem;
                line-height: 1.7rem;
                /* margin: 0 0 30px 0; */
            }
            h2 {
                font-size: 1.3rem;
            }
        }
        p {
            font-size: 1rem;
        }
        .banner-btn{
            font-size: 14px;
            min-width: 127px;
            padding: 14px 12px; 
        }
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
