import styled from "styled-components";

const MesheryOperatorWrapper = styled.section`
    margin: 0 0 2rem 0;

    .hero-section{
        padding: 5rem 0rem;
        .logo{
            display: block;
            margin: 2rem auto;
            width: 60%;
            max-width: 320px;
        }
        .hero-text{
            margin: 0 auto;
            img{
                width: 60%;
            }
            padding-top: 3.125rem;
            p{
                color: ${props => props.theme.tertiaryColor};
                transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
            }
        }
    }

    .showcase{
        margin: 6.25rem 0;
        text-align: center;
        .slider{
            margin: auto;
            width: 70%;
            .diagram-image {
                width: 100%;
                height: auto;
                aspect-ratio: 16 / 9;
                max-height: 520px;
                object-fit: contain;
            }
            .slick-arrow{
                margin: 0 -1.25rem 0 -3.125rem;
            }	
            .slick-arrow:before{	
                color: ${props => props.theme.primaryColor};
                font-size: 3rem;
                display: inline-block;
                transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
            }
            .slick-arrow:hover:before{	
                color: ${props => props.theme.secondaryColor};	
            }
        }
    }

    .explain-1 {
        padding-top: 1rem;
        text-align: center;
        p {
            color: ${props => props.theme.tertiaryColor};
            padding: 0px 3.125rem;
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        h1 {
            padding: 1.25rem 0px;
            font-size: 2rem;
            font-weight: 700;
        }
        .cards {
            margin: 2.5rem 0 3.5rem 0;
            width: 100%;
            padding: 2.5rem 1.5rem;
            background-color: ${props => props.theme.secondaryLightColorTwo};
            border-radius: 20px;
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
            .card-col {
                display: flex;
            }
            .card {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                box-shadow:
                0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                0 12.5px 10px rgba(0, 0, 0, 0.06),
                0 10.3px 17.9px rgba(0, 0, 0, 0.072),
                0 20.8px 33.4px rgba(0, 0, 0, 0.086),
                0 3.125rem 80px rgba(0, 0, 0, 0.12)
                ;
                margin: 0.5rem;
                padding: 2rem 1.75rem;
                background: ${props => props.theme.grey212121ToWhite};
                border-radius: 16px;
                transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
                p {
                    text-align: left;
                    padding: 0px;
                    letter-spacing: 0;
                    font-size: 1rem;
                    line-height: 1.6;
                    color: ${props => props.theme.tertiaryColor};
                }
                h2 {
                    text-align: left;
                    font-size: 1.25rem;
                    font-weight: 700;
                    letter-spacing: 0.04em;
                    text-transform: uppercase;
                    margin-bottom: 0.75rem;
                    color: ${props => props.theme.primaryColor};
                    clear: both;
                }
            }
        }
    }
    
    .listed{
        text-align: left;
        .table{
            .icon{
                object-fit: cover;
                height: 2.5rem;
                width: 2.5rem;
                vertical-align: top;
            }
            .service{
                color: ${props => props.theme.tertiaryColor};
                font-size: 16px;
                padding: 0 0 1.25rem 1.875rem;
                transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
                h4{
                    font-weight: 600;
                }
            }
        }
    }

    .lists{
        margin: 0 0 3rem 0;
    }

    @media only screen and (max-width: 568px) {
        .hero-section{
            padding: 2.125rem 0;
            .hero-text{
               h1{
                   text-align: center;
               } 
            }
        }
        .showcase{
            margin: 3.125rem 0;
            .slider{
                margin: auto;
                width: 85%;
                .slick-arrow{
                    margin: 0 -0.3rem 0 -0.3rem;
                }	
                .slick-arrow:before{	
                    font-size: 1.5rem;
                }
            }
        }
        .explain-1{
            padding-top: 1.125rem;
            p{
                padding: 0 1.25rem;
            }
        }
    }
`;

export default MesheryOperatorWrapper;
