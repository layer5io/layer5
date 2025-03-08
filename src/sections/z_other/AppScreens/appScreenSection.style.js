import styled from "styled-components";

import AppSecreenBG from "../../../assets/images/app/get-app/get-app-bg.webp";

import AppSecreenBGTwo from "../../../assets/images/app/app-screen/05.webp";

const AppScreenSectionWrapper = styled.div`
    .app-screen-one-block{
        padding: 130px 0 110px 0;
        background: url(${AppSecreenBG}) no-repeat;
        background-size: cover;
        background-position: center;
        position: relative;
        display: none;
        .section__particle{
            position: absolute;
            &.one{
                width: 70px;
                left: 7%;
                top: -32px;
            }
            &.two{
                width: 60px;
                bottom: 60px;
                right: 40%;
            }
            &.four{
                width: 95px;
                bottom: 15%;
                right: 17%;
            }
        }
        .app__screen__slider{
            .slick-list{
                transform: translateX(-30px);
            }
            .slick-track{
                display: flex;
                justify-content: space-between;
                .slick-slide{
                    float: none;
                    margin: 0 10px;
                    transition: 450ms all;
                    transform: scale(0.92);
                    img{
                        box-shadow: 0 0 40px ${props => props.theme.shadowColor};
                    }
                    &.slick-center{
                        transform: scale(1);
                    }
                }
            }
            .slick-dots{
                right: -100%;
                bottom: 130px;
                width: auto;
                z-index: 999;
                li{
                    width: 115px;
                    height: 195px;
                    margin: 0 8px;
                    transition: all 0.3s ease-in;
                    img{
                        max-width: 100%;
                    }
                }
                li.slick-active{
                    box-shadow: -1px 25px 17px ${props => props.theme.shadowColor};
                }
            }
        }
        .section-title{
            h2{
                margin-bottom: 42px;
            }
        }
        .app-screen-content-block{
            order: 2;
        }
        .app-screen-slider-block{
            order: 1;
        }
    }
    .app-screen-two-block{
        padding: 180px 0;
        background: url(${AppSecreenBGTwo}) no-repeat;
        background-attachment: fixed;
        background-size: cover;
        background-position: 70% center;
        .section-title{
        h4,h2{
            color: ${props => props.theme.white};
        }
        }
        .btn-group{
        display: flex;
        }
        .btn-outline{
        padding: 13px 17px;
        border: 1px solid ${props => props.theme.white};
        border-radius: 5px;
        color: ${props => props.theme.white};
        background: transparent;
        transition: all 0.3s ease-in;
        &:first-child{
            margin-right: 15px;
        }
        &:hover{
            background: ${props => props.theme.white};
            color: ${props => props.theme.primaryColor};
        }
        }
    }
    @media only screen and (max-width: 1380px) {
        .app-screen-one-block{
            .section__particle{
                &.three{
                    top: 265px;
                }
            }
        }
    }
    @media only screen and (max-width: 1024px) {
        .app-screen-one-block{
            display: block;
            .section__particle{
                &.three{
                    top: 365px;
                }
            }
            .app__screen__slider{

                .slick-dots{
                    bottom: -352px;
                    left: 24%;
                }
            } 
            .section-title,
            .app-screen-content-block{
                text-align: center;
            }
            .app-screen-content-block{
                order: 1;
                margin-bottom: 80px;
            }
            .app-screen-slider-block{
                order: 2;
            }
            .app-screen-content-block,
            .app-screen-slider-block{
                -webkit-flex: 0 0 100%;
                -ms-flex: 0 0 100%;
                flex: 0 0 100%;
                max-width: 100%;
            }
            .app__screen__slider .slick-dots{
            display: none !important;
            } 
            .app__screen__slider{
                .slick-arrow{
                    display: none !important;
                }
                .slick-list{
                    transform: translateX(0px);
                }
            } 
        }
        .app-screen-two-block{
            display: none;
        }
    }
    @media only screen and (max-width: 912px) {
        .app-screen-one-block{
            
            .section__particle{
                &.two,
                &.four{
                    display: none;
                }
            }
        }
        
    }
    @media only screen and (max-width: 480px) {
        .app-screen-one-block{
            .slick-list{
                padding: 0 !important;
            }
        }
    }
    
`;


export default AppScreenSectionWrapper;
