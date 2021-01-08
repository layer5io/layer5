import styled from "styled-components";

const ImageHubWrapper = styled.section`
    .banner-background{
        background-color: ${props => props.theme.black};
    }
    .banner{
        padding: 100px 0 20px 0;
        .title-text{
            margin: 50px 0 100px 0;
            h1{
                color: ${props =>props.theme.white};
            }
            h4{
                border: 1px solid gray;
                padding: 0 10px 0 10px;
                width: 275px;
                color: ${props =>props.theme.white};
            }
        }
        .logo{
            float: right;
            margin-right: 30px;
            height: 200px;
            width: auto;
        }
        p{
            width: 96%;
            color: ${props =>props.theme.white};
        }
        .iframe-div{
            display: block;
            margin: 50px auto;
        }
    }
    .showcase{
        margin: 100px 0;
        text-align: center;
        .slider{
            margin: auto;
            width: 70%;
            .slick-arrow{
                margin: 0 -20px 0 -50px;
                width: 5px;	
                height: 80px;	
            }	
            .slick-arrow:before{	
                color: ${props => props.theme.primaryColor};
                font-size: 2.5rem;
                display: inline-block;
            }
            .slick-arrow:hover:before{	
                color: ${props => props.theme.secondaryColor};	
            }
        }
    }
    .contributors{
        width: 70%;
        margin: 100px auto;
        text-align: center;
        p{
            margin-bottom: 50px;
        }
    }
    @media only screen and (max-width: 480px) {
        .banner{
            padding: 50px 0 20px 0;
            .title-text{
                margin: 0 0 50px 0;
                h4{
                    font-size: 16px;
                    padding: 0;
                    border: 0px;
                }
            }
            .logo{
                height: 100px;
                width: auto;
                margin: 0;
            }
            p{
                width: 100%;
            }
            .iframe-div{
                max-width: 100%;
                margin: 30px auto;
            }
        }
        .showcase{
            margin: 50px 0;
            .slider{
                margin: auto;
                width: 85%;
                .slick-arrow{
                    margin: 0 15px 0 -5px;
                }	
                .slick-arrow:before{	
                    font-size: 1.5rem;
                }
            }
        }
        .contributors{
            width: 100%;
            margin: 50px auto;
            p{
                margin-bottom: 30px;
            }
        }
    }
`;

export default ImageHubWrapper; 