import styled from 'styled-components';
export const BlogPageWrapper = styled.div`

    .blog-list-wrapper{
        padding: 50px 0;
    }
    .blog-grid-wrapper{
        padding-bottom: 60px;
    }
    .post-block{
        margin-bottom: 30px;
        border-radius: 3px;
        &:hover{
            .post-thumb-block{
                img{
                    transform: scale3d(1.1,1.1,1);
                }
            }
            .readmore-btn{
                color: ${props => props.theme.secondaryColor ? props.theme.secondaryColor : "#FFEBEC"};
            }
        } 
    }
    .post-thumb-block{
        overflow: hidden;
        border-radius: 3px 3px 0 0;
        img{
            width: 100%;
            transition: all 0.6s ease-in;
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
            -webkit-transition: 450ms all;
            transition: 450ms all;
            &:hover{
                color: ${props => props.theme.secondaryColor ? props.theme.secondaryColor : "#FFEBEC"};;
            }
        }
    }
    .readmore-btn {
       color: rgba(0,0,0,0.35);
       display: flex;
       align-items: center;
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

    .pagination-wrapper{
        display: flex; 
        margin: 30px 0 60px 0;

            ul, .pagination{
                margin: 0;
                padding: 0;
                list-style: none;

                li {
                    display: inline-block;

                    &.active{
                        .anchor{
                            opacity: 1;
                        }
                    }

                    .anchor {
                        display: block;
                        padding: 12px 20px;
                        margin-right: 10px;
                        border-radius: 5px;
                        opacity: .6;
                    }
                }
            }
        }
        @media only screen and (max-width: 912px) {
            .blog-page-wrapper{
                padding-bottom: 80px;
            }
        }
`;
