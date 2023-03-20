import styled from "styled-components";

export const CardWrapper = styled.div`
    .post-block{
        margin-bottom: 2rem;
        border-radius: 0.5rem;
        background-Color:${props => props.theme.grey212121ToWhite};
        box-shadow: 0px 2px 6px 0px ${props => props.theme.green00D3A9ToBlackTwo};
        transition: all 0.3s ease-in;
        &:hover{
            box-shadow: 0px 2px 15px 4px ${props => props.theme.whiteNineToBlackOne};
            .post-thumb-block{
                .gatsby-image-wrapper, .old-gatsby-image-wrapper{
                    transform: scale3d(1.1,1.1,1);
                }
            }
            .readmore-btn{
                color: ${props => props.theme.secondaryColor};
                svg{
                    margin-left: 0.25rem;
                    transform: scale(1.2);
                }
            }
        } 
    }
    .readmore-btn{
        color: ${props => props.theme.secondaryColor};

    }
    @media screen and (max-width:776px){
		.post-block{
			width: auto;
			margin: auto auto 2rem;
		}
	}

    .post-thumb-block{
        overflow: hidden;
        height: 11.5rem;
        border-top-right-radius: 0.5rem;
        border-top-left-radius: 0.5rem;

        .gatsby-image-wrapper, .old-gatsby-image-wrapper{
            height:100%;
            transition: all 0.3s ease-in;
        }
        img{
            height: inherit;
            max-height: 180px;
            display: block;
            text-align: center;
            margin: auto;
        }
    }

    .post-content-block{
        padding: 1rem 2rem;
        height: 8rem;
    }

    @media screen and (max-width: 1200px) and (min-width: 992px){
        .post-thumb-block{
            height: 12rem;
            
        }
       
        .post-content-block{
            height: 10rem;
        }
           

    }
   

    @media screen and (max-width: 670px) and (min-width: 560px){
        .post-content-block{
            height: 10rem;
            
        }
    }

    @media screen and (max-width: 350px){
        .post-content-block{
            height: 10rem;
        }
    }

    .post-title{
        font-size: 1.4rem;
        font-weight: 400;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .post-meta-block{
        height: auto;
        display: flex;

        .author{
            text-align: end;
        }
        .author, p{
            color: ${props => props.theme.whiteSevenToBlackSeven};
            font-size: 0.9rem;
            font-weight: 400;
            flex: auto;
        }
        .type{
            text-align: end;
            font-size: 1rem;
            font-weight: 400;
        }
    }

    .readmore-btn-wrapper{
        display:flex;
        justify-content: flex-start;
    }

    .readmore-btn::after{
        content: '';
        position: absolute;
        margin: 0 1rem 2rem;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .readmore-btn, .external-link-btn{
       color: ${props => props.theme.whiteFourToBlackFour};
       display: flex;
       flex: auto;
       align-items: center;
       transition: all 0.3s ease-in;
       svg{
           font-size: 1.5rem;
           transition: all 0.3s;
       }
    }

    .external-link-btn{
        justify-content: flex-end;
        svg{
            font-size: 2rem;
            padding: 0.25rem;
            position: relative;
        }

        &:hover{
            color: ${props => props.theme.secondaryColor};
            svg{
                transform: scale(1.25);
            }
        }
    }
`;
