import styled from "styled-components";
import smp_bg from "./smp-hero.png";
import callout from "./callout.png";

const SMPWrapper = styled.section`
    .smp-hero{
        background-image: url(${smp_bg});
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        .hero-text{
            padding: 9.375rem 0 6.25rem 0;
            h1{
                color: ${props => props.theme.white};
                margin-bottom: 1.875rem;
            }
            p{
                color: ${props => props.theme.white};
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
            margin-bottom: 6.25rem;
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
        .effects-title{
            margin: 6.25rem auto 3.125rem auto;
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
    }
    @media only screen and (max-width: 1024px) {
        .smp-effects{
            .iframes{
                padding: 0 1rem;
                .iframe{
                    width: 50%;
                    height: 18.75rem;
                }
            }
        }
    }
    @media only screen and (max-width: 480px) {
        .smp-hero{
            .hero-text{
                padding: 3.125rem 0 3.125rem 0;
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