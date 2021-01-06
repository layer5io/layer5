import styled from "styled-components";

const SMIWrapper = styled.section`
    .description{
        margin: 6.25rem -0.94rem 7.5rem -0.94rem;
        h6{
            font-size: 20px;
            color: ${props => props.theme.tertiaryColor};;
            font-weight: semi-bold;
        }
        h1{
            margin-bottom: 1.56rem;
        }
        p{
            color: ${props => props.theme.tertiaryColor};;
            opacity: 70%;
            margin-bottom: 1.875rem;
            font-weight: 400;
            width: 80%;
        }
        .section-title{
            text-align: center;
            margin: auto;
            width: 80%;
            margin-bottom: 2.5rem;
            p{
                font-size: 21px;
                color: black;
                opacity: 70%;
            }
        }
    }
    .logo{
        position: absolute;
        top: -6.25rem;
        left: -7.5rem;
    }
    .hero-img{
        margin: -6.25rem 0 0 0;
        object-fit: none;
        width: 36rem;
    }
    .feature-table{
        margin: 0 5rem 1.875rem 5rem;
    }
    .feature-block{
        padding: 2.5rem 1.875rem 2.8rem 1.875rem;
        border-radius: 20px;
        box-shadow: 15px 15px 40px ${props => props.theme.shadowColor};
        position: relative;
        transition: all 0.3s ease-in;
        background-color: white;
        z-index: 999;
        &:hover{
            border-color: ${props => props.theme.primaryColor};
            .thumb-block{
                border-color: ${props => props.theme.primaryColor};
            }
        }
    }
    .feature-title{
        margin: 0 0 0.3rem 0;
        h2{
            font-size: 34px;
            font-weight: 700;
            margin: 0 0 3.125rem 0.625rem; 
            color: ${props => props.theme.black};
        }
    }
    .section-3{
        background-color: #FAFAFA;
        padding: 6.25rem 0 6.25rem 0;
        width: 100%;
    }
    .bg{
        height: 21.875rem;
        width: 90%;
        max-width: 73.75rem;
        margin: 21.875rem auto 0 auto;
        background-color: #EBFCF8;
        position: absolute;
        z-index: 1;
    }
    .card{
        background-color: white;
        width: 70%;
        max-width: 62.5rem;
        margin: auto;
        padding: 1.875rem 4.7rem 1.875rem 4.7rem;
        border: 1px white;
        border-radius: 20px;
        h2{
            margin-bottom: 1.875rem;
        }
    }
    .details-block{
        .table{
            color: ${props => props.theme.black};  
            p {
                margin: 0 0 1rem 1.75rem;
                font-size: 17px;
                line-height: 25px;
            }
            td{
                vertical-align: top;
            }
            .icon{
                height: 2rem;
                width: 2rem;
                object-fit: cover;
            }
        }
    }
    @media only screen and (max-width: 480px) {
        .logo{
            margin-top: 3.125rem;
        }
        .description{
            margin: 3.125rem -0.94rem 3.125rem -0.94rem;
            h5{
                width: 100%;
            }
        }
        .hero-img{
            width: 95%;
            margin-top: 1.875rem;
        }
        .feature-table{
            margin: 0 0 0.625rem 0;
        }
        .pricing-block{
            margin: 0 0.94rem 1.875rem 0.94rem;
            padding: 2.5rem 0.94rem 2.2rem 0.94rem;
        }
        .bg{
            visibility: hidden;
        }
        .card{
            width: 90%;
            padding: 1.5rem;
        }
    }
`;

export default SMIWrapper;