import styled from "styled-components";

import imgHero from "../../assets/images/app/hero/forklift.svg";

const BannerSectionWrapper = styled.section`
    padding: 120px 0 120px 0;
    margin: 80px 0 0 0;
    background: url(${imgHero}) no-repeat;
    background-size: 40%;
    background-position: center right 35px;
    p{
        font-size: 21px;
        font-weight: 300; 
        color: ${props => props.theme.primaryColor};
        margin: 0 0 70px 0;
        width: 70%;
    }
    h4{
        margin-bottom: 8px;
        font-size: 22px;
        text-transform: uppercase;
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
    .banner-btn.one{
        // background: #EAD07D;
        a{
            color: black;
        }
        &:hover{
            // background: #EBC017; 
        }
    }
    .banner-btn.two{
        background: #5cccb6;
        color: #326d62;
        &:hover{
            background: #00b39f;
            color: #fff;
        }
    }
    .banner-btn+.banner-btn{
        margin-left: 30px;
    }
    @media only screen and (max-width: 912px) {
        p{
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
        p{ 
            margin: 0 0 30px 0;
        }
        .banner-btn{
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