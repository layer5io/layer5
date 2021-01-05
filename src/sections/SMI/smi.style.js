import styled from "styled-components";

const SMIWrapper = styled.section`
    .description{
        margin: 100px -15px 120px -15px;
        h6{
            font-size: 20px;
            color: #1E2117;
            font-weight: semi-bold;
            // ${props => props.theme.textColor};
        }
        h1{
            color: black;
            margin-bottom: 25px;
        }
        h5{
            color: #1E2117;
            opacity: 70%;
            margin-bottom: 30px;
            font-weight: 400;
            width: 80%;
        }
        .section-title{
            text-align: center;
            margin: auto;
            width: 80%;
            margin-bottom: 40px;
            p{
                font-size: 21px;
                color: black;
                opacity: 70%;
            }
        }
    }
    .logo{
        position: absolute;
        top: -100px;
        left: -120px;
    }
    .hero-img{
        margin: -100px 0 0 0;
        object-fit: cover;
        // height: 500px;
        width: 600px;
    }
    .feature-table{
        margin: 0 80px 30px 80px;
    }
    .pricing-block{
        padding: 40px 30px 45px 30px;
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
    .price-block{
        margin: 0 0 5px 0;
        h2{
            font-size: 34px;
            font-weight: 700;
            margin: 0 0 50px 10px; 
            color: ${props => props.theme.black};
        }
    }
    .section-3{
        background-color: #FAFAFA;
        padding: 100px 0 100px 0;
    }
    .bg{
        margin-top: 150px;
        margin-left: -40px;
        height: 350px;
        width: 1100px;
        background-color: #EBFCF8;
        position: absolute;
        z-index: 1;
    }
    .card{
        background-color: white;
        width: 70%;
        margin: auto;
        padding: 30px 75px 30px 75px;
        border: 1px white;
        border-radius: 20px;
        h2{
            margin-bottom: 30px;
        }
    }
    .details-block{
        .table{
            color: ${props => props.theme.black};  
            p {
                margin: 0 0 15px 28px;
                font-size: 17px;
                line-height: 25px;
            }
            td{
                vertical-align: top;
            }
            .icon{
                height: 32px;
                width: 32px;
                object-fit: cover;
            }
        }
    }
`;

export default SMIWrapper;