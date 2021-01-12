import styled from "styled-components";
import smp_bg from "./smp-hero.png";
import callout from "./callout.svg";

const SMPWrapper = styled.section`
    .smp-hero{
        background-image: url(${smp_bg});
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        .hero-text{
            padding: 150px 0 100px 0;
            h1{
                color: ${props => props.theme.white};
                margin-bottom: 30px;
            }
            p{
                color: ${props => props.theme.white};
            }
        }
    }
    .smp-details{
        vertical-align: middle;
        margin: 100px auto;
        h2{
            margin: auto;
            text-align: center;
            width: 90%;
            margin-bottom: 100px;
        }
        h1{
            margin-bottom: 30px;
        }
        .features{
            padding-left: 50px;
            .icon{
                object-fit: cover;
                padding-right: 20px;
                padding-bottom: 10px;
            }
            .feature{
                font-size: 21px;
                padding-bottom: 20px;
                padding-right: 30px;
            }
        }
        .smp-example{
            width: 100%;
        }
    }
    .use-cases{
        margin-top: 150px;
        .use-case-title{
            width: 90%;
            margin: 50px auto 100px auto;
            text-align: center;
            h1{
                margin-bottom: 20px;
            }
        }
        .use-case-data{
            margin-bottom: 50px;
            h1{
                margin-bottom: 30px;
            }
            img{
                max-height: 500px;
            }
        }
    }
    .smp-effects{
        .effects-title{
            margin: 50px auto 50px auto;
            text-align: center;
            h1{
                margin-bottom: 20px;
            }
        }
    }
    .cncf-callout{
        margin: 120px auto;
        text-align: center;
        h1, h4{
            margin-bottom: 30px;
        }
    }
    .layer5-callout{
        background-image: url(${callout});
        height: 575px; 
        .callout-text{
            margin: auto;
            vertical-align: middle;
            text-align: center;
            h1{
                color: ${props => props.theme.white};
            }
        }
    }
`;

export default SMPWrapper;