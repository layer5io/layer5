import styled from "styled-components";
import List_Icon from "../../../../assets/images/app/tick.svg";

export const IntegrationPageWrapper = styled.section`

    .herosection {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        padding: 2rem 2rem 1rem 2rem;
        max-width: 800px;
        
        > div:first-child {
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            width: auto !important;
            min-width: 180px !important;
            max-width: 300px !important;
            height: auto !important;
            min-height: 120px !important;
            max-height: 200px !important;
            margin-bottom: 1rem;
            
            > div,
            > span,
            .gatsby-image-wrapper {
                display: flex !important;
                justify-content: center !important;
                align-items: center !important;
                width: 100% !important;
                height: 100% !important;
            }
            
            img {
                width: auto !important;
                height: auto !important;
                min-width: 80px !important;
                max-width: 300px !important;
                min-height: 60px !important;
                max-height: 200px !important;
                object-fit: contain !important;
                object-position: center !important;
            }
        }
        
        h2 {
            font-size: clamp(1.8rem, 4vw, 2.5rem);
            text-align: center;
            margin: 0 0 1rem 0;
        }
        .hero-header {
            color: #00D3A9;
        }
        p {
            text-align: center;
            margin: 0;
            width: 100%;
            max-width: 600px;
            line-height: 2.0;
        }
    }

    .overview{
        display: flex;
        margin: 2rem;
        gap: 5rem;
        justify-content: center;
        flex-basis: 70%;
        @media (max-width: 700px) {
            flex-direction: column-reverse;
        };
    }

    .feature{
        display: flex;
        flex-direction: column;
        flex-basis: 30%;
        h3 {
            padding-bottom: 1rem;
        }
        ul {
            margin: 0;
            padding: 0;
            li {
                list-style-type: none;
        margin: 2rem 0;
                display: flex;
                align-items: center;
        :before {
                    content: url(${List_Icon});
                    margin-right: 1rem;
                    height: 2rem;
                }
            }
        }
    }

    .content{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        p {
            line-height: 2rem;
            text-align: justify;
        }

        .external-btns {
            display: flex;
            gap: 2rem;
            flex-wrap: wrap;

            .get-started {
            }

            .doc-link {
                display: flex;
                gap: 0.5rem;
                align-items: center;
                a {
                    color: ${props => props.theme.text};
                    transition: padding 0.5s ease;	
                                }
                a:hover{
                    padding-right: 5px;
                }
                svg {
                    display: flex;
                    margin: auto;
                }
            }
        }

        @media (min-width: 700px) {
            width: 35rem;
        };
    }

    .integration-collection, .component-collection {
        margin: 2rem auto;
        max-width: 1200px;
        
        h2{
            text-align: center;
        }
    }
`;
