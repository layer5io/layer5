import styled from "styled-components";
import hero from "./hero.png";

const MeshMatesWrapper = styled.div`
    .hero{
        // filter: brightness(50%);
        background-image: url(${hero});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 37.5rem; 
        display: flex;
        justify-content: center;
        align-items: center;
        .hero-text{
            text-align: center;
            h1{
                margin-bottom: 30px;
                color: ${props => props.theme.white};
            }
            h4{
                color: ${props => props.theme.white};
            }
            p{
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
                padding-left: 30px;
                h4{
                    font-weight: 700;
                }
            }
        }
        .callout-card{
            box-shadow: 1px 1px 1px solid gray;
            margin: 100px 0 0 30px;
            width: 500px;
            .card-img{
                height: 200px;
                width: 500px;
                object-fit: cover;
                filter: brightness(50%);
            }
            .card-text{
                padding: 20px;
                h4{
                    font-weight: 700;
                    margin-bottom: 10px;
                }
                .highlight{
                    color: ${props => props.theme.secondaryColor};
                }
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
`;

export default MeshMatesWrapper;