import styled from "styled-components";

const FaqSectionWrapper = styled.section`
    padding: 95px 0 140px 0;
    position: relative;
    overflow: hidden;
    .section__particle{
        position: absolute;
        &.one{
            width: 70px;
            left: 8%;
            top: 14%;
        }
        &.two{
            width: 180px;
            top: 43%;
            right: -55px;
        }
    }
    .accordion__item + .accordion__item{
        border-color: transparent;
    }
    .reusecore__accordion{
        margin-bottom: 80px;
    }
    .accordion__item{
        .accordion__header{ 
            padding: 20px;
            background: ${props => props.theme.primaryLightColorTwo}; 
            h5{
                font-weight: 300;
                font-size: 16px;
                color: ${props => props.theme.black};
            }
            > div { 
                &:focus{
                    outline: none 
                }
            }
        
        }

        .accordion__body{
            padding: 20px;
            p{
                font-size: 16px;
                font-weight: 300;
                text-align: initial;
                margin: 0;
            }
        }
    }
    .accordion__item+.accordion__item{
        margin-top: 20px;
    }
    .faq-thumb{
        transform: translateX(80px);
    }
    .section-title{
        h2{
            margin-bottom: 42px;
        }
    }
    .faq-thumb-block{
        order: 2;
    }
    .faq-content-block{
        order: 1;
    }
    @media only screen and (max-width: 1400px) {
        .faq-thumb{
            transform: translateX(0px);
        }
        .section__particle{
            &.one{
                left: 2%;
            }
        }
     }
     @media only screen and (max-width: 1024px) {
        .section__particle{
            &.one{
                left: 3%;
                top: 0%;
            }
            &.two{
                top: auto;
                bottom: 0;
            }
        }
     }

    @media only screen and (max-width: 912px) {
        .section__particle{
            &.one{
              display: none;
            }
        }
        .reusecore__accordion{
            margin-bottom: 50px;
        }
    }

    @media only screen and (max-width: 568px) {
        text-align: center;
        .faq-thumb-block{
            order: 1;
            text-align: center;
            margin-bottom: 60px;
        }
        .faq-content-block{
            order: 2;
        }
        .reusecore__accordion{
            margin-bottom: 50px;
            text-align: left;
        }
     }
     @media only screen and (max-width: 480px) {
        .accordion__item {
            .accordion__header{
                h5{
                    font-size: 13px;
                    line-height: 21px;
                }
            }
        } 
     }
     
    
`;



export default FaqSectionWrapper;