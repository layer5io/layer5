import styled from "styled-components";

const MesheryWrapper = styled.section`
    position: relative;
    z-index: 1;
    .info {
        position: relative;
        overflow: hidden;
        display: block;
        .meshery-img{
            max-width: 45rem;
            position: relative;
            bottom: 2rem;
            margin: auto; 
        }
        .description {
            align-items: center;
            margin-top: -2rem;
            .desc-text {
                padding: 1.56rem;
                h1{
                    font-weight: 600;
                }
                .heading-1 {
                    font-weight: 500;
                }
                .heading-2 {
                    font-weight: 700;
                    color: ${props => props.theme.secondaryColor};
                }
                .desc-p {
                    font-size: 1.25rem;   
                    margin: 1.875rem 0 2.5rem 0;
                }
                .banner-btn {
                    margin: 0rem 0.75rem 0 0;
                    color: white;
                    .button-icon{
                        margin-right: 0.625rem;
                    }    
                }
            }
            .meshery-hero-img {
                text-align: center;
                padding: 6rem 6rem 10rem 6rem;
            }
        }
    }
    code {
        font-family: Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace;
 
        background-color: #000;
        border-radius: 3px;
        font-family: courier, monospace;
        padding: 5px;
        color: white;


    }
    pre:hover, pre:focus { width: min-content; }

    .callout{
        margin: auto;
        margin-top: 5rem;
        text-align: right;
        width: 100%;
        h1{
            /* margin-bottom: 1.875rem; */
        }
    }

    @media only screen and (max-width: 1200px) {
        .info{
            .description {
                margin-top: 0rem;

                .meshery-hero-img {
                    text-align: center;
                    padding: 4rem 4rem 8rem 4rem;
                }
            }
            
        }
    }
    @media only screen and (max-width: 992px) {
        .info{
            .description {
                margin-top: 2rem;

                .meshery-hero-img {
                    text-align: center;
                    padding: 1rem 1rem 2rem 1rem;
                }
            }
            
        }
    }

    @media only screen and (max-width: 568px) {
        .info{
            .description {
                padding: 0;
                .meshery-hero-img {
                    text-align: center;
                    padding: 0;;
                }
                .desc-text{
                    .desc-p{
                        margin: 1.875rem 0 1.25rem 0;
                    }
                    .banner-btn {
                        margin: 0rem 0.75rem 0.5rem 0;  
                    }
                }
            }
        }
    }
`;

export default MesheryWrapper;