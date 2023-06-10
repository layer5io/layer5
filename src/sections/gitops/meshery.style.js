import styled from "styled-components";

export const GitOpsWrapper = styled.section`
    position: relative;
    z-index: 1;
    .gradient-wrapper {
        background: linear-gradient(245.08deg, rgba(0, 0, 0, 0.06) 49.26%, rgba(0, 211, 169, 0.5) 100%);
        width: 100%;
        height: 43.75rem;
        position: absolute;
    }
    .content-container {
        position: relative;
        overflow: hidden;
        display: block;
        padding-bottom: 13rem;
        padding-left: 3.125rem;
        padding-right: 3.125rem;

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
        .content-row {
             align-items: center;
             justify-content: space-between;
            .desc-text-container {
                padding: 1.56rem;
                h1 {
                    font-weight: 600;
                }
                .heading-1 {
                    font-weight: 600;
                    font-size: 3.125rem;
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
                padding: 5rem 2rem 6rem 2rem;
                display:flex;
                gap: 1.25rem;
                justify-content: flex-end;


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
                .image-container{
                   display:flex;
                   align-items: center;
                   justify-content: center;
                   height: 542px;
                   width: 465px;

                   .cone-image{
                      width: 100%;
                      height: 100%;
                   }

                   .logo {
                      position: absolute; 
                      height: 235px; 
                      width: 235px ;
                   }
                }
            }
        }
    }
    .content-container-more-width{
        padding-right: 6rem;
        padding-left: 6rem;
    }

    .reviews-container{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;


export const SquarePointWrapper = styled.div`
   display: flex;
   margin: 1.875rem 0 2.25rem 0;
   gap: 1rem;
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
