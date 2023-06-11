import styled from "styled-components";

import AppSecreenBG from "../../../assets/images/app/get-app/get-app-bg.webp";

const GetAppSectionWrap = styled.section`
    padding: 100px 0 90px 0;
    background: url(${AppSecreenBG});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    position: relative;
    .section__particle{
        position: absolute;
        &.one{
            width: 70px;
            left: 7%;
            top: 28px;
        }
        
        &.two{
            width: 60px;
            bottom: 60px;
            right: 45%;
        }
        &.three{
            width: 114px;
            top: 200px;
            right: 17%;
                }
        &.four{
            width: 95px;
            bottom: 80px;
            right: 25%;
        }
    }
    .getapp-block{
        h3{
            font-size: 40px;
            font-weight: 500;
            line-height: 50px; 
            margin-bottom: 40px;
        }
        p{
            font-weight: 300;
            margin: 0 auto 60px auto;
        }
    }
    .btn-block{
        display: flex;
        justify-content: space-between;
    }
    .getapp-btn{
        display: flex;
        align-items: center;
        height: 90px;
        min-width: 260px;
        border-radius: 5px;
        padding: 0 12px;
        
        border: 1px solid rgba(122,132,142,.5);
        -webkit-transition: 450ms all;
        transition: 450ms all;
        p{
            margin-bottom: 0;
            color: ${props => props.theme.primaryColor};
        }
        span{
            display: block;
            font-size: 20px;
            font-weight: 500; 
            color: ${props => props.theme.textColor};
        }
        svg{
            font-size: 35px; 
            color: ${props => props.theme.textColor};
        }
        &:hover{
            color: ${props => props.theme.primaryColor};
            background: ${props => props.theme.white};
            border-color: transparent;
            span,svg{
                color: ${props => props.theme.primaryColor};
            }
        }
    }
    .apl-btn{
        p{
            color: ${props => props.theme.secondaryColor};
        }
        svg{
            font-size: 45px;
            color: ${props => props.theme.textColor}
        }
        &:hover{
            color: ${props => props.theme.secondaryColor};
            span,svg{
                color: ${props => props.theme.secondaryColor};
            }
        }
    }
    .getapp-thumb{
        margin: 0 auto;
        text-align: center;
        img{
            margin-top: -80px;
            box-shadow: 0 0 40px ${props => props.theme.shadowColor};
        }
    }
    @media only screen and (max-width: 1280px) {
        background-size: cover;
        .getapp-btn{
            min-width: auto;
            width: 48%;
            p{
                font-size: 12px;
            }
            span{
                font-size: 17px;
            }
        }
        .section__particle{
            &.four{
                display: none;
            }
        }
    }
    @media only screen and (max-width: 912px) {
        background-size: cover;
        .getapp-block{
            h3{
                font-size: 30px;
                margin-bottom: 8px;
            }
        }
        .btn-block{
            display: block
        }
        .getapp-btn{
            min-width: auto;
            width: 100%;
            p{
                font-size: 16px;
            }
            span{
                font-size: 19px;
            }
        }
        .getapp-btn+.getapp-btn{
            margin-top: 30px;
        }
    }
    @media only screen and (max-width: 760px) {
        padding: 100px 0 50px 0;
        .section__particle{
            &.two{
                bottom: auto;
                top: 0;
                right: auto;
                left: 10%;
            }
            &.one,
            &.three{
                display: none;
            }
        }
        .getapp-btn{
            justify-content: center;
        }
        .getapp-btn{
            p{
                margin: 0 26px 0px 26px;
            }
        }  
    }
    
    @media only screen and (max-width: 568px) {
        text-align: center;
        .getapp-block {
            .btn-block{
                display: flex;
            }
            .getapp-btn{
                width: 260px;
                span{
                    font-size: 17px;
                }
                p{
                    font-size: 13px;
                    margin: 0 15px 0px 15px;
                }
            }
            .getapp-btn+.getapp-btn{
                margin-top: 0;
            }
           
        }
        .getapp-thumb{
            display: none;
        }
    }
    @media only screen and (max-width: 480px) {
        .getapp-block {
            .btn-block{
                display: block;
            }
            .getapp-btn{
                width: 100%;
                span{
                    font-size: 23px;
                }
                p{
                    font-size: 16px;
                    margin: 0 15px 0px 15px;
                }
            }
            .getapp-btn+.getapp-btn{
                margin-top: 30px;
            }
           
        }
    }
`;

export default GetAppSectionWrap;

