import styled from "styled-components";

const ImageHubWrapper = styled.section`
    .banner-background{
        background-color: ${props => props.theme.black};
    }
    .banner{
        padding: 100px 0;
        width: 100%;
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
    }
    .showcase{
        margin: 100px 0;
        text-align: center;
        .slider{
            margin: auto;
            width: 70%;
            .slick-arrow{
                width: 20px;	
                height: 80px;	
            }	
            .slick-arrow:before{	
                color: ${props => props.theme.primaryColor};
                font-size: 1.5rem;
                display: inline-block;
                // height: 1rem;
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
    
`;

export default ImageHubWrapper; 