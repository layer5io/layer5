import styled from "styled-components";

export const GitOpsWrapper = styled.section`
  position: relative;
    z-index: 1;
    .info {
        position: relative;
        overflow: hidden;
        display: block;
        margin-bottom:13rem;
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
                    font-weight: 600;
                }
                .heading-2 {
                    font-weight: 700;
                    color: ${props => props.theme.secondaryColor};
                }
                .desc-p {
                    font-size: 1.25rem;   
                    margin: 1.875rem 0 2.5rem 0;
                    font-weight: 400;
                }
                .learn-more-btn{
                    color:white;
                }
            }
            .hero-images {
                text-align: center;
                padding: 5rem 2rem 6rem 2rem;
                display:flex;
                gap: 1.25rem;
                .hero-image-container {
                   height: 350px;
                   width: 300px;
                   position: relative;
                   display:flex;
                   align-items: center;
                   justify-content: center;
                }
            }
            .hero-image {
                text-align: center;
                .image-container{
                   display:flex;
                   align-items: center;
                   justify-content: center;
                   height:542px;
                   width:465px;
                }
            }
        }
    }

`;


export const SquarePointWrapper = styled.div`
   display: flex;
   margin: 1.875rem 0 2.25rem 0;
   gap:0.25rem;
   align-items: start;

  .square-box {
    min-height:1.25rem;
    min-width:1.25rem;
    height:1.25rem;
    width:1.25rem;
    background-color: #00D3A9;
    margin-top:0.25rem;
    border-radius:0.25rem;
  }
  .content{
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.875rem;
    margin-bottom:0;
  }
`;