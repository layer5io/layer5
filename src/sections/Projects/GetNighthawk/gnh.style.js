import styled from "styled-components";
import cover from "./images/Rectangle 495.png";

const Gnhwrapper = styled.section`
    .hero-section{
        padding: 5rem 0rem;
        .img1{
            display: block;
            margin: 0 auto;
            width: 50%;
        }
        .hero-text{
            margin: 0 auto;
            img{
                width: 70%;
            }
            padding-top: 3.125rem;
            p{
                color: ${props => props.theme.tertiaryColor};
            }
        }
    }

    .stats {
        text-align: center;
        h3 {
            font-weight: 700;
        }
        p {
            color: ${props => props.theme.tertiaryColor};
        }
    }

    .explain-1 {
        padding-top: 5rem;
        text-align: center;
        p {
            color: ${props => props.theme.tertiaryColor};
            padding: 0px 3.125rem;
        }
        h1 {
            padding: 1.25rem 0px;
        }
        img {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 80%;
            padding: 1.875rem 0;
        }
        .cards {
            margin: 3.125rem 0;
            width: 100%;
            min-height: 500px;
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
                background-color: white;
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
                .circle {
                    border-radius: 50%;
                    position:relative;
                    float:left;
                    width: 3.75rem;
                    height: 3.75rem;
                    background-color: ${props => props.theme.secondaryLightColorTwo};
                    img { 
                        padding: 0.625rem 0px;
                    }
                }
            }
        }
    }

    .explain-2{
        padding: 25px 0px;
        .text{
            padding: 1.25rem 1.25rem 0px 1.25rem;
            h2{
                font-weight: 700;
                font-size: 40px;
                padding: 1.25rem 0px;
            }
            p{
                color: ${props => props.theme.tertiaryColor};
                
            }
        }
        img{
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
        Button{
            margin: 1.25rem 0px;
            color: white;
        }
    }

    .list{
        padding: 1.875rem 0px;

        .text{
          h2{
              font-size: 2rem;
              font-weight: 700;
              padding: 1.25rem 0px;
          }
          p{
            color: ${props => props.theme.tertiaryColor};
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
    .callout{
        background: rgb(205,28,109);
        background: linear-gradient(107deg, rgba(205,28,109,1) 0%, rgba(40,43,98,1) 99%, rgba(41,44,99,1) 100%);
        padding: 5rem;
        text-align: center;
        color: ${props => props.theme.white};
        p{
            margin: 0.94rem 0;
        }
        img{
            width: 25rem;
        }
    }
    @media only screen and (max-width: 568px) {
        .hero-section{
            padding: 3.125rem 0;
            .hero-text{
                width: 50%;
            }
        }
        .explain-1{
            padding-top: 3.125rem;
            p{
                padding: 0 1.25rem;
            }
        }
    }
`;

export default Gnhwrapper;