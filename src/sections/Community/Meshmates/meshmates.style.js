import styled from "styled-components";
import hero from "./hero.png";

const MeshMatesWrapper = styled.div`
    .hero{
        height: 37.5rem;
        position: relative;
        width: 100%;
        img{
            opacity: 0.6;
            position: absolute;
            object-fit: cover;
            width: 100%;
            height: 100%;
            z-index: -1;
        }
        display: flex;
        justify-content: center;
        align-items: center;
        .hero-text{
            text-align: center;
            h1{
                margin-bottom: 30px;
                color: ${props => props.theme.white};
            }
            h2, p{
                color: ${props => props.theme.white};
            }
        }
    }
    .expect{
        p{
            margin: 30px auto 0 auto;
        }
        h5{
            font-weight: 700;
        }
        .meshmate-logo{
            float: right;
            margin: 0 -120px 0 150px;
        }
        .meshmeet-img{
            width: 750px;
            height: 450px;
        }
    }
    .meshmates-grid{
        margin: 100px auto;
        text-align: center;
        h1{
            margin-bottom: 15px;
        }
        p{
            margin-bottom: 50px;
        }
    }
    .meshmate-meet{
        margin: 100px auto 60px auto;
        h2{
            margin-bottom: 30px;
        }
        p{
            margin-bottom: 30px;
        }
        table{
            .icon{
                padding-top: 5px;
                vertical-align: top;
                height: 32px;
                width: 32px;
            }
            .feature{
                padding-left: 20px;
                h4{
                    font-weight: 700;
                }
            }
        }
        .callout-card{
            box-shadow: 0 1px 10px 0 gray;
            margin: 100px 0 0 30px;
            width: 500px;
            .card-img{
                height: 200px;
                width: 500px;
                object-fit: cover;
                filter: brightness(50%);
            }
            .card-text{
                margin-top: -7px;
                padding: 20px;
                h4{
                    font-weight: 700;
                    margin-bottom: 10px;
                }
                .highlight{
                    color: ${props => props.theme.secondaryColor};
                }
                p{
                    line-height: 20px;
                }
                .unsubscribe{
                    margin-top: 15px;
                    font-size: 12px;
                    color: #CCCCCC;
                    text-align: center;
                    line-height: 10px;
                }
            }
            input{
                margin: 0 10px 0 15px;
                padding: 15px;
                width: 325px;
                background: #F5F7FA;
                border: 1px solid white;
                border-radius: 7px;
            }
            button{
                padding: 10px;
                min-width: 50px;
            }
        }
    }
    .conduct{
        margin: 0 auto 100px auto;
        text-align: center;
        width: 90%;
        h2{
            margin-bottom: 20px;
            font-weight: 700;
        }
        p{
            margin-bottom: 30px;
        }
    }
    @media only screen and (max-width: 1024px){
        .expect{
            .meshmate-logo{
                float: right;
                height: 120px;
                margin: 0 0 0 0;
            }
        }
    }
    @media only screen and (max-width: 480px){
        .meshmates-grid{
            margin: 50px auto;
        }
        .expect{
            .meshmeet-img{
                margin-top: 30px;
                height: 300px;
            }
        }
        .meshmate-meet{
            margin: 50px auto 30px auto;
            p{
                margin-bottom: 10px;
            }
            .callout-card{
                margin: 30px auto 0 auto;
                max-width: 95%;
                input{
                    margin: 0 10px 0 15px;
                    max-width: 60%;
                }
            }
        }
    }
`;

export default MeshMatesWrapper;