import styled from "styled-components";

const FeaturesColSectionWrapper = styled.section`
    padding: 5rem 0;
    overflow: hidden;
    position: relative;
    .title{
        width: 60%
        margin: auto;
        text-align: center;
        .light{
            font-weight: 500;
        }
    }
    .features-block{
        padding: 2.5rem 1rem;
        border-radius: 1.25rem;
        box-shadow: 2px 4px 2.5rem 0.5rem ${props => props.theme.shadowColor};
        position: relative;
        text-align: center;
        height: 42rem;
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
            left: 0;
            right: 0;
            bottom: 0rem;
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
    
    @media only screen and (max-width: 1200px) {
        .features-block{
            height: 48.5rem
        }
    }
    @media only screen and (max-width: 992px) {
        .features-row {
            justify-content: center;
        }
        .features-block{
            margin-bottom: 2rem;
            height: 42rem;
        }
    }
    @media only screen and (max-width: 700px) {
        .features-block{
            height: 46rem;
        }
    }
    @media only screen and (max-width: 625px) {
        .title{
            width: 100%;
        }
        .features-col {
            flex: 0 0 100%;
            max-width: 100%;
        }
        .features-block{
            padding: 1.5rem 1rem;
            height: auto;
            .count-block{
                position: relative;
                bottom: -0.5rem;
            }
        }
    }
`;

export default FeaturesColSectionWrapper;
