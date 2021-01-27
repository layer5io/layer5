import styled from "styled-components";

const PricingSectionWrapper = styled.section`
    padding: 10px 0 50px 0;
    margin-top: 50px;
    overflow: hidden;
    position: relative;
    .pricing-block{
        padding: 40px 30px 45px 30px;
        border-radius: 20px;
        box-shadow: 15px 15px 40px ${props => props.theme.shadowColor};
        position: relative;
        text-align: center;
        height: 720px;
        transition: all 0.3s ease-in;
        &:hover{
            border-color: ${props => props.theme.primaryColor};
            .thumb-block{
                border-color: ${props => props.theme.primaryColor};
            }
            .pricing-btn{
                opacity: 1;
            }
        }
        .count-block{
            position: absolute;
            margin-left: 80px;
            text-aling: center;
            bottom: 20px;
            .count{
                font-weight: 700;
                margin-bottom: 10px;
                color: ${props => props.theme.black};
            }
            .count-desc{
                font-size: 15px;
                color: ${props => props.theme.primaryColor};
            }
        }

    }
    .price-block{
        text-align: center;
        margin: 0 0 5px 0;
        h3{
            font-size: 36px;
            font-weight: 600;
            margin: 0 0 10px 0;
            color: ${props => props.theme.black};
        }
        p{
            font-size: 18px;
            margin-bottom: 0;
        }
    }
    .price-block ~ p{
        margin-top: 0;
        margin-bottom: 22px;
        color: ${props => props.theme.primaryColor};
        text-align: center;
    }
    .details-block{
        text-align: left;
        .table{
            .icon{
                object-fit: cover;
                height: 40px;
                width: 40px;
                vertical-align: top;
            }
            .service{
                color: ${props => props.theme.black};
                font-size: 16px;
                padding: 0 0 20px 30px;
            }
        }
    }
    @media only screen and (max-width: 1280px) {
        padding: 90px 0 210px 0;

        .pricing-block{
            padding: 40px 15px 35px 15px;
        }
    }
    @media only screen and (max-width: 912px) {
        padding: 50px 0 35px 0;
        .pricing-block{
            margin-bottom: 40px;
            padding: 40px 30px 35px 30px;
        }
    }
    @media only screen and (max-width: 480px) {
        .pricing-block{
            margin: 0 15px 40px 15px;
            padding: 40px 15px 35px 15px;
        }
    }


`;

export default PricingSectionWrapper;
