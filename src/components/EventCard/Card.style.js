import styled from "styled-components";

export const CardWrapper = styled.div`
    .post-block{
        margin-bottom: 30px;
        border-radius: 3px;
        &:hover{
            .post-thumb-block{
                .gatsby-image-wrapper{
                    transform: scale3d(1.1,1.1,1);
                }
            }
            .readmore-btn{
                color: ${props => props.theme.secondaryColor ? props.theme.secondaryColor : "#FFEBEC"};
            }
            .post-title{
                .anchor{
                    color: ${props => props.theme.secondaryColor ? props.theme.secondaryColor : "#FFEBEC"};
                }
            }
        } 
    }

    .readmore-btn-wrapper{
        display:flex;
        justify-content: space-between;
    }

    .post-thumb-block{
        overflow: hidden;
        border-radius: 3px 3px 0 0;
        height: 180px;
        .gatsby-image-wrapper{
            height:100%;
            transition: all 0.6s ease-in;
        }
        img{
            max-width: 100%;
            max-height: 180px;
            width: auto;
            height: inherit;
            display: block;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
            border-radius: 3px 3px 0 0;
        }
    }
    .post-content-block{
        border-radius: 0 0 3px 3px;
        box-shadow: 0px 2px 4px 0px rgba(12, 0, 46, 0.06);
        padding: 25px 35px;
        position: relative;
    }
    .post-entry{
        font-size: 14px;
        font-weight: 300; 
        line-height: 25px; 
    }
    
    .post-meta-block{
        margin-bottom: 10px;
        height: ${props => props.fixed ? "110px" : "auto"};
        .anchor{
            margin-right: 10px;
            -webkit-transition: 450ms all;
             transition: 450ms all;
            &:hover{
                color: ${props => props.theme.secondaryColor ? props.theme.secondaryColor : "#FFEBEC"};;
            }
        }
        .anchor,span{
            color: ${props => props.theme.textColor ? props.theme.textColor : "#7A848E"};;
            font-size: 14px;
            font-weight: 300;
        }
        span+span{
            margin-left: 10px;
        }
        .divider{
            font-size: 11px;
        }
    }
    .post-title{
        .anchor{ 
            font-size: 21px;
            font-weight: 500;
            line-height: 30px;
            margin-bottom: 17px;
            display: block;
            white-space: nowrap; 
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-transition: 450ms all;
            transition: 450ms all;
            &:hover{
                color: ${props => props.theme.secondaryColor ? props.theme.secondaryColor : "#FFEBEC"};;
            }
        }
    }
    .readmore-btn {
       color: rgba(0,0,0,0.35);
       align-items: right;
       float: right;
       transition: all 0.3s linear;
       svg{
           margin-left: 0px;
           font-size: 27px;
           transition: all 0.3s linear;
       }
       &:hover{
           svg{
               margin-left: 3px;
                transform: scale(1.2);
           }
       }
    } 
`;
