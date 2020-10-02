import styled from "styled-components";

const PricingSectionWrapper = styled.section`
    padding: 10px 0 50px 0;
    overflow: hidden;
    position: relative;
    .section__particle{
        position: absolute;
        &.one{
            width: 190px;
            left: -5%;
            bottom: 0px;
        }
        &.two{
            width: 144px;
            top: 27%;
            right: -4%;
        }
    }
    .liftup {
        margin-top: -60px;
        margin-bottom: 50px;
    }
    .pricing-block{
        padding: 40px 30px 45px 30px;
        border: 1px solid ${props => props.theme.primaryLightColor};
        box-shadow: 0 0 40px ${props => props.theme.shadowColor};
        border-radius: 5px;
        position: relative;
        text-align: center;
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
    }
    .thumb-block{
        padding-bottom: 30px;
        border-bottom: 1px solid rgba(112,112,112,0.3);
        transition: all 0.3s ease-in;
    }
    .price-block{
        text-align: center;
        padding: 0 0 23px 0;
        h3{
            font-size: 36px;
            font-weight: 600;
            margin: 0 0 10px 0; 
        }
        p{
            font-size: 18px;
            margin-bottom: 0;
        }
    }
    .price-block ~ p{
        margin-top: 0;
        margin-bottom: 22px;
        text-align: center;
    }
    .details-block{
        text-align: left;
        .table{
            color: ${props => props.theme.headingColor};
            display: flex;
            align-items: center;
            h5 {
                font-weight: 400;
            }
            h5 + h5 {
                margin-top: 50px;
            }
            svg{
                fill: ${props => props.theme.textColor};
                margin-right: 20px;
            }
        }
        .off{
            svg{
                fill: ${props => props.theme.secondaryColor};
            }
        }
        span+span{
            margin-top: 2px;
        }
    }
    .pricing-btn{
        font-size: 15px;
        color: #fff;
        padding: 15px 20px;
        margin: 0 auto;
        position: absolute;
        text-align: center;
        bottom: -23px;
        left: 0;
        right: 0;
        opacity: 0;
        transition: all 0.3s ease-in;
        background: rgb(0,179,159);
        background: -moz-linear-gradient(left,  rgba(0,179,159,1) 0%, rgba(0,211,169,1) 100%);
        background: -webkit-linear-gradient(left,  rgba(0,179,159,1) 0%,rgba(0,211,169,1) 100%);
        background: linear-gradient(to right,  rgba(0,179,159,1) 0%,rgba(0,211,169,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00b39f', endColorstr='#00d3a9',GradientType=1 );

    }
    @media only screen and (max-width: 1280px) {
        padding: 90px 0 210px 0;
        
        .pricing-block{
            padding: 40px 15px 35px 15px;
        }
        .section__particle{
            &.one{
                bottom: 0px;
            }
            &.two{
                display: none;
            }
        }
    }
    @media only screen and (max-width: 912px) {
        padding: 50px 0 35px 0;
        .section__particle{
            &.one {
                bottom: -122px;
            }
        }
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