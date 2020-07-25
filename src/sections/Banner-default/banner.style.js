import styled from "styled-components";

import imgHero from "../../assets/images/app/hero/forklift.svg";

const BannerSectionWrapper = styled.section`
    padding: 190px 0 120px 0;
    margin: 80px 0 0 0;
    background: url(${imgHero}) no-repeat;
    background-size: 50%;
    background-position: center right 35px;
    p{
        font-size: 16px;
        font-weight: 300; 
        margin: 0 0 70px 0;
    }
    h4{
        margin-bottom: 8px;
        font-size: 18px;
        color: ${props => props.theme.secondaryColor};
        text-transform: uppercase;
    }
    .section-title{
        h1{
            font-weight: 300;
            font-size: 60px;
            line-height: 75px;
            margin: 0 0 38px 0; 
            span{
                font-weight: 600;
            }
        }
        
    }
    .banner-btn.one{
        background: #8A57DE;
        color: #fff;
        &:hover{
            background: #EEE6FA;
            color: #8A57DE;
        }
    }
    .banner-btn.two{
        background: #FFEBEC;
        color: #FB7B81;
        &:hover{
            background: #FB7B81;
            color: #fff;
        }
    }
    .banner-btn+.banner-btn{
        margin-left: 30px;
    }
    
    @media only screen and (max-width: 912px) {
        margin: 30px 0 0 0;
        background-size: 57%;
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
            margin-left: 17px;
        }
     }
     @media only screen and (max-width: 760px) {
        padding: 130px 0 60px 0;
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
        .banner-btn+.banner-btn{
            margin-left: 15px;
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
