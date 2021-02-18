import styled from "styled-components";
import cover from "./Rectangle 495.png";

const Gnhwrapper = styled.section`
    .hero-section{
        padding: 100px 0px 200px 0px;
        .img1{
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 50%;
        }
        .hero-text{
            margin-left: auto;
            margin-right: auto;
            @media only screen and (max-width: 767px) {
                width: 50%;
            }
            img{
                width: 70%;
            }
            padding: 50px 0px 0px 0px;
            p{
                color: #4d4d4d;
            }
        }
    }

    .stats{
        text-align: center;
        h3{
            font-weight: 700;
        }
        p{
            color: #4d4d4d;
        }
    }

    .explain-1{
        padding: 100px 0px 0px 0px;
        text-align: center;
        p{
            font-size: 24px;
            color: #4d4d4d;
            padding: 0px 50px;
        }
        h2{
            font-size: 50px;
            font-weight: 700;
            padding: 20px 0px;
            @media only screen and (max-width: 767px) {
                font-size: 30px;
            }
        }
        img{
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 80%;
            padding: 30px 0px 30px 0px;
        }
        .cards{
            margin-top: 50px;
            margin-bottom: 50px;
            width: 100%;
            min-height: 500px;
            padding: 100px 20px 100px 20px;
            background-color: #FFF3C5;
            border-radius: 25px;

            .card{
                box-shadow:
                0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                0 12.5px 10px rgba(0, 0, 0, 0.06),
                0 10.3px 17.9px rgba(0, 0, 0, 0.072),
                0 20.8px 33.4px rgba(0, 0, 0, 0.086),
                0 50px 80px rgba(0, 0, 0, 0.12)
                ;
                margin: 2px;
                padding: 20px;
                background-color: white;
                border-radius: 25px;
                p{
                    text-align: left;
                    font-size: 18px;
                    padding: 0px 0px;
                    letter-spacing: 0;
                }
                h2{
                    text-align: left;
                    font-size: 24px;
                }

                .circle{
                    border-radius: 50%;
                    width: 60px;
                    height: 60px;
                    background-color: #FFF3C5;

                    img{
                        padding: 10px 0px;

                    }
                }
            }
        }
    }

    .explain-2{
        padding: 25px 0px;
        .text{
            padding: 20px 20px 0px 20px;
            h2{
                font-weight: 700;
                font-size: 40px;
                padding: 20px 0px;
            }
            p{
                color: #4d4d4d;
                font-size: 18px;
            }
        }
        img{
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
        Button{
            margin: 20px 0px;
            color: white;
        }
    }

    .list{
        padding: 30px 0px;

        .text{
          h2{
              font-size: 40px;
              font-weight: 700;
              padding: 20px 0px;
          }
          p{
            color: #4d4d4d;
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
                    color: #4d4d4d;
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
`;

export default Gnhwrapper;