import styled from "styled-components";

export const CardWrapper = styled.div`
    .post-block{
        margin-bottom: 2rem;
        box-shadow: 0px 1px 10px -6px ${props => props.theme.shadowLightColor};
        transition: box-shadow 0.3s ease-in;
        &:hover{
            box-shadow: 0px 1px 10px -2px ${props => props.theme.shadowLightColor};
            .post-thumb-block{
                .gatsby-image-wrapper{
                    transform: scale3d(1.1,1.1,1);
                }
            }
            .readmore-btn{
                color: ${props => props.theme.secondaryColor};
                svg{
                    margin-left: 3px;
                     transform: scale(1.2);
                }
            }
        } 
    }

    @media screen and (max-width:776px){
		.post-block{
			width: auto;
			margin: auto auto 2rem;
		}
	}

    .post-thumb-block{
        overflow: hidden;
        height: 180px;
        .gatsby-image-wrapper{
            height:100%;
            transition: all 0.3s ease-in;
        }
        img{
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

    @media screen and (max-width: 350px){
        .post-content-block{
            height: 10rem;
        }
    }

    .post-title{
        font-size: 1.4rem;
        font-weight: 400;
        color: black;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .post-meta-block{
        height: ${props => props.fixed ? "110px" : "auto"};
        display: flex;

        .author{
            text-align: end;
        }
        .author, p{
            color: rgba(0, 0, 0, 0.4);
            font-size: 0.9rem;
            font-weight: 400;
            flex: auto;
        }
    }

    .readmore-btn-wrapper{
        display:flex;
        justify-content: flex-start;
    }

    .readmore-btn {
       color: rgba(0,0,0,0.4);
       display: flex;
       align-items: center;
       transition: all 0.3s ease-in;
       svg{
           font-size: 1.5rem;
           transition: all 0.3s;
       }
    }
`;
