import styled from "styled-components";

const MesheryWrapper = styled.section`
    position: relative;
    z-index: 1;
    .info {
        position: relative;
        overflow: hidden;
        display: block;
        .meshery-video {
            border-radius: 1rem;
            width: 100%;
          }
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
                    margin: 0rem 0.75rem 0 1rem;
                    color: ${props => props.theme.DarkTheme ? "rgba(0,0,0,1.0)" : "rgba(255, 255, 255, 1.0)"};  
                    .button-icon{
                        margin-right: 0.625rem;
                    }    
                }
            }
            .meshery-hero-img {
                text-align: center;
                padding: 5rem 2rem 6rem 2rem;
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
                    padding: 4rem 1rem 6rem 1rem;
                }
            }
            
        }
    }
    @media only screen and (max-width: 992px) {
        .info{
            .description {
                flex-direction: column-reverse;
                margin-top: 2rem;
                align-items:center;
                justify-content:center;
               .desc-p{
                  width:69vw;
               }
                .meshery-hero-img {
                    min-width:30rem;
                    padding: 1rem;
                }
                
                .desc-text {
                    min-width:82vw;
                    text-align:center;
                    .banner-btn {
                        margin: 0.5rem ;
                    }
                }
            }
            
        }
    }

    @media only screen and (max-width: 768px) {
        .info {
            .description {
               .heading-1{
                   min-width:80vw;
                   
               }
               .meshery-hero-img {
                padding: 0;
                max-width: 30rem;
            }
                .desc-text {
                    .desc-p{
                        margin-left:1rem;
                    }
                    .banner-btn {
                        margin: 0 0.75rem 0 o.5rem;
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 575px) {
        .info{
            
            .description {
                padding: 0;
                .desc-text{
                    margin-bottom: .75rem;
                    max-width:100%;
                    .desc-p{

                        margin: 1.875rem 0 1.5rem 3rem;
                    }
                    .banner-btn {
                        margin: 0rem 0.75rem 0.5rem 0;  
                    }
                }
            }
        }
    }
    @media only screen and (max-width: 555px) {
        .info{
            .meshery-video {
                border-radius: 1rem;
                width: 70%;
              }
            .description {              
                .meshery-hero-img {
                    min-width:80vw;
                }
                .desc-text{
                    .desc-p{
                        margin: 1.875rem 0 1.5rem 2.8rem;
                    }                    
                }
            }
        }
    }
    @media only screen and (max-width: 375px) {
        .info{
            .description {              
                .desc-text{
                    .desc-p{
                        margin: 1.875rem 0 1.5rem 1.4rem;
                    }                    
                }
            }
        }
    }

`;

export default MesheryWrapper;
