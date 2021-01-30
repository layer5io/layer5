import styled from "styled-components";

const FeaturesColSectionWrapper = styled.section`
    padding: 0.625rem 0 3.125rem 0;
    margin-top: 3.125rem;
    overflow: hidden;
    position: relative;
    .title{
        width: 60%
        margin: auto;
        text-align: center;
        .light{
            font-weight: 600;
        }
    }
    .features-block{
        padding: 2.5rem 1.875rem 2.5rem 1.875rem;
        border-radius: 1.25rem;
        box-shadow: 0.94rem 0.94rem 2.5rem ${props => props.theme.shadowColor};
        position: relative;
        text-align: center;
        height: 45rem;
        transition: all 0.3s ease-in;
        .feature-block{
            text-align: center;
            margin: 0 0 0.3rem 0;
            h3{
                font-size: 36px;
                font-weight: 600;
                margin: 0 0 0.625rem 0;
                color: ${props => props.theme.black};
            }
            p{
                font-size: 18px;
                color: ${props => props.theme.primaryColor};
            text-align: center;
            }
        }
        .details-block{
            text-align: left;
            .table{
                .icon{
                    object-fit: cover;
                    height: 2.5rem;
                    width: 2.5rem;
                    vertical-align: top;
                }
                .service{
                    color: ${props => props.theme.black};
                    font-size: 16px;
                    padding: 0 0 1.25rem 1.875rem;
                }
            }
        }
        .count-block{
            position: absolute;
            margin-left: 5rem;
            text-align: center;
            bottom: 1.25rem;
            .count{
                font-weight: 700;
                margin-bottom: 0.625rem;
                color: ${props => props.theme.black};
            }
            .count-desc{
                font-size: 0.94rem;
                color: ${props => props.theme.primaryColor};
            }
        }
    }
    
    @media only screen and (max-width: 1280px) {
        padding: 5.625rem 0 20.625rem 0;
        .features-block{
            padding: 2.5rem 0.94rem 2.2rem 0.94rem;
        }
    }
    @media only screen and (max-width: 912px) {
        padding: 0;
        .features-block{
            margin-bottom: 2.5rem;
            padding: 2.5rem 1.875rem 2.2rem 1.875rem;
        }
    }
    @media only screen and (max-width: 480px) {
        .title{
            width: 100%;
        }
        .features-block{
            margin: 0 0 2.5rem 0;
            padding: 2.5rem 0.625rem 0.625rem 0.625rem;
            height: auto;
            .count-block{
                position: relative;
                margin: 1.25rem 0;

            }
        }
    }
`;

export default FeaturesColSectionWrapper;
