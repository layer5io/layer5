import styled from "styled-components";

const MesheryOperatorWrapper = styled.section`
    margin: 0 0 2rem 0;

    .hero-section{
        padding: 5rem 0rem;
        .logo{
            display: block;
            margin: 2rem auto;
            width: 60%;
        }
        .hero-text{
            margin: 0 auto;
            img{
                width: 60%;
            }
            padding-top: 3.125rem;
            p{
                color: ${props => props.theme.tertiaryColor};
            }
        }
    }
    .banner{
        padding: 6.25rem 0 1.25rem 0;
        .title-text{
            margin: 3.125rem 0 6.25rem 0;
            h1{
                color: ${props => props.theme.black};
            }
            h4{
                border: 1px solid gray;
                padding: 0.2rem 0.625rem 0.2rem 0.625rem;
                font-size: 1.325rem;
                width: 15rem;
                font-weight: 600;
                color: ${props => props.theme.black};
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
        }
        p{
            width: 96%;
        }
        rect {
            fill:  ${props => props.theme.grey313131ToGreenC9FCF6};  
          }
          path {
            stroke: ${props => props.theme.green00D3A9ToGreen00B39F};
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
    .explain-1 {
        padding-top: 1rem;
        text-align: center;
        p {
            color: ${props => props.theme.tertiaryColor};
            padding: 0px 3.125rem;
        }
        h1 {
            padding: 1.25rem 0px;
        }
        .cards {
            margin: 3.125rem 0;
            width: 100%;
            padding: 5rem 1.25rem;
            background-color: ${props => props.theme.secondaryLightColorTwo};
            border-radius: 25px;
            .card {
                box-shadow:
                0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                0 12.5px 10px rgba(0, 0, 0, 0.06),
                0 10.3px 17.9px rgba(0, 0, 0, 0.072),
                0 20.8px 33.4px rgba(0, 0, 0, 0.086),
                0 3.125rem 80px rgba(0, 0, 0, 0.12)
                ;
                margin: 2px;
                padding: 1.25rem;
                background: ${props => props.theme.grey212121ToWhite};
                border-radius: 25px;
                p {
                    text-align: left;
                    padding: 0px 0px;
                    letter-spacing: 0;
                }
                h2 {
                    text-align: left;
                    font-size: 24px;
                    text-transform:uppercase;
                    clear: both;
                }
                }
            }
        }
    }
    
    .listed{
        text-align: left;
        .table{
            .icon{
                object-fit: cover;
                height: 2.5rem;
                width: 2.5rem;
                vertical-align: top;
            }
            .service{
                color: ${props => props.theme.tertiaryColor};
                font-size: 16px;
                padding: 0 0 1.25rem 1.875rem;
                h4{
                    font-weight: 600;
                }
            }
        }
    }
}
    .lists{
        margin: 0 0 3rem 0;
    }

    @media only screen and (max-width: 568px) {
        .hero-section{
            padding: 2.125rem 0;
            .hero-text{
               h1{
                   text-align: center;
               } 
            }
        }
        .explain-1{
            padding-top: 1.125rem;
            p{
                padding: 0 1.25rem;
            }
        }
    }
`;

export default MesheryOperatorWrapper;