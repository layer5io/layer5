import styled from "styled-components";

const ImageHubWrapper = styled.section`
    .banner-background{
        background-color: ${props => props.theme.black};
    }
    .margin4{
        margin-bottom: 4%;
    }
    .banner{
        padding: 6.25rem 0 1.25rem 0;
        .title-text{
            margin: 3.125rem 0 6.25rem 0;
            h1{
                color: ${props => props.theme.white};
            }
            h4{
                border: 1px solid gray;
                padding: 0.2rem 0.625rem 0.2rem 0.625rem;
                font-size: 1.325rem;
                width: 15rem;
                font-weight: 600;
                color: ${props => props.theme.white};
                margin:0.5rem 0;
                text-align:center;
            }
        }
        .logo{
            float: right;
            margin-right: 1.875rem;
            height: 12.5rem;
            width: auto;
        }
        p{
            width: 96%;
            color: ${props => props.theme.white};
        }
        .iframe-div{
            height: 450px;
            aspect-ratio: 2;
            display: block;
            margin: 3.125rem auto;
        }
    }
    .showcase{
        margin: 6.25rem 0;
        text-align: center;
        .slider{
            margin: auto;
            width: 70%;
            .slick-arrow{
                margin: 0 -1.25rem 0 -3.125rem;
            }	
            .slick-arrow:before{	
                color: ${props => props.theme.primaryColor};
                font-size: 3rem;
                display: inline-block;
            }
            .slick-arrow:hover:before{	
                color: ${props => props.theme.secondaryColor};	
            }
        }
    }
    .contributors{
        width: 70%;
        margin: 6.25rem auto;
        text-align: center;
        p{
            margin-bottom: 3.125rem;
        }
    }
    @media only screen and (max-width: 912px) {
        .iframe-div{
            height: 80%;
            width: 100%;
        }
    }

    @media only screen and (max-width: 480px) {
        .banner{
            padding: 3.125rem 0 1.25rem 0;
            .title-text{
                margin: 0 0 3.125rem 0;
                h4{
                    font-size: 16px;
                    padding: 0;
                    border: 0;
                }
            }
            .logo{
                height: 6.25rem;
                width: auto;
                margin: 0;
            }
            p{
                width: 100%;
            }
            .iframe-div{
                height: 80%;
                width: 100%;
                margin: 1.875rem auto;
            }
        }
        .showcase{
            margin: 3.125rem 0;
            .slider{
                margin: auto;
                width: 85%;
                .slick-arrow{
                    margin: 0 -0.3rem 0 -0.3rem;
                }	
                .slick-arrow:before{	
                    font-size: 1.5rem;
                }
            }
        }
        .contributors{
            width: 100%;
            margin: 3.125rem auto;
            p{
                margin-bottom: 1.875rem;
            }
        }
    }
`;

export default ImageHubWrapper;