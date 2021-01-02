import styled from "styled-components";

const SMIWrapper = styled.section`
    .description{
        margin: 100px 20px 120px 60px;
        h6{
            color: #7A848E; 
            // ${props => props.theme.textColor};
        }
        h1{
            color: black;
            margin-bottom: 30px;
        }
        p{
            color: #1E2117;
            margin-bottom: 30px;
        }
        .section-title{
            text-align: center;
            margin: auto;
            width: 70%;
        }
    }
    .feature-table{
        margin: 0 100px 120px 100px;
    }
    .pricing-block{
        padding: 40px 30px 45px 30px;
        border-radius: 20px;
        box-shadow: 15px 15px 40px ${props => props.theme.shadowColor};
        position: relative;
        transition: all 0.3s ease-in;
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
    .details-block{
        .table{
            color: ${props => props.theme.black};  
            p {
                margin-bottom: 20px;
            }
            td{
                vertical-align: top;
            }
            svg{
                fill: ${props => props.theme.secondaryColor};
                margin-right: 15px;
            }
        }
        .off{
            svg{
                fill: ${props => props.theme.secondaryColor};
            }
        }
    }
`;

export default SMIWrapper;