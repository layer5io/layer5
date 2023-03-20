import styled from "styled-components";
import cncf from "../../../assets/images/smp-page/cncf-icon.png";

const SMPWrapper = styled.section`
    margin-bottom: 3.25rem;
    .smp-hero{
        height: 34.4rem;
        .hero-text{
            padding: 9.375rem 0 6.25rem 0;
            h1{
                color: ${props => props.theme.white};
                margin-bottom: 1.875rem;
            }
            p{
                color: ${props => props.theme.white};
            }
            .logo-img{
                height: 240px;
                width: auto;
                marginRight: 100px;
            }
        }
    }
    .smp-details{
        vertical-align: middle;
        margin: 6.25rem auto;
        h2{
            margin: auto;
            text-align: center;
            width: 80%;
            margin-bottom: 1.25rem;
        }
        h3 {
            margin-bottom: 4.25rem;
        }
        h1{
            margin-bottom: 1.875rem;
        }
        
        .features{
            padding-left: 3.125rem;
            table{
                margin-bottom: 1.875rem;
            }
            .icon{
                object-fit: cover;
                padding-right: 1.25rem;
                padding-bottom: 10px;
            }
            .feature{
                font-size: 21px;
                padding-bottom: 1.25rem;
                padding-right: 1.875rem;
            }
        }
        .smp-example{
            width: 100%;
        }
    }
    .use-cases{
        margin-top: 9.375rem;
        .use-case-title{
            width: 90%;
            margin: 3.125rem auto 6.25rem auto;
            text-align: center;
            h1{
                margin-bottom: 1.25rem;
            }
        }
        .use-case-data{
            margin-bottom: 3.125rem;
            h1{
                margin-bottom: 1.875rem;
            }
            img{
                max-height: 31.25rem;
            }
            p{
                padding-right: 1.875rem;
            }
            .use-case-box{
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
    
    .smp-effects{
        background-image: url("${cncf}");
        background-repeat: no-repeat;
        background-position:right top;
        padding-top:3rem;
        background-size:435px;
        .effects-title{
            margin: 3.25rem auto 3.25rem auto;
            text-align: center;
            h1{
                margin-bottom: 1.25rem;
            }
        }
        .iframes{
            padding: 0 3rem;
            .iframe{
                width: 33.3%;
                height: 20rem;
            }
        }
    }
    .cncf-callout{
        margin: 8rem auto;
        text-align: center;
        h1, h4{
            margin-bottom: 1.875rem;
        }
    }
    .join-community{
        width: 100%;
        margin-bottom: 0;
        display: flex;
        justify-content: center;
        align-content: center;
    }
    .join-community_text-and_button{
        width:100%;
        display: flex;
        justify-content: center;
        align-items:center;
        flex-direction:column;
        top: 6.5rem;
        h1{
            color: white;
        }
        p{
            margin: unset;
            max-width: 20rem;
            color: white;
        }
        button{
            margin-top: 1.5rem;
        }
    }
    rect {
        fill:  ${props => props.theme.grey313131ToYellowFFF7D8};  
      }
    @media only screen and (max-width: 1024px) {
        .smp-hero{
            .hero-text{
                padding: 4rem 0;
                .logo-img{
                    height: 150px;
                }
            }
        }
        .smp-effects{
            background-image: url("${cncf}");
            background-repeat: no-repeat;
            background-position:right top;
            padding-top:1rem;
            background-size:325px;
            .effects-title{
                margin: 3.25rem auto;
            }
            .iframes{
                padding: 0 1rem;
                .iframe{
                    width: 50%;
                    height: 18.75rem;
                }
            }
        }
    }
    @media only screen and (min-width: 993px) and  (max-width: 1024px) {
        .smp-effects{
            background-image: url("${cncf}");
            background-repeat: no-repeat;
            background-position:right top;
            padding-top:1rem;
            background-size:385px;
        }
    }
    @media only screen and (max-width: 768px) {
        .smp-effects{
            background-image: unset;
            padding-top:0;
        }
    }
    @media only screen and (max-width: 480px) {
        .smp-hero{
            .hero-text{
                padding: 3.125rem 0;
                .logo-img{
                    height: 120px;
                }
            }
        }
        .smp-details{
            margin: 3.125rem auto;
            h2{
                width: 100%;
                margin-bottom: 1.875rem;
            }
            .features{
                padding: 1.25rem 0 0 1.875rem;
                .icon{
                    height: 3.75rem;
                    width: 3.75rem;
                }
                .feature{
                    padding-right: 0;
                }
            }
        }
        .use-cases{
            margin-top: 3.75rem;
            .use-case-title{
                margin: 3.125rem auto 3.125rem auto;
            }
            .use-case-data{
                p{
                    padding-right: 0;
                }
                img{
                    max-height: 18.75rem;
                }
            }
        }
        .smp-effects{
            .effects-title{
                margin: 3.125rem auto 1.875rem auto;
            }
            .iframes{
                padding: 0 0.5rem;
                .iframe{
                    width: 100%;
                }
            }
        }
    }
`;

export default SMPWrapper;